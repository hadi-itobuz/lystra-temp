import mongoose from "mongoose";
import { Seller } from "../Models/User.js";
const main = async () => {
        await mongoose.connect("mongodb+srv://hadi:1234@cluster0.w9hex.mongodb.net/")
        
        // await User.deleteMany({});
        // await Note.deleteMany({});
        // await Session.deleteMany({});
        // await generateAdmin(3);
        // await generateUser(10);
        // await generateNote(200);
        const seller= new Seller({name:"Hadjkghjkhi", email: "defhjjkuhkjjg@123.com"});
        const buyer= new Buyer({name:"KLSADJF",email: "asdjlknbf@jdsbf.com"})
        await seller.save();
        await buyer.save();
        await mongoose.disconnect();

}

main();