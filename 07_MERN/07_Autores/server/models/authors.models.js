const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name es requerido"],
        minLength: [3, "Authors that are at least three characters long"]
    }
},
    { timestamps: true }
)

const Authors = mongoose.model("Authors", AuthorsSchema);

module.exports = Authors;
