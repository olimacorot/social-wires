import { Body, Controller, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/singin.dto/create_comment.dto';
import { CommentService } from './services/comment.service';
import { User } from 'src/auth/decorators/auth.decorator';

@Controller('messages/comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @HttpCode(HttpStatus.OK)
    @Post("/:id")
    async create(@Param('id') id, @Body() createCommentDto: CreateCommentDto, @User() user) {
        return await this.commentService.create(id, createCommentDto, user);
    }
}
