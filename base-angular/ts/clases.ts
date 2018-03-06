
class User {
    // Por defecto los atributos se inicializan a public
    // Solo hay los 3 tipos de js, String, Number y Boolean + any (Como no usar tipo)
    private genero: Number;
    protected edad: any;
    public apellidos: any;
    nombre;
    constructor(nombre: String, apellidos: string, edad, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
    }
    saludar () {console.log(`Hola, soy ${this.nombre}`); }
}

class Alumno extends User {
    curso: any;
    constructor(nombre, apellidos, edad, genero, curso) {
        super(nombre, apellidos, edad, genero);
        this.curso = curso;
    }

    saludar() {console.log(`Hola, soy ${this.nombre} y curso ${this.curso}`); }
}

let user = new User('Juan', 'Perez', 45, 'D');
// Como al compilar a javascript funciona, aun siendo un error compila y ejecuta
// user.pais = 'YO';
user.saludar();
console.log(user);

let alumno2 = new Alumno('Pedro', 'Perez', 45, 'D', 'Angular');
alumno2.saludar();
