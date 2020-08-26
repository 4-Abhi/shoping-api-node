const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
    // console.log("Token is  user is ", user);
    const token = jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email,
        photo: user.photo,
        role: user.role

    }, process.env.JWT_SECRET_KEY, {
            expiresIn: process.env.JWT_EXPYIRE_IN
        })
    return token
}

exports.vrifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // console.log("ddddddd", decoded);
        return decoded;
    } catch (err) {
        // console.log(err);
        return null
    }
}
