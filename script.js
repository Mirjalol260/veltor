const lang = document.getElementById("language");

const texts = {
    uz: {
        student:"🎓 Student yordam",
        library:"📚 Kutubxona",
        chess:"♟ Shaxmat",
        checkers:"⚫ Shashka",
        profile:"👤 Profil"
    },

    ru: {
        student:"🎓 Помощь студенту",
        library:"📚 Библиотека",
        chess:"♟ Шахматы",
        checkers:"⚫ Шашки",
        profile:"👤 Профиль"
    },

    en: {
        student:"🎓 Student Help",
        library:"📚 Library",
        chess:"♟ Chess",
        checkers:"⚫ Checkers",
        profile:"👤 Profile"
    }
};

lang.addEventListener("change", () => {
    let t = texts[lang.value];

    document.getElementById("student").innerText = t.student;
    document.getElementById("library").innerText = t.library;
    document.getElementById("chess").innerText = t.chess;
    document.getElementById("checkers").innerText = t.checkers;
    document.getElementById("profile").innerText = t.profile;
});

document.getElementById("themeBtn").onclick = () => {
    document.body.classList.toggle("light");
};