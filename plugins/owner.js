/* Copyright (C) 2021 AFNAN PALLIKKEL

Re-CODDED BY MIKHAIEL

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        if (Config.OWNRN == 'default') {
            await message.client.sendMessage(message.jid,'Jimbrootan created by *Mikhaiel*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNRN + '\n\n---------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.OWNRN == 'default') {
            await message.client.sendMessage(message.jid,'Jimbrootan created by *Mikhaiel*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNRN + '\n\n--------------------', MessageType.text);
        }
    }));
}
