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
    heroSubtitle: "Analista de Sistemas | Arquitetura de Software | .NET | Sistemas de Missão Crítica",
    heroBtn: "Ver Projetos",
    aboutTitle: "Sobre Mim",
aboutText:
  "Sou Analista de Sistemas com atuação em desenvolvimento e evolução de sistemas de missão crítica na plataforma .NET, contribuindo para aplicações web e APIs integradas a bases governamentais de alta complexidade. " +
  "Atuo na construção de soluções técnicas, apoio à definição de padrões arquiteturais, revisão de código e condução técnica das entregas em ambiente ágil. " +
  "Antes de atuar exclusivamente em tecnologia, exerci gestão operacional e comercial, sendo responsável por equipe, indicadores de desempenho e resultados financeiros. " +
  "Essa experiência consolidou minha visão estratégica, liderança e orientação a métricas — competências que hoje aplico na interface entre tecnologia e negócio. " +
  "Minha formação em Arquitetura de Software, Engenharia de Software, Gestão de TI e Administração de Empresas me permite integrar visão técnica e estratégica na construção de soluções sustentáveis e escaláveis.",
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
    heroSubtitle: "Systems Analyst | Software Architecture | .NET | Mission-Critical Systems",
    heroBtn: "View Projects",
    aboutTitle: "About Me",
aboutText:
  "I am a Systems Analyst working on the development and evolution of mission-critical systems using the .NET platform, contributing to web applications and APIs integrated with high-complexity governmental databases. " +
  "My role includes technical solution design, architectural support, code review, and technical guidance in agile environments. " +
  "Before focusing exclusively on technology, I worked in operational and commercial management, leading teams, tracking performance indicators, and being responsible for financial results. " +
  "This background strengthened my strategic thinking, leadership skills, and results-oriented mindset — competencies I now apply at the intersection of technology and business. " +
  "My academic background in Software Architecture, Software Engineering, IT Management, and Business Administration allows me to combine technical depth with strategic vision when building scalable and sustainable solutions.",
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
