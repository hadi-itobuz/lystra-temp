import mongoose from "mongoose";

const baseOption = {
    discriminatorKey: 'type',
    collection: 'Listing'

};
const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    isFeatured: {
        type: Boolean,
        required: true,
        default: false
    },
    category: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    keyWords: [{
        type: String,
        required: true
    }],
    details:[
        mongoose.Schema({key:String, value: String})//I want an array of key value pair of details like battery: 5000mah, brand: samsung
    ],
    images: [{
        type: String,
    }],
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
    }]
}, baseOption);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;