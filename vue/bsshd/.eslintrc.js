module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // '@vue/standard',
    // 'src/'
  ],
  rules: {
    // 'indent': [0, 2],
    // // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // // allow async-await
    // 'generator-star-spacing': 0,
    // //no whitespace
    // 'space-before-function-paren': ['error', {
    //   'anonymous': 'never',
    //   'named': 'never',
    //   'asyncArrow': 'always'
    // }],
    // // 多行注释允许无空格
    // 'spaced-comment': ['error', 'always', {'exceptions': ['*']}],
    // // 禁止使用alert confirm prompt
    // 'no-alert': process.env.NODE_ENV === 'production' ? 1 : 0,
    // // 使用三元操作符
    // 'no-ternary': 0,
    // //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    // 'no-unneeded-ternary': 0,
    // // 嵌套块深度
    // 'max-depth': [0, 3],
    // // 循环复杂度
    // 'complexity': [0, 10],
    // // allow async-await
    // 'generator-star-spacing': 'off',
    // // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off',
    "vue/no-unused-components": "off", // 当存在定义而未使用的组件时，关闭报错
      "no-unused-vars":"off" // 当存在定义而未使用的变量时，关闭报错
  },
  parserOptions: {
    // parser: 'babel-eslint'
  },
  // 全局变量
  globals: {
    '$': true,
    'echarts': true,
    'vm': true
  }
}
