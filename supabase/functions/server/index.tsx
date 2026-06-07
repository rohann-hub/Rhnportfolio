import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-7cbd2c8a/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-7cbd2c8a/contact", async (c) => {
  try {
    const { name, email, message } = await c.req.json();
    
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    
    await kv.set(`contact:${id}`, {
      id,
      name,
      email,
      message,
      timestamp
    });

    return c.json({ success: true, id });
  } catch (error) {
    console.error("Error in contact endpoint:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);