import mongoose from "mongoose";

let isConnected = false; // track connection status

export async function connectToDatabase() {
  if (isConnected) return;

  const uri = process.env.MONGO_URI;
  console.log("MongoDB URI:", uri);

  if (!uri) {
    throw new Error("❌ Missing MONGODB_URI in .env.local");
  }

  try {
    const db = await mongoose.connect(uri, {
      dbName: "pathvius", // database name
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
