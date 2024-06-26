import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;
    //Read JWT from cookie

    token = req.cookies.jwt
    if (token) {
        try {
            //Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        }

        catch (err) {
            console.log(err);
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }
    else {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

//Admin middleware
const admin = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    }
    else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
})

export { protect, admin }