import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserRequest } from './dto/create-user.request';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {

    constructor(
        private readonly prismaService: PrismaService,
    ){}

    async createUser(data: CreateUserRequest): Promise<User> {
        return this.prismaService.user.create({
            data: {
                ...data,
                password: await bcrypt.hash(data.password, 10),
            },
        });
    }
}
