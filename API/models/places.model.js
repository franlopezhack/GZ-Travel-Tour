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
}, {
    timestamps: true
})

const Places = mongoose.model('Places', placesSchema);
module.export = Places;