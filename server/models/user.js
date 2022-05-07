var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    totalPriceDonated: String,
    level: String,
    numDonations: Number,
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
