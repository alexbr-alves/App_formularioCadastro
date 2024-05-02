export class UserLoginModel {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  }

  export class AddressModel {
    constructor(PostalCode, City, Region, Address, Number) {
      this.PostalCode = PostalCode;
      this.City = City;
      this.Region = Region;
      this.Address = Address;
      this.Number = Number;
    }
  }

  export class RegistrationModel {
    constructor(CompanyName, ContactName, ContactTitle, Phone) {
      this.CompanyName = CompanyName,
      this.ContactName = ContactName,
      this.ContactTitle = ContactTitle,
      this.Phone = Phone
    }
  }

  