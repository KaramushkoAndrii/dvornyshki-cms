module.exports = ({ env }) => ({
  // Твой существующий плагин i18n
  i18n: {
    enabled: true,
    config: {
      defaultLocale: "uk",
      locales: ["uk", "en"],
    },
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
