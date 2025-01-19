require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const client = new MongoClient(process.env.MONGO_URI);

app.use(express.json());

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

// Get all doctors
app.get('/doctors', async (req, res) => {
    try {
        const database = client.db('pharma_app');
        const collection = database.collection('doctor_db');
        const doctors = await collection.find({}).toArray();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctors', error });
    }
});

// Get a single doctor by ID (treating _id as a string)
app.get('/doctors/:id', async (req, res) => {
    try {
        const database = client.db('pharma_app');
        const collection = database.collection('doctor_db');
        const doctor = await collection.findOne({ _id: req.params.id }); // Treating _id as a string
        if (doctor) {
            res.json(doctor);
        } else {
            res.status(404).json({ message: 'Doctor not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctor', error });
    }
});

// Start the server
app.listen(port, async () => {
    await connectDB();
    console.log(`API server running on http://localhost:${port}`);
});
