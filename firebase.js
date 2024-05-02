import firebase from 'firebase/app';
import 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importe AsyncStorage corretamente

const firebaseConfig = {
    apiKey: "AIzaSyDNUTWJe3WqPIwqkV4c3fGPnmD9LtPibAA",
    authDomain: "company-app-3dedd.firebaseapp.com",
    projectId: "company-app-3dedd",
    storageBucket: "company-app-3dedd.appspot.com",
    messagingSenderId: "999412015749",
    appId: "1:999412015749:web:ef6f65a30f04d8ba9abfec"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

const cadastrarUsuario = async (data) => {
  try {
    await firestore.collection('companyData').add(data);
    console.log('Dados do usuário cadastrados com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
};

export { firebase, cadastrarUsuario, AsyncStorage }; 
