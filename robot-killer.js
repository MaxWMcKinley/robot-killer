// This is a very basic example of validating the invisible recaptcha
// CORS has to be enabled for this script to work locally
function callback() {
    console.log("In callback function");

    var secret = "6LfXsyQUAAAAABb5hGNWFeOIJrEbKvSGwUjHV_4c";
    console.log("Secret: " + secret);

    var response = grecaptcha.getResponse();

    $.ajax({
      type: "POST",
      url: "https://www.google.com/recaptcha/api/siteverify",
      data: {secret: secret, response: response},
      success: function(result) {
            console.log("Success: " + result.success);
            if(result.success)
                document.getElementById("response").innerHTML = "Welcome Human.";
            else {
                document.getElementById("response").innerHTML = "Die, Robot!";
                console.log("Error(s): " + result.error-codes);
            }
            grecaptcha.reset();
      }
    });
}