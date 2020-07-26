import { IFolder } from '@ecocms/common';
import { Document } from 'mongoose';

export type IFolderRecord = IFolder & Document;
