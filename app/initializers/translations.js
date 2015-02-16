import Ember from 'ember';
import ENV from '../config/environment';
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
      users: "Användare"
    },
    login: {
      password: "Lösenord",
      username: "Användarnamn",
      login: "Logga in"
    },
    nodes: {
      id: "ID",
      name: "Namn",
      new: "Skapa ny",
      create: "Skapa",
      edit: "Redigera",
      update: "Spara ändringar"
    },
    users: {
      id: "ID",
      name: "Namn",
      username: "Användarnamn",
      role: "Roll",
      email: "E-post",
      new: "Skapa ny",
      create: "Skapa användare",
      edit: "Redigera",
      update: "Spara ändringar"
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