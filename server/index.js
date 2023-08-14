import express from 'express';
import appRoutes from './src/routes/app.routes.js'
import cors from 'cors';
import { ENV } from './src/config/env.config.js';
import { LogColors } from './src/utils/console.utils.js';

const { PORT } = ENV
const app = express()
const serverUri = `http://localhost:${PORT}`

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', appRoutes);

app.listen(PORT, () => LogColors.logBlue(`server is running on ${serverUri}`))
