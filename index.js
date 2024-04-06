import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRoutes from "./server/routes/user.routes.js";
import sendMailRoutes from "./server/routes/sendMail.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(sendMailRoutes);

app.listen(4000);
console.log(`Corriendose en el 4000`);
