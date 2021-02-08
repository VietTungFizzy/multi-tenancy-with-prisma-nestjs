import { FactoryProvider, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { PrismaClientManager } from './prisma-client-manager';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

const prismaClientProvider: FactoryProvider<PrismaClient> = {
    provide: PrismaClient,
    scope: Scope.REQUEST,
    inject: [REQUEST, PrismaClientManager],
    useFactory: (request: Request, manager: PrismaClientManager) => manager.getClient(request),
}

@Module({
    providers: [PrismaClientManager, prismaClientProvider, DatabaseService],
    exports: [PrismaClient],
    controllers: [DatabaseController]
})
export class DatabaseModule {}
