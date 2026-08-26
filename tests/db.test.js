const mongoose = require('mongoose');
require('dotenv').config();

describe('MongoDB connection', () => {
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('connects successfully to MongoDB Atlas', async () => {
        await mongoose.connect(process.env.MONGODB_URI);
        expect(mongoose.connection.readyState).toBe(1);
    }, 15000);
});