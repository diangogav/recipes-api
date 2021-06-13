import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './create-user-input.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const alreadyUser = await this.userRepository.findOne({
      where: { email: createUserInput.email },
    });

    if (alreadyUser)
      throw new BadRequestException(null, 'USER_ALREADY_REGISTERED');

    const user = this.userRepository.create(createUserInput);
    await user.hashPassword();
    return this.userRepository.save(user);
  }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }
}
