import { getCategoriesDB, registerCategoryDB } from "../services/database/category";
import { getUserDB, loginDB, registerCompanyDB } from "../services/database/company";
import { deleteEmployeeDB, getEmployeesDB, registerEmployeeDB } from "../services/database/employee";
import { deleteProductDB, getProductsDB, registerProductDB } from "../services/database/products";
import { deleteSupplierDB, getSuppliersDB, registerSupplierDB } from "../services/database/suppliers";

// Sessão Company
export const registerCompanyRepository = (user) => registerCompanyDB(user);
export const login = (email, senha, callback) => loginDB(email, senha, callback);
export const getUserRepository = (email, callback) => getUserDB(email, callback);

// Sessão Employee
export const registerEmployeeRepository = (employee) => registerEmployeeDB(employee);
export const getEmployeesRepository = (companyId, callback) => getEmployeesDB(companyId, callback);
export const deleteEmploye = (employeeID) => deleteEmployeeDB(employeeID);

// Sessão Product
export const registerProduct = (product) => registerProductDB(product);
export const getProducts = (companyId, callback) => getProductsDB(companyId, callback);
export const deleteProduct = (productID) => deleteProductDB(productID);

// Sessão Supplier
export const registerSupplier = (supplier) => registerSupplierDB(supplier);
export const getSuppliers = (companyId, callback) => getSuppliersDB(companyId, callback);
export const deleteSupplier = (supplierID) => deleteSupplierDB(supplierID);

// Sessão GetCategories
export const getCategories = (companyId, callback) => getCategoriesDB(companyId, callback);
export const registerCategory = (category) => registerCategoryDB(category);


