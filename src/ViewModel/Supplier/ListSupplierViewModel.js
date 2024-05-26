import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { deleteSupplier, getSuppliers } from "../../Repository/databaseRepository";

const ListSupplierViewModel = (email) => {
    const [fornecedores, setFornecedores] = useState([]);

    const loadSuppliers = useCallback(() => {
        getSuppliers(email, (fornecedores) => {
            setFornecedores(fornecedores);
        });
    }, [email]);

    useEffect(() => {
        loadSuppliers();
    }, [loadSuppliers]);
    useFocusEffect(
        useCallback(() => {
            loadSuppliers();
        }, [loadSuppliers])
    );

    const deleteSelected = (id) => {
        deleteSupplier(id)
    }

    const Dialog = (id) => {
        Alert.alert(
            "Confirmar Exclusão",
            "Tem certeza de que deseja excluir este fornecedor?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Excluir",
                    onPress: () => {
                        deleteSelected(id);
                        loadSuppliers()
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
        )
    }

    return {
        Dialog,
        fornecedores
    }
}

export default ListSupplierViewModel;