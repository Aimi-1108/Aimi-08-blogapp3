const { environment } = require('@rails/webpacker');

environment.config.merge({
  node: {
    __dirname: false,
    __filename: false,
    global: true,
  }
});

module.exports = {
  mode: 'development', // または 'production'
  entry: './src/index.js', // 正しいエントリポイントを指定
  // 他の設定...
};
  
  