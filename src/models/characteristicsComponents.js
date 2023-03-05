export class Characteristics {
    name = "";
    lastname = "";
    email = "";
    state = false;
  
    //Inicializa los datos de la clase
    constructor(name, lastname, email, state) {
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.state = state;
    }
  }