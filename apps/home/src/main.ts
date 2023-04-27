import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBeSe1VBeBq6WSWSv1Tkd93ESfMNhHA3GI',
  authDomain: 'nx-app-7e3ee.firebaseapp.com',
  projectId: 'nx-app-7e3ee',
  storageBucket: 'nx-app-7e3ee.appspot.com',
  messagingSenderId: '253552751829',
  appId: '1:253552751829:web:e1baaf3a59ad97d9491e5c',
  measurementId: 'G-SK1RMJT02P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
