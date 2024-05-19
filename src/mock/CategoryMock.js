import { registerCategory } from "../services/database/category";

const categoria1 = {
    CompanyId: 'Q',
    CategoryName: 'Eletrônicos',
    Description: 'Produtos eletrônicos diversos'
};

const categoria2 = {
    CompanyId: 'Q',
    CategoryName: 'Móveis',
    Description: 'Móveis para escritório e residência'
};

const categoria3 = {
    CompanyId: 'Q',
    CategoryName: 'Roupas',
    Description: 'Roupas masculinas, femininas e infantis'
};

const categoria4 = {
    CompanyId: 'Q',
    CategoryName: 'Alimentos',
    Description: 'Produtos alimentícios diversos'
};

export default function CategoryMock() {
    registerCategory(categoria1);
    registerCategory(categoria2);
    registerCategory(categoria3);
    registerCategory(categoria4);
}
