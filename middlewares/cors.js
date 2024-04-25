function cors(req, res, next) {
    const { origin } = req.headers; // Смотрим, кто стучится к серверу
    if (allowedCors.includes(origin)) { // Если это наш друг,
        res.header('Access-Control-Allow-Origin', origin); // говорим: «Добро пожаловать!»
    }

    next(); // Идём дальше, не задерживаем очередь
};

app.use(
    cors, // Добавляем CORS самым первым
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
);

const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000'
];