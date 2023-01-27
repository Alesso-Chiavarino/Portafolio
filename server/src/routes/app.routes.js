import { Router } from "express";
import mailsRoutes from './mails/mails.routes.js'

const router = Router();

router.use('/mails', mailsRoutes);

router.get("/", (req, res) => {
    res.send("Welcome to portfolio email API :)");
})

export default router;