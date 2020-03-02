import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Comment } from './comment.entity';
import { CommentsService } from './comments.service';

@Crud({
    model: {
        type: Comment,
    },
})
@Controller('comments')
export class CommentsController {
    constructor(public service: CommentsService) { }
}
