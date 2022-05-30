const { Schema, model, Types} = require('mongoose')

const schema = new Schema({
    _id: {
        type: Types.ObjectId,
        required: true
    },
    track_name: {
        type: String,
        required: true
    },
    track_description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }


})
module.exports = model('track', schema);