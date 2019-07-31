import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('profile')
export class AppController {
  @Get(':name')
  @Render('profile')
  getHello(@Param() params) {
    return {name: params.name}
  }
}
