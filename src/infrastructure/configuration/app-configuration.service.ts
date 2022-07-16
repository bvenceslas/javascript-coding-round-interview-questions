import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigurationService {
  // create variables
  private readonly _databaseUrl: string;
  private readonly _port: string;

  // getters
  get databaseUrl(): string {
    return this._databaseUrl;
  }

  get port(): string {
    return this._port;
  }

  // constructor
  constructor(private readonly _configService: ConfigService) {
    this._port = this._getPortFromEnvFile();
    this._databaseUrl = this._getDatabaseFromEnvFile();
  }
  private _getPortFromEnvFile(): string {
    const port = this._configService.get<string>('PORT');
    if (!port) {
      throw new Error('No Port found in the .nv file');
    }

    return port;
  }

  private _getDatabaseFromEnvFile(): string {
    const databaseUrl = this._configService.get<string>('MONGO_URI');
    if (!databaseUrl) {
      throw new Error('No Database Url found in the .nv file');
    }

    return databaseUrl;
  }
}
