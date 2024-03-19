const {MongoClient} =require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'kathy-project';
const data = {sentence: 'My name is Kathy Frema'};

async function insertData() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db(dbName);
        
        const result = await db.collection('projects-by-kathy').insertOne(data);
        console.log('Data inserted:',result.insertedId);
    } catch (error) {
        console.error('Error inserting data:',error );
    } finally{
        await client.close();
    }
}
insertData();