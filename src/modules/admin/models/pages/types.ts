import { IPage } from '@ecocms/common';
import { Document } from 'mongoose';

export type IPageRecord = IPage & Document;
