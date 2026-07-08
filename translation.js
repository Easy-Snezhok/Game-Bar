const translations = {
   RU: {
        "nav_new": "Популярное",
        "nav_news": "Новости",
        "nav_how": "Как купить",
        "hero_title": "Grand Theft Auto V",
        "lang_name": "Русский",
        "search_placeholder": "поиск...",
        "login": "Войти",
        "login-title": "ВХОД В АККАУНТ",
        "label_name": "ВОЙДИТЕ С ПОМОЩЬЮ ИМЕНИ АККАУНТА",
        "label_pass": "ПАРОЛЬ",
        "login_btn": "ВОЙТИ",
        "help_login": "Помогите, я не могу войти в аккаунт",
        "create-acc": "Создайте аккаунт",
        "nav_catalog": "Каталог",
        "buy_btn": "Купить",
        "tab_popular": "Популярное",
        "hero_welcome": "Добро пожаловать в Лос-Сантос!",
        "platform_label": "Платформа:",
        "btn_more": "Подробнее",
        "rating_label": "РЕЙТИНГ ИГРЫ",
        "tab_discounts": "Скидки",
        "tab_releases": "Релизы",
        "support": "Поддержка",
        "lang_title": "Язык",
        "reg_title": "СОЗДАНИЕ АККАУНТА",
        "label_email": "Адрес эл. почты",
        "label_confirm_email": "Подтвердите адрес эл. почты",
        "label_age": "Я подтверждаю, что мне исполнилось 13 лет и принимаю условия соглашения GAME BAR",
        "reg_continue": "ПРОДОЛЖИТЬ",
        "label_username": "Придумайте имя аккаунта",
        "label_new_pass": "Придумайте пароль",
        "label_confirm": "Подтвердите пароль",
    },
    EN: {
          lang_name: "English",
          search_placeholder: "search...",
          login: "Login",
          nav_catalog: "Catalog",
          nav_new: "Popular",
          nav_news: "News",
          nav_how: "How to buy",
          hero_title: "Grand Theft Auto V",
          hero_welcome: "Welcome to Los Santos!",
          hero_description: "This is an iconic open-world action game...",
          platform_label: "Platform:",
          btn_more: "Read More",
          rating_label: "GAME RATING",
          tab_discounts: "Discounts",
          tab_popular: "Popular",
          tab_releases: "Releases",
          buy_btn: "Buy",
          support: "Support",
          lang_title: "Language",
          login_title: "ACCOUNT LOGIN",
          label_name: "SIGN IN WITH YOUR ACCOUNT NAME",
          label_pass: "PASSWORD",
          login_btn: "LOGIN",
          help_login: "Help, I can't log into my account",
          create_acc: "Create an account",
        "reg_title": "CREATE AN ACCOUNT",
        "label_email": "Email Address",
        "label_confirm_email": "Confirm your email address",
        "label_age": "I confirm that I am 13 years of age or older and accept the terms of the agreement GAME BAR",
        "reg_continue": "CONTINUE",
        "label_username": "Create an account name",
        "label_new_pass": "Create a password",
        "label_confirm": "Confirm your password",
        },
        DE: {
          lang_name: "Deutsch",
          search_placeholder: "suchen...",
          login: "Eintreten",
          nav_catalog: "Katalog",
          nav_new: "Beliebt",
          nav_news: "Nachricht",
          nav_how: "So kaufen Sie",
          hero_title: "Grand Theft Auto V",
          hero_welcome: "Willkommen in Los Santos!",
          hero_description: "This is an iconic open-world action game...",
          platform_label: "Plattform:",
          btn_more: "Mehr lesen",
          rating_label: "SPIELBEWERTUNG",
          tab_discounts: "Rabatte",
          tab_popular: "Beliebt",
          tab_releases: "Veröffentlichungen",
          buy_btn: "Kaufen",
          support: "Unterstützung",
          lang_title: "Sprache",
          login_title: "KONTOANMELDUNG",
          label_name: "MIT IHREM KONTONAMEN ANMELDEN",
          label_pass: "PASSWORT",
          login_btn: "EINTRETEN",
          help_login: "Hilfe, ich kann mich nicht in mein Konto einloggen",
          create_acc: "Konto erstellen",
        "reg_title": "KONTO ERSTELLEN",
        "label_email": "E-Mail-Adresse",
        "label_confirm_email": "E-Mail-Adresse bestätigen",
        "label_age": "Ich bestätige, dass ich mindestens 13 Jahre alt bin und die Nutzungsbedingungen akzeptiere GAME BAR",
        "reg_continue": "WEITER",
        "label_username": "Kontonamen erstellen",
        "label_new_pass": "Passwort erstellen",
        "label_confirm": "Passwort bestätigen",
        },
        FR: {
          lang_name: "Français",
          search_placeholder: "recherche...",
          login: "Se connecter",
          nav_catalog: "Catalogue",
          nav_new: "Populaire",
          nav_news: "Nouvelles",
          nav_how: "Comment acheter",
          hero_title: "Grand Theft Auto V",
          hero_welcome: "Bienvenue à Los Santos !",
          hero_description:
            "Это культовый экшн с открытым миром от Rockstar Games, ставший",
          platform_label: "Plate-forme:",
          btn_more: "En savoir plus",
          rating_label: "NOTE DU JEU",
          tab_discounts: "Réductions",
          tab_popular: "Populaire",
          tab_releases: "Sorties",
          buy_btn: "Acheter",
          support: "Soutien",
          lang_title: "Langue",
          login_title: "CONNEXION À MON COMPTE",
          label_name: "CONNECTEZ-VOUS AVEC VOTRE NOM D'UTILISATEUR",
          label_pass: "MOT DE PASSE",
          login_btn: "CONNEXION",
          help_login: "Aide ! Je n'arrive pas à me connecter à mon compte",
          create_acc: "Créer un compte",
          reg_title: "CRÉER UN COMPTE",
          label_email: "Adresse courriel",
          label_confirm_email: "Confirmez votre adresse courriel",
          label_age: "Je confirme avoir 13 ans ou plus et j'accepte les conditions générales GAME BAR",
          reg_continue: "CONTINUER",
          "label_username": "Créer un nom de compte",
        "label_new_pass": "Créer un mot de passe",
        "label_confirm": "Confirmer votre mot de passe",
        },
};

