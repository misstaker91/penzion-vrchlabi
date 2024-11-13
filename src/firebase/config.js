import { initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';

const firebaseConfig = {
    apiKey: "AIzaSyCJJkt9bVsIo_oSDTvy9YhMm2vRk7IQ15E",
    authDomain: "penvrch2.firebaseapp.com",
    projectId: "penvrch2",
    storageBucket: "penvrch2.firebasestorage.app",
    messagingSenderId: "956895824717",
    appId: "1:956895824717:web:0d6eaaae121125cbf24504",
    measurementId: "G-BV8TKM0100"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Performance Monitoring with error handling
let perf = null;
try {
    perf = getPerformance(app);
} catch (error) {
    console.error('Firebase Performance initialization error:', error);
}

export { app, perf }; 