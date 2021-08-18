/* Copyright (C) 2020 afnanplk.
*/

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

 var jinn_desc = ''
 var BGM_ONE = ''
 var BGM_TWO = ''
 
  if (config.LANG == 'EN') {
    
    jinn_desc = 'change reply message BGM mode'
    BGM_ONE = 'BGM 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝟭𝘀𝘁 𝐦𝐨𝐝𝐞'
    BGM_TWO = 'BGM 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝟐𝐧𝐝 𝐦𝐨𝐝𝐞'
    }

    if (config.LANG == 'ML') {
      
      jinn_desc = 'മറുപടി bgm മോഡ് മാറ്റാൻ'
      BGM_ONE = 'BGM തരം ഒന്നാം മോഡിലേക്ക് മാറ്റി'
      BGM_TWO = 'BGM തരം രണ്ടാം മോഡിലേക്ക് മാറ്റി'
    }

 Asena.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: jinn_desc, usage: '.bgm one / two' }, (async (message, match) => {
        if (match[1] == 'two') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'two'
                    } 
                });
                await message.sendMessage(BGM_TWO)
        } else if (match[1] == 'one') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'one'
                    } 
                });
                await message.sendMessage(BGM_ONE)
        }
    }));
