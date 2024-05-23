import { getCategoriesDB, registerCategoryDB } from "../services/database/category";
import { getUserDB, loginDB, registerCompanyDB } from "../services/database/company";
import { getEmployeesDB, registerEmployeeDB } from "../services/database/employee";
import { getProductsDB, registerProductDB } from "../services/database/products";
import { getSuppliersDB, registerSupplierDB } from "../services/database/suppliers";

export const getCategories = (companyId, callback) => getCategoriesDB(companyId, callback);
export const registerCategory = (category) => registerCategoryDB(category);

export const registerCompany = (user) => registerCompanyDB(user);
export const login = (email, senha, callback) => loginDB(email, senha, callback);
export const getUser = (email, callback) => getUserDB(email, callback);

export const registerEmployee = (employee) => registerEmployeeDB(employee);
export const getEmployees = (companyId, callback) => getEmployeesDB(companyId, callback);

export const registerProduct = (product) => registerProductDB(product);
export const getProducts = (companyId, callback) => getProductsDB(companyId, callback);

export const registerSupplier = (supplier) => registerSupplierDB(supplier);
export const getSuppliers = (companyId, callback) => getSuppliersDB(companyId, callback);