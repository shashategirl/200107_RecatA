// const { override, fixBabelImports } = require('customize-cra');
// module.exports = override(
//     //针对antd 实现按需打包：按需打包，就是根据import来打包
//     fixBabelImports('import', {//使用 babel-plugin-import 插件来操作
//             libraryName: 'antd',
//             libraryDirectory: 'es',
//             style: 'css',//自动打包相关的样式
// }),
// );


const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
       style: true,
}),
 //使用less-load对源码中的less的变量进行重新指定  改的是less文件
 addLessLoader({
       javascriptEnabled: true,
       modifyVars: { '@primary-color': '#00AD19' },
 }),
);