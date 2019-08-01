import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProfile(id: string) {
    if (id == "sahus") {
      return { name: "Sahus Nulu" }
    }
    else if (id == "deepak") {
      return { name: "Deepak Nulu" }
    }
  }
}
