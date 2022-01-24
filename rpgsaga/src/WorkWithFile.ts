import fs from 'fs';

import { Generator } from './Generator';
import { Hero } from './Hero';
import { Logger } from './Logger';

export class WorkWithFile {
  static outputFile(path: string, heroList: Hero[], logger: Logger) {
    const list = JSON.stringify({ heroList }, null, 2);
    fs.writeFile(path, list, err => {
      if (err) {
        logger.error(err.message);
      }
    });
  }
  static readFromFile(path: string, logger: Logger) {
    const readFromFile = JSON.parse(fs.readFileSync(path, 'utf-8'));
    return Generator.makeList(readFromFile, logger);
  }
}
