import { Body, Controller, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateReactionDto } from './dto/singin.dto/create_reaction.dto';
import { ReactionService } from './services/reaction.service';
import { User } from 'src/auth/decorators/auth.decorator';

@Controller('messages/reaction')
export class ReactionController {
    constructor(private readonly reactionService: ReactionService) {}

    @HttpCode(HttpStatus.OK)
    @Post("/:id")
    async create(@Param('id') id, @Body() createReactionDto: CreateReactionDto, @User() user) {
        return await this.reactionService.create(id, createReactionDto, user);
    }
}
