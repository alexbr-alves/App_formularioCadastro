<h1 align="center">Aplicativo de cadastro</h1>
<br>
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/103543739/200936432-54142f78-d693-43f9-ac9c-5664f6d08150.jpg">
</p>











<h2>PRÉ REQUISITOS:</>
<h3> Linguagem de programação: JavaScript </h3>
<h3> Framework: React Native </h3>
<h3> interface de linha de comando: Expo CLI </h3>
<h3> Emulador: Android Studio </h3>
<h3> Sistema Operacional: Windows </h3>
<h3> Requisições HTTP: Axios </h3>
<h3> Criação da API: Json Server</h3>
<h3> Gerador HTTP universal: Ngrok</h3>
<h3> Requisição de Codigo Postal: cep-promise</h3>
<h3> Verificação de validade de cpf: cpf-check</h3>
<h3> UpLoad de arquivo: expo image picker</h3>
<h3> Kit front-end: React Native Paper</h3>

<br>

<h2>SOBRE A APLICAÇÃO</h2>

<h3> No Front-end temos uma aplicação simples e  moderna que busca otimizar espaço na tela e trazer 
conforto no momento de utilizar o aplicativo. A aplicação não permite o avanço quando os campo estão 
preenchidos e quando o CPF ou CNPJ já esta cadastrado e quando isso acontece, o sistema entrega uma 
mensagem de erro simples e sutil. 
obs: O modo seguro de inserir senha oculta totalmente o campo em caso de gravação de telas. 
</h3>
<br>
<h3>No Back-end simulamos uma API utilizando a biblioteca JSON-SERVER que serve para subir API REST's com muita simplicidade
e rapidez e posteriormente consulmi-la utilizando a biblioteca AXIOS que serve para realizar requisições HTTP.
Além de deixar disponivel o Ngrok, caso o usuario queira rodar a aplicação no aplicativo Expo Go.
A aplicação além de pegar informações do banco de dados, também envia após a criação do cadastro.

</h3>
<br>

<h2>RODANDO A APLICAÇÃO</h2>
<br>
<h3>Para rodar esta aplicação em sua maquina: </h3>
<h3>No seu terminal execute => git clone https://github.com/alexbr-alves/App_formularioCadastro.git </h3>
<h3>Dentro da pasta criada para receber o novo projeto execute => npm install ou yarn install</h3>
<h3>Para iniciar o projeto execute => npm start</h3>
<h3>Para iniciar o emulador android aperte => a </h3>
<h3>instale a depencia do JSON-SERVER => npm i json-server </h3>
<h3>Para subri o DATA BASE para o servidos utilize => json-server --watch db.json </h3>

<h3> 
OBS 1: A porta fornecida na minha maquina foi a 3000, 
caso o JSON-SERVER forneça outra substitua em => src/services/api.js
</h3>

<h3>
OBS 2: Para o emulador Android em minha maquina tive que substituir o endereço  fornecido pelo JSON-SERVER 
para o endereço => http://10.0.2.2:3000, caso o axios retorne o erro [AxiosError: Network Error] substitua o endereço 
para o endereço fornecido pelo JSON-SERVER
</h3>

<h3>
OBS 3: Caso queira rodar no App Expo Go, execute em paralelo com o JSON-Server o 
comando => npx ngrok http 3000, pegue o link fornecido e insira no baseURL  em => src/services/api.js
</h3>





<h2>VIDEO DEMOSTRATIVO</h2>
<br>






https://user-images.githubusercontent.com/103543739/200953677-f390ae7f-e940-4a21-b730-abe51fb596fd.mp4





<h2>Demostrações complementares</h2>

![modelo simulador (1)](https://user-images.githubusercontent.com/103543739/200930270-c5981aeb-6988-4136-beaf-d2d141a17ca3.jpg)



