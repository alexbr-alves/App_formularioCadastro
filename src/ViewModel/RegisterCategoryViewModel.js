import { useState } from "react";
import { registerCategory } from "../Repository/databaseRepository";

const RegisterCategoryViewModel = () => {
    const [statusError, setStatusError] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState({
        CategoryName: '',
        Description: '',
        CompanyId: ''
    })

    const register = (category) => registerCategory(category)

    const checkInputEmpty = () => {
        if (category.CategoryName === '') {
            setStatusError(strings.CategoryName)
            setMessage("Enter to Category Name")
            return false
        } else if (category.Description === '') {
            setStatusError(strings.Description)
            setMessage("Enter to Descriptione")
            return false
        }
        return true
    }

    const strings = {
        CategoryName: "Category name",
        Description: "Description"
    }

    return {
        strings,
        register,
        statusError,
        category, setCategory,
        message,
        checkInputEmpty
    }
}

export default RegisterCategoryViewModel;