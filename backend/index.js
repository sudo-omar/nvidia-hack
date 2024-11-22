import Retell from 'retell-sdk';
import express from 'express';

import cors from 'cors';
const app = express();

const retell = new Retell({
  apiKey: 'key_f3165ae0b59f35c2a0826fabe5a5',
  debug: true,
});

app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from your React app's origin
    methods: 'GET,POST', // Allow only GET and POST methods, adjust as needed
  }));

app.get('/api/calls', async (req, res) => {
    
    try {
      const calls = await retell.call.list(); // Fetch call data
    
      res.json(calls); // Send call data to the frontend
    } catch (error) {
      console.error("Error fetching calls:", error);
      res.status(500).send({ error: "Failed to fetch call data" });
    }
  });
  
app.post('/api/calls', async(req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).send({ error: "Content is required" });  // Validate input
    }
})
  // Start server
  app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });