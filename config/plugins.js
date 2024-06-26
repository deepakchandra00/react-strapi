module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('deepak-chandra'),
        api_key: env('926622215484332'),
        api_secret: env('GvJtwzaUPYEnwsr0H_j8PU2l_9s'),
      },
    },
    // ...
  });