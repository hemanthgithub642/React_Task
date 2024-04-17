const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});


const User = mongoose.model('User', userSchema);

const secretKey = 'mysecretkey';


function authenticate(req, res, next) {
  const token = req.header('Authorization').split(' ')[1];
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.status(401).json('Unauthorized');
    req.user = user;
    next();
  });
}


app.post('/api/users/register', async (req, res) => {
  const { name, email, password } = req.body;

  
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json('Email already in use');

  
  const hashedPassword = await bcrypt.hash(password, 10);

 
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  
  const token = jwt.sign({ id: newUser._id }, 'secretKey', { expiresIn: '1h' });

  
  res.json({ token });
});


app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json('Email not found');

  
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json('Invalid password');

  
  const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });

  
  res.json({ token });
});


app.get('/api/example', authenticate, (req, res) => {
  res.json('This is a protected route');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http: //localhost:${port}`);
});