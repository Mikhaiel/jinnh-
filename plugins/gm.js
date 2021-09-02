const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const GM = "it sends good morning message"
const GN = "it sends good night message"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
Asena.addCommand({on: 'text', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "𝐠𝐨𝐨𝐝 𝐦𝐨𝐫𝐧𝐢𝐧𝐠";
    r_text[2] ="𝓰𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰";
    r_text[3] = "𝙶𝚘𝚘𝚍 𝚖𝚘𝚛𝚗𝚒𝚗𝚐";
    r_text[4] ="ɠσσԃ ɱσɾɳιɳɠ";
    r_text[5] ="𝘨𝘰𝘰𝘥 𝘮𝘰𝘳𝘯𝘪𝘯𝘨";
    r_text[6] ="𝑔ₒₒ𝓭 ₘₒᵣₙᵢₙ𝑔";
    r_text[7] ="ｇｏｏｄ ｍｏｒｎｉｎｇ";
  

    var i = Math.floor(8*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


Asena.addCommand({on: 'text', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "𝐠𝐨𝐨𝐝 𝐧𝐢𝐠𝐡𝐭";
        r_text[2] ="𝘨𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵";
        r_text[3] ="𝓰𝓸𝓸𝓭 𝓷𝓲𝓰𝓱𝓽";
        r_text[4] ="ɢᴏᴏᴅ ɴɪɢʜᴛ";
        r_text[5] ="𝚐𝚘𝚘𝚍 𝚗𝚒𝚐𝚑𝚝";

      
    
        var i = Math.floor(6*Math.random())
    
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'gm', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "𝐠𝐨𝐨𝐝 𝐦𝐨𝐫𝐧𝐢𝐧𝐠";
            r_text[2] ="𝓰𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰";
            r_text[3] = "𝙶𝚘𝚘𝚍 𝚖𝚘𝚛𝚗𝚒𝚗𝚐";
            r_text[4] ="ɠσσԃ ɱσɾɳιɳɠ";
            r_text[5] ="𝘨𝘰𝘰𝘥 𝘮𝘰𝘳𝘯𝘪𝘯𝘨";
            r_text[6] ="𝑔ₒₒ𝓭 ₘₒᵣₙᵢₙ𝑔";
            r_text[7] ="ｇｏｏｄ ｍｏｒｎｉｎｇ";
          
        
            var i = Math.floor(8*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        asena.addCommand({pattern: 'gn', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {
        
                var r_text = new Array ();
            
                r_text[1] = "𝐠𝐨𝐨𝐝 𝐧𝐢𝐠𝐡𝐭";
                r_text[2] ="𝘨𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵";
                r_text[3] ="𝓰𝓸𝓸𝓭 𝓷𝓲𝓰𝓱𝓽";
                r_text[4] ="ɢᴏᴏᴅ ɴɪɢʜᴛ";
                r_text[5] ="𝚐𝚘𝚘𝚍 𝚗𝚒𝚐𝚑𝚝";
        
              
            
                var i = Math.floor(6*Math.random())
            
                await message.client.sendMessage(
                    message.jid,(r_text[i]), MessageType.text);
            
                }));    
                asena.addCommand({pattern: 'gm', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
        
                    var r_text = new Array ();
                
                    r_text[1] = "𝐠𝐨𝐨𝐝 𝐦𝐨𝐫𝐧𝐢𝐧𝐠";
                    r_text[2] ="𝓰𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰";
                    r_text[3] = "𝙶𝚘𝚘𝚍 𝚖𝚘𝚛𝚗𝚒𝚗𝚐";
                    r_text[4] ="ɠσσԃ ɱσɾɳιɳɠ";
                    r_text[5] ="𝘨𝘰𝘰𝘥 𝘮𝘰𝘳𝘯𝘪𝘯𝘨";
                    r_text[6] ="𝑔ₒₒ𝓭 ₘₒᵣₙᵢₙ𝑔";
                    r_text[7] ="ｇｏｏｄ ｍｏｒｎｉｎｇ";
                  
                
                    var i = Math.floor(8*Math.random())
                
                    await message.client.sendMessage(
                        message.jid,(r_text[i]), MessageType.text);
                
                    }));
                
                
                asena.addCommand({pattern: 'gn', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
                
                        var r_text = new Array ();
                    
                        r_text[1] = "𝐠𝐨𝐨𝐝 𝐧𝐢𝐠𝐡𝐭";
                        r_text[2] ="𝘨𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵";
                        r_text[3] ="𝓰𝓸𝓸𝓭 𝓷𝓲𝓰𝓱𝓽";
                        r_text[4] ="ɢᴏᴏᴅ ɴɪɢʜᴛ";
                        r_text[5] ="𝚐𝚘𝚘𝚍 𝚗𝚒𝚐𝚑𝚝";
                
                      
                    
                        var i = Math.floor(6*Math.random())
                    
                        await message.client.sendMessage(
                            message.jid,(r_text[i]), MessageType.text);
                    
                        }));
}
