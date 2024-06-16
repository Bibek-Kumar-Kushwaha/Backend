import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String},
    message: { type: String},
});

const UserData = mongoose.model('UserData', userSchema);

export default UserData;
