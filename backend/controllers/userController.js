const User = require("./../models/userModel");
const Tokens = require("../utils/token")
const jwt = require("jsonwebtoken");


const createSendToken = (user, statusCode, res) => {
    try {
        const token = Tokens.generateToken(user);
        res.status(statusCode)
            .header('x-auth-token', token)
            .header("access-control-expose-headers", "x-auth-token")
            .json({
                status: 'Success',
                token,
                data: { user }
            })
    } catch (err) {
        console.log(err)
    }

}

exports.getAllUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status("200").json({
            status: "sucess",
            data: user

        })
    } catch (er) {
        res.send(er);

    }

}

exports.SignUp = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send("User Already Exits");
        const newUser = await User.create(req.body);
        const token = Tokens.generateToken(newUser);
        res.status(200)
            .header('x-auth-token', token)
            .header("access-control-expose-headers", "x-auth-token")
            .json({
                status: 'Success',
                data: newUser
            })

    } catch (er) {
        return res.status(404).json({
            status: 'fail',
            message: er
        })

    }
}
exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide email or password",
            })
        }
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(400).json({
                status: "fail",
                message: "USer Not Exit"
            })
        }
        const correctPass = await user.correctPassword(password, user.password);
        if (!correctPass) {
            return res.status(400).json({
                status: 'error',
                message: "Incorrect user login and password "
            })
        }
        createSendToken(user, 200, res);

    } catch (er) {
        res.send(er);

    }

}
exports.protect = async (req, res, next) => {

    try {
        let token = "";
        // console.log(req.headers);
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // console.log("Inside in the hhhh");
            token = req.headers.authorization.split(" ")[1];
            console.log("Inside in the hhhh", token);

        } else {
            token = req.header("x-auth-token");
        }


        if (!token) {
            return res.send("Please login to get The Access");
        }
        console.log("tpkkkkkkn is ss", token);
        const decoded = Tokens.vrifyToken(token);

        if (!decoded) {
            return res.send("Can not find");
        }
        const currentuser = await User.findById(decoded.id)
        if (!currentuser) {
            return res.send("User no Longer Exits Please Login Again");
        }

        if (currentuser.changedPasswordAt(decoded.iat)) {
            return res.send("rectl chnged password please login again")
        }
        req.user = currentuser;
        // console.log("currentuser ----", currentuser);
        next();
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: error
        })

    }

}
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).send("You Have Not Access to this Page");

        }
        next();

    }
}
exports.updateMe = async (req, res) => {
    try {
        // console.log("======================++++++++++", req.file);
        const filterbody = req.body;

        if (req.file) filterbody.photo = req.file.filename;
        // console.log("======================", req.file.filename);
        const user = await User.findByIdAndUpdate(req.user._id, filterbody, {
            new: true,
            runValidator: true,
        });
        console.log(user)
        res.status(200).json({
            status: 'success',
            data: user
        })

    } catch (er) {
        res.status(404).send(er);
    }
}

