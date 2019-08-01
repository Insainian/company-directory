import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('profile')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get(':id')
  @Render('profile')
  getProfile(@Param() params) {
    return this.appService.getProfile(params.id)
  }
}
