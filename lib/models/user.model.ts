import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type:String, required: true},
    userName: {type:String, required: true, unique:true},
    name: {type: String, required: true},
    image : String,
    bio: String,
    threads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    onboarded: {
        type: Boolean,
        default: false,
    },
    communites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community'
        }
    ]

});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default  +User;