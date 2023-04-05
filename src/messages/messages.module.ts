import { Module } from '@nestjs/common';
import { MessagesService } from './services/messages.service';
import { MessagesController } from './messages.controller';
import { ReactionController } from './reaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import MessagesEntity from './entities/messages.entity';
import { ReactionService } from './services/reaction.service';
import { CommentService } from './services/comment.service';
import { CommentController } from './comment.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([MessagesEntity]),
  ],
  providers: [MessagesService, ReactionService, CommentService],
  controllers: [MessagesController, ReactionController, CommentController],
  exports: [MessagesService, ReactionService, CommentService],
})
export class MessagesModule {}
