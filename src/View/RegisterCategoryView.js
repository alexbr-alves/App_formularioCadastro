import React from "react";
import { View } from "react-native";
import { Modal } from 'react-native-paper';
import CustomButton from "../Component/customButton";
import CustomTextInput from "../Component/customTextInput";
import styles from "../Style/RegisterCategoryStyle";

import RegisterCategoryViewModel from "../ViewModel/RegisterCategoryViewModel";

export default function RegisterCategoryView({ state, setState, id, onLoad }) {

    const {
        strings,
        register,
        statusError,
        category, setCategory,
        message,
        checkInputEmpty
    } = RegisterCategoryViewModel()

    function finish() {
        if (checkInputEmpty()) {
            register({
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
                    label={strings.CategoryName}
                    mode='outlined'
                    error={statusError === strings.CategoryName}
                    message={message}
                    onChangeText={CategoryName => setCategory(prevState => ({ ...prevState, CategoryName }))}
                />

                <CustomTextInput
                    value={category.Description}
                    label={strings.Description}
                    mode='outlined'
                    error={statusError === strings.Description}
                    message={message}
                    onChangeText={Description => setCategory(prevState => ({ ...prevState, Description }))}
                />

                <CustomButton
                    styleButton={styles.botao}
                    styleText={styles.botao__text}
                    onPress={finish}
                    text={"Register"}
                />

            </View>
        </Modal>
    )
}