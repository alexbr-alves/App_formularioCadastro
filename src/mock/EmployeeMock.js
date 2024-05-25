import { registerEmployee } from "../Repository/databaseRepository";

export default function EmployeeMock({ id }) {

    const funcionario1 = {
        CompanyId: id,
        LastName: 'Ferreira',
        FirstName: 'Lucas',
        Title: 'Analista de Recursos Humanos',
        BirthDate: '1987-09-25',
        HireDate: '2024-01-15',
        Address: 'Rua das Palmeiras, 789',
        City: 'Belo Horizonte',
        Region: 'MG',
        PostalCode: '07890-123',
        Country: 'Brasil',
        HomePhone: '(31) 6543-2109',
        Extension: '103'
    };

    const funcionario2 = {
        CompanyId: id,
        LastName: 'Costa',
        FirstName: 'Ana',
        Title: 'Gerente de Vendas',
        BirthDate: '1979-12-10',
        HireDate: '2022-05-30',
        Address: 'Alameda dos Anjos, 321',
        City: 'Curitiba',
        Region: 'PR',
        PostalCode: '05678-901',
        Country: 'Brasil',
        HomePhone: '(41) 8901-2345',
        Extension: '104'
    };

    const funcionario3 = {
        CompanyId: id,
        LastName: 'Oliveira',
        FirstName: 'Rafael',
        Title: 'Desenvolvedor Front-End',
        BirthDate: '1995-04-03',
        HireDate: '2023-09-20',
        Address: 'Travessa das Oliveiras, 456',
        City: 'Porto Alegre',
        Region: 'RS',
        PostalCode: '06789-012',
        Country: 'Brasil',
        HomePhone: '(51) 6789-0123',
        Extension: '105'
    };

    const funcionario4 = {
        CompanyId: id,
        LastName: 'Martins',
        FirstName: 'Camila',
        Title: 'Analista Financeiro',
        BirthDate: '1983-06-12',
        HireDate: '2022-08-05',
        Address: 'Rua das Pedras, 789',
        City: 'Fortaleza',
        Region: 'CE',
        PostalCode: '03456-789',
        Country: 'Brasil',
        HomePhone: '(85) 3456-7890',
        Extension: '106'
    };

    const funcionario5 = {
        CompanyId: id,
        LastName: 'Pereira',
        FirstName: 'Juliana',
        Title: 'Especialista em RH',
        BirthDate: '1990-02-28',
        HireDate: '2023-11-12',
        Address: 'Avenida das Árvores, 987',
        City: 'Recife',
        Region: 'PE',
        PostalCode: '02345-678',
        Country: 'Brasil',
        HomePhone: '(81) 9012-3456',
        Extension: '107'
    };

    const funcionario6 = {
        CompanyId: id,
        LastName: 'Gomes',
        FirstName: 'Carlos',
        Title: 'Engenheiro de Produção',
        BirthDate: '1988-10-17',
        HireDate: '2022-03-25',
        Address: 'Praça da Paz, 321',
        City: 'Salvador',
        Region: 'BA',
        PostalCode: '04567-890',
        Country: 'Brasil',
        HomePhone: '(71) 2345-6789',
        Extension: '108'
    };

    const funcionario7 = {
        CompanyId: id,
        LastName: 'Rodrigues',
        FirstName: 'Fernanda',
        Title: 'Analista de Qualidade',
        BirthDate: '1993-08-07',
        HireDate: '2024-04-18',
        Address: 'Avenida dos Sonhos, 456',
        City: 'Brasília',
        Region: 'DF',
        PostalCode: '05678-901',
        Country: 'Brasil',
        HomePhone: '(61) 8901-2345',
        Extension: '109'
    };

    const funcionario8 = {
        CompanyId: id,
        LastName: 'Almeida',
        FirstName: 'Pedro',
        Title: 'Designer Gráfico',
        BirthDate: '1986-11-30',
        HireDate: '2023-06-08',
        Address: 'Rua das Estrelas, 123',
        City: 'Manaus',
        Region: 'AM',
        PostalCode: '06789-012',
        Country: 'Brasil',
        HomePhone: '(92) 6789-0123',
        Extension: '110'
    };

    const funcionario9 = {
        CompanyId: id,
        LastName: 'Carvalho',
        FirstName: 'Mariana',
        Title: 'Analista de Sistemas',
        BirthDate: '1991-05-15',
        HireDate: '2022-10-30',
        Address: 'Travessa das Rosas, 789',
        City: 'Florianópolis',
        Region: 'SC',
        PostalCode: '03456-789',
        Country: 'Brasil',
        HomePhone: '(48) 3456-7890',
        Extension: '111'
    };

    const funcionario10 = {
        CompanyId: id,
        LastName: 'Lima',
        FirstName: 'Aline',
        Title: 'Coordenadora de Projetos',
        BirthDate: '1984-03-22',
        HireDate: '2024-03-10',
        Address: 'Avenida das Ondas, 987',
        City: 'Natal',
        Region: 'RN',
        PostalCode: '02345-678',
        Country: 'Brasil',
        HomePhone: '(84) 9012-3456',
        Extension: '112'
    };
    registerEmployee(funcionario1);
    registerEmployee(funcionario2);
    registerEmployee(funcionario3);
    registerEmployee(funcionario4);
    registerEmployee(funcionario5);
    registerEmployee(funcionario6);
    registerEmployee(funcionario7);
    registerEmployee(funcionario8);
    registerEmployee(funcionario9);
    registerEmployee(funcionario10);
}

