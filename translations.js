// Yhteisikkuna — jaettu käännösmoduuli.
// Kaikki sivut lataavat tämän: <script src="/translations.js"></script>
// Kasvaa sitä mukaa kun uusia sivuja käännetään — vanhoja avaimia ei poisteta.

const TRANSLATIONS = {
  fi: {
    // Yhteiset (navigaatio, profiilipaneeli, kirjautuminen)
    logout: "Kirjaudu ulos",
    my_settings: "Omat asetukset",
    loading: "Ladataan…",
    language_label: "Kieli",
    language_fi: "Suomi",
    language_en: "English",
    role_app_admin: "Sovelluksen pääkäyttäjä",
    role_org_admin: "Organisaation pääkäyttäjä",
    role_user: "Käyttäjä",

    // projektit.html
    page_title_projects: "Yhteisikkuna — Omat projektit",
    heading_my_projects: "Omat projektit",
    new_project_link: "+ Uusi projekti",
    admin_link_clients: "Asiakkaat",
    admin_link_people: "Henkilöt",
    empty_no_projects: "Ei vielä yhtään projektia — luo ensimmäinen yllä olevasta painikkeesta.",
    section_own_projects: "Omat projektit",
    section_org_all_projects: "kaikki projektit",
    section_other_orgs_projects: "Muiden organisaatioiden projektit",
    empty_not_involved: "Et ole vielä mukana yhdessäkään projektissa.",
    empty_org_no_projects: "Organisaatiossa ei ole vielä projekteja.",
    involved_badge: "Olet mukana",
    created_label: "Luotu",
  },
  en: {
    logout: "Log out",
    my_settings: "My settings",
    loading: "Loading…",
    language_label: "Language",
    language_fi: "Suomi",
    language_en: "English",
    role_app_admin: "Application administrator",
    role_org_admin: "Organization administrator",
    role_user: "User",

    page_title_projects: "Yhteisikkuna — My projects",
    heading_my_projects: "My projects",
    new_project_link: "+ New project",
    admin_link_clients: "Clients",
    admin_link_people: "People",
    empty_no_projects: "You don't have any projects yet — create your first one above.",
    section_own_projects: "My projects",
    section_org_all_projects: "all projects",
    section_other_orgs_projects: "Other organizations' projects",
    empty_not_involved: "You're not part of any project yet.",
    empty_org_no_projects: "This organization has no projects yet.",
    involved_badge: "You're involved",
    created_label: "Created",
  },
};

function getCurrentLanguage() {
  return localStorage.getItem('yhteisikkuna_lang') || 'fi';
}

function setCurrentLanguage(lang) {
  localStorage.setItem('yhteisikkuna_lang', lang);
}

// t(key, vars) — hakee käännöksen nykyisellä kielellä, tukee {{muuttuja}}-korvausta.
function t(key, vars) {
  const lang = getCurrentLanguage();
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fi;
  let text = dict[key] !== undefined ? dict[key] : (TRANSLATIONS.fi[key] !== undefined ? TRANSLATIONS.fi[key] : key);
  if (vars) {
    Object.keys(vars).forEach((k) => {
      text = text.replace(new RegExp('{{' + k + '}}', 'g'), vars[k]);
    });
  }
  return text;
}

// Kääntää kaikki [data-i18n="avain"] -merkityt staattiset elementit sivulla.
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.title = t(document.title.startsWith('__') ? document.title.slice(2) : document.title) || document.title;
}
