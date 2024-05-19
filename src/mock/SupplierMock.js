import { registerSupplier } from "../services/database_sqlite";

const fornecedor1 = {
    CompanyName: 'Supplier A',
    ContactName: 'João Silva',
    ContactTitle: 'Manager',
    Address: 'Rua A, 100',
    City: 'São Paulo',
    Region: 'SP',
    PostalCode: '01000-000',
    Country: 'Brasil',
    Phone: '(11) 1234-5678',
    CompanyId: 'Q'
};

const fornecedor2 = {
    CompanyName: 'Supplier B',
    ContactName: 'Maria Souza',
    ContactTitle: 'Director',
    Address: 'Avenida B, 200',
    City: 'Rio de Janeiro',
    Region: 'RJ',
    PostalCode: '20000-000',
    Country: 'Brasil',
    Phone: '(21) 2345-6789',
    CompanyId: 'Q'
};

const fornecedor3 = {
    CompanyName: 'Supplier C',
    ContactName: 'Carlos Pereira',
    ContactTitle: 'Sales Representative',
    Address: 'Rua C, 300',
    City: 'Belo Horizonte',
    Region: 'MG',
    PostalCode: '30000-000',
    Country: 'Brasil',
    Phone: '(31) 3456-7890',
    CompanyId: 'Q'
};

const fornecedor4 = {
    CompanyName: 'Supplier D',
    ContactName: 'Ana Clara',
    ContactTitle: 'HR Manager',
    Address: 'Avenida D, 400',
    City: 'Porto Alegre',
    Region: 'RS',
    PostalCode: '90000-000',
    Country: 'Brasil',
    Phone: '(51) 4567-8901',
    CompanyId: 'Q'
};

const fornecedor5 = {
    CompanyName: 'Supplier E',
    ContactName: 'Lucas Martins',
    ContactTitle: 'CEO',
    Address: 'Rua E, 500',
    City: 'Curitiba',
    Region: 'PR',
    PostalCode: '80000-000',
    Country: 'Brasil',
    Phone: '(41) 5678-9012',
    CompanyId: 'Q'
};

const fornecedor6 = {
    CompanyName: 'Supplier F',
    ContactName: 'Juliana Oliveira',
    ContactTitle: 'Marketing Manager',
    Address: 'Avenida F, 600',
    City: 'Fortaleza',
    Region: 'CE',
    PostalCode: '60000-000',
    Country: 'Brasil',
    Phone: '(85) 6789-0123',
    CompanyId: 'Q'
};

const fornecedor7 = {
    CompanyName: 'Supplier G',
    ContactName: 'Pedro Almeida',
    ContactTitle: 'CTO',
    Address: 'Rua G, 700',
    City: 'Salvador',
    Region: 'BA',
    PostalCode: '40000-000',
    Country: 'Brasil',
    Phone: '(71) 7890-1234',
    CompanyId: 'Q'
};

const fornecedor8 = {
    CompanyName: 'Supplier H',
    ContactName: 'Mariana Lima',
    ContactTitle: 'CFO',
    Address: 'Avenida H, 800',
    City: 'Manaus',
    Region: 'AM',
    PostalCode: '69000-000',
    Country: 'Brasil',
    Phone: '(92) 8901-2345',
    CompanyId: 'Q'
};

const fornecedor9 = {
    CompanyName: 'Supplier I',
    ContactName: 'Carlos Rodrigues',
    ContactTitle: 'COO',
    Address: 'Rua I, 900',
    City: 'Brasília',
    Region: 'DF',
    PostalCode: '70000-000',
    Country: 'Brasil',
    Phone: '(61) 9012-3456',
    CompanyId: 'Q'
};

const fornecedor10 = {
    CompanyName: 'Supplier J',
    ContactName: 'Fernando Lima',
    ContactTitle: 'Coordinator',
    Address: 'Praça J, 1000',
    City: 'Recife',
    Region: 'PE',
    PostalCode: '50000-000',
    Country: 'Brasil',
    Phone: '(81) 3456-7890',
    CompanyId: 'Q'
};

export default function SupplierMock() {
    registerSupplier(fornecedor1);
    registerSupplier(fornecedor2);
    registerSupplier(fornecedor3);
    registerSupplier(fornecedor4);
    registerSupplier(fornecedor5);
    registerSupplier(fornecedor6);
    registerSupplier(fornecedor7);
    registerSupplier(fornecedor8);
    registerSupplier(fornecedor9);
    registerSupplier(fornecedor10);
}
