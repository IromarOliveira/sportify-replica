import { MongoClient } from "mongodb";

const URI = 
"mongodb+srv://adminSpotify:g1a2l3o4@cluster0.xp8g7a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyreplica");
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);