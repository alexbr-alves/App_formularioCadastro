import axios from "axios";

//"http://10.0.2.2:3000"  Para emulador
//'http://localhost:3000'

/*
Para usar no expo Go, execute npx ngrok http 3000, pegue o HTTPS fornecido e coloque no baseURL
obs: 3000 é a porta da minha maquina, na sua maquina pode ser outra. 
*/
const api = axios.create({
        baseURL: 'http://10.0.2.2:3000'
    });

export default api;