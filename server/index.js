const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const questions = require('./routes/questions');

mongoose
    .connect('mongodb://localhost:27017/Questions?retryWrites=true&w=majority', { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() => {
        const app = express();

        // Middleware
        app.use(bodyParser.json());
        app.use(cors());

        app.use('/questions', questions);

        if (process.env.NODE_ENV === 'production') {
            app.use(express.static('client/build'));

            app.get('*', (req,res) => {
                res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
            });

        } 

        const port = process.env.PORT || 5000;

        app.listen(port, () => console.log(`Server started on port ${port}`));
    })