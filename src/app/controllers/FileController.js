const path = require('path');

module.exports = {
  show(req, res) {
    const { file } = req.params;

    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file,
    );

    return res.sendFile(filePath);
  },
};
