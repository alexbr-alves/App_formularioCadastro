import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import styles from "./styles";
import { mask } from 'remask';
import { useNavigation } from "@react-navigation/native";
import api from "../../../../servicos/api";
import * as ImagePicker from 'expo-image-picker';
import IconeAnexo from 'react-native-vector-icons/Entypo';
import IconeGoBack from 'react-native-vector-icons/Ionicons';

export default function DadosPessoaisPJ({ navigation: { goBack } }){
    const [dados, setDados] = useState([]);
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const [statusError, setStatusError] = useState('');
    const [Mensagem, SetMensagem] = useState('');
    const [nomeEmpresarial, setNomeEmpresarial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [dataAbertura, setDataAbertura] = useState('');
   
    useEffect(() => {
        api.get("/cadastros")
        .then(res => {
            setDados(res.data)
        })
    }, []);
   
    function validarCNPJ(cnpj){
        for(let i = 0; i < dados.length; i++ ){
            if(cnpj == dados[i].cnpj){
                return true
            }
        }
    }
   

    function MensagenError(){
        if(nomeEmpresarial == ''){
            setStatusError("nomeEmpresarial")
            SetMensagem("Digite o nome empresarial")
        }else if(nomeFantasia == ''){
            setStatusError("nomeFantasia")
            SetMensagem("Digite o nome fantasia")
        }else if(telefone == ''){
            setStatusError("Telefone")
            SetMensagem("Digite o seu numero de telefone")
        }else if(cnpj == ''){
            setStatusError("CNPF")
            SetMensagem("Digite o CNPJ")
        }else if(validarCNPJ(cnpj) == true){
                setStatusError("CNPF")
                SetMensagem("o cnpj digitado já consta no banco de dados")
        }else if(dataAbertura == ''){
            setStatusError("Data")
            SetMensagem("Digite o seu data de abertura")
        }else{
           navigation.navigate("EnderecoPJ", {
            nomeEmpresarial: nomeEmpresarial,
            nomeFantasia: nomeFantasia,
            telefone: telefone,
            cnpj: cnpj,
            dataAbertura: dataAbertura,
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
                value={nomeEmpresarial}
                label={"Nome empresarial"}
                mode='outlined'
                error={statusError == "nomeEmpresarial"}
                onChangeText={nomeEmpresarial => setNomeEmpresarial(nomeEmpresarial)}
                />
                {statusError == "nomeEmpresarial" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                
                
                <TextInput
                value={nomeFantasia}
                label={"Nome fantasia"}
                mode='outlined'
                error={statusError == "nomeFantasia"}
                onChangeText={nomeFantasia => setNomeFantasia(nomeFantasia)}
                />
                {statusError == "nomeFantasia" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                
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
                maxLength={18}
                value={cnpj}
                label={"CNPJ"}
                mode='outlined'
                error={statusError == "CNPF"}
                onChangeText={cnpj => setCnpj(mask(cnpj, ["99.999.999/9999-99"]))}
                />
                {statusError == "CNPF" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                
                
                <TextInput
                maxLength={10}
                keyboardType={'numeric'}
                value={dataAbertura}
                label={"Data de abertura"}
                mode='outlined'
                error={statusError == "Data"}
                onChangeText={dataAbertura => setDataAbertura(mask(dataAbertura, ["99/99/9999"]))}
                />
                {statusError == "Data" && <HelperText type="error" visible={statusError}>{Mensagem}</HelperText>}
                <View style={styles.anexarDocumento}>
                    <Text style={styles.anexarDocumento__titulo}>Anexar foto</Text>
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