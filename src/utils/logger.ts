import pino from 'pino';

export const logger = pino({
  level: 'info',
  transport: {
    targets: [
      {
        // ✅ Pretty console logs for local dev
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname'
        },
        level: 'info'
      },
      {
        // ✅ Raw JSON logs written to file for CI/CD
        target: 'pino/file',
        options: {
          destination: './logs/automation.log', // create logs folder
          mkdir: true
        },
        level: 'info'
      }
    ]
  }
});
