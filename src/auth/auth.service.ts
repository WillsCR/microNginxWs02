import { Injectable } from '@nestjs/common';
import * as arp from 'arp';
import axios from 'axios';
import { Request } from 'express';
@Injectable()
export class AuthService {

  async conectWso02 (username:string,password:string):Promise<any>{
    console.log(username , password);
    const response = await axios.post('http:192.168.1.10:3002/auth',
      {username,password})
    console.log(response.data);
    return response.data;
  }

}
