import React, { useState } from "react";
import { View } from "react-native";
import { Modal } from 'react-native-paper';
import CustomButton from "../Component/customButton";
import CustomTextInput from "../Component/customTextInput";
import { registerCategory } from "../Repository/databaseRepository";
import styles from "../Style/RegisterCategoryStyle";

export default function RegisterCategoryView({ state, setState, id, onLoad }) {
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
            onLoad()
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

                <CustomButton
                    styleButton={styles.botao}
                    styleText={styles.botao__text}
                    onPress={checkError}
                    text={"Register"}
                />

            </View>
        </Modal>
    )
}

const tags = {
    CategoryName: "Category name",
    Description: "Description"
}