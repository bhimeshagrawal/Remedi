var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var NgoSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    medicines: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Medicine",
        },
    ],
});

Ngoschema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Ngo", NgoSchema);
