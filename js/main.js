const HTML = document.documentElement;
const THEME_SWITCH = document.querySelectorAll(".switch-theme");
const THEME_SWITCH_FILL = document.querySelector(".bi-sun-fill");
const THEME_SWITCH_NOT_FILL = document.querySelector(".bi-sun");
// au clic du bouton qui switch le theme
THEME_SWITCH.forEach((e) => {
  e.addEventListener("click", () => {
    // Vérifie si la balise <html> a la classe 'light-theme'
    if (HTML.classList.contains("light-theme")) {
      // Si oui, la supprime et ajoute la classe 'dark-theme'
      HTML.classList.remove("light-theme");
      HTML.classList.add("dark-theme");
      // Enregistre le thème 'dark' en session
      sessionStorage.setItem("theme", "dark");
      // Appelle la fonction pour changer l'icône
      switchIcon();
      switchLogo();
    } else {
      // Sinon, on fait pareil avec le light-theme
      HTML.classList.remove("dark-theme");
      HTML.classList.add("light-theme");
      sessionStorage.setItem("theme", "light");
      switchIcon();
      switchLogo();
    }
  });
});

function switchIcon() {
  // Vérifie si la balise <html> a la classe 'light-theme'
  HTML.classList.contains("light-theme")
    ? // Si oui, ajoute 'bi-sun-fill' et supprime 'bi-sun' à l'élément 'themeSwitch'
      (THEME_SWITCH_FILL.classList.remove("d-none"),
      THEME_SWITCH_NOT_FILL.classList.add("d-none"))
    : // Sinon, supprime 'bi-sun-fill' et ajoute 'bi-sun' à l'élément 'themeSwitch'
      (THEME_SWITCH_FILL.classList.add("d-none"),
      THEME_SWITCH_NOT_FILL.classList.remove("d-none"));
}

// Appelle la fonction switchIcon() dès le chargement de la page
switchIcon();

function switchLogo() {
  // on recuperer les images avec les classes ["manette","musique","dev"] et on modifie leur href
  const MANETTE = document.querySelector(".manette");
  const MUSIQUE = document.querySelector(".musique");
  const DEV = document.querySelector(".dev");
  const PP = document.querySelector(".PP");
  HTML.classList.contains("light-theme")
    ? ((MUSIQUE.src = "img/loisirs/musique-light-theme.png"),
      (DEV.src = "img/loisirs/dev-light-theme.png"),
      (MANETTE.src = "img/loisirs/manette-light-theme.png"),
      (PP.src = "img/profile-pic-light.png"))
    : ((MUSIQUE.src = "img/loisirs/musique-dark-theme.png"),
      (DEV.src = "img/loisirs/dev-dark-theme.png"),
      (MANETTE.src = "img/loisirs/manette-dark-theme.png"),
      (PP.src = "img/profile-pic-dark.png"));
}

function printChange() {
  // passer le theme en light
  const THEME = sessionStorage.getItem("theme");
  HTML.classList.remove(THEME + "-theme");
  HTML.classList.add("light-theme");
  switchLogo();
  window.print();
  HTML.classList.remove("light-theme");
  HTML.classList.add(THEME + "-theme");
  switchLogo();
}
