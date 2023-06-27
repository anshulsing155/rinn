import { onMount } from 'svelte';


import Cookies from './+page.svelte';
 
// export const actions = {

//     default: async({ request }) => {
//         onMount(() => {
//             cookies = document.cookie.split('; ').map(cookieString => {

//             const [name, value] = cookieString.split('=');
//             connect();

//             return { name, value }; 
//           });
//         });
//         const formData = await request.formData();
//         const firstname = formData.get("")
//         // const lastname = formData.get("lastname")
//         // const email = formData.get("email")
//         // const gender = formData.get("gender")
//         // const address = formData.get("address")
//         console.log({firstname})
//     }
// }


import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

async function connectToCluster(uri) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}


onMount(() => {
    cookies = document.cookie.split('; ').map(cookieString => {

        const [name , value] = cookieString.split('=');
        console.log([name , value])
        return {name , value}
    });
});
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const firstname = formData.get("firstname")
        const lastname = formData.get("lastname")
        const email = formData.get("email")
        const gender = formData.get("gender")
        const address = formData.get("address")
        // console.log({firstname, lastname, email, gender, address})

        async function executeStudentCrudOperations() {
            const uri = process.env.DB_URI;
            let mongoClient;

            try {
                mongoClient = await connectToCluster(uri);
                const db = mongoClient.db('form');
                const collection = db.collection('formData');
                console.log('CREATE User');
                await createStudentDocument(collection);
            } finally {
                await mongoClient.close();
            }
        }
        async function createStudentDocument(collection) {
            const studentDocument = {
               

            };

            await collection.insertOne(studentDocument);
        }


        config();
        await executeStudentCrudOperations();
    }
}
