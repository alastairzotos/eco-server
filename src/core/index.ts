import { IUserRecord } from '../modules/auth/models/users/types';

declare global {
    namespace Express {
        interface Request {
            loggedInUser: IUserRecord;
        }
    }
}

export * from './app';
export * from './error';
export * from './model';
export * from './module';
export * from './modules';
export * from './routes';
export * from './service';
