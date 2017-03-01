/**
 * fis3 运行必须在NODE.JS里 本项目依赖如下插件
 *
 * npm install -g fis-parser-babel-5.x
 * npm install -g fis3-hook-node_modules
 * npm install -g fis3-hook-commonjs
 * npm install -g fis3-postpackager-loader
 * npm install -g node-sass
 *
 * 本项目使用 tmod.js 预编译模版
 * npm install -g tmodjs
 *
 * 本项目使用 react以及组件,已经安装在项目目录node_modules
 * 如需重新安装
 * npm install react
 * npm install react-dom
 * npm install react-router
 *
 *
 * 使用express模拟API接口 已经安装在项目目录node
 * 如需重新安装
 * npm install -g express-generator
 * npm install -g express
 * express -e node 建立node目录
 *
 * 启动express
 * cd node
 * supervisor bin/www
 * 运行 supervisor 必须要安装该插件
 * npm install -g supervisor
 */

fis.hook('commonjs');

fis.match('/js/**.{js,jsx}', {
    rExt: '.js', // 产出后缀为 js
    parser: fis.plugin('babel-5.x', {
        sourceMap: true // 产出源码表，方便调试。
    })
});

fis.match('/css/**.scss', {
    parser: fis.plugin('node-sass'),
    rExt: '.css'
});//编译Sass


fis.unhook('components'); // fis3 中预设的是 fis-components，这里不需要，所以先关了。
fis.hook('node_modules'); // 使用 fis3-hook-node_modules 插件。


fis.match('/js/{actions,components,containers,reducers}/**.js', {
    isMod: true
});//模块化


fis.match('/node_modules/**.{js,jsx}', {
    isMod: true
});//模块化




fis.match('{/js/lib/{mod}.js,/node_modules/**.js}', {
    optimizer: fis.plugin('uglify-js'),
    packTo: '/js/pkg/lib.js'
});//打包react组件以及JQUERY,MOD.JS

fis.match('/js/{router.js}', {
    packTo: '/static/css/pkg/router.js'
});//路由文件打包

fis.match('/css/**.{css,scss}', {
    packTo: '/static/css/pkg/lib.css'
});//css文件打包

fis.match('/js/**.{js,jsx}',{
    optimizer: fis.plugin('uglify-js')
});//开启压缩

fis.match('/css/**.{css,scss}', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('/images/**.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

fis.match('**.{js,jsx,css,scss}', {
    useHash: true
});//开启指纹戳

fis.match('::package', {
    postpackager: fis.plugin('loader', {
        useInlineMap: true
    })
});//替换资源

fis.set('project.ignore', [
    'fis-conf.js',
    'release**/**',
    'node**/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    'package.json'
]);