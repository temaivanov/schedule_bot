const dotenv = require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const moment = require('moment');

const TOKEN = process.env.TOKEN

//npm init to create package.json to store dependencies and to attach them

//npm install —save node-telegram-bot-api to add module that would help us operate with TelegramApi

const bot = new TelegramBot(TOKEN, {polling:true})

const KB = {
  monday: 'Понедельник',
  tuesday: 'Вторник',
  wednesday: 'Среда',
  thursday: 'Четверг',
};
/*====================================================*/
/*==================ЗАДАНИЕ ДАТЫ=====================*/

moment.locale('ru')
//const week = moment().day("Monday")+" – "+moment().day("Sunday");
//let day = moment().format("DD MMM, dddd");

let weekNumber = function(){
  //let week = 14;
  let week = moment().isoWeek();
  return week
}

//let mondayThisWeek = "Вы смотрите расписание на "+moment().weekday(0).format("DD MMM"+", "+"dddd");
//let tuesdayThisWeek = "Вы смотрите расписание на "+moment().weekday(1).format("DD MMM"+", "+"dddd");
//let wednesdayThisWeek = "Вы смотрите расписание на "+moment().weekday(2).format("DD MMM"+", "+"dddd");
//let thursdayThisWeek = "Вы смотрите расписание на "+moment().weekday(3).format("DD MMM"+", "+"dddd");


/*{
  var time = function(){
  let now = moment().minute();
  return now
}

function check(now){
  if (now%2 == 0) return now
  else {
    return "not even"}
  }


console.log(check(time()));}*/
console.log(isEven(weekNumber()));

//let time = };
//let time = m.format('mm:ss');
/*====================================================*/

bot.onText(/\/start/, (msg) => {
  const text = `Привет, ${msg.from.first_name}\n\nТекущая неделя ${moment().isoWeek()}-ая в 2018 году, ${(isEven(weekNumber()))}\nСегодня: ${moment().format("DD MMM, dddd")}\nВремя: ${moment().format('HH:mm')}\nДанный бот покажет расписание занятий на текущей неделе.\n\nРасписание на какой день вам нужно?`
  bot.sendMessage(msg.chat.id, text, {
    reply_markup: {
      keyboard: [
        [KB.monday],
        [KB.tuesday],
        [KB.wednesday],
        [KB.thursday]
      ]
    }
  })
})

