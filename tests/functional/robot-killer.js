define(function (require) {
	var registerSuite = require('intern!object');
	var assert = require('intern/chai!assert');

    registerSuite({
            name: 'robot-killer',

            'humanity checker': function () {
               for(i=0; i<100; i++) {
                    return this.remote
                        .get(require.toUrl('robot-killer.html'))
                        .setFindTimeout(5000)
                        .findByTagName('button')
                            .click()
                            .end()
                        .findByCssSelector("iframe[title='recaptcha challenge']")
                        .then(function (iframe) {
                            assert(iframe.isDisplayed(), 'iFrame should be displayed after bot clicks on submit');
                        });
                }
            }
        });
	});