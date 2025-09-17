// server.js
import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "meinedb",
  password: "meinpasswort",
  port: 5432,
});

app.use(express.json());

// Beispielroute
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server läuft auf Port 3000"));
