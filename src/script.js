$(document).ready(() => {

  $(".nav__menu-btn").on("click", function () {
    $("#menu").toggleClass("mobile");
    $("#menu").toggleClass("desktop");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times");
  });

  $("#newslatter-form").submit(function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const emailOptions = {
      Host: "smtp.elasticemail.com",
      Username: "jackson.f205@gmail.com",
      Password: "9DDE1D718AD391B6DB61CE7AA75CB9BF8E9A",
      To: "contato@studion.com",
      From: email,
      Subject: "Por favor me adicione na newsletter",
      Body: `
        Olá,
        
        Eu gostaria de ser adicionado na newsletter do site.
        Meu email é ${email}.
        
        Obrigado!
      `,
    };
    try {
      Email.send(emailOptions)
        .then(() => {
          alert("Email enviado com sucesso!");
          location.replace(location.pathname);
        });
    } catch (error) {
      console.log(error.message);
    }
  });
  
});
