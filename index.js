const { MongoClient } = require('mongodb')
const express = require('express');
const app = express()
const dotenv = require('dotenv') 
dotenv.config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri)

const connectToDatabase= async ()=>{
try {
    await client.connect()
    console.log(`sucessful connected to database`);
} catch (error) {
    console.log(`we have an error. ${error}`);
    
}
}
connectToDatabase();
app.get('/users', async (req,res) => {
let myUsers = await client.db('UserInformation').collection('UserInformation').findOne()

})

app.listen(9018,()=>{
console.log('Hello 9018');
})
