import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Modal } from 'react-native-paper';
import CustomTextInput from "../../../componenetes/textImput";
import styles from "./styles";
import { registerCategory } from "../../../../services/category_database";

export default function CustonModal({ state, setState, id, onLoading }) {
    const [statusError, setStatusError] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [category, setCategory] = useState({
        CategoryName: '',
        Description: '',
        CompanyId: ''
    })

    function checkError() {
        if (category.CategoryName === '') {
            setStatusError(tags.CategoryName)
            setMensagem("Enter to Category Name")
        } else if (category.Description === '') {
            setStatusError(tags.Description)
            setMensagem("Enter to Descriptione")
        } else {
            registerCategory({
                CategoryName: category.CategoryName,
                Description: category.Description,
                CompanyId: id
            })
            setState(false)
            onLoading()
        }
    }
    return (
        <Modal visible={state} onDismiss={() => setState(false)}>
            <View style={styles.container_form}>

                <CustomTextInput
                    value={category.CategoryName}
                    label={tags.CategoryName}
                    mode='outlined'
                    error={statusError === tags.CategoryName}
                    mensagem={mensagem}
                    onChangeText={CategoryName => setCategory(prevState => ({ ...prevState, CategoryName }))}
                />

                <CustomTextInput
                    value={category.Description}
                    label={tags.Description}
                    mode='outlined'
                    error={statusError === tags.Description}
                    mensagem={mensagem}
                    onChangeText={Description => setCategory(prevState => ({ ...prevState, Description }))}
                />

                <TouchableOpacity style={styles.botao} onPress={checkError}>
                    <Text style={styles.botao__text}>Register</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const tags = {
    CategoryName: "Category name",
    Description: "Description"
}