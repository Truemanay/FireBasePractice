import admin from "firebase-admin";
import * as functions from "firebase-functions";
admin.initializeApp();

/**
 * Main firebase function exports
 */

exports.myFunction = functions.firestore.document("users/{docId}").onCreate((snap) => {
  console.log(snap.data().name);
  return null;
});

/**
 * Https Functions
 */
export { api } from "./https";
