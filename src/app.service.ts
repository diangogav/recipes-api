import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  async getHello() {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    const { value } = data;
    return `<h1 style="text-align:center">${value}<h1>`;
  }
}
