var sweetcaptcha = new require('sweetcaptcha')(1000, 'appkey', 'appsecret');

// Get your captcha

function getCaptcha(callback) {

  sweetcaptcha.api('get_html', callback); // callback should be function(err, html) {...}

}


// Validate using sckey and scvalue, hidden inputs from previous HTML

function validateCaptcha(captchaKey, captchaValue, callback) {

  // callback = function(err, isValid) {...}
  sweetcaptcha.api('check', {sckey: captchaKey, scvalue: captchaValue}, function(err, response){
    if (err) return callback(err);

    if (response === 'true') {
      // valid captcha
      return callback(null, true); 
    }

    // invalid captcha
    callback(null, false);

  });
  
}




