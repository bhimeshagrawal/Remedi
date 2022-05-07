/*
==========================================
INSTALLING THE PACKAGES
==========================================
*/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const nodemailer = require("nodemailer")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Medicine = require("./models/medicine");
const path = require('path');
require('dotenv').config()
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

/*
==========================================
CONFIGURATIONS
==========================================
*/

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_CONN_STRING, (err) => {
    if (err) console.log(err);
    else console.log(`connected to ${process.env.MONGO_CONN_STRING}`);
}
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.set("view engine", "ejs");
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(methodOverride("_method"));
app.use(cookieParser("secret"));
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Web Demons Here",
    resave: false,
    saveUninitialized: false,
})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.listen(PORT, function () {
    console.log(`Server Started at port ${PORT}`);
});
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});








app.get("/", (req, res) => {
    res.send("Hii React")
})

const userDetails = {
    name: "",
    phone: "",
    email: "",
    password: "",
    totalPriceDonated: 0,
    level: 0,
    type: "",
    numDonations: 0,
    otp: "",
}

app.post("/register", function (req, res) {
    if (isUserOrNgoExist(req.body.phone, req.body.email, "user") == true) {
        var errmsg = {
            message: "Email or Phone Number already registered.",
        };
        res.send({
            success: false,
            err: errmsg.message,
        })
    }
    else {
        const userDetails = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            totalPriceDonated: 0,
            level: 0,
            type: req.body.type,
            numDonations: 0,
            //generating random otp
            otp: generateOTP()
        }
        const msg = {
            to: req.body.email, //recipient
            from: 'remediHackfest@gmail.com',
            subject: 'Otp for registration is: "',
            html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + userDetails.otp + "</h1>" // html body
        }
        transporter.sendMail(msg, function (err, data) {
            if (err) {
                console.log("Error " + err);
                res.send({
                    success: false,
                    err: err,
                })
            } else {
                console.log("Email sent successfully");
                res.send({
                    success: true,
                    userDetails: userDetails,
                })
            }
        });
    }
});


app.post('/verifyregister', function (req, res) {
    if (req.body.otp == userDetails.otp) {
        var newUser = new User({
            name: userDetails.name,
            phone: userDetails.phone,
            email: userDetails.email,
            totalPriceDonated: userDetails.totalPriceDonated,
            level: userDetails.level,
            password: userDetails.password,
            type: userDetails.type,
            numDonations: userDetails.numDonations,
        });
        bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
    else {
        res.send({
            success: false,
            err: "Otp is incorrect"
        })}
});

app.post("/login",
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
    }),
);

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
});

app.get("/dashboard", (req, res) => {
    User.findOne({ email: req.user.email }, (err, foundUser) => {
        if (err) console.log(err);
        else {
            if (foundUser.type == "user")
                res.redirect("/user");
            else
                res.redirect("/ngo");
        }
    });
})

// app.post("/user", isLoggedIn, (req, res) => {
app.post("/user", (req, res) => {
    // User.findOne({ email: req.user.email }).populate("medicines").exec((err, foundUser) => {
    User.findOne({ email: "bhimeshagrawalggc@gmail.com" }).populate("medicines").exec((err, foundUser) => {
        if (err) console.log(err);
        else 
        res.send({ success: true, user: foundUser });
    });
})


app.post("/medicine", isLoggedIn, (req, res) => {
    const details = {
        medNameAndStrength: req.body.medNameAndStrength,
        quantityType: req.body.quantityType,
        availableQuantity: req.body.availableQuantity,
        totalQuantity: req.body.totalQuantity,
        totalPrice: req.body.totalPrice,
        totalWorth: (req.body.availableQuantity * req.body.totalPrice) / (req.body.totalQuantity),
        expiryDate: req.body.expiryDate,
        ndc: req.body.ndc,
        userId: req.user._id,
        address: req.body.address,
        status: "listed",
        listDate: new Date(),
    }
    Medicine.create(details, (err, medicine) => {
        User.findOne({ email: req.user.email }, (err, foundUser) => {
            if (err) console.log(err);
            else {
                foundUser.totalPriceDonated += details.totalWorth;
                foundUser.numDonations++;
                if (foundUser.numDonations <= 10) foundUser.level = 1;
                else if (foundUser.numDonations > 10 && foundUser.numDonations <= 25) foundUser.level = 2;
                else if (foundUser.numDonations > 25 && foundUser.numDonations <= 50) foundUser.level = 3;
                else if (foundUser.numDonations > 50 && foundUser.numDonations <= 100) foundUser.level = 4;
                else foundUser.level = 5;
                foundUser.save((err, data) => {
                    if (err) console.log(err);
                    res.send({success: true, userDetails: data})
                });
            }
        });
    }
    );
})

app.post("/collect/:id", isLoggedIn, (req, res) => {
    var medicineId = req.params.id;
    User.findOne({ email: req.user.email }, (err, user) => {
        if (user.type == "ngo") {
            Medicine.findOne({ _id: medicineId }, (err, medicine) => {
                medicine.status = "collected";
                medicine.save((err, medicine) => {
                    User.findOne({ email: req.user.email }, function (err, foundUser) {
                        if (err) console.log(err);
                        else {
                            foundUser.medicines.push(medicine);
                            foundUser.save(function (err, data) {
                                if (err) console.log(err);
                            });
                        }
                    });
                });
            });
            res.redirect("/ngo");
        }
    })
})


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function generateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

function isUserOrNgoExist(userName, userEmail, type) {
    User.find({ $and: [{ type: type }, { $or: [{ username: userName }, { email: userEmail }] }] }, (err, foundUsers) => {
        if (foundUsers.length != 0)
            return true;
        return false;
    }
    );
}
