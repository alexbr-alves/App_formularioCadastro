import { useEffect, useState } from "react";
import { getUserRepository } from "../../Repository/databaseRepository";


const CompanyDataViewModel = () => {
    const getUser = (email, callback) => getUserRepository(email, callback);
    const [company, setCompany] = useState('');

    const fetchData = (email) => {
        useEffect(() => {
            getUser(email, (user) => {
                setCompany(user);
            });
        }, [email]);
    }

    return {
        fetchData,
        company
    }
}

export default CompanyDataViewModel;
