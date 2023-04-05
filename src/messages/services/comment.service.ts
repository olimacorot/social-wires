import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import MessagesEntity from '../entities/messages.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from '../dto/singin.dto/create_comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(MessagesEntity)
    private messagesRepository: Repository<MessagesEntity>,
  ) {}

  async create(id: number, createCommentDto: CreateCommentDto, user: object): Promise<any> {

    if (createCommentDto.author != user["sub"]) {
      throw new NotFoundException('The user commenting is different to the login');
    }

    const message = await this.messagesRepository.findOne({
      where: {
        id: id,
      }
    });

    if (!message) {
      throw new NotFoundException('Could not find the message');
    }

    if (createCommentDto.author == message.user) {
      throw new NotFoundException('You cannot comment on your own message');
    }

    message.comments.push({
      comment: createCommentDto.comment,
      author: createCommentDto.author,
    })
    return await this.messagesRepository.save(message);
  }
}
