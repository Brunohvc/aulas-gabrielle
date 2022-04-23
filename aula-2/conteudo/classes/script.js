

class Pessoa {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

class PessoaJuridica extends Pessoa {
  constructor(name, cnpj) {
    super(name);
    this.cnpj = cnpj;
  }

  getCnpj() {
    return this.cnpj;
  }

  setCnpj(cnpj) {
    this.cnpj = cnpj;
  }
}

class PessoaFisica extends Pessoa {
  constructor(name, cpf, rg) {
    super(name);
    this.cpf = cpf;
    this.rg = rg;
  }

  getCpf() {
    return this.cpf;
  }

  setCpf(cpf) {
    this.cpf = cpf;
  }

  getRg() {
    return this.rg;
  }

  setRg(rg) {
    this.rg = rg;
  }
}

class PersonOther extends PessoaFisica {
  constructor(name, cpf, rg, surname) {
    super(name, cpf, rg);
    this.surname = surname;
  }

  getSurname() {
    return this.surname;
  }

  setSurname(surname) {
    this.surname = surname;
  }
}