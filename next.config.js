/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less');


const nextConfig = {
  reactStrictMode: true,
   // custom styles file for antd
   lessVarsFilePath: './styles/variables.less',
   lessVarsFilePathAppendToEndOfContent: false,
   cssLoaderOptions: {},
   babel: {
    presets: [
      'next/babel',
      '@babel/preset-env',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ],
  },
 
   webpack(config) {
     return config;
   },
}

module.exports = withAntdLess(nextConfig);
