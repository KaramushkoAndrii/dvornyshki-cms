module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "karamushko1997@gmail.com",
        from: "onboarding@resend.dev",
        subject: `Новая заявка: ${result.name} ${result.surname}`,
        text: `
          Имя: ${result.name}
          Фамилия: ${result.surname}
          Телефон: ${result.tel}
          Email: ${result.email}
          Сообщение: ${result.message}
        `,
        html: `
          <h3>Новая заявка с сайта! 🐶</h3>
          <p><b>Имя:</b> ${result.name}</p>
          <p><b>Фамилия:</b> ${result.surname}</p>
          <p><b>Телефон:</b> <a href="tel:${result.tel}">${result.tel}</a></p>
          <p><b>Email:</b> ${result.email}</p>
          <p><b>Сообщение:</b><br/> ${result.message}</p>
        `,
      });
    } catch (err) {
      console.error("Failed to send email:", err);
      console.error(JSON.stringify(err, null, 2));
    }
  },
};
