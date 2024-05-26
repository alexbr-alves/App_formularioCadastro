import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { getSuppliers } from "../../Repository/databaseRepository";

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

    return {
        fornecedores
    }
}

export default ListSupplierViewModel;