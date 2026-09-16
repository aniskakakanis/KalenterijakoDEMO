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

    // projekti.html — yhteiset/toolbar
    back_all_projects: "Kaikki projektit",
    responsible_person: "Vastuuhenkilö",
    btn_new_group: "+ Uusi ryhmä",
    btn_add_participant: "+ Lisää osallistuja",
    btn_new_event: "+ Luo uusi tapahtuma",
    btn_refresh_schedules: "Päivitä aikataulut",
    btn_settings: "Asetukset",
    no_schedules_fetched: "Ei vielä haettuja aikatauluja",
    fetched_at: "Haettu",
    show_date: "Näytettävä päivä",
    today: "Tänään",
    jump_to_time: "Siirry ajankohtaan",
    jump: "Siirry",
    legend_busy: "Varattu",
    legend_free: "Vapaa",
    whole_project: "Koko projekti",
    section_people: "Projektin henkilöt",
    section_own_groups: "Omat ryhmät",
    section_project_groups: "Projektin ryhmät",
    empty_no_own_groups: "Ei vielä omia ryhmiä.",
    empty_no_project_groups: "Ei vielä projektin ryhmiä.",
    no_schedule_fetched_yet: "Ei vielä haettua aikataulua",
    own_group_label: "Oma ryhmä",
    project_group_label: "Projektin ryhmä",
    prompt_participant_email: "Osallistujan sähköposti:",
    invite_link_label: "Kutsulinkki",
    alert_no_authorized: "Ei vielä yhtään valtuutettua osallistujaa.",
    error_prefix: "Virhe",
    error_project_id_missing: "Virhe: projektin id puuttuu osoitteesta",

    // ryhmämodaalit
    modal_new_group: "Uusi ryhmä",
    group_name_label: "Ryhmän nimi",
    group_name_placeholder: "esim. Johtoryhmä",
    select_members: "Valitse jäsenet",
    cancel: "Peruuta",
    create_group: "Luo ryhmä",
    no_participants: "Ei osallistujia.",
    add_btn: "Lisää",
    selected_check: "Valittu ✓",
    group_visibility_label: "Ryhmän näkyvyys",
    close: "Sulje",
    no_members: "Ei jäseniä.",
    add_member: "Lisää jäsen",
    all_members_in_group: "Kaikki projektin jäsenet ovat jo tässä ryhmässä.",
    alert_group_name_required: "Anna ryhmälle nimi.",
    alert_group_member_required: "Valitse vähintään yksi jäsen.",

    // henkilön tiedot
    title_label: "Titteli",
    organization_label: "Organisaatio",
    email_label: "Sähköposti",
    role_label: "Rooli",
    calendar_status_label: "Kalenterin tila",
    role_admin: "Pääkäyttäjä",
    role_guest: "Vieras",
    cal_status_authorized: "Valtuutettu",
    cal_status_expired: "Vanhentunut",
    cal_status_pending: "Odottaa",
    calendar_tooltip_ok: "Kalenteritiedot ovat ajantasalla",
    calendar_tooltip_warn: "Kalenteritietoa ei ole jaettu",

    // Luo uusi tapahtuma
    modal_new_event: "Luo uusi tapahtuma",
    duration_minutes_label: "Kesto (minuuttia)",
    people_label: "Henkilöt",
    groups_label: "Ryhmät",
    required_btn: "Pakollinen",
    optional_btn: "Valinnainen",
    no_groups: "Ei ryhmiä.",
    schedule_between_label: "Järjestä tapahtuma välillä",
    prefer_time_label: "Preferoi kellonaikaa (valinnainen)",
    prefer_morning: "Aamu 08–11",
    prefer_midday: "Päivä 11–14",
    prefer_afternoon: "Iltapäivä 14–17",
    search_times: "Hae ajat",
    alert_select_attendee: "Valitse vähintään yksi henkilö tai ryhmä.",
    alert_no_slots_found: "Sopivaa aikaa ei löytynyt annetuilla ehdoilla — kokeile laajentaa hakuväliä tai vähentää pakollisia osallistujia.",
    suggested_times: "Ehdotetut ajat",
    add_more_people_groups: "+ Lisää ihmisiä / ryhmiä",

    // Asetukset-modaali
    modal_settings: "Asetukset",
    view_settings_label: "Näkymän asetukset",
    full_day_option: "Koko vuorokausi (0–24)",
    business_hours_option: "Työaika (9–17)",
    hide_weekends_label: "Piilota viikonloput",
    calendar_authorized_ok: "✓ Kalenteri on valtuutettu.",
    last_updated_label: "Päivitetty viimeksi",
    revoke_auth_btn: "Poista valtuutus",
    calendar_expired_warn: "Microsoft-valtuutus vanhentunut. Hae uudestaan.",
    retry_auth_btn: "Hae uudestaan",
    calendar_not_authorized: "Kalenteria ei ole vielä valtuutettu.",
    grant_calendar_access: "Anna lupa nähdä kalenterisi saatavilla/kiireinen ajat",
    show_calendar_to_others: "Näytä kalenterini muille näinä ajankohtina",
    show_calendar_note: "Jos et aktivoi yhtään päivää, kalenterisi näkyy muille aina.",
    add_time_range: "+ Lisää kellonaika",
    restrict_visibility_label: "Rajoita kalenterin näkyvyys projektille tiettynä ajankohtana",
    add_new_btn: "+ Lisää uusi",
    no_blackouts: "Ei rajoitusjaksoja.",
    hide_calendar_fully: "Rajoita kalenterini näkyminen projektille",
    save_btn: "Tallenna",
    leave_project_btn: "Poistu projektista",
    confirm_revoke_auth: "Poistetaanko kalenterivaltuutus? Muut eivät voi enää nähdä aikataulujasi tässä projektissa, ennen kuin annat luvan uudelleen.",
    confirm_leave_project: "Haluatko varmasti poistua tästä projektista? Tätä ei voi perua.",

    // vanhentumispopup
    modal_calendar_expired: "Kalenterivaltuutus vanhentunut",
    calendar_expired_body: "Projektin {{projectName}} Microsoft-valtuutus on vanhentunut. Liitä kalenteri sovellukseen alta.",
    attach_calendar_btn: "Liitä kalenteri",

    weekday_short_mon: "Ma", weekday_short_tue: "Ti", weekday_short_wed: "Ke", weekday_short_thu: "To",
    weekday_short_fri: "Pe", weekday_short_sat: "La", weekday_short_sun: "Su",
    weekday_full_mon: "maanantai", weekday_full_tue: "tiistai", weekday_full_wed: "keskiviikko", weekday_full_thu: "torstai",
    weekday_full_fri: "perjantai", weekday_full_sat: "lauantai", weekday_full_sun: "sunnuntai",
    month_1: "tammikuuta", month_2: "helmikuuta", month_3: "maaliskuuta", month_4: "huhtikuuta",
    month_5: "toukokuuta", month_6: "kesäkuuta", month_7: "heinäkuuta", month_8: "elokuuta",
    month_9: "syyskuuta", month_10: "lokakuuta", month_11: "marraskuuta", month_12: "joulukuuta",
  },
  en: {
    created_label: "Created",

    back_all_projects: "All projects",
    responsible_person: "Owner",
    btn_new_group: "+ New group",
    btn_add_participant: "+ Add participant",
    btn_new_event: "+ Create new event",
    btn_refresh_schedules: "Refresh schedules",
    btn_settings: "Settings",
    no_schedules_fetched: "No schedules fetched yet",
    fetched_at: "Fetched",
    show_date: "Show date",
    today: "Today",
    jump_to_time: "Jump to time",
    jump: "Jump",
    legend_busy: "Busy",
    legend_free: "Free",
    whole_project: "Whole project",
    section_people: "Project people",
    section_own_groups: "My groups",
    section_project_groups: "Project groups",
    empty_no_own_groups: "No groups yet.",
    empty_no_project_groups: "No project groups yet.",
    no_schedule_fetched_yet: "No schedule fetched yet",
    own_group_label: "My group",
    project_group_label: "Project group",
    prompt_participant_email: "Participant's email:",
    invite_link_label: "Invite link",
    alert_no_authorized: "No authorized participants yet.",
    error_prefix: "Error",
    error_project_id_missing: "Error: project id missing from address",

    modal_new_group: "New group",
    group_name_label: "Group name",
    group_name_placeholder: "e.g. Steering group",
    select_members: "Select members",
    cancel: "Cancel",
    create_group: "Create group",
    no_participants: "No participants.",
    add_btn: "Add",
    selected_check: "Selected ✓",
    group_visibility_label: "Group visibility",
    close: "Close",
    no_members: "No members.",
    add_member: "Add member",
    all_members_in_group: "All project members are already in this group.",
    alert_group_name_required: "Please give the group a name.",
    alert_group_member_required: "Select at least one member.",

    title_label: "Title",
    organization_label: "Organization",
    email_label: "Email",
    role_label: "Role",
    calendar_status_label: "Calendar status",
    role_admin: "Admin",
    role_guest: "Guest",
    cal_status_authorized: "Authorized",
    cal_status_expired: "Expired",
    cal_status_pending: "Pending",
    calendar_tooltip_ok: "Calendar data is up to date",
    calendar_tooltip_warn: "No calendar data shared",

    modal_new_event: "Create new event",
    duration_minutes_label: "Duration (minutes)",
    people_label: "People",
    groups_label: "Groups",
    required_btn: "Required",
    optional_btn: "Optional",
    no_groups: "No groups.",
    schedule_between_label: "Schedule the event between",
    prefer_time_label: "Preferred time of day (optional)",
    prefer_morning: "Morning 08–11",
    prefer_midday: "Midday 11–14",
    prefer_afternoon: "Afternoon 14–17",
    search_times: "Find times",
    alert_select_attendee: "Select at least one person or group.",
    alert_no_slots_found: "No suitable time found with these conditions — try widening the search range or reducing required attendees.",
    suggested_times: "Suggested times",
    add_more_people_groups: "+ Add more people / groups",

    modal_settings: "Settings",
    view_settings_label: "View settings",
    full_day_option: "Full day (0–24)",
    business_hours_option: "Business hours (9–17)",
    hide_weekends_label: "Hide weekends",
    calendar_authorized_ok: "✓ Calendar is authorized.",
    last_updated_label: "Last updated",
    revoke_auth_btn: "Revoke authorization",
    calendar_expired_warn: "Microsoft authorization expired. Reauthorize.",
    retry_auth_btn: "Reauthorize",
    calendar_not_authorized: "Calendar is not yet authorized.",
    grant_calendar_access: "Allow the app to see your free/busy times",
    show_calendar_to_others: "Show my calendar to others at these times",
    show_calendar_note: "If you don't enable any day, your calendar is always visible to others.",
    add_time_range: "+ Add time range",
    restrict_visibility_label: "Restrict calendar visibility for the project at a specific time",
    add_new_btn: "+ Add new",
    no_blackouts: "No blackout periods.",
    hide_calendar_fully: "Restrict my calendar from being visible to the project",
    save_btn: "Save",
    leave_project_btn: "Leave project",
    confirm_revoke_auth: "Revoke calendar authorization? Others will no longer see your schedule in this project until you authorize again.",
    confirm_leave_project: "Are you sure you want to leave this project? This cannot be undone.",

    modal_calendar_expired: "Calendar authorization expired",
    calendar_expired_body: "The Microsoft authorization for project {{projectName}} has expired. Reattach your calendar below.",
    attach_calendar_btn: "Attach calendar",

    weekday_short_mon: "Mon", weekday_short_tue: "Tue", weekday_short_wed: "Wed", weekday_short_thu: "Thu",
    weekday_short_fri: "Fri", weekday_short_sat: "Sat", weekday_short_sun: "Sun",
    weekday_full_mon: "Monday", weekday_full_tue: "Tuesday", weekday_full_wed: "Wednesday", weekday_full_thu: "Thursday",
    weekday_full_fri: "Friday", weekday_full_sat: "Saturday", weekday_full_sun: "Sunday",
    month_1: "January", month_2: "February", month_3: "March", month_4: "April",
    month_5: "May", month_6: "June", month_7: "July", month_8: "August",
    month_9: "September", month_10: "October", month_11: "November", month_12: "December",

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
