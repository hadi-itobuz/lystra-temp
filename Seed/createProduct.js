import Product from "../Models/Listing/Product.js";
import { Seller } from "../Models/User.js";
import { faker } from '@faker-js/faker';

const createProduct = async (n) => {
    const sellers = await Seller.find({});
    for (let i = 0; i < n; i++) {
        const product = new Product({
            name: faker.commerce.productName(),
            seller_id: sellers[Math.floor(Math.random()*sellers.length)].id,
            isFeatured:false,
            category: [faker.commerce.department(),faker.commerce.department()],
            description: faker.commerce.productDescription(),
            keyWords: [faker.commerce.productAdjective(), faker.commerce.productAdjective()],
            details:[{brand: "abc",material: "jhi"}],
            // address:"1234",
            costPrice: Math.ceil(Math.random()*5000)+20,
            markedPrice:Math.ceil(Math.random()*5000)+20 ,
            discount: Math.floor(Math.random()*99),
            count: Math.floor(Math.random()*1000)
        })
        await product.save();
    }
}

export default createProduct;