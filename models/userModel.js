const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A NAme Is Require"],
        trim: true,
        minlength: [4, 'Name should be longer then 4 Chracter'],
        maxlength: [25, "Name is too long"]

    },
    email: {
        type: String,
        trim: true,
        required: [true, "  Email is Require"],
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, "provide Valid Email"]
    },
    photo: {
        type: String,
        default: "user.jpg"
    }
    ,
    role: {
        type: String,
        enum: ['user', 'admin', 'developer'],
        default: 'user'

    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is Require"],
        select:false

    },
    passwordConfirm: {
        type: String,
        required: [true, "A User must have Password"],
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: "Pass not be same"
        }

    },
    passwordChangedAt: Date
})

userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next(); // only work  when the password will be modified 
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function (EnterPassword, userpassword) {
    // console.log(userpassword);
    // console.log(EnterPassword);
    const result = await bcrypt.compare(EnterPassword, userpassword);
    return result;
}
userSchema.methods.changedPasswordAt = function (JwtTimeStamp) {
    console.log("Innnnnn sie in the methods");
    if (this.passwordChangedAt) {
        const changedTimesStamp = parseInt(this.passwordChangedAt.getTime() / 1000);
        // console.log("Inddd the paaaaa", changedTimesStamp, JwtTimeStamp)  
        return JwtTimeStamp < changedTimesStamp;
        //  100 pr token create hua or 200 pr change krdiya  100<200  mtlb password  changes hua hai 
        // q ki create tha 100pr 
        //  or paasswors chnaged hua tha 200 pr but hmne token creat kiya 300 pr toh false return kretga
    }
    return false


}
const User = mongoose.model("User", userSchema);

module.exports = User;