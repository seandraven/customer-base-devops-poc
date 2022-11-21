import { pino } from 'pino'
import { appConfig } from '../config/app.config';

export const logger = pino({
    level: process.env.PINO_LOG_LEVEL || 'info',
})

export class LogData {

    component: string = appConfig.name;
    transactionId: string;
    operation: string;
    logData: object;
    
    constructor(operation: string, logData?: object) {
        this.transactionId = global.asyncLocalStorage?.getStore()?.transactionId || '';
        this.operation = operation;
        this.logData = logData;
    }

}
