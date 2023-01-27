import { Router } from "express";
import { sendMail } from "../../controllers/mail.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello Mails!");
})

router.post('/', sendMail);

export default router;