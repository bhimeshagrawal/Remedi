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
const cookieParser = require("cookie-parser");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const nodemailer = require("nodemailer")
const User = require("./models/user");
const Medicine = require("./models/medicine");
const path = require('path');
require('dotenv').config()

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
app.set("view engine", "ejs");
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(methodOverride("_method"));
app.use(cookieParser("secret"));
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

app.post("/userRegister", function (req, res) {
    if (isUserOrNgoExist(req.body.phone, req.body.email, "user") == true) {
        var errmsg = {
            message: "Email or Phone Number already registered.",
        };
        res.render("register", { err: errmsg.message });
    }
    else {
        const userDetails = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            totalPriceDonated: 0,
            level: 0,
            type: "user",
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
            } else {
                console.log("Email sent successfully");
                res.redirect("/verifyOtp")
            }
        });
    }
});


app.post("/ngoRegister", function (req, res) {
    if (isUserOrNgoExist(req.body.phone, req.body.email, "ngo") == true) {
        var errmsg = {
            message: "Email or Phone Number already registered.",
        };
        res.render("register", { err: errmsg.message });
    }
    else {
        const userDetails = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            totalPriceDonated: 0,
            level: 0,
            type: "ngo",
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
            } else {
                console.log("Email sent successfully");
                res.redirect("/verifyOtp")
            }
        });
    }
});

app.get("/verifyOtp", (req, res) => {
    res.render("verifyOtp");
})



app.post('/verifyregister', function (req, res) {
    if (req.body.otp == userDetails.otp) {
        var newUser = new User({
            name: userDetails.name,
            phone: userDetails.phone,
            email: userDetails.email,
            totalPriceDonated: userDetails.totalPriceDonated,
            level: userDetails.level,
            type: userDetails.type,
            numDonations: userDetails.numDonations,
        });
        User.register(newUser, userDetails.password, function (err, user) {
            if (err) {
                console.log(err);
                return res.render("register", { err: err.message });
            }
            res.render("login")
        });
    }
    else {
        res.render('verifyOtp', { err: 'otp is incorrect' });
    }
});


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
    Medicine.create(
        details,
        function (err, medicine) {
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
                    foundUser.save(function (err, data) {
                        if (err) console.log(err);
                    });
                }
            });
        }
    );
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
