import { Controller, Get, Param, Render, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('profile')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  @Render('profile')
  getProfile(@Param() params) {
    let profile = this.appService.getProfile(params.id)
    if (profile) {
      return profile
    } else {
      throw new HttpException('Employee Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
