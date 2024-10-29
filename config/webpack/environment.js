const { environment } = require('@rails/webpacker')
const { environment } = require('@rails/webpacker');

// nodeオプションを追加
environment.config.merge({
  node: {
    __dirname: false,
    __filename: false,
  }
});
module.exports = environment
