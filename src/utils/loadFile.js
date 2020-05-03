import fs from 'fs';
import path from 'path';

export default filename => {
  const filepath = `${path.resolve('./')}/src/fixtures/${filename}`;
  return fs.readFileSync(filepath, 'utf-8');
};
