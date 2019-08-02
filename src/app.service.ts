import { Injectable } from '@nestjs/common';

export interface Employee {
  name: string,
  title: string,
  gender: string,
  email: string,
  phone: string,
  skills: string[],
}

@Injectable()
export class AppService {
  getProfile(id: string): Employee | undefined {
    if (id == 'jane') {
      return {
        name: 'Jane Doe',
        title: 'CEO',
        gender: 'she/her',
        email: "johndoe0@company.net",
        phone: "123-456-789",
        skills: ["Python", "Typescript"]
      }
    } else if (id == "john") {
      return {
        name: "John Doe",
        title: 'CTO',
        gender: 'he/him',
        email: "johndoe1@company.net",
        phone: "987-654-321",
        skills: ["Haskell", "Typescript"]
      }
    } else {
      return undefined
    }
  }
}
