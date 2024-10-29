const { environment } = require('@rails/webpacker');

// 既存のenvironment設定にnodeオプションをマージ
environment.config.merge({
  node: {
    __dirname: false,
    __filename: false,
    global: true, // globalプロパティを追加
  }
});

module.exports = environment;
