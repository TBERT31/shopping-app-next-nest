import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as ms from 'ms';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
    ){}
    
    async login(user: User, response: Response) {
        const expires = new Date();
        expires.setMilliseconds(
          expires.getMilliseconds() +
            ms(this.configService.getOrThrow('JWT_EXPIRATION') as ms.StringValue)
        );
    
        const tokenPayload: TokenPayload = {
            userId: user.id,
        };
        const token = this.jwtService.sign(tokenPayload);

        response.cookie('Authentication', token, {
            secure: true,
            httpOnly: true,
        });

        return { tokenPayload };
    }

    async verifyUser(email: string, password: string){
        try {
            const user = await this.usersService.getUser({ email });
            const authenticated = await bcrypt.compare(password, user.password);
            if(!authenticated){
                throw new UnauthorizedException();
            }
            return user;
        } catch (err) {
            throw new UnauthorizedException('Credentials are not valid.');
        }
    }
}
