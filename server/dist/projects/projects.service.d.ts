import { Project } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { CreateProjectsDto, TUpdateProjectsDto } from "./projects.dto";
export declare class ProjectsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Project[]>;
    get(id: string): Promise<Project>;
    create(dto: CreateProjectsDto): Promise<Project>;
    update(dto: TUpdateProjectsDto, id: string): Promise<Project>;
    remove(id: string): Promise<Project>;
}
