const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const diaryRoutes = require('./routes/diaryRoutes');

module.exports = app;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/diary', diaryRoutes);

const PORT = process.env.PORT || 5056;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
