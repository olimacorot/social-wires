import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { MessagesService } from './services/messages.service';
import { CreateMessageDto } from './dto/singin.dto/create_message.dto';
import { User } from 'src/auth/decorators/auth.decorator';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @HttpCode(HttpStatus.OK)
    @Post("/")
    async create(@Body() createMessageDto: CreateMessageDto, @User() user) {
        return await this.messagesService.create(createMessageDto, user);
    }

    @Get('/')
    async findAll() {
        return await this.messagesService.getAll();
    }

    @Get('/me')
    async myMessages(@User() user) {
        return await this.messagesService.getByUser(user.sub);
    }

    @Get('/:id')
    async findOne(@Param('id') id) {
        return await this.messagesService.getById(id);
    }

    @Delete('/:id')
    async delete(@Param('id') id, @User() user) {
        return await this.messagesService.delete(id, user.sub);
    }
}
