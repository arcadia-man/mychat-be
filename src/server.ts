import { server } from "./app";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
