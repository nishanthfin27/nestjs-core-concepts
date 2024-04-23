import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'nishanth', email: 'nishanth@gmail.com' },
    { username: 'nishi', email: 'nishi@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    console.log('**** fetchUserById ****')
    return { id , username: 'nishanth', email: 'nishanth@gmail.com'};
    // return null;
  }
}
