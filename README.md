

# SynchroMessage 

[![GitHub Follow](https://img.shields.io/github/followers/mykytashch?style=social)](https://github.com/mykytashch)
[![GitHub Stars](https://img.shields.io/github/stars/mykytashch/SynchroMessage)](https://github.com/mykytashch/SynchroMessage/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/mykytashch/SynchroMessage)](https://github.com/mykytashch/SynchroMessage/network)


SynchroMessage is a powerful tool for maintaining and editing your personal diary in real-time across three different platforms: a web application, an iOS application built with Swift, and an Android application developed with Kotlin. Our application leverages modern technologies like Node.js, Express.js, MongoDB, React.js, Swift, and Kotlin to deliver a unified and seamless user experience. The applications are also built to be robust, secure, and scalable, with comprehensive test suites ensuring reliability and integrity.


## About the Developer
Mykyta Shcheholevatyi is a software developer based in Hilversum, Netherlands. You can reach him at [mykytashch@hotmail.com](mailto:mykytashch@hotmail.com) or through his social media channels:

- **Twitter**: [@tosniki91](https://twitter.com/tosniki91)
- **Instagram**: [mykytusz](https://www.instagram.com/mykytusz/)
- **Facebook**: [Mykyta](https://www.facebook.com/profile.php?id=100028132133194)
- **VK**: [Mykyta](https://vk.com/mykyta4308)
- **Blogspot**: [Mykyta's Blog](https://mykytashc.blogspot.com)


**Repository Structure**

Our repository comprises several essential parts. Here's an overview:

**Backend**

1. `package.json`: This file contains the project's information and a list of dependencies needed to run the application.
2. `server.js`: This file serves as the entry point for our application. It configures an Express.js instance, connects to the database, and starts the server.
3. `controllers/authController.js` and `controllers/diaryController.js`: These files control the logic of the application. Controllers handle HTTP requests, interact with models to access data, and send responses to clients.
4. `models/User.js` and `models/Entry.js`: These files describe your data structure for MongoDB collections.
5. `routes/authRoutes.js` and `routes/diaryRoutes.js`: These files define your application routes and associate them with the relevant controllers.
6. `config/passportConfig.js` and `config/databaseConfig.js`: These files contain configurations for Passport.js and MongoDB.
7. `tests/auth.test.js` and `tests/diary.test.js`: These files include tests for the authentication functions and CRUD operations.
8. `utils/backup.js`: This file contains a script for making a daily database backup at 23:59.

**WebApp**

1. `App.js` and `index.js`: These files serve as the entry points to the React application. App.js usually contains the main routing logic, while index.js initializes the React application.
2. `components/Header.js`, `components/Login.js`, `components/Register.js`, and `components/Diary.js`: These files are React components responsible for rendering different parts of the application.
3. `services/authService.js` and `services/diaryService.js`: These files contain functions for interacting with the server's API.
4. `tests/auth.test.js` and `tests/diary.test.js`: These files contain tests for the authentication functions and CRUD operations.

**iOSApp**

1. `AppDelegate.swift` and `SceneDelegate.swift`: These are standard files for any iOS app; they manage the application lifecycle.
2. `Models/User.swift` and `Models/Entry.swift`: These files contain model classes that represent the data structure for users and diary entries.
3. `Views/LoginView.swift`, `Views/RegisterView.swift`, and `Views/DiaryView.swift`: These are views responsible for rendering the application interface.
4. `Services/authService.swift` and `Services/diaryService.swift`: These files contain functions for interacting with the server's API.
5. `Tests/auth.test.swift` and `Tests/diary.test.swift`: These files contain tests for the authentication functions and CRUD operations.

**AndroidApp**

1. `MainActivity.kt`: This is the main activity of the application, responsible for launching and navigation.
2. `Models/User.kt` and `Models/Entry.kt`: These files contain model classes representing the data structure for users and diary entries.
3. `Views/LoginView.kt`, `Views/RegisterView.kt`, and `Views/DiaryView.kt`: These views are responsible for rendering the application interface.
4. `Services/authService.kt` and `Services/diaryService.kt`: These files contain functions for interacting with the server's API.
5. `androidTest/auth.test.kt` and `androidTest/diary.test.kt`: These files contain tests for the authentication functions and CRUD operations.








Давайте составим подробный план разработки для вашего проекта. Этот план будет разделен на этапы и обозначит основные задачи для каждого из них.

1. **Подготовительный этап:**
   - Определение требований и функциональности для приложений и веб-сайта.
   - Выбор технологического стека и архитектуры приложений.
   - Установка необходимого программного обеспечения и настройка сред разработки.

2. **Создание серверной части (Backend):**
   - Установка и настройка Node.js и Express.js.
   - Создание основы для API сервера.
   - Интеграция с MongoDB через Mongoose.
   - Разработка системы регистрации и аутентификации с использованием Passport.js, jsonwebtoken и Bcrypt.
   - Создание маршрутов и контроллеров для обработки запросов от клиентских приложений (создание, редактирование, удаление текстовых файлов).
   - Разработка системы ежедневного бэкапа данных с использованием CRON jobs.
   - Тестирование серверной части.

3. **Создание веб-приложения:**
   - Установка и настройка React.js.
   - Разработка компонентов интерфейса с использованием Material-UI.
   - Разработка системы роутинга с использованием React-router.
   - Интеграция с сервером через Axios.
   - Разработка функций регистрации и аутентификации.
   - Разработка функционала создания, редактирования, удаления текстовых файлов.
   - Тестирование веб-приложения.

4. **Создание iOS приложения:**
   - Установка и настройка Swift.
   - Разработка интерфейса приложения.
   - Интеграция с сервером через Alamofire.
   - Разработка функций регистрации и аутентификации.
   - Разработка функционала создания, редактирования, удаления текстовых файлов.
   - Тестирование iOS приложения.

5. **Создание Android приложения:**
   - Установка и настройка Kotlin.
   - Разработка интерфейса приложения.
   - Интеграция с сервером через Retrofit.
   - Разработка функций регистрации и аутентификации.
   - Разработка функционала создания, редактирования, удаления текстовых файлов.
   - Тестирование Android приложения.

6. **Итоговое тестирование и выкладка приложений в магазины:**
   - Проведение итогового тестирования всех приложений.
   - Устранение обнаруженных ошибок.
   - Подготовка и выкладка приложений в App Store и Google Play.

7. **Поддержка и обновление:**
   - Обработка обратной связи от пользователей.
   - Устранение обнаруженных ошибок и багов.
   - Разработка и выпуск обновлений приложений.

Помимо всего прочего, на протяжении всего процесса разработки будет использоваться система контроля версий Git для управления кодом и совместной работы над проектом.
