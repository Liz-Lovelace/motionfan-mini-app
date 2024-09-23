require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const miniAppUrl = process.env.MINI_APP_URL;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 'Нажмите на кнопку ниже, чтобы открыть мини-приложение:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Открыть Motionfan', web_app: { url: miniAppUrl } }]
      ]
    }
  });
});

console.log('Bot is running...');