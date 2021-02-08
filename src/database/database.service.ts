import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DatabaseService {
    constructor(private prisma: PrismaClient) {}

    async findAll() {
        return await this.prisma.post.findMany()
    }

    async create(title: string, content: string) {
        return await this.prisma.post.create({
            data: {
                title: title,
                content: content
            }
        })
    }
}
