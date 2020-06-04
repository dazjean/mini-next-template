/* * @Author: zhang dajia * @Date: 2018-11-05 14:16:55
 * @Last Modified by: zhang dajia
 * @Last Modified time: 2020-06-04 19:39:47
 * @Last  description: undefined
 */
const Koa = require('koa');
const path = require('path');
const miniNext = require('mini-next');
const koaStatic = require('koa-static');

const app = new Koa();
app.use(koaStatic(path.resolve(__dirname, './../public')));

new miniNext(app);

app.listen(8001);

// eslint-disable-next-line no-console
console.log('app started at port 8001...');
