var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('colors');
require('dotenv').config()
const Gateway = require('micromq/gateway');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

console.log(`                               `.bgBlack.green)
console.log(`         EXPRESS START         `.bgBlack.green)
console.log(`                               `.bgBlack.green)

// импортируем класс Gateway из раннее установленного пакета micromq


// создаем экземпляр класса Gateway
const gateway = new Gateway({
  // названия микросервисов, к которым мы будем обращаться
  microservices: ['service1', 'service2'],
  // настройки rabbitmq
  rabbit: {
    // ссылка для подключения к rabbitmq (default: amqp://guest:guest@localhost:5672)
    url: process.env.RABBIT_URL,
  },
});

app.use(gateway.middleware());

let isConnectedToRabbit = () => !!gateway.connection;

app.use((req,res,next)=>{
  req.isConnectedToRabbit = isConnectedToRabbit;
  next();
})

// создаем два эндпоинта /friends & /status на метод GET
app.all(['/service1', '/status1'], async (req, res) => {
  // делегируем запрос в микросервис 
  await res.delegate('service1');
});

app.all(['/service2', '/status2'], async (req, res) => {
  // делегируем запрос в микросервис 
  await res.delegate('service2');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/restart', (req,res)=>{
  // res.send('OK');
  console.warn('/restart')
  // restartSelf();
  process.exit();
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
