declare enum PostTagEnum {
    HTML = "HTML",
    CSS = "CSS",
    JS = "JS",
    REACTJS = "REACTJS",
    NEXTJS = "NEXTJS",
    NODEJS = "NODEJS",
    NESTJS = "NESTJS",
    PRISMA = "PRISMA",
    GIT = "GIT"
}
export declare class CreatePostsDto {
    tag: PostTagEnum;
    name: string;
    description: string;
    content: string;
}
export type TUpdatePostsDto = Partial<CreatePostsDto>;
export {};
