import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JiraController } from './atlassian/jira/jira.controller';
import { WorkManagementController } from './mondaydotcom/work-management/work-management.controller';
import atlassianJiraConfig from './config/atlassian/jira';
import workManagementMondayDotComConfig from './config/mondaydotcom/work-management';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load:[atlassianJiraConfig, workManagementMondayDotComConfig],
  })],
  controllers: [AppController, JiraController, WorkManagementController],
  providers: [AppService],
})
export class AppModule {}
