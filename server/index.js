import express from 'express';
import appRoutes from './src/routes/app.routes.js'
import cors from 'cors';
import { ENV } from './src/config/env.config.js';

const app = express();
const { PORT } = ENV

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', appRoutes);

app.listen(PORT, () => console.log('server is listening on port ', PORT));
