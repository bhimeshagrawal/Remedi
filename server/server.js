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
const User = require("./models/user");
const Medicine = require("./models/medicine");
const path = require('path');
require('dotenv').config()

/*
==========================================
CONFIGURATIONS
==========================================
*/

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_CONN_STRING, (err) => {
    if (err) console.log(err);
    else console.log("connected");
}
);
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(methodOverride("_method"));
app.use(cookieParser("secret"));
//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Monkey singh is best graphic designer",
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








app.get("/", (req, res) => {
    res.send("Hii React")
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


app.get("/medicine", (req, res) => {

})

