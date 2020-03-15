import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async find(id: string) {
    return await this.userRepository.findOne(id);
  }

  async create(data: Omit<User, 'id'>) {
    return this.userRepository.create(data);
  }

  async updateName(id: string, firstName: string, lastName: string) {
    return await this.userRepository.update(id, { firstName, lastName });
  }
}
