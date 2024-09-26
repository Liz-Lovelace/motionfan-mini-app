import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Test backend code
const app = express();
app.use(express.static(new URL('./static', import.meta.url).pathname));

app.get('/api/getUserData', (req, res) => {
  res.json({
    username: 'user_777',
    avatarGender: 'female',
    money: '12,234,399',
    steps: '10 875',
    distance: '9,7 км',
    challenge_progress: 2156,
    challenge_total: 3000,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// Telegram bot code
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 'Нажмите на кнопку ниже, чтобы открыть мини-приложение:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Открыть Motionfan', web_app: { url: process.env.MINI_APP_URL } }]
      ]
    }
  });
});

console.log('Telegram bot is running...');