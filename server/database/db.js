import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ttyr5gi-shard-00-00.vjdti1h.mongodb.net:27017,ac-ttyr5gi-shard-00-01.vjdti1h.mongodb.net:27017,ac-ttyr5gi-shard-00-02.vjdti1h.mongodb.net:27017/?ssl=true&replicaSet=atlas-thy8qt-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;