import express from 'express';
import connection from './database/db.js';
import bodyParser from 'body-parser';
import Routes from './routes/route.js'
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const PORT = 8000;


connection();

app.listen(PORT, () => {
    console.log(`Server is started on PORT ${PORT}`);
})