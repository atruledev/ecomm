const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoURI = 'mongodb://localhost:27017/Ecommerce';

// cors config
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.use(cors(corsOptions));

const login = require('./controllers/loginController')
const signup = require('./controllers/signUpController')


//middleware
app.post('/api/login', login ) 
app.post('/api/signup', signup ) 





// mongo db connection
mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(console.log('got error from mongodb'));




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
  