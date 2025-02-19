import Listing from "./Listing.js";

const Product = Listing.discriminator('Product',
    new mongoose.Schema({

        markedPrice: {
            type: Number,
            required: true,
        },
        sellingPrice: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
            default: 0
        },
        count: {//Inventory can't order if count=0
            type: Number,
            required: true,
            default: 0
        }
    })
);

export default Product;