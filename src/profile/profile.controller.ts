import { Controller, Get, Param, Render, HttpException, HttpStatus } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

    constructor(private service: ProfileService) { }
    @Get(':id')
    @Render('profile')
    getProfile(@Param() params) {
      let profile = this.service.getProfile(params.id, 'company.net')
      if (profile) {
        return profile
      } else {
        throw new HttpException('Employee Not Found', HttpStatus.NOT_FOUND);
      }
    }
}