// --- 2. ПЕРЕМЕННЫЕ ---
const wrapper = document.querySelector(".cards-wrapper");
const [nextBtn, prevBtn] = [document.querySelector(".next"), document.querySelector(".prev")];
const links = document.querySelectorAll(".catalog-menu a");
const line = document.querySelector(".moving-line");
const [langToggle, langMenu, currentLang] = [document.getElementById("langToggle"), document.getElementById("langMenu"), document.getElementById("currentLang")];
const langOptions = document.querySelectorAll(".language-dropdown li");
let isScrolling = false;

// --- 3. ФУНКЦИИ ПЕРЕВОДА И ПАМЯТИ ---
function updatePageLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang]?.[key]) {
            if (el.tagName === "INPUT") el.placeholder = translations[lang][key];
            else el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll("[data-lang-content]").forEach(b => b.style.display = b.getAttribute("data-lang-content") === lang ? "block" : "none");
}

// --- 4. ЛОГИКА СЛАЙДЕРА ---
function smoothScrollTo(el, target, duration, onDone) {
    const start = el.scrollLeft;
    const change = target - start;
    let startTime = null;
    function anim(time) {
        if (!startTime) startTime = time;
        const prog = Math.min((time - startTime) / duration, 1);
        el.scrollLeft = start + change * (1 - Math.pow(1 - prog, 3));
        if (prog < 1) requestAnimationFrame(anim);
        else if (onDone) onDone();
    }
    requestAnimationFrame(anim);
}

