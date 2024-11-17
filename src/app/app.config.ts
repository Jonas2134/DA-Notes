import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "da-notes-1c6ca", "appId": "1:894852607194:web:66196210f8dfcf794749e3", "storageBucket": "da-notes-1c6ca.firebasestorage.app", "apiKey": "AIzaSyAr3vYWfImQgWqTvm6RQei6c8rQSYujE4E", "authDomain": "da-notes-1c6ca.firebaseapp.com", "messagingSenderId": "894852607194" }))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
