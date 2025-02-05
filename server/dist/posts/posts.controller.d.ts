import { PostsService } from "./posts.service";
import { CreatePostsDto, TUpdatePostsDto } from "./posts.dto";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAll(): Promise<{
        name: string;
        description: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tag: import(".prisma/client").$Enums.PostTag;
        content: string;
    }[]>;
    get(id: string): Promise<{
        name: string;
        description: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tag: import(".prisma/client").$Enums.PostTag;
        content: string;
    }>;
    create(dto: CreatePostsDto): Promise<{
        name: string;
        description: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tag: import(".prisma/client").$Enums.PostTag;
        content: string;
    }>;
    update(dto: TUpdatePostsDto, id: string): Promise<{
        name: string;
        description: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tag: import(".prisma/client").$Enums.PostTag;
        content: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tag: import(".prisma/client").$Enums.PostTag;
        content: string;
    }>;
}
