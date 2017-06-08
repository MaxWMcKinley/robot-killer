function callback() {
    console.log("In callback function");

    var secret = "6LegrCQUAAAAAGGozP6xPliS7KDSBWzfkTAFYiaS";
    console.log("Secret: " + secret);

    $.ajax({
      type: "POST",
      url: "https://www.google.com/recaptcha/api/siteverify",
      data: {secret: secret},
      success: function(response) {
            console.log("Response: " + response);
      }
    });
}