import { Injectable } from '@nestjs/common';

export interface Employee {
  username: string,
  domain: string,
  name: string,
  title: string,
  gender: string,
  phone: string,
  skills: string[],
}

@Injectable()
export class AppService {
  getProfile(id: string): Employee | undefined {
    if (id == 'jane') {
      return {
        username: 'janedoe',
        domain: 'company.net',
        name: 'Jane Doe',
        title: 'CEO',
        gender: 'she/her',
        phone: '123-456-789',
        skills: ['Python', 'Typescript']
      }
    } else if (id == 'john') {
      return {
        username: 'johndoe',
        domain: 'company.net',
        name: 'John Doe',
        title: 'CTO',
        gender: 'he/him',
        phone: '987-654-321',
        skills: ['Haskell', 'Typescript']
      }
    } else {
      return undefined
    }
  }
}
