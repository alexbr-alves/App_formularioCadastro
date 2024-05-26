import numeroCep from 'cep-promise';
import { useState } from "react";
import { CompanyAddressModel } from "../../model/CompanyModal";

const RegisterCompanyAddressViewModel = () => {
    const [statusError, setStatusError] = useState('');
    const [message, setMessage] = useState('');
    const [activeLoading, setActiveLoading] = useState(false);
    const [addressData, setAddressData] = useState(CompanyAddressModel)

    const checkimputEmpty = () => {
        if (addressData.PostalCode === '') {
            setStatusError(strings.postalCodeLabel)
            setMessage(strings.postalCodeMessageError)
            return false
        } else if (addressData.City === '') {
            setStatusError(strings.cityLabel)
            setMessage(strings.cityMessageError)
            return false
        } else if (addressData.Region === '') {
            setStatusError(strings.regionLabel)
            setMessage(strings.regionMessageError)
            return false
        } else if (addressData.Address === '') {
            setStatusError(strings.addressLabel)
            setMessage(strings.addressMessageError)
            return false
        } else if (addressData.Number === '') {
            setStatusError(strings.numberLabel)
            setMessage(strings.numberMessageError)
            return false
        }
        return true
    }

    const getCPF = () => {
        setActiveLoading(true)
        setAddressData({ ...addressData, City: '', Region: '', Address: '' })
        if (addressData.PostalCode.length === 9) {
            numeroCep(addressData.PostalCode)
                .then(data => {
                    setAddressData({
                        ...addressData,
                        City: data.city,
                        Region: data.state,
                        Address: data.street
                    });
                    setActiveLoading(false)
                    setStatusError('')
                    setMessage('')
                })
        } else {
            setStatusError(strings.postalCodeLabel)
            setMessage(strings.postalCodeMessageError)
            setActiveLoading(false)
        }

    }

    const strings = {
        title: "Register Address",
        categoryTitle: "Data Address",
        postalCodeLabel: "Postal Code",
        searchButtonText: "Buscar",
        cityLabel: "City",
        regionLabel: "Region",
        addressLabel: "Address",
        numberLabel: "Number",
        nextButtonText: "Next",
        postalCodeMessageError: "Enter Postal Code",
        cityMessageError: "Enter City",
        regionMessageError: "Enter Region",
        addressMessageError: "Enter Address",
        numberMessageError: "Enter Number",
        cepMask: "99999-999",
    };

    return {
        statusError,
        message,
        activeLoading,
        addressData,
        strings,
        setAddressData,
        checkimputEmpty,
        getCPF
    }
}

export default RegisterCompanyAddressViewModel;

