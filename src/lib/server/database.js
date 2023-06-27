import { MongoClient } from "mongodb"
// import { parse } from 'cookie';
// import { DB_URI } from '$env/static/public';
// DB_UR = process.env('DB_URI');
// import { DB_URI } from 'dotenv';

const DB_URI='mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/';

const client = new MongoClient(DB_URI)

export async function connect() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
    }
  }
// import { config } from 'dotenv';
// import { MongoClient } from 'mongodb';

// async function connectToCluster(uri) {
//     let mongoClient;
 
//     try {
//         mongoClient = new MongoClient(uri);
//         console.log('Connecting to MongoDB Atlas cluster...');
//         await mongoClient.connect();
//         console.log('Successfully connected to MongoDB Atlas!');
 
//         return mongoClient;
//     } catch (error) {
//         console.error('Connection to MongoDB Atlas failed!', error);
//         process.exit();
//     }
//  }


// export const actions = {
//     default: async({ request }) => {
//         const formData = await request.formData();
//         const firstname = formData.get("firstname")
//         const lastname = formData.get("lastname")
//         const email = formData.get("email")
//         const gender = formData.get("gender")
//         const address = formData.get("address")
//         console.log({firstname, lastname, email, gender, address})

        // async function executeStudentCrudOperations() {
        //     const uri = process.env.DB_URI;
        //     let mongoClient;
         
        //     try {
        //         mongoClient = await connectToCluster(uri);
        //         const db = mongoClient.db('Form');
        //         const collection = db.collection('User');
         
        //         console.log('CREATE User');
        //         await createStudentDocument(collection);
        //     } finally {
        //         await mongoClient.close();
        //     }
        //  }
        //  executeStudentCrudOperations();
//         async function createStudentDocument(collection) {
//             const studentDocument = {
//                 FName: firstname,
//                 LName: lastname,
//                 Email: email,
//                 Gender: gender,
//                 Address: address,
                
//             };
         
//             await collection.insertOne(studentDocument);
//          }
         
        
        // config();
        // await executeStudentCrudOperations();
//     }
// }



