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
    image: [{
        type: String,
    }],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    ratingCount: {
        type: Number,
        required: true,
        default: 0
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
    }
}, baseOption);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;