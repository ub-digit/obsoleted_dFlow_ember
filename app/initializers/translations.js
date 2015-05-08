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
      jobs: "Jobblista",
      quarantine: "Karantän"
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
      fetch: "Hämta",
      dc: {
        title: "DC Title",
        creator: "DC Creator",
        subject: "DC Subject",
        description: "DC Description",
        publisher: "DC Publisher",
        contributor: "DC Contributor",
        date: "DC Date",
        type: "DC Type",
        format: "DC Format",
        identifier: "DC Identifier",
        source: "DC Source",
        language: "DC Language",
        relation: "DC Relation",
        coverage: "DC Coverage",
        rights: "DC Rights"
      }
    },
    jobs: {
      header: "Jobb",
      new: "Skapa jobb",
      createsubmit: "Skapa jobb",
			cancel: "Avbryt",
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
      save: "Spara",
      breadcrumb: "Placering",
      copyright_values: {
        'unselected': "Välj",
        'true': "Får EJ publiceras",
        'false': "Får publiceras"
      },
			search: "Sök",
      print: "Utskrift",
      start: "Starta digitalisering",
      delete: "Radera jobb",
      confirm_delete: "Är du säker på att du vill radera jobbet från systemet?",
      type_of_record: {
        label: "Typ",
        am: "Monografi",
        as: "Periodika"
      },
      status: "Status",
      message: "Meddelande",
      statuses: {
        waiting_for_digitizing: "Väntar på digitalisering",
        digitizing: "Digitalisering pågår",
        post_processing: "Efterbearbetning",
        post_processing_user_input: "Manuell efterbearbetning",
        quality_control: "Kvalitetskontroll",
        waiting_for_package_metadata_import: "Väntar på metadataimport",
        package_metadata_import: "Importerar metadata",
        mets_control: "Metskontroll",
        mets_production: "Metsproduktion",
        waiting_for_mets_control: "Väntar på metskontroll",
        done: "Klar!"
      },
      history: "Historik",
			other: "Övrigt",
      xml: "XML",
      ordinality: "Ordinalitet",
      chronology: "Kronologi",
      quarantine: "Sätt i karantän",
      unQuarantine: "Ta ur karantän",
      qualityControl: "Kvalitetskontroll OK"
    },
    activityevent: {
      STATUS: 'Byte av status',
      CREATE: 'Jobb skapat',
      QUARANTINE: 'Satt i karantän',
      UNQUARANTINE: 'Plockats ur karantän',
      RESTART: 'Startats om'
    },
    activitymessage: {
      UNQUARANTINED: '',
      ACTIVITY_CREATED: ''
    }
  }
};

// Adds support for translatable properties, i.e. placeholderTranslation='key'
Ember.View.reopen(Ember.I18n.TranslateableAttributes);

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
    moment.locale(lang);
  }
};
export default i18nInitializer;
