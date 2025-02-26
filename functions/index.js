/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

const apiKey = functions.config().app.api_key;
const authDomain = functions.config().app.auth_domain;
const projectId = functions.config().app.project_id;
const storageBucket = functions.config().app.storage_bucket;
const messagingSenderId = functions.config().app.messaging_sender_id;
const appId = functions.config().app.app_id;
const measurementId = functions.config().app.measurement_id;

// Initialize Firebase Admin
admin.initializeApp();

// Create Express app
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Example API endpoint
app.get('/api/test', (req, res) => {
  res.status(200).send({ message: 'Hello from Firebase Functions!' });
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
