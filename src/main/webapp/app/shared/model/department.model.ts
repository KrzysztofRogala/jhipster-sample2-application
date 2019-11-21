import { ILocation } from 'app/shared/model/location.model';
import { IEmployee } from 'app/shared/model/employee.model';

export interface IDepartment {
  id?: number;
  departmentName?: string;
  location?: ILocation;
  departamentNames?: IEmployee[];
}

export class Department implements IDepartment {
  constructor(public id?: number, public departmentName?: string, public location?: ILocation, public departamentNames?: IEmployee[]) {}
}
