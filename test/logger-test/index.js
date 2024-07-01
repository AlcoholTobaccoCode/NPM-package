/*
 * @Description: 
 * @Author: duqings duqings@foxmail.com
 * @Date: 2024-07-01 11:24:48
 * @LastEditors: duqings duqings@foxmail.com
 * @LastEditTime: 2024-07-01 11:28:48
 */
const Logger = require('@duqingshan-worker');

const logger = new Logger('logger-test');

logger.info('Proxy without impl failing onBind()');

logger.warn('This is a warning message');

logger.error('This is an error message');

logger.log('This is a log message');

logger.log([1, 2, 3, 4, 5]);

logger.log({ name: 'duqings' });