function changeCard(dir) {
    if (isScrolling || !wrapper) return;
    const visible = Array.from(wrapper.querySelectorAll(".game-card")).filter(c => getComputedStyle(c).display !== "none");
    let idx = visible.findIndex(c => c.classList.contains("active"));
    if (idx === -1) idx = 0;
    visible[idx].classList.remove("active");
    let nextIdx = (idx + dir + visible.length) % visible.length;
    visible[nextIdx].classList.add("active");
    const target = visible[nextIdx].offsetLeft - wrapper.offsetWidth / 2 + visible[nextIdx].offsetWidth / 2;
    isScrolling = true;
    smoothScrollTo(wrapper, target, 800, () => isScrolling = false);
}

function moveLine(el) { if (line && el) { line.style.width = el.offsetWidth + "px"; line.style.left = el.offsetLeft + "px"; } }

// --- 5. СОБЫТИЯ ---
if (wrapper) {
    wrapper.addEventListener("wheel", (e) => { e.preventDefault(); if (!isScrolling) changeCard(e.deltaY > 0 ? 1 : -1); }, { passive: false });
    wrapper.addEventListener("click", (e) => {
        const card = e.target.closest(".game-card");
        if (card) {
            const visible = Array.from(wrapper.querySelectorAll(".game-card")).filter(c => getComputedStyle(c).display !== "none");
            changeCard(visible.indexOf(card) - visible.findIndex(c => c.classList.contains("active")));
        }
    });
}

links.forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        moveLine(link);
        const cat = link.getAttribute("data-category");
        document.querySelectorAll(".game-card").forEach(c => {
            c.classList.remove("active");
            c.style.display = c.getAttribute("data-category") === cat ? "block" : "none";
        });
        const first = wrapper.querySelector(`.game-card[data-category="${cat}"]`);
        if (first) { first.classList.add("active"); wrapper.scrollLeft = first.offsetLeft - wrapper.offsetWidth / 2 + first.offsetWidth / 2; }
    };
});

if (langToggle && langMenu) {
    langToggle.onclick = (e) => { e.stopPropagation(); langMenu.classList.toggle("show"); };
    langOptions.forEach(opt => {
        opt.onclick = () => {
            const lang = opt.getAttribute("data-lang") || opt.innerText.trim().substring(0, 2).toUpperCase();
            localStorage.setItem("userLanguage", lang);
            updatePageLanguage(lang);
            if (currentLang) currentLang.innerText = opt.innerText.trim();
            setTimeout(() => moveLine(document.querySelector(".catalog-menu a.active")), 50);
        };
    });
}

window.onclick = () => langMenu?.classList.remove("show");

window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("userLanguage") || "RU";
    updatePageLanguage(savedLang);
    if (currentLang) currentLang.innerText = (savedLang === "RU") ? "Русский" : "English";
    if (wrapper) {
        const activeCard = wrapper.querySelector(".game-card.active");
        if (activeCard) wrapper.scrollLeft = activeCard.offsetLeft - wrapper.offsetWidth / 2 + activeCard.offsetWidth / 2;
        moveLine(document.querySelector(".catalog-menu a.active"));
    }
});

if (nextBtn) nextBtn.onclick = () => changeCard(1);
if (prevBtn) prevBtn.onclick = () => changeCard(-1);

      // --- КОД ПРЕЛОАДЕРА ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // ПРОВЕРКА
        if (sessionStorage.getItem('visited')) {
            preloader.style.display = 'none';
        } else {
            sessionStorage.setItem('visited', 'true');
            
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
            }, 5000);
        }
    }
});

window.addEventListener('load', () => {
    const skeletonCards = document.querySelectorAll('.game-card.skeleton');
    
    skeletonCards.forEach(card => {
        const img = card.querySelector('img');
        
        if (img.complete) {
            card.classList.remove('skeleton');
        } else {
            img.addEventListener('load', () => {
                card.classList.remove('skeleton');
            });
        }
    });
});
