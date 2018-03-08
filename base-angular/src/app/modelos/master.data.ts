import { Printer, Departamentos } from './master.model';

// Intercambiables
export const printers: Printer[] = [
    new Printer('1', 'HP'),
    new Printer('2', 'Brother'),
    new Printer('3', 'Lexmark'),
];

export const departamentos: Array<Departamentos> = [
    {id: '1' , name: 'RRHH'},
    {id: '2' , name: 'Ventas'},
    {id: '3' , name: 'Marketing'},
    {id: '4' , name: 'Sistemas'},
];
