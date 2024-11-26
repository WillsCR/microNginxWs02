import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 
  @Post()
  async receiveJson(@Body() json:any) :Promise<any>{
    return this.authService.conectWso02(json.username, json.password);
  }
  

}
