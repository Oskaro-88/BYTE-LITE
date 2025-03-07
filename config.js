const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "ALPHA;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nFOSBXtWqqFgQV76gM6tZ5iBAk3AlBYKb871s4M3XmYc/Z2bdUIJ1Od3/9BtIMl2iBWjB6AznBN0hRt6RtjsAIaJXvIwJ6wIMUghGodIqqiTtxhtnGEGuecdbOWV8y44XrL6e+EA5jR+RJwNjWM7j3QF5dYuz+AXCKdLIQlkG0nlBctaXkN2cUpwIzo8FZWOJAkHcv2g7XfPkM7h0ixASnVyMPUIIIjBeo3UJMvke/1k3lGAvh2i/6gX3iDnMuzvfNIlFjavEnjOG2TLhF7Cb19+gHybKKfJdPMobNV9HUPsiyQdL08nokJ7Wm3Ho704zCZzX7nX6JrynyTA+lFNP227pbJm9PphNuMn8tYFtvjo6KDqutnVbrMXNTF2Gq2cc6MldT83vEW5PdbO312a8mGS+fN3yjcZdqlRsLaTbVZ1PdZc3b1EbrhvtKfEs+sxL9H90rc4plQfJdX26hIaHLQaABYea3ORF2bCHPQq9qlE0gOqfv0Z8Nk70+YNfbWH4xl2MhmLP2RqWFtnVzVdeGh9PKTy/hkhlHv+hDWpE/sWRCfqj4ry9zNNjXuqZorXDhi/FmoTBznb2Gh4wXlXklB0w5E+fjG6NsNmM/NNi1RyQ6Lobc7JJorwfxql2s4GhBEipYfX68KEKt6YFR/94DBF1xSQmkOEsfe7LYA9C77ZFLEH3IC1AYa8fDtlEPkhNmL2y420sa67qLmVzazlJm9el2YqwiJYueQQ/kJHNRWSJvhkuakXaFyhJeUQlGf//sgRQ19N247jqh3wM+JiW10yqPM+h9uvr5EbpuVqV036buuFsgAkbcr21EKU6vZadjlULiBviGxgGkJRj5MC7RvQc8dMMu6vBAtZweT9tG3483fUU6u2Yac+m1oxxk6fsvku9LroT4J0X0hk+iP+w/QXjhnkQOSh7f5/qucgE9gD9mpjvzWwudjKivaXMsm8g472p5Sde0qXlm8Co+bHjXHhHkgRElFeqBC3SjKj9kEUr/gKswLUmtC1aORV0MhV1snmvX83zD+Yr77ikYvf3qqXHmdXjWfCfwymoJeiB5RBB3L+clUekP5IE0GCqj/uCv8kfdCQnz/EeKaIf7IXp3wkMU4rgEIzBehbtib1r9albfrNNJb1V1oapdED5N+kz7e5qiympOg2ZvvRhzh60CMjMnUd13BuGiteswmffZKz7OJHt//TeQDoHNxDAYThNzURWHtRYUG7ZRdbJbbpAvmQN7T6spv25cpGXWbl2orO54R9cYTpIQSREDl6tzMrsU237alt66sCYZo3aj8RmWr5e5u5KPLQ0ndXMaC65TM4Gy3DYS4h05XxT8lgYC3yb2qS0kXzZSWynTzW0uDYPFxl1dioEscrOQ2xubUrcsoxgU0jX8mMNHD8Qf/YsfE/L2ES0fo0edpbCz6L/M+Zpy7t77gvFRkL9JknZeRitnu7KjyW78clMy2LTaebV+uZltGa9MCXu+aMYN82Jk4H7/2QN5DKmfkQSMAEw9kmEP9EAMS6r+GtQDTlBJYZKDUV8ROWEgS0L//g94BWsk3gcAAA==",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
