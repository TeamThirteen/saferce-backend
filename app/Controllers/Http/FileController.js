'use strict';

const Driver = use('Drive');
const File = use('App/Models/File');

class FileController {
  async store({ auth, request, response }) {
    const { user } = auth;
    await request.multipart
      .file('image', {}, async (file) => {
        try {
          const contentType = file.headers['content-type'];
          const acl = 'public-read';
          const key = `${(Math.random() * 100).toString(32)}-${file.clientName}`;

          const url = await Driver.put(key, file.stream, {
            ContentType: contentType,
            ACL: acl,
          });

          await File.create({
            name: file.clientName,
            key: key,
            url: url,
            content_type: contentType,
            user_id: user.id,
          });

          return response.json({
            url,
          });
        } catch (err) {
          return response.json({
            error: {
              message: 'Não foi possível enviar o arquivo',
              err_message: err.message,
            },
          });
        }
      })
      .process();
  }
}

module.exports = FileController;
