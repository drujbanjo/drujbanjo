declare enum PostTagEnum {
    html = "html",
    css = "css",
    js = "js",
    react = "react",
    next = "next",
    node = "node",
    nest = "nest",
    prisma = "prisma",
    git = "git"
}
export declare class CreatePostsDto {
    tag: PostTagEnum;
    name: string;
    description: string;
    content: string;
}
export type TUpdatePostsDto = Partial<CreatePostsDto>;
export {};
