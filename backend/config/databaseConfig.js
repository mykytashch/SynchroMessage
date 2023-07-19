
const mongoose = require('mongoose');

// Замените на свою строку подключения
const uri = "mongodb+srv://tosniki91:N25kbverb@clustervkapture.b6tox4s.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Успешное подключение к базе данных');
}).catch((error) => {
  console.log('Ошибка подключения к базе данных:', error);
});
