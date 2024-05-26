import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { deleteProduct, getCategories, getProducts, getSuppliers } from "../../Repository/databaseRepository";

const ListProductViewModel = (email) => {
    const [products, setProducts] = useState([]);
    const [supplier, setSupplier] = useState([])
    const [categories, setCategories] = useState([])

    const loadProducts = useCallback(() => {
        getProducts(email, (products) => {
            setProducts(products);
        });
    }, [email]);

    const loadSupplier = useCallback(() => {
        getSuppliers(email, (supplier) => {
            setSupplier(supplier);
        });
    }, [email]);

    const loadCategory = useCallback(() => {
        getCategories(email, (categories) => {
            setCategories(categories)
        }, [email])
    })

    useEffect(() => {
        loadCategory()
        loadSupplier()
        loadProducts();
    }, [loadProducts]);

    useFocusEffect(
        useCallback(() => {
            loadSupplier()
            loadCategory()
            loadProducts()
        }, [loadProducts])
    );

    const deleteSelected = (id) => {
        deleteProduct(id);
    };

    const Dialog = (id) => {
        Alert.alert(
            "Confirmar Exclusão",
            "Tem certeza de que deseja excluir este produto?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Excluir",
                    onPress: () => {
                        deleteSelected(id);
                        loadProducts()
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
        )
    }

    return {
        Dialog,
        products,
        supplier,
        categories
    }
}

export default ListProductViewModel;