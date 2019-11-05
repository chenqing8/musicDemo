/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-26 17:25:01
 * @LastEditors: Please set LastEditors
 */
module.exports = {
    baseUrl:'./',
    chainWebpack: config => {
        config.module
        .rule('scss')
        .oneOf('vue')
        .use('px2rem-loader')
        .loader('px2rem-loader')
        .before('postcss-loader') // this makes it work.
        .options({ remUnit: 34.6})
        .end()
    }
  }