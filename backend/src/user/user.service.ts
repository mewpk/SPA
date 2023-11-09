import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { userDTO } from './dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getUsers() {
        try {
            const user = await this.prisma.user.findMany()
            return user
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new ForbiddenException(
                    'Credentials taken',);
            }
        }
    }
    async createUser(dto : userDTO) {
        try {
            const user = await this.prisma.user.create({
                data: {
                    name: dto.name,
                    email: dto.email
                }
            })
            return user
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new ForbiddenException(
                    'Credentials taken',);
            }
        }

    }
}