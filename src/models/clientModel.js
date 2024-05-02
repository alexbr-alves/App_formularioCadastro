
export class ClientModel {
    constructor(
      CustomerID,
      CompanyName,
      ContactName,
      ContactTitle,
      Address,
      City,
      Region,
      PostalCode,
      Country,
      Phone
    ) {
      this.CustomerID = CustomerID;
      this.CompanyName = CompanyName;
      this.ContactName = ContactName;
      this.ContactTitle = ContactTitle;
      this.Address = Address;
      this.City = City;
      this.Region = Region;
      this.PostalCode = PostalCode;
      this.Country = Country;
      this.Phone = Phone;
    }
  }
  
  export class User {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  }