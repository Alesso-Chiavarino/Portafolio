import express from 'express';
import appRoutes from './src/routes/app.routes.js'
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', appRoutes);

app.listen(PORT, () => console.log('server is listening on port ', PORT));