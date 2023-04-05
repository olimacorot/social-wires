import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import MessagesEntity from '../entities/messages.entity';
import { Repository } from 'typeorm';
import { CreateReactionDto } from '../dto/singin.dto/create_reaction.dto';
import { EmojiHelper } from '../helpers/emoji.helper';

@Injectable()
export class ReactionService {
  constructor(
    @InjectRepository(MessagesEntity)
    private messagesRepository: Repository<MessagesEntity>,
  ) {}

  async create(id: number, createReactionDto: CreateReactionDto, user: object): Promise<any> {

    if (createReactionDto.author != user["sub"]) {
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

    if (createReactionDto.author == message.user) {
      throw new NotFoundException('You cannot react to your own message');
    }

    message.reactions.push({
      reaction: EmojiHelper.asciiConvert(createReactionDto.reaction),
      author: createReactionDto.author,
    })
    return await this.messagesRepository.save(message);
  }
}
