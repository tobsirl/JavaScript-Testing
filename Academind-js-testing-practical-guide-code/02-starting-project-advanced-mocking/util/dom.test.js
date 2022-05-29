import fs from 'fs';
import path from 'path';

import { it } from 'vitest';

import { showError } from './dom';

it('should first test', () => {
  showError('test');
});
