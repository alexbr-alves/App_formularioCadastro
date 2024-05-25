import numeroCep from 'cep-promise';
import { useState } from 'react';
import { registerSupplier } from "../../Repository/databaseRepository";
import { SupplierModel } from "../../model/SupplierModel";

const RegisterSupplierViewModel = () => {
    const [statusError, setStatusError] = useState('');
    const [message, setMessage] = useState('');
    const [activeLoading, setActiveLoading] = useState(false);
    const [supplier, setSupplier] = useState(SupplierModel);

    function getCpf() {
        setActiveLoading(true);
        setSupplier({ ...supplier, City: '', Region: '', Address: '', Country: '' });
        if (supplier.PostalCode.length === 9) {
            numeroCep(supplier.PostalCode)
                .then(data => {
                    setSupplier({
                        ...supplier,
                        City: data.city,
                        Region: data.state,
                        Address: data.street,
                        Country: "Brasil"
                    });
                    setActiveLoading(false);
                    setStatusError('');
                    setMessage('');
                })
                .catch(error => {
                    setStatusError("PostalCode");
                    setMessage("CEP não encontrado");
                    setActiveLoading(false);
                });
        } else {
            setStatusError("PostalCode");
            setMessage("Insira um CEP válido");
            setActiveLoading(false);
        }
    }

    const register = (supplier) => registerSupplier(supplier)

    const checkImputEmpty = () => {
        if (supplier.CompanyName === '') {
            setStatusError(strings.CompanyName);
            setMessage("Enter the Company Name");
            return false
        } else if (supplier.ContactName === '') {
            setStatusError(strings.ContactName);
            setMessage("Enter the Contact Name");
            return false
        } else if (supplier.ContactTitle === '') {
            setStatusError(strings.ContactTitle);
            setMessage("Enter the Contact Title");
            return false
        } else if (supplier.Phone === '') {
            setStatusError(strings.Phone);
            setMessage("Enter the Phone number");
            return false
        }
        return true
    }

    const strings = {
        CompanyName: "Company Name",
        ContactName: "Contact Name",
        ContactTitle: "Contact Title",
        Address: "Address",
        City: "City",
        Region: "Region",
        PostalCode: "Postal Code",
        Country: "Country",
        Phone: "Phone"
    }

    return {
        strings,
        checkImputEmpty,
        register,
        getCpf,
        statusError,
        message,
        activeLoading,
        supplier,
        setSupplier
    }

}

export default RegisterSupplierViewModel;