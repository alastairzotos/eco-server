import { IUser } from '@ecocms/common';
import { Document } from 'mongoose';

export type IUserRecord = IUser & Document;
