import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger'
import { DatabaseService } from './database.service'


@ApiTags('MultiTenancy')
@Controller('database')
export class DatabaseController {
    constructor(private readonly service: DatabaseService) {}

    @Get()
    @ApiQuery({name: 'tenantId', type: String})
    async getAll(
    ) {
        return await this.service.findAll()
    }

    @Post()
    @ApiQuery({name: 'title', type: String})
    @ApiQuery({name: 'content', type: String})
    @ApiQuery({name: 'tenantId', type: String})
    async create(
        @Query('title') title: string,
        @Query('content') content: string
    ) {
        return await this.service.create(title, content)
    }
}
