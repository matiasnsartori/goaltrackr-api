import { SetMetadata } from '@nestjs/common';
import { ACCESS_LEVEL } from 'src/constants';

export const AccessLevel = (level: number) => SetMetadata(ACCESS_LEVEL, level);
