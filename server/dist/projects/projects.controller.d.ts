import { ProjectsService } from "./projects.service";
import { CreateProjectsDto, TUpdateProjectsDto } from "./projects.dto";
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getAll(): Promise<{
        name: string;
        description: string;
        url: string;
        id: string;
        idInt: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    get(id: string): Promise<{
        name: string;
        description: string;
        url: string;
        id: string;
        idInt: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(dto: CreateProjectsDto): Promise<{
        name: string;
        description: string;
        url: string;
        id: string;
        idInt: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(dto: TUpdateProjectsDto, id: string): Promise<{
        name: string;
        description: string;
        url: string;
        id: string;
        idInt: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string;
        url: string;
        id: string;
        idInt: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
