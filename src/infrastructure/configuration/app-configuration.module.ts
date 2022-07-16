import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigurationService } from './app-configuration.service';

@Module({
  imports: [ConfigModule.forRoot()],
  exports: [AppConfigurationService],
  providers: [AppConfigurationService],
})
export default class AppConfigurationModule {}
