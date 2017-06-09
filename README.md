# robot-killer
Basic example implementation for Google invisible recaptcha.  CORS needs to be enabled in your browser for this example to work.  
  
- The invisible recaptcha uses a risk analysis engine to determine the likelihood of a user being a robot.  
- If it decides there is a potential bot accessing the page the user will be forced to do a normal picture or audio captcha.  
- There are three different security settings under the advanced settings on the page above, this controls how often a user is actually prompted to solve a captcha.  
- The recaptcha is invoked when the user clicks the submit button, but this can also be done through a javascript API call.  
- Normally recaptcha has limited support for users without javascript enabled, invisible recaptcha has no support for this.  
- Keys can be generated and security level changed here:  
- https://www.google.com/recaptcha/admin . 
- Official Documentation:     https://developers.google.com/recaptcha/docs/  
