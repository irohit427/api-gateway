const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please write descripiton']
    },
    createdOn: { type: Date, default: Date.now },
    photo: {
        type: String,
        default: 'default.jpg'
    }
});

module.exports = mongoose.model('Trip', TripSchema);