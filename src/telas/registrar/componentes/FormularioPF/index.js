import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import styles from "./styles";

export default function FormularioPF(){
    const [secureMode, setSecureMode] = useState(true);
    const [secureMode2, setSecureMode2] = useState(true);
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
   

    function MensagenError(){
        if(nome == ''){
            setStatusError("Nome")
            SetMensagem("Digite o seu nome")
        }else if(sobrenome == ''){
            setStatusError("Sobrenome")
            SetMensagem("Digite o seu sobrenome")
        }else if(cpf == ''){
            setStatusError("CPF")
            SetMensagem("Digite o seu CPF")
        }else if(dataNascimento == ''){
            setStatusError("Data")
            SetMensagem("Digite o seu data de nascimento")
        }else if(cep == ''){
            setStatusError("CEP")
            SetMensagem("Digite o CEP da sua região")
        }else if(cidade == ''){
            setStatusError("Cidade")
            SetMensagem("Digite o nome da sua cidade")
        }else if(estado == ''){
            setStatusError("Estado")
            SetMensagem("Digite o nome de seu Estado")
        }else if(rua == ''){
            setStatusError("Rua")
            SetMensagem("Digite o nome de sua rua")
        }else if(numero == ''){
            setStatusError("Numero")
            SetMensagem("Digite o numero de sua residência")
        }else if(email == ''){
            setStatusError("Email")
            SetMensagem("Digite o seu e-mail")
        }else if(senha == ''){
            setStatusError("Senha")
            SetMensagem("Digite a sua senha")
        }else if(confirmarSenha == ''){
            setStatusError("ConfirmarSenha")
            SetMensagem("repita a seu senha")
        }else if(confirmarSenha != senha ){
            setStatusError("ConfirmarSenha")
            SetMensagem("Senhas não correspondem")
        } else{
            Alert.alert("pronto")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Preencha as informações abaixo</Text>
            
           
            <View style={styles.espaco__input}>
            <Text style={styles.tituloCategoria}>Dados Pessoais</Text>
            <TextInput
            value={nome}
            label={"Nome"}
            mode='outlined'
            error={statusError == "Nome"}numeric
            onChangeText={nome => setNome(nome)}
            />
           {statusError == "Nome" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            
            <TextInput
            value={sobrenome}
            label={"Sobrenome"}
            mode='outlined'
            error={statusError == "Sobrenome"}
            onChangeText={sobrenome => setSobrenome(sobrenome)}
            />
            {statusError == "Sobrenome" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
             
             
            <TextInput
            keyboardType={'numeric'}
            maxLength={11}
            value={cpf}
            label={"CPF"}
            mode='outlined'
            error={statusError == "CPF"}
            onChangeText={cpf => setCpf(cpf)}
            />
            {statusError == "CPF" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            
            <TextInput
            maxLength={8}
            keyboardType={'numeric'}
            value={dataNascimento}
            label={"Data de nascimento"}
            mode='outlined'
            error={statusError == "Data"}
            onChangeText={dataNascimento => setDataNascimento(dataNascimento)}
            />
            {statusError == "Data" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            
            
            </View>
           
            <View style={styles.espaco__input}>

            <Text style={styles.tituloCategoria}>Endereço residencial</Text>

            <TextInput
            keyboardType={'numeric'}
            maxLength={8}
            value={cep}
            label={"CEP"}
            mode='outlined'
            error={statusError == "CEP"}
            onChangeText={cep => setCep(cep)}
            />
            {statusError  == "CEP" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

           
            <TextInput
            value={cidade}
            label={"Cidade"}
            mode='outlined'
            error={statusError == "Cidade"}
            onChangeText={cidade => setCidade(cidade)}
            />
            {statusError == 'Cidade' && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            
            
             <TextInput
             value={estado}
            label={"Estado"}
            mode='outlined'
            error={statusError == "Estado"}
            onChangeText={estado => setEstado(estado)}
            />
            {statusError == "Estado" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

           
           
            <TextInput
            value={rua}
            label={"Rua"}
            mode='outlined'
            error={statusError == "Rua"}
            onChangeText={rua => setRua(rua)}
            />
            {statusError == "Rua" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
           
           
            <TextInput
            keyboardType={'numeric'}
            value={numero}
            label={"Numero"}
            mode='outlined'
            error={statusError == "Numero"}
            onChangeText={numero => setNumero(numero)}
            />
            {statusError == "Numero" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
           
           
            <TextInput
            value={complemento}
            label={"Complemento"}
            mode='outlined'
            onChangeText={complemento => setComplemento(complemento)}
            />
            {statusError == "Complemento" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            </View>

        
           <View style={styles.espaco__input}>
           <Text style={styles.tituloCategoria}>Dados para login</Text>
            <TextInput
            value={email}
            style={styles.input_email}
            label={'Email'}
            mode="outlined"
            onChangeText={email => setEmail(email)}
            error={statusError == "Email"}
            />
            {statusError == "Email" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}

            <TextInput
            value={senha}
            style={styles.input_senha}
            label={"Senha"}
            mode="outlined"
            secureTextEntry={secureMode}
            right={<TextInput.Icon 
                icon={secureMode? "eye-off" : "eye"}
                    onPress={() => setSecureMode(!secureMode)}
                />}
            
            onChangeText={senha => setSenha(senha)}
            error={statusError == "Senha"}   
                />
            {statusError == "Senha" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            <TextInput
            value={confirmarSenha}
            style={styles.input_senha}
            label={"Confirmar senha"}
            mode="outlined"
            secureTextEntry={secureMode2}
            right={<TextInput.Icon 
                icon={secureMode2? "eye-off" : "eye"}
                    onPress={() => setSecureMode2(!secureMode2)}
                />}
                
                onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)}  
            error={statusError == "ConfirmarSenha"}
                />
            {statusError == "ConfirmarSenha" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
            </View>

           <TouchableOpacity style={styles.botao} onPress={MensagenError}>
                <Text style={styles.botao__text}>Finalizar</Text>
           </TouchableOpacity>
           
        </ScrollView>
    )
}