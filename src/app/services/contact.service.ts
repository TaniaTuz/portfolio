import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue, Database } from 'firebase/database';


@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private firebaseConfig = {
        apiKey: 'AIzaSyD6x_Wxr5-gvqoVUS_wjcgGuAGM6oITkXE',
        authDomain: 'portfolio-9d7b5.firebaseapp.com',
        projectId: 'portfolio-9d7b5',
        storageBucket: 'portfolio-9d7b5.appspot.com',
        messagingSenderId: '1010554856785',
        appId: '1:1010554856785:web:21d7a2258fec69cbf2df70'
    };

    private app = initializeApp(this.firebaseConfig);
    private readonly database: Database;

    constructor() {
        this.database = getDatabase(this.app);
    }

    async sendMessage(object: any) {
        try {
            const message = push(ref(this.database, 'messages'));
            await set(message, object);
            return message.key;
        } catch (error) {
            throw error;
        }
    }

    getMessages(callback: (messages: any) => void) {
        const messagesRef = ref(this.database, 'messages');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const messages = data ? Object.keys(data).map(key => ({id: key, ...data[key]})) : [];
            callback(messages);
        });
    }
}
