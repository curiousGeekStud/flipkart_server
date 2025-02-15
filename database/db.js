import mongoose from 'mongoose';

async function Connection(username, password){
    const URL = `mongodb+srv://${username}:${password}@flipkartclone.yzj2p.mongodb.net/?retryWrites=true&w=majority&appName=flipkartClone`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully')
    }
    catch(error){
        console.log('Error while connecting to the mongoDB server', error.message)
    }
}

export default Connection;