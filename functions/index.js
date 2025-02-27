/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest, HttpsError} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

// Nastavení SendGrid API klíče
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Initialize Firebase Admin
admin.initializeApp();

// Funkce pro odesílání e-mailů
exports.sendContactEmail = onRequest({
  cors: [
    "https://penzionvrchlabi.cz",
    "https://www.penzionvrchlabi.cz",
    "http://localhost:5173",
    "http://localhost:3000"
  ],
  region: "us-central1",
  secrets: ["SENDGRID_API_KEY"],
  timeoutSeconds: 60 // Increase timeout to 60 seconds
}, async (req, res) => {
  // Add explicit CORS headers
  res.set('Access-Control-Allow-Origin', 'https://penzionvrchlabi.cz');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }
  
  try {
    // Kontrola metody
    if (req.method !== 'POST') {
      return res.status(405).send({
        data: { success: false, message: 'Method Not Allowed' }
      });
    }
    
    // Získání dat z požadavku
    const { name, email, phone, message } = req.body.data || {};
    
    logger.info("Přijat požadavek na odeslání e-mailu", { name, email });
    
    // Kontrola povinných polí
    if (!name || !email || !message) {
      return res.status(400).send({
        data: { success: false, message: 'Chybí povinné údaje' }
      });
    }
    
    // Nastavení e-mailu
    const msg = {
      to: 'konigsmarkovi@penzionvrchlabi.cz',
      from: 'info@penzionvrchlabi.cz',
      subject: `Nová zpráva z webu od ${name}`,
      text: `
        Jméno: ${name}
        Email: ${email}
        Telefon: ${phone || 'Neuvedeno'}
        
        Zpráva:
        ${message}
      `,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    logger.info("Odesílám e-mail", { to: msg.to, from: msg.from });
    
    // Set a timeout for the SendGrid API call
    const sendEmailPromise = sgMail.send(msg);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('SendGrid API timeout')), 30000)
    );
    
    // Race the promises to handle potential timeouts
    await Promise.race([sendEmailPromise, timeoutPromise]);
    
    logger.info("E-mail úspěšně odeslán");
    
    // Return response with data field
    res.status(200).send({
      data: { 
        success: true, 
        message: 'Email byl úspěšně odeslán' 
      }
    });
  } catch (error) {
    logger.error("Chyba při odesílání emailu", error);
    
    // Return error with data field
    res.status(500).send({
      data: { 
        success: false, 
        error: `Chyba při odesílání emailu: ${error.message}` 
      }
    });
  }
});

// Původní API endpoint
exports.api = functions.https.onRequest((req, res) => {
  res.status(200).send({ message: 'Hello from Firebase Functions!' });
});
