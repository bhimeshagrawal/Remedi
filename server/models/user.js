var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    phone: String,
    totalPriceDonated: Number,
    level: Number,
    type: String,
    numDonations: Number,
    medicines: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Medicine",
        },
    ],
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
