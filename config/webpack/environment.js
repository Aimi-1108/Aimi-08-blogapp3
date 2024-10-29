
const { environment } = require('@rails/webpacker');

environment.config.merge({
    node: {
      __dirname: false,
      __filename: false,
      
    }
  });
  
module.exports = environment
