import pino from 'pino';

export class Logger {
  private logger;
  constructor() {
    this.logger = pino(pino.transport({ target: 'pino/file', options: { destination: 'logger.log', append: false } }));
  }

  error(errorText: string) {
    this.logger.error(`ERROR!  ${errorText}`);
  }
  info(message: string) {
    this.logger.info(message);
  }
}
