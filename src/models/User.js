const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name']
    },
    email: { 
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
        match: [/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, 'Enter a valid email'] 
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: 8,
        select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign( {id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    } );
}

// Validate login password to hashed password in the database
UserSchema.methods.matchPassword = async function(loginPassword) {
    return await bcrypt.compare(loginPassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);