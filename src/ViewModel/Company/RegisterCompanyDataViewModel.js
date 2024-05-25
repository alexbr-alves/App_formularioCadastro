import { useState } from "react";
import { CompanyDataModel } from "../../model/CompanyModal";

const RegisterCompanyDataViewModel = () => {
    const [statusError, setStatusError] = useState('');
    const [message, setMessage] = useState('');
    const [registrationData, setRegistrationData] = useState(CompanyDataModel)

    const checkInputEmpty = () => {
        if (registrationData.CompanyName === '') {
            setStatusError(strings.companyNameLabel);
            setMessage(strings.companyNameErrorMessage);
            return false;
        } else if (registrationData.ContactName === '') {
            setStatusError(strings.contactNameLabel);
            setMessage(strings.contactNameErrorMessage);
            return false;
        } else if (registrationData.ContactTitle === '') {
            setStatusError(strings.contactTitleLabel);
            setMessage(strings.contactTitleErrorMessage);
            return false;
        } else if (registrationData.phoneNumber === '') {
            setStatusError(strings.phoneNumberLabel);
            setMessage(strings.phoneNumberErrorMessage);
            return false;
        }
        return true;
    };

    const strings = {
        title: "Register data",
        registrationDataTitle: "Registration Data",
        companyNameLabel: "Company name",
        contactNameLabel: "Contact name",
        contactTitleLabel: "Contact Title",
        phoneNumberLabel: "Phone Number",
        companyNameErrorMessage: "Enter Company Name",
        contactNameErrorMessage: "Enter ContactName",
        contactTitleErrorMessage: "Enter Contact title",
        phoneNumberErrorMessage: "Enter Phone Number",
        nextButton: "Next"
    };




    return {
        statusError,
        message,
        registrationData,
        strings,
        setRegistrationData,
        checkInputEmpty
    }

}

export default RegisterCompanyDataViewModel;
