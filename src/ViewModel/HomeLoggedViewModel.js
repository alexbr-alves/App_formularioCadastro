import { useEffect, useState } from "react";
import CategoryMock from "../mock/CategoryMock";
import EmployeeMock from "../mock/EmployeeMock";
import ProductMock from "../mock/ProductMock";
import SupplierMock from "../mock/SupplierMock";


const HomeLoggedViewModel = () => {
    const [activeLoading, setActiveLoading] = useState(true);
    const handleMock = (email) => {
        useEffect(() => {
            const mockWithTimeout = async () => {
                setActiveLoading(true)
                const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

                await CategoryMock({ id: email });
                await delay(500);

                await ProductMock({ id: email });
                await delay(500);

                await SupplierMock({ id: email });
                await delay(500);

                await EmployeeMock({ id: email });
                setActiveLoading(false)
            };
            mockWithTimeout();

        }, [email]);
    }

    return {
        handleMock,
        activeLoading
    }
}

export default HomeLoggedViewModel;