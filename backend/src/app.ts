import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import userAuth from './routes/userAuth.routes'
import profile from './routes/profile.routes'

const initApp = () => {
  try {
    dotenv.config();
    const app = express();
    
    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    // Routes
    app.use('/api', userAuth); //Auth Route
    app.use('/api', profile); // Update Profile Route
 

    return app;
  } catch (err) {
    console.log("App initialization error:", err);
    throw err;
  }
};


export default initApp;
