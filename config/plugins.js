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

  email: {
    config: {
      provider: "strapi-provider-email-resend",
    },
    providerOptions: {
      apiKey: env("RESEND_API_KEY"),
    },
    settings: {
      defaultFrom: "onboarding@resend.dev", // Стандартная почта для тестов Resend
      defaultReplyTo: "onboarding@resend.dev",
    },
  },
});
