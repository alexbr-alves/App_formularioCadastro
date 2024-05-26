import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { getEmployeesRepository } from "../../Repository/databaseRepository";


const ListEmployeeViewModel = () => {
    const [funcionarios, setFuncionarios] = useState([]);

    const fetchData = (email) => {
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
    }

    return {
        funcionarios,
        fetchData
    }

}


export default ListEmployeeViewModel;