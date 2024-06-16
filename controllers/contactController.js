import UserData from '../models/userSchema.js'; // Make sure the path is correct relative to the current file

export const createContactMessage = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newContact = new UserData({ name, email, message });
        await newContact.save();
        res.status(200).json({ message: 'Message received' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Error saving message', details: error.message });
    }
};
