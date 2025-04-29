const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://0.0.0.0/test', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("Mongo error:", err));

const contactSchema = new mongoose.Schema({
 name: String,
 email: String,
 message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
 try {
   const newContact = new Contact(req.body);
   await newContact.save();
   res.json({ message: 'Message received!' });
 } catch (error) {
   res.status(500).json({ message: 'Failed to save contact', error });
 }
});

app.get("/", (req, res) => {
 res.send("Hydroponic backend is running.");
});

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
