// // import db from "$lib/db"
// // export async function GET() {
// //   const form = await db.collection('form').find().toArray()
// //   return {
// //     status: 200,
// //     body: { form }
// //   }
// // }
// import { connect } from '$lib/server/database.js';

// // Function to send the POST request
// connect();
// async function insertCookiesToDB() {
//   try {
//     const response = await post({
//       headers: {
//         cookie: document.cookie // Pass the cookies from the client-side
//       }
//     });

//     // Handle the response
//     console.log(response.body.message);
//   } catch (error) {
//     console.error('Error inserting cookies:', error);
//   }
// }

// // Call the function when needed
// insertCookiesToDB();


// export async function post(request) {
//   const cookies = parse(request.headers.cookie || '');

//   const collection = db.collection('cookies');
//   await collection.insertOne(cookies);

//   // Close the connection
  
//   // Return a response indicating success
//   return {
//     status: 200,
//     body: {
//       message: 'Cookies data inserted successfully',
//     },
//   };
// }




import { MongoClient } from 'mongodb';
import { parse } from 'cookie';
// Connection URL
const url = 'mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/';

// Database Name
const dbName = 'form';

// Connect to MongoDB
const client = new MongoClient(url);

// Connect to the database
await client.connect();
const db = client.db(dbName);

// Close the connection when finished



async function post(request) {
  // Parse cookies from the request headers
  const cookies = parse(request.headers.cookie || '');

  // Convert cookies into an array of objects
  const cookieArray = Object.entries(cookies).map(([name, value]) => ({
    name,
    value,
  }));

  // Insert cookies into MongoDB
  const collection = db.collection('formData');
  await collection.insertMany(cookieArray);


  

  // Return a response indicating success
  return {
    status: 200,
    body: {
      message: 'Cookies data inserted successfully',
    },
  };
}
async function insertCookiesToDB() {
  try {
    const response = await post();

    // Handle the response
    console.log(response.body.message);
  } catch (error) {
    console.error('Error inserting cookies:', error);
  }
}

// Call the function when needed
insertCookiesToDB();
