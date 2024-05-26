import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { deleteEmploye, getEmployeesRepository } from "../../Repository/databaseRepository";

const ListEmployeeViewModel = (email) => {
    const [funcionarios, setFuncionarios] = useState([]);

    const loadEmployees = useCallback(() => {
        getEmployeesRepository(email, (funcionarios) => {
            setFuncionarios(funcionarios);
        });
    }, [email]);

    useEffect(() => {
        loadEmployees();
    }, [loadEmployees]);

    useFocusEffect(
        useCallback(() => {
            loadEmployees();
        }, [loadEmployees])
    );

    const deleteSelected = (id) => {
        deleteEmploye(id)
    }

    const Dialog = (id) => {
        Alert.alert(
            "Confirmar Exclusão",
            "Tem certeza de que deseja excluir este funcionário?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Excluir",
                    onPress: () => {
                        deleteSelected(id);
                        loadEmployees()
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
        )
    }

    return {
        funcionarios,
        Dialog
    }

}


export default ListEmployeeViewModel;