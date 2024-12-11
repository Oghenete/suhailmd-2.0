const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_40_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmpmRHV3aS9jVTJGRzFWbFE4anlGVUNGRldqQ1FVNDQrQzdiQ0dOY2NlST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLTRNRDJkc25TeGVwMEZtX0ZXcmdtd1wiLFxuICBcInBob25lSWRcIjogXCJlZTA4Y2M5YS1jZjViLTQ5MDItYWMzZC1iMGU2MGQxMDcxN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDQ1LFxuICAgICAgMTA0LFxuICAgICAgNCxcbiAgICAgIDE5OCxcbiAgICAgIDE4MCxcbiAgICAgIDE1OCxcbiAgICAgIDE1NSxcbiAgICAgIDMyLFxuICAgICAgMTYzLFxuICAgICAgMTIxLFxuICAgICAgMTMyLFxuICAgICAgMTUzLFxuICAgICAgMTkyLFxuICAgICAgMjI5LFxuICAgICAgNjgsXG4gICAgICA0NCxcbiAgICAgIDE1MSxcbiAgICAgIDczLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAyMjUsXG4gICAgICAxNDUsXG4gICAgICAxMDUsXG4gICAgICA1OSxcbiAgICAgIDE2OCxcbiAgICAgIDIzNCxcbiAgICAgIDE4MixcbiAgICAgIDMzLFxuICAgICAgNDQsXG4gICAgICAxOSxcbiAgICAgIDk2LFxuICAgICAgMjUyLFxuICAgICAgMTk5LFxuICAgICAgOCxcbiAgICAgIDI0NixcbiAgICAgIDE5MixcbiAgICAgIDg1LFxuICAgICAgMTIwLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpUNEtDMjI0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEwNDUyNTQ2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFbmR5ZmxleFwiLFxuICAgIFwibGlkXCI6IFwiMTk0MTE1ODI4NTA2ODI2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFRCdCtFRkVPM0UzN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6NldiUllFMWtGWEFjVExDMkJlN1B3Wmt0MVplcHZReVJsYWVFQnBKaTJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5YRHVqcHZ0dU1sUnVSS2pVd0RkU1prQTZEazVuNE85MlN4ZWliWWNkRDJKbzZEOEFXQmw5V2YzR0w4MDRKYlFmRUZsSlNqMlZ2U2xwNll0anh3ZURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk8ydlhkaFEwVnFuYVJSTFhrU3dZeWQ4bnhMTlFCQXBNUldzMURDNEVEOWdLVFZOQmxRb21uaFdjS0hoWkJhVEdxOGcwTVVSWHQzZFE3UEo3MXZGMkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTA0NTI1NDY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODEyODQ5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMtSUHAIL_06_40_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmpmRHV3aS9jVTJGRzFWbFE4anlGVUNGRldqQ1FVNDQrQzdiQ0dOY2NlST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLTRNRDJkc25TeGVwMEZtX0ZXcmdtd1wiLFxuICBcInBob25lSWRcIjogXCJlZTA4Y2M5YS1jZjViLTQ5MDItYWMzZC1iMGU2MGQxMDcxN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDQ1LFxuICAgICAgMTA0LFxuICAgICAgNCxcbiAgICAgIDE5OCxcbiAgICAgIDE4MCxcbiAgICAgIDE1OCxcbiAgICAgIDE1NSxcbiAgICAgIDMyLFxuICAgICAgMTYzLFxuICAgICAgMTIxLFxuICAgICAgMTMyLFxuICAgICAgMTUzLFxuICAgICAgMTkyLFxuICAgICAgMjI5LFxuICAgICAgNjgsXG4gICAgICA0NCxcbiAgICAgIDE1MSxcbiAgICAgIDczLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAyMjUsXG4gICAgICAxNDUsXG4gICAgICAxMDUsXG4gICAgICA1OSxcbiAgICAgIDE2OCxcbiAgICAgIDIzNCxcbiAgICAgIDE4MixcbiAgICAgIDMzLFxuICAgICAgNDQsXG4gICAgICAxOSxcbiAgICAgIDk2LFxuICAgICAgMjUyLFxuICAgICAgMTk5LFxuICAgICAgOCxcbiAgICAgIDI0NixcbiAgICAgIDE5MixcbiAgICAgIDg1LFxuICAgICAgMTIwLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpUNEtDMjI0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEwNDUyNTQ2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFbmR5ZmxleFwiLFxuICAgIFwibGlkXCI6IFwiMTk0MTE1ODI4NTA2ODI2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFRCdCtFRkVPM0UzN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6NldiUllFMWtGWEFjVExDMkJlN1B3Wmt0MVplcHZReVJsYWVFQnBKaTJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5YRHVqcHZ0dU1sUnVSS2pVd0RkU1prQTZEazVuNE85MlN4ZWliWWNkRDJKbzZEOEFXQmw5V2YzR0w4MDRKYlFmRUZsSlNqMlZ2U2xwNll0anh3ZURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk8ydlhkaFEwVnFuYVJSTFhrU3dZeWQ4bnhMTlFCQXBNUldzMURDNEVEOWdLVFZOQmxRb21uaFdjS0hoWkJhVEdxOGcwTVVSWHQzZFE3UEo3MXZGMkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTA0NTI1NDY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODEyODQ5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==a2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
