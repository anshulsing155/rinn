import { MongoClient } from 'mongodb';
const DB_URI='mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/';
const client = new MongoClient(DB_URI);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}
connect()
