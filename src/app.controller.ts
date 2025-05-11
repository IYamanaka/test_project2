import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    const achieves:{achieved_at:Date}[] = [
      {achieved_at:new Date('2025-05-10')},
      {achieved_at:new Date('2025-05-11')},
      {achieved_at:new Date('2025-05-11')},
      {achieved_at:new Date('2025-05-12')},
      {achieved_at:new Date('2025-05-13')},
      {achieved_at:new Date('2025-05-18')},
      {achieved_at:new Date('2025-05-25')},
    ]
    const achieves_old:{achieved_at:Date}[] = [
      {achieved_at:new Date('2025-05-08')},
      {achieved_at:new Date('2025-05-09')},
      {achieved_at:new Date('2025-05-10')},
    ]
    return {title: 'Test app', header: 'Nest.js', message: 'Hello world!', achieves: achieves, achieves_old: achieves_old};
  }
}
