import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import MessagesEntity from '../entities/messages.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from '../dto/singin.dto/create_message.dto';
import { Messages } from '../interfaces/messages.interface';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessagesEntity)
    private messagesRepository: Repository<MessagesEntity>,
  ) {}

  async getAll() {
    const messages: Messages[] = await this.messagesRepository.find();
    return messages;
  }

  async getByUser(user: string) {
    const message = await this.messagesRepository.find({
      where: {
        user: user,
      },
    });

    if (!message) {
      throw new NotFoundException('Could not find the message');
    }
    return message;
  }

  async getById(id: number) {
    const message = await this.messagesRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!message) {
      throw new NotFoundException('Could not find the message');
    }

    return message;
  }

  async create(createMessageDto: CreateMessageDto, user: object): Promise<any> {
    let message: MessagesEntity;

    try {
      message = new MessagesEntity(createMessageDto);
      message.user = user['sub'];
      await this.messagesRepository.save(message);
    } catch (error) {
      throw error;
    }

    return message;
  }

  async delete(id: number, user: string) {
    const message = await this.messagesRepository.delete({
      id: id,
      user: user,
    });

    if (message.affected <= 0) {
      throw new NotFoundException('Could not find the message');
    }
    return { delete: true, status: 'OK' };
  }
}
