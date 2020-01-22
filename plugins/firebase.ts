import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if(!firebase.apps.length){
    const config= {
        apiKey: "AIzaSyCEihCU9fpDXeX1B-bpLFKpCmGj7oZIwlU",
        authDomain: "slack-clone-app-c9356.firebaseapp.com",
        databaseURL: "https://slack-clone-app-c9356.firebaseio.com",
        projectId: "slack-clone-app-c9356",
        storageBucket: "slack-clone-app-c9356.appspot.com",
        messagingSenderId: "58496178587",
        appId: "1:58496178587:web:9c8abc99bc6f60592e693e",
        measurementId: "G-QWRM276GYS"
    }
    firebase.initializeApp(config)
}

const db = firebase.firestore();
export{
    firebase,
    db
}