bot.on('message', (msg) => {
if (weekNumber()%2 == 0) {
/*====================================================*/
/*==================ЧЕТНАЯ НЕДЕЛЯ=====================*/
    const chatId = msg.chat.id;
    switch (msg.text) {
      case KB.monday: bot.sendMessage(chatId,`${moment().weekday(0).format("DD MMM"+", "+"dddd")}\n\n09:00 - 10:35\nП-603\nУправление коммерческим предприятием (Лекция)\nОлейник Наталья Михайловна\n\n10:50 - 12:25\nП-611\nИнформационное обеспечение закупок, снабжения и сбыта (Практика)\nГригорьев Максим Николаевич\n\n12:40 - 14:15\nП-603\nУправление коммерческим предприятием (Практика)\nОлейник Наталья Михайловна`); console.log(msg);
        break
      case KB.tuesday: bot.sendMessage(chatId, `${moment().weekday(1).format("DD MMM"+", "+"dddd")}\n\n09:00 - 10:35\nП-117\nОрганизация коммерческой деятельности производственных предприятий (Практика)\nТкач Владимир Владимирович\n\n10:50 - 12:25\nП-116\nРиски в коммерческой деятельности (Практика)\nКожевникова Светлана Юрьевна\n\n12:40 - 14:15\nП-116\nРиски в коммерческой деятельности (Лекция)\nКожевникова Светлана Юрьевна`); console.log(msg);
        break
      case KB.wednesday: bot.sendMessage(chatId, `${moment().weekday(2).format("DD MMM"+", "+"dddd")}\n\n09:00 - 10:35\nП-301\nСтратегическое планирование коммерческой деятельности (Лекция)\nОлейник Наталья Михайловна\n\n10:50 - 12:25\nП-207\nОрганизация закупочной деятельности на коммерческом предприятии (Практика)\nКожевникова Светлана Юрьевна\n\n12:40 - 14:15\nП-301\nСтратегическое планирование коммерческой деятельности (Практика)\nОлейник Наталья Михайловна\n\n14:30 - 16:00\n П-502\nОрганизация закупочной деятельности на коммерческом предприятии (Лекция)\nТкач Владимир Владимирович`); console.log(msg);
        break
      case KB.thursday: bot.sendMessage(chatId, `${moment().weekday(3).format("DD MMM"+", "+"dddd")}\n\n09:00 - 10:35 \nП-113\nВыбор Мониторинг коммерческой деятельности (Лекция)\nОлейник Наталья Михайловна\n\n09:00 - 10:35\nП-514\nВыбор Контроллинг коммерческой деятельности (Лекция)\nТкач Владимир Владимирович\n\n10:50 - 12:25\n П-113\nВыбор Мониторинг коммерческой деятельности (Практика)\nОлейник Наталья Михайловна\n\n10:50 - 12:25\nП-514\nВыбор Контроллинг коммерческой деятельности (Практика)\nТкач Владимир Владимирович\n\n12:40 - 14:15\nП-514\nОрганизация коммерческой деятельности производственных предприятий (Лекция)\nТкач Владимир Владимирович\n\n`); console.log(msg);
        break}
} else {
/*====================================================*/
/*================НЕЧЕТНАЯ НЕДЕЛЯ=====================*/
    const chatId = msg.chat.id;
    switch (msg.text){
      case KB.monday: bot.sendMessage(chatId, `${moment().weekday(0).format("DD MMM"+", "+"dddd")}\n\n09:00 - 10:35\nП-603\nИнформационное обеспечение закупок, снабжения и сбыта (Лекция)\nГригорьев Максим Николаевич\n\n10:50 - 12:25\nП-611\nИнформационное обеспечение закупок, снабжения и сбыта (Практика)\nГригорьев Максим Николаевич\n\n12:40 - 14:15\nП-603\nУправление коммерческим предприятием (Практика\nОлейник Наталья Михайловна\n\n`); console.log(msg);
        break
      case KB.tuesday: bot.sendMessage(chatId, `${moment().weekday(1).format("DD MMM"+", "+"dddd")}\n\n09:00 - 10:35\nП-117\nОрганизация коммерческой деятельности производственных предприятий (Практика)\nТкач Владимир Владимирович\n\n10:50 - 12:25\nП-116\nРиски в коммерческой деятельности (Практика)\nКожевникова Светлана Юрьевна\n\n12:40 - 14:15\nП-319\nФизическая культура и спорт (Лекция)`);console.log(msg);
        break
      case KB.wednesday: bot.sendMessage(chatId, `${moment().weekday(2).format("DD MMM"+", "+"dddd")}\n\n09:00 - 10:35\nП-301\nСтратегическое планирование коммерческой деятельности (Лекция)\nОлейник Наталья Михайловна\n\n10:50 - 12:25\nП-207\nОрганизация закупочной деятельности на коммерческом предприятии (Практика)\nКожевникова Светлана Юрьевна\n\n12:40 - 14:15\nП-301\nСтратегическое планирование коммерческой деятельности (Практика)\nОлейник Наталья Михайловна\n\n14:30 - 16:00\nП-502\nОрганизация закупочной деятельности на коммерческом предприятии (Лекция)\nТкач Владимир Владимирович`); console.log(msg);
        break
      case KB.thursday: bot.sendMessage(chatId, `${moment().weekday(3).format("DD MMM"+", "+"dddd")}\n\n09:00 - 10:35\nП-113\nВыбор Мониторинг коммерческой деятельности (Лекция)\nОлейник Наталья Михайловна\n\n09:00 - 10:35\nП-514\nВыбор Контроллинг коммерческой деятельности (Лекция)\nТкач Владимир Владимирович\n\n10:50 - 12:25\nП-113\nВыбор Мониторинг коммерческой деятельности (Практика)\nОлейник Наталья Михайловна\n\n10:50 - 12:25\nП-514\nВыбор Контроллинг коммерческой деятельности (Практика)\nТкач Владимир Владимирович\n\n12:40 - 14:15\nП-514\nОрганизация коммерческой деятельности производственных предприятий (Лекция)\nТкач Владимир Владимирович\n\n 14:30 - 16:00\nП-611\nРиски в коммерческой деятельности (Лекция)\nКожевникова Светлана Юрьевна`); console.log(msg);
      break}
}
})

function isEven (week){
  if (week%2 == 0) return ('чётная неделя');
  else {
    return ('нечётная неделя')
  }
}
