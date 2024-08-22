import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import itemRoutes from './routes/itemRoutes.js';

const app = express();

app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', itemRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello from items backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
