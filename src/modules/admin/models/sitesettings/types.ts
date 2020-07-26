import { ISiteSettings } from '@ecocms/common';
import { Document } from 'mongoose';

export type ISiteSettingsRecord = ISiteSettings & Document;
