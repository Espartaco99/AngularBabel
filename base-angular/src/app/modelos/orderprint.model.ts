import { Departamentos, Printer, UserIf } from './master.model';

export interface OrderPrintIf {
    user: UserIf;
    printer: Printer;
    isColor: boolean;
    isClaro: boolean;
    departamento: Departamentos;
}
