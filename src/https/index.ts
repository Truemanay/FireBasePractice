import * as functions from "firebase-functions";
import express from "express";

/**
 * Main Express Application
 * (https web app implementation with customizable middleware)
 */
const app = express();

/**
 * Plugins / Middleware
 */

/**
 * Routes / Endpoints
 */
app.get("/truman/:adjective", (req, res) => {
  res.send(`truman ${req.params.adjective} 🎉`);
});

app.get("/return-some-json-data", (_, res) => {
  res.json({
    truman: "is awesome",
    august: "ehh",
  });
});
/**
 * Example
 * Start writing Firebase Functions
 * https://firebase.google.com/docs/functions/typescript
 */
app.get("/", (_, response) => {
  response.send("Hello from Firebase!");
});

export const api = functions.https.onRequest(app);
