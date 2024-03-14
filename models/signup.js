const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    Username:{type : String},
    Email:{type : String},
    Password:{type: String},
    confirmPassword:{type : String}
})
const signupModel = mongoose.model('signup', signupSchema);




const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;


module.exports = signupModel;