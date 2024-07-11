import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URL=process.env.DB_URL

const Connection = () => {

    const MONGODB_URI = DB_URL

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.error('Error while connecting with the database', error.message);
    });
};

export default Connection;
