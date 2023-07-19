const Entry = require('../models/Entry');

// Создание новой записи
exports.createEntry = async (req, res) => {
  try {
    const { title, content } = req.body;
    const entry = new Entry({ title, content, user: req.user._id });
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка создания записи' });
  }
};

// Получение списка всех записей
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.user._id });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка получения записей' });
  }
};

// Получение информации о конкретной записи
exports.getEntryById = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка получения записи' });
  }
};

// Обновление информации о записи
exports.updateEntry = async (req, res) => {
  try {
    const { title, content } = req.body;
    const entry = await Entry.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!entry) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка обновления записи' });
  }
};

// Удаление записи
exports.deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndDelete(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }
    res.json({ message: 'Запись успешно удалена' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка удаления записи' });
  }
};
