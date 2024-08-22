import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import itemRoutes from './routes/itemRoutes.js';
import sequelize from './utils/db.js';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', itemRoutes);

// Sync database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Database sync error:', err));

app.get('/', (req, res) => {
  try {
    res.status(200).send('Hello from items backend');
    
  } catch (error) {
    res.status(500).send({
      message:"Server Error"
    })
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
