/*
* @Description: Logger 日志辅助类
* @Author: duqings duqings@foxmail.com
* @Date: 2024-06-26 22:44:13
 * @LastEditors: duqings duqings@foxmail.com
 * @LastEditTime: 2024-07-01 11:19:24
*/

'use strict';

/* 
  日志辅助类
  methodName: 通常是所在方法名
*/

export default  class Logger {
  constructor(methodName) {
    this.methodName = methodName;
  }


  /**
   * @description: 打印
   * @param {string} type 内置自定义日志类型
   * @param {string} color 内置自定义类型对应的颜色
   * @param {array} messages 
   * @return {*}
   */
  _log(type, color, ...messages) {
    const timestamp = new Date().toLocaleString();
    const gap = 10;

    let messageFormat = messages.map(m => {
      if (typeof m === 'object') {
        try {
          return JSON.stringify(m);
        } catch (error) {
          return 'Cannot stringify object';
        }
      }
      return String(m);
    }).join(' ');

    console.log(`%c${timestamp} %c「${this.methodName}」 %c${type} %c${messageFormat}`, 
      `color: none;`,
      `color: #305d78;`, 
      `color: teal;`, 
      `margin-right: ${gap}px; padding: 4px 0 4px 8px; border-radius: 4px; color: #fff; background-color: ${color};`,
      `color: ${color};`
    );
  }

  info(...messages) {
    this._log('INFO', '#6a8759', ...messages);
  }

  log(...messages) {
    this._log('LOG', '#305d78', ...messages);
  }

  warn(...messages) {
    this._log('WARN', '#bbb529', ...messages);
  }

  error(...messages) {
    this._log('ERROR', '#cf5b56', ...messages);
  }
}
