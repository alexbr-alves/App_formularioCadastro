import numeroCep from 'cep-promise';
import { useState } from "react";
import { registerEmployeeRepository } from "../../Repository/databaseRepository";
import EmployeeModel from "../../model/EmployeeModel";

const RegisterEmployeeViewModel = () => {
    const [employee, setEmployee] = useState(EmployeeModel);
    const [statusError, setStatusError] = useState('');
    const [message, setMessage] = useState('');
    const [activeLoading, setActiveLoading] = useState(false);

    const checkImputEmpty = () => {
        if (employee.FirstName === '') {
            setStatusError(strings.FirstName)
            setMessage("Enter the First name")
            return false
        } else if (employee.LastName === '') {
            setStatusError(strings.LastName)
            setMessage("Enter the Last name")
            return false
        } else if (employee.Title === '') {
            setStatusError(strings.Title)
            setMessage("Title")
            return false
        } else if (employee.BirthDate === '') {
            setStatusError(strings.BirthDate)
            setMessage("Enter the Birth date")
            return false
        } else if (employee.HireDate === '') {
            setStatusError(strings.HireDate)
            setMessage("Enter the Hire date")
            return false
        } else if (employee.HomePhone === '') {
            setStatusError(strings.HomePhone)
            setMessage("Enter the Home phone")
            return false
        } else if (employee.Extension === '') {
            setStatusError(strings.Extension)
            setMessage("Enter the Extension")
            return false
        }
        return true
    }

    const registerEmployee = (employee) => {
        registerEmployeeRepository(employee)
    }

    const getCep = () => {
        setActiveLoading(true)
        setEmployee({ ...employee, City: '', Region: '', Address: '', Country: '' })
        if (employee.PostalCode.length === 9) {
            numeroCep(employee.PostalCode)
                .then(data => {
                    setEmployee({
                        ...employee,
                        City: data.city,
                        Region: data.state,
                        Address: data.street,
                        Country: "Brasil"
                    });
                    setActiveLoading(false)
                    setStatusError('')
                    setMessage('')
                })
        } else {
            setStatusError("PostalCode")
            setMessage("Enter Postal Code")
            setActiveLoading(false)
        }
    }

    const strings = {
        FirstName: "First name",
        LastName: "Last name",
        Title: "Title",
        BirthDate: "Birth date",
        HireDate: "Hire date",
        Address: "Address",
        City: "City",
        Region: "Region",
        PostalCode: "Postal code",
        Country: "Country",
        HomePhone: "Home hhone",
        Extension: "Extension"
    }

    return {
        getCep,
        registerEmployee,
        checkImputEmpty,
        employee, setEmployee,
        statusError,
        message,
        activeLoading,
        strings
    }

}

export default RegisterEmployeeViewModel;