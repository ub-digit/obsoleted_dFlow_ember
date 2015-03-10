import Ember from 'ember';
//import ENV from '../config/environment';
var TRANSLATIONS = {
  en: {
    other_lang: 'sv',
    main: {
      title: "Ember Demo Application",
      description: "Write description text here"
    }
  },
  sv: {
    other_lang: 'en',
    main: {
      title: "DFLOW",
      description: "Flödeshantering för digitalisering - Göteborgs Unviersitetsbibliotek"
    },
    menu: {
      login: "Logga in",
      logout: "Logga ut",
      nodes: "Träd",
      logged_in_as: "Inloggad som:",
      users: "Användare",
      jobs: "Jobblista"
    },
    login: {
      password: "Lösenord",
      username: "Användarnamn",
      login: "Logga in"
    },
    nodes: {
      id: "ID",
      name: "Namn",
      new: "Skapa ny nod",
      create: "Skapa",
      edit: "Redigera",
      update: "Spara ändringar",
      cancel: "Avbryt",
      children: {
        header: "Noder"
      },
      root: "Topp",
  	  new_parent_id: "ID på ny förälder",
  	  move_confirm_root: "Är du säker på att du vill flytta noden till toppnivå?",
  	  move_root_denied: "Du har inte rätt att flytta noder till toppnivå!",
  	  move_confirm: "Är du säker på att du vill flytta noden till",
  	  move_parent_not_found: "Kunde inte hitta destinationsnoden",
      delete: "Radera nod",
      confirm_delete: "Är du säker på att du vill radera noden och ALLA dess barn från systemet?"
    },
    users: {
      id: "ID",
      header: "Användare",
      name: "Namn",
      username: "Användarnamn",
      role: "Roll",
      email: "E-post",
      new: "Skapa ny användare",
      create: "Skapa användare",
      edit: "Redigera",
      update: "Spara ändringar",
      cancel: "Avbryt",
      delete: "Radera användare",
      confirm_delete: "Är du säker på att du vill radera användaren från systemet?"
    },
    sources: {
      formlabel: "Källa",
      id: "ID",
      name: "Namn",
      label: "etikett",
      fetch: "Hämta"
    },
    jobs: {
      header: "Jobb",
      new: "Skapa jobb",
      createsubmit: "Skapa jobb",
      source: "Källa",
      catalog_id: "ID",
      name: "Namn",
      title: "Titel",
      author: "Författare",
      copyright: "Copyright",
      comment: "Kommentarer",
      object_info: "Objektinformation",
      id: "ID",
      edit: "Redigera",
      breadcrumb: "Placering",
      copyright_values: {
        'unselected': "Välj",
        'true': "Ja",
        'false': "Nej"
      },
      print: "Utskrift",
      start: "Starta digitalisering",
      delete: "Radera jobb",
      confirm_delete: "Är du säker på att du vill radera jobbet från systemet?"
    },
    activityevent: {
      STATUS: 'Byte av status',
      CREATE: 'Jobb skapat'
    }
  }
};

// Initializes language support
var i18nInitializer = {
  name: 'i18n',
  initialize: function() {
    var lang = 'sv';
    var translation = Ember.$.extend(true, {}, TRANSLATIONS)[lang];
    Ember.I18n.translations = translation;
    Ember.I18n.allTranslations = TRANSLATIONS;
    Ember.FEATURES.I18N_TRANSLATE_HELPER_SPAN = false;
    Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS = true;
  }
};
export default i18nInitializer;
