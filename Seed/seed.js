import mongoose from "mongoose";
import "dotenv/config";
import createBuyer from "./createBuyer.js";
import createSeller from "./createSeller.js";
const main = async () => {
        await mongoose.connect(process.env.MONGO_URI);
        await createBuyer(10);
        await createSeller(10);
        await mongoose.disconnect();
}

main();