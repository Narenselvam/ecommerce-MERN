import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js'

// @desc Auth user & get token
// @route POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email})

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }

})


// @desc Register user 
// @route POST /api/users/
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    res.send('Register user');
})


// @desc Logout user & clear cookie
// @route POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
    res.send('Logout user');
})


// @desc Get user profile
// @route GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('User profile');
})


// @desc Update user profile
// @route PUT /api/users/Profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('user Updated');
})

// @desc Get All user profile
// @route GET /api/users
// @access  Private/Admin

const getUsers = asyncHandler(async (req, res) => {
    res.send('Get all User profile');
})

// @desc Get user by Id
// @route GET /api/users/:id
// @access  Private/Admin

const getUsersByID = asyncHandler(async (req, res) => {
    res.send('Get User by Id');
})


// @desc Delete user profile
// @route DELETE /api/users/:id
// @access  Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
    res.send('user Deleted');
})

// @desc Upadte user details
// @route PUT /api/users/:id
// @access  Private/Admin

const UpdateUsers = asyncHandler(async (req, res) => {
    res.send('User updated');
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUsersByID,
    UpdateUsers
}