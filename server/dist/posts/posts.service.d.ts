import { Post } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { CreatePostsDto, TUpdatePostsDto } from "./posts.dto";
export declare class PostsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Post[]>;
    get(id: string): Promise<Post>;
    create(dto: CreatePostsDto): Promise<Post>;
    update(dto: TUpdatePostsDto, id: string): Promise<Post>;
    remove(id: string): Promise<Post>;
}
