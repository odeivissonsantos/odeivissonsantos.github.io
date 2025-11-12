// === MODO CLARO/ESCURO ===
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("bi-sun");
  icon.classList.toggle("bi-moon");
  // Salva preferência do tema
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// === APLICA TEMA SALVO ===
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    const icon = themeToggle.querySelector("i");
    icon.classList.remove("bi-moon");
    icon.classList.add("bi-sun");
  }

  const savedLang = localStorage.getItem("lang") || "pt";
  document.getElementById("languageSelect").value = savedLang;
  applyTranslations(savedLang);
});

// === TRADUÇÕES ===
const translations = {
  pt: {
    navHome: "Início",
    navAbout: "Sobre",
    navSkills: "Skills",
    navProjects: "Projetos",
    navContact: "Contato",
    heroTitle: "Olá, eu sou Deivisson Santos",
    heroSubtitle: "Desenvolvedor Full Stack | C# | .NET | HTML | CSS | Javascript | Bootstrap | SQL | GIT",
    heroBtn: "Ver Projetos",
    aboutTitle: "Sobre Mim",
    aboutText:
      "Sou um desenvolvedor Full Stack com experiência sólida em C#, .NET, HTML, CSS, Javascript, Bootstrap, GIT e SQL Server, atualmente atuando como Analista de Sistemas no DETRAN-BA. " +
      "Ao longo da minha trajetória, construí soluções web e APIs escaláveis que impactam milhares de usuários, sempre com foco em qualidade, performance e boas práticas de engenharia. " +
      "Tenho formação em Engenharia e Arquitetura de Software, o que me permite unir visão técnica e estratégica no desenvolvimento de aplicações. " +
      "Busco constantemente aprimorar minhas habilidades — especialmente em inglês e arquitetura de software moderna — para colaborar em ambientes internacionais e projetos desafiadores.",
    skillsTitle: "Minhas Skills",
    projectsTitle: "Projetos",
    project1:
      "A Central dos Palpites é uma plataforma gratuita onde criamos desafios de placar exato para divertir a comunidade apaixonada por futebol. " +
      "Os primeiros que acertam o resultado levam o prêmio — uma experiência divertida, interativa e totalmente gratuita para os fãs do esporte.",
    project2:
      "O Traço Mágico é a primeira plataforma gratuita onde você pode baixar histórias educativas para colorir. " +
      "Uma iniciativa que une aprendizado e criatividade, incentivando crianças e adultos a explorarem o conhecimento de forma lúdica e divertida.",
    contactTitle: "Contato"
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroTitle: "Hi, I'm Deivisson Santos",
    heroSubtitle: "Full Stack Developer | C# | .NET | HTML | CSS | Javascript | Bootstrap | SQL | GIT",
    heroBtn: "View Projects",
    aboutTitle: "About Me",
    aboutText:
      "I’m a Full Stack Developer with solid experience in C#, .NET, HTML, CSS, Javascript, Bootstrap, GIT and SQL Server, currently working as a Systems Analyst at DETRAN-BA. " +
      "Throughout my career, I’ve built scalable web solutions and APIs impacting thousands of users, always focusing on quality, performance, and best software engineering practices. " +
      "I hold postgraduate degrees in Software Engineering and Software Architecture, which allow me to combine technical expertise with strategic vision when designing applications. " +
      "I’m continuously improving my skills — especially in English communication and modern software architecture — to collaborate in international and challenging environments.",
    skillsTitle: "My Skills",
    projectsTitle: "Projects",
    project1:
      "Central dos Palpites is a free platform where we create exact score prediction challenges to engage the passionate football community. " +
      "The first users who guess the correct result win prizes — a fun, interactive, and 100% free experience for football fans.",
    project2:
      "Traço Mágico is the first free platform where you can download educational stories to color. " +
      "It’s an initiative that combines learning and creativity, encouraging children and adults to explore knowledge in a fun and engaging way.",
    contactTitle: "Contact"
  }
};

// === TROCA DE IDIOMA ===
const langSelect = document.getElementById("languageSelect");

langSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
});

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

