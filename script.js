const lang = document.getElementById("language");
const content = document.getElementById("content");

const texts = {

  uz:{
    subtitle:"Studentlar va hamma uchun aqlli yordamchi",
    premiumText:"AI yordamchi, kurs ishi, kitoblar va maxsus funksiyalar",
    premiumBtn:"Premium olish",

    student:"🎓 Student yordam",
    library:"📚 Kutubxona",
    ai:"🤖 AI yordamchi",
    docs:"📄 Hujjatlar",
    chess:"♟ Shaxmat",
    checkers:"⚫ Shashka",
    calc:"🧮 Hisob-kitob",
    profile:"👤 Profil",

    choose:"Bo‘lim tanlang"
  },

  ru:{
    subtitle:"Умный помощник для студентов и всех пользователей",
    premiumText:"AI помощник, курсовые, книги и специальные функции",
    premiumBtn:"Получить Premium",

    student:"🎓 Помощь студенту",
    library:"📚 Библиотека",
    ai:"🤖 AI помощник",
    docs:"📄 Документы",
    chess:"♟ Шахматы",
    checkers:"⚫ Шашки",
    calc:"🧮 Расчёты",
    profile:"👤 Профиль",

    choose:"Выберите раздел"
  },

  en:{
    subtitle:"Smart assistant for students and everyone",
    premiumText:"AI assistant, coursework, books and special features",
    premiumBtn:"Get Premium",

    student:"🎓 Student Help",
    library:"📚 Library",
    ai:"🤖 AI Assistant",
    docs:"📄 Documents",
    chess:"♟ Chess",
    checkers:"⚫ Checkers",
    calc:"🧮 Calculator",
    profile:"👤 Profile",

    choose:"Choose a section"
  }
};

function applyLang(){

  let t = texts[lang.value];

  document.getElementById("subtitle").innerText = t.subtitle;

  document.getElementById("premiumText").innerText = t.premiumText;

  document.getElementById("premiumBtn").innerText = t.premiumBtn;

  document.getElementById("student").innerText = t.student;

  document.getElementById("library").innerText = t.library;

  document.getElementById("ai").innerText = t.ai;

  document.getElementById("docs").innerText = t.docs;

  document.getElementById("chess").innerText = t.chess;

  document.getElementById("checkers").innerText = t.checkers;

  document.getElementById("calc").innerText = t.calc;

  document.getElementById("profile").innerText = t.profile;

  content.innerText = t.choose;
}

lang.addEventListener("change", applyLang);

document.getElementById("themeBtn").onclick = () => {

  document.body.classList.toggle("light");
};

document.getElementById("student").onclick = () => {

  content.innerHTML =
  "🎓 <b>Student yordam</b><br><br>" +
  "• Kurs ishi rejasi<br>" +
  "• Referat<br>" +
  "• Mustaqil ish<br>" +
  "• Test savollari<br>" +
  "• Prezentatsiya matni";
};

document.getElementById("library").onclick = () => {

  content.innerHTML =
  "📚 <b>Kutubxona</b><br><br>" +
  "• Kitoblar<br>" +
  "• PDF darsliklar<br>" +
  "• Qidiruv<br>" +
  "• Saqlangan fayllar";
};

document.getElementById("ai").onclick = () => {

  content.innerHTML =
  "🤖 <b>AI yordamchi</b><br><br>" +
  "Matn yozish, tarjima, tushuntirish va reja tuzish.";
};

document.getElementById("docs").onclick = () => {

  content.innerHTML =
  "📄 <b>Hujjatlar</b><br><br>" +
  "• Ariza<br>" +
  "• Tilxat<br>" +
  "• Rezyume<br>" +
  "• Shartnoma";
};

document.getElementById("chess").onclick = () => {

  content.innerHTML =
  "♟ <b>Shaxmat</b><br><br>" +
  "Bot bilan va online o‘yin keyingi bosqichda qo‘shiladi.";
};

document.getElementById("checkers").onclick = () => {

  content.innerHTML =
  "⚫ <b>Shashka</b><br><br>" +
  "Bot bilan va online o‘yin keyingi bosqichda qo‘shiladi.";
};

document.getElementById("calc").onclick = () => {

  content.innerHTML =
  "🧮 <b>Hisob-kitob</b><br><br>" +
  "Foiz, kredit, oylik va valyuta hisoblash.";
};

document.getElementById("profile").onclick = () => {

  content.innerHTML =
  "👤 <b>Profil</b><br><br>" +
  "Ism, telefon, premium holati va saqlangan ma’lumotlar.";
};

document.getElementById("premiumBtn").onclick = () => {

  content.innerHTML =
  "⭐ <b>VELTOR Premium</b><br><br>" +
  "Premium orqali AI, kitoblar va maxsus funksiyalar ochiladi.";
};

applyLang();
