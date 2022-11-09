import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import styles from "./styles";
import { mask } from 'remask';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import api from '../../../../servicos/api'
import IconeAnexo from 'react-native-vector-icons/Entypo';
import IconeGoBack from 'react-native-vector-icons/Ionicons';

export default function DadosPessoaisPF({ navigation: { goBack } }){
    const [dados, setDados] = useState([]);
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    useEffect(() => {
        api.get("/cadastros")
        .then(res => {
            setDados(res.data)
        })
    }, []);
   
    function validarCPF(cpf){
        for(let i = 0; i < dados.length; i++ ){
            if(cpf == dados[i].cpf){
                return true
            }
        }
    }

    function MensagenError(){
        if(nome == ''){
            setStatusError("Nome")
            SetMensagem("Digite o seu nome")
        }else if(sobrenome == ''){
            setStatusError("Sobrenome")
            SetMensagem("Digite o seu sobrenome")
        }else if(telefone == ''){
            setStatusError("Telefone")
            SetMensagem("Digite o seu numero de telefone")
        }else if(cpf == ''){
            setStatusError("CPF")
            SetMensagem("Digite o seu CPF")
        }else if(validarCPF(cpf) == true){
            setStatusError("CPF")
            SetMensagem("O CPF difitado já consta no banco de dados")
        }else if(dataNascimento == ''){
            setStatusError("Data")
            SetMensagem("Digite o seu data de nascimento")
       
        }
        else{
           navigation.navigate("EnderecoPF", {
                nome: nome,
                sobrenome: sobrenome,
                telefone: telefone,
                cpf: cpf,
                dataNascimento: dataNascimento,
                imagem: image
           })
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

  
     
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.iconeBack} onPress={() => goBack()}>
                <IconeGoBack name="arrow-back" size={35} />
           </TouchableOpacity>
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
                maxLength={15}
                value={telefone}
                label={"Telefone"}
                mode='outlined'
                error={statusError == "Telefone"}
                onChangeText={telefone => setTelefone(mask(telefone, ["(99)99999-9999"]))}
                />
                {statusError == "Telefone" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}


                <TextInput
                keyboardType={'numeric'}
                maxLength={14}
                value={cpf}
                label={"CPF"}
                mode='outlined'
                error={statusError == "CPF"}
                onChangeText={cpf => setCpf(mask(cpf, ["999.999.999-99"]))}
                />
                {statusError == "CPF" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                
                
                <TextInput
                maxLength={10}
                keyboardType={'numeric'}
                value={dataNascimento}
                label={"Data de nascimento"}
                mode='outlined'
                error={statusError == "Data"}
                onChangeText={dataNascimento => setDataNascimento(mask(dataNascimento, ["99/99/9999"]))}
                />
                {statusError == "Data" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                <View style={styles.anexarDocumento}>
                    <Text style={styles.anexarDocumento__titulo}>Anexar foto da CNH</Text>
                    <TouchableOpacity style={styles.anexarDocumento__botao} onPress={pickImage}>
                        <IconeAnexo name="attachment" size={20}/>
                    </TouchableOpacity>
                </View>               
            </View>
           
           <TouchableOpacity style={styles.botao} onPress={MensagenError}>
                <Text style={styles.botao__text}>Próximo</Text>
           </TouchableOpacity>
           
        </View>
    )
}