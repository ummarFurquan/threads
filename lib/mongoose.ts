import mongoose from 'mongoose'

let isConnected = false; //check the connection status

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('DB not found');

    if(isConnected) return console.log('Already Connected to MongoDB');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error)
        
    }
}
