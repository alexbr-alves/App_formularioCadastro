import { registerCategory } from "../Repository/databaseRepository";

export default function CategoryMock({ id }) {
    const categoria1 = {
        CompanyId: id,
        CategoryName: 'Eletrônicos',
        Description: 'Produtos eletrônicos diversos'
    };

    const categoria2 = {
        CompanyId: id,
        CategoryName: 'Móveis',
        Description: 'Móveis para escritório e residência'
    };

    const categoria3 = {
        CompanyId: id,
        CategoryName: 'Roupas',
        Description: 'Roupas masculinas, femininas e infantis'
    };

    const categoria4 = {
        CompanyId: id,
        CategoryName: 'Alimentos',
        Description: 'Produtos alimentícios diversos'
    };
    registerCategory(categoria1);
    registerCategory(categoria2);
    registerCategory(categoria3);
    registerCategory(categoria4);
}
