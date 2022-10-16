const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const placesSchema = new Schema({
    name: {
        type: String,
        required: 'Name is required',
    },

    description: {
        type: String,
        required: 'Description is required',
    },

    image: {
        type: String,
        default: "",
    },

    keyWords: {
        type: [String],
        required: 'keyWords is required',
        default: []
    },

    lat:{
        type: Number,
        required: true,
    },
    lng:{
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    toJSON:{
        transform: ( doc, places) => {
            places.id = doc._id;
            delete places._id;
            delete places.__v;
            return places
        }
    }
})

const Places = mongoose.model('Places', placesSchema);
module.exports = Places;