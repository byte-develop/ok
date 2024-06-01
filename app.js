const mysql = require('mysql2')
const express = require('express')
const cors = require('cors')
const { Telegraf, Markup } = require('telegraf');

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
	host: '147.45.105.165',
	user: 'gen_user',
	password: 'g&u9;9TP?e;kks',
	database: 'default_db',
})

const token = '6651263806:AAE6p2IojWmxLPTIK7L1bGZV75nRAwvc_7M';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    const id = ctx.from.id;
    
    return ctx.reply(
        "Открыть веб-приложение",
        Markup.inlineKeyboard([
            Markup.button.url(
                "Открыть",
                `http://google.com/?id=${id}`
            ),
        ])
    );
});

// Пример обработчика для записи данных в базу
app.post('/users', (req, res) => {
	const { id, login } = req.body
	connection.query(
		'INSERT INTO users (id, login) VALUES (?, ?)',
		[id, login],
		(err, result) => {
			if (err) {
				res.status(500).send('Ошибка при записи данных')
			} else {
				res.status(200).send('Данные успешно записаны')
			}
		}
	)
})

app.get('/users', (req, res) => {
  const userId = req.query.id;
  connection.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
      if (err) {
          res.status(500).send('Ошибка при получении данных');
      } else {
          if (results.length > 0) {
              res.status(200).json(results[0]);
          } else {
              res.status(404).send('Запись не найдена');
          }
      }
  });
});

app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`)
})

// Запуск бота
bot.launch();