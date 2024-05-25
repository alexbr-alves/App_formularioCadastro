import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { getCategories, getProducts, getSuppliers } from "../../Repository/databaseRepository";

const ListProductViewModel = () => {
    const [products, setProducts] = useState([]);
    const [supplier, setSupplier] = useState([])
    const [categories, setCategories] = useState([])

    const fetchData = (email) => {
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
    }

    return {
        fetchData,
        products,
        supplier,
        categories
    }
}

export default ListProductViewModel;