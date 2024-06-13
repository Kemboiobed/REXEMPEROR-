const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254740873466" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254740873466";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_48_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicEVOQW1LUXk4QnVMQzdXQ3ZTTXEwSndFUGxOSWdqTUlFSHZOYlFuUTNlUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTkwNDIyOTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUyMTUxMjg0MDFBMkYwQzI1OEJENTJCNThGNkM4MjRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODIyODg4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5OTA0MjI5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkMzMTk3RUM4RDI2MjY1N0UwRUQ0QTNBNTZFRTlBMEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MjI4ODg0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZVVzRPSS1NUkNDZUZPejlJS0V0amdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjZmMjcyMmMtMzQ4Yi00M2FkLWJmYzYtMmE4YjIyNzY0Y2MwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDIzLFxuICAgICAgOTYsXG4gICAgICAyMTcsXG4gICAgICAxMjAsXG4gICAgICA0NixcbiAgICAgIDIzMixcbiAgICAgIDEzNCxcbiAgICAgIDE2NyxcbiAgICAgIDEyMCxcbiAgICAgIDEzMSxcbiAgICAgIDE4MixcbiAgICAgIDE3OCxcbiAgICAgIDIyOCxcbiAgICAgIDE2NCxcbiAgICAgIDIxOSxcbiAgICAgIDE5NCxcbiAgICAgIDc5LFxuICAgICAgMTM1LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDIzMyxcbiAgICAgIDE5MSxcbiAgICAgIDI1MyxcbiAgICAgIDkyLFxuICAgICAgMTE2LFxuICAgICAgOTMsXG4gICAgICAyNDEsXG4gICAgICAxMzEsXG4gICAgICAxNDgsXG4gICAgICAxNTUsXG4gICAgICAzMCxcbiAgICAgIDMwLFxuICAgICAgMTIwLFxuICAgICAgODMsXG4gICAgICAyNDYsXG4gICAgICAyMTIsXG4gICAgICAxMDYsXG4gICAgICAxNTAsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUYxMjk1NEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5OTA0MjI5Mjo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY5OTUxOTY1MzYwMjMzOjQwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfh7Qg8J+HpyDwn4emIPCfh6kg8J+HriDwn4emIPCfh61cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLN0xpTzRIRUkydnFMTUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk44R2J2YU1PbUtlTUViRWFZaTJRZFFKMXNSNjEyRnRiRnpyTVNrbUUwVkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieGFuMitxeCtqamcxaVo4VVVCaUd3R2lhZnkrcTBLT3FxVExrZjhDNi9iMUUzbGY2US9qbUNkbm95WHlKR2o5cC8yakY1S3E3M1lxQmdiVVdjZHIyRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSmFLWmFXZElmcXloV3JSSkVvL2REM2pSN2VvTk9mdWZnWFZIUm03REZYcVRFYTNNT3RMUXBXVnRFeVQ1V0hpd29sWWlTek9sbjY1NnJueUtjM0puRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk5MDQyMjkyOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgyMjg4ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKejBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp6MC5qc29uIjogIntcImtleURhdGFcIjpcImtEVUthZzVvWnlnUzdONlU1RWdVSUpJa1k5RUI0VXpQNUVSTkpzUEw1TEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwOTg3NTYyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1MzI2NzMzOTI3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
