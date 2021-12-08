import { Injectable } from '@nestjs/common';
import { sleep } from 'utils/sleep';
import * as users from 'db/users.json';

@Injectable()
export class UserService {
  async getUsers() {
    await sleep(1000);
    return users;
  }
}
