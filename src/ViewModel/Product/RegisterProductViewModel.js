import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
    getCategories,
    getSuppliers,
    registerProduct
} from "../../Repository/databaseRepository";
import { ProductModel } from '../../model/productModel';

const RegisterProductViewModel = (email) => {
    const [statusError, setStatusError] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [supplier, setSupplier] = useState([])
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState(ProductModel);

    const loadCategory = useCallback(() => {
        getCategories(email, (category) => {
            setCategory(category)
        })
    }, [email]);

    const loadSupplier = useCallback(() => {
        getSuppliers(email, (supplier) => {
            setSupplier(supplier)
        })
    }, [email])

    useEffect(() => {
        loadCategory()
        loadSupplier()
    }, [loadCategory, loadSupplier]);

    useFocusEffect(
        useCallback(() => {
            loadCategory()
            loadSupplier()
        }, [loadCategory, loadSupplier])
    )

    const checkImputEmpty = () => {
        if (product.ProductName === '') {
            setStatusError(strings.ProductName);
            return false
            setMensagem("Enter the Product Name");
        } else if (product.SupplierID === '') {
            setStatusError(strings.SupplierID);
            setMensagem("Enter the Supplier ID");
            return false
        } else if (product.CategoryID === '') {
            setStatusError(strings.CategoryID);
            setMensagem("Enter the Category ID");
            return false
        } else if (product.QuantityPerUnit === '') {
            setStatusError(strings.QuantityPerUnit);
            setMensagem("Enter the Quantity Per Unit");
            return false
        } else if (product.UnitPrice === '') {
            setStatusError(strings.UnitPrice);
            setMensagem("Enter the Unit Price");
            return false
        }
        return true
    }

    const register = (product) => registerProduct(product)

    const strings = {
        ProductName: "Product Name",
        SupplierID: "Supplier ID",
        CategoryID: "Category ID",
        QuantityPerUnit: "Quantity Per Unit",
        UnitPrice: "Unit Price",
        UnitsInStock: "Units In Stock",
        UnitsOnOrder: "Units On Order"
    }

    return {
        register,
        checkImputEmpty,
        strings,
        statusError,
        mensagem,
        modalVisible,
        setModalVisible,
        supplier,
        category,
        product,
        setProduct,
        loadCategory,
        loadSupplier
    }
}

export default RegisterProductViewModel;