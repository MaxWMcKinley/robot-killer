# robot-killer
Basic example implementation for Google invisible recaptcha.  CORS needs to be enabled in your browser for this example to work.  Or you can also test it with the included Inter (Selenium) tests.  These tests ensure that the recaptcha box pops up everytime a bot tries to press the submit button.  They do not test for cases where a bot attempts to solve the recaptcha.
  
- The invisible recaptcha uses a risk analysis engine to determine the likelihood of a user being a robot.  
- If it decides there is a potential bot accessing the page the user will be forced to do a normal picture or audio captcha.  
- There are three different security settings under the advanced settings on the admin page, this controls how often a user is actually prompted to solve a captcha based on how much risk is determined to be associated with that user.  
- The recaptcha is invoked when the user clicks the submit button, but this can also be done through a javascript API call.  
- Recaptcha v2 has limited support for users without javascript enabled, invisible recaptcha has no support for this.  
- Keys can be generated and security level changed here:  
- https://www.google.com/recaptcha/admin . 
- Official Documentation:     https://developers.google.com/recaptcha/docs/  
