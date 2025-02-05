import { Module } from "@nestjs/common"
import { PrismaService } from "./prisma.service"
import { ProjectsModule } from "./projects/projects.module"
import { PostsModule } from "./posts/posts.module"

@Module({
	imports: [ProjectsModule, PostsModule],
	controllers: [],
	providers: [PrismaService]
})
export class AppModule {}
