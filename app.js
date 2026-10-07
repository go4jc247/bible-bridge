document.getElementById("spLogo").src=IMG.logo;


var ICONS={"home": "<path d=\"M5 12l-2 0l9 -9l9 9l-2 0\" /> <path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\" /> <path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\" />", "book-2": "<path d=\"M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12\" /> <path d=\"M19 16h-12a2 2 0 0 0 -2 2\" /> <path d=\"M9 8h6\" />", "calendar-event": "<path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12\" /> <path d=\"M16 3l0 4\" /> <path d=\"M8 3l0 4\" /> <path d=\"M4 11l16 0\" /> <path d=\"M8 15h2v2h-2l0 -2\" />", "settings": "<path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065\" /> <path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" />", "headphones": "<path d=\"M4 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3\" /> <path d=\"M15 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3\" /> <path d=\"M4 15v-3a8 8 0 0 1 16 0v3\" />", "chevron-right": "<path d=\"M9 6l6 6l-6 6\" />", "chevron-down": "<path d=\"M6 9l6 6l6 -6\" />", "chevron-left": "<path d=\"M15 6l-6 6l6 6\" />", "arrow-left": "<path d=\"M5 12l14 0\" /> <path d=\"M5 12l6 6\" /> <path d=\"M5 12l6 -6\" />", "plus": "<path d=\"M12 5l0 14\" /> <path d=\"M5 12l14 0\" />", "trash": "<path d=\"M4 7l16 0\" /> <path d=\"M10 11l0 6\" /> <path d=\"M14 11l0 6\" /> <path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" /> <path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" />", "check": "<path d=\"M5 12l5 5l10 -10\" />", "search": "<path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /> <path d=\"M21 21l-6 -6\" />", "x": "<path d=\"M18 6l-12 12\" /> <path d=\"M6 6l12 12\" />", "world": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /> <path d=\"M3.6 9h16.8\" /> <path d=\"M3.6 15h16.8\" /> <path d=\"M11.5 3a17 17 0 0 0 0 18\" /> <path d=\"M12.5 3a17 17 0 0 1 0 18\" />", "circle-check": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /> <path d=\"M9 12l2 2l4 -4\" />", "sun-moon": "<path d=\"M9.173 14.83a4 4 0 1 1 5.657 -5.657\" /> <path d=\"M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914\" /> <path d=\"M3 12h1\" /> <path d=\"M12 3v1\" /> <path d=\"M5.6 5.6l.7 .7\" /> <path d=\"M3 21l18 -18\" />", "player-play": "<path d=\"M7 4v16l13 -8l-13 -8\" />", "alert-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /> <path d=\"M12 8v4\" /> <path d=\"M12 16h.01\" />", "dots": "<path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /> <path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /> <path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" />", "edit": "<path d=\"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1\" /> <path d=\"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415\" /> <path d=\"M16 5l3 3\" />", "refresh": "<path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /> <path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" />", "list-details": "<path d=\"M13 5h8\" /> <path d=\"M13 9h5\" /> <path d=\"M13 15h8\" /> <path d=\"M13 19h5\" /> <path d=\"M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /> <path d=\"M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" />", "language": "<path d=\"M9 6.371c0 4.418 -2.239 6.629 -5 6.629\" /> <path d=\"M4 6.371h7\" /> <path d=\"M5 9c0 2.144 2.252 3.908 6 4\" /> <path d=\"M12 20l4 -9l4 9\" /> <path d=\"M19.1 18h-6.2\" /> <path d=\"M6.694 3l.793 .582\" />"};
var TILES=IMG.tiles;
var BOOKICONS=IMG.bookicons;
var ROOT="https://www.biblegateway.com/audio/";

/* [url abbreviation, chapters, English, Russian] — first 39 are Old Testament */
var BOOKS=[
["Gen",50,"Genesis","Бытие"],["Exod",40,"Exodus","Исход"],["Lev",27,"Leviticus","Левит"],
["Num",36,"Numbers","Числа"],["Deut",34,"Deuteronomy","Второзаконие"],["Josh",24,"Joshua","Иисус Навин"],
["Judg",21,"Judges","Судьи"],["Ruth",4,"Ruth","Руфь"],["1 Sam",31,"1 Samuel","1 Царств"],
["2 Sam",24,"2 Samuel","2 Царств"],["1 Kgs",22,"1 Kings","3 Царств"],["2 Kgs",25,"2 Kings","4 Царств"],
["1 Chr",29,"1 Chronicles","1 Паралипоменон"],["2 Chr",36,"2 Chronicles","2 Паралипоменон"],["Ezra",10,"Ezra","Ездра"],
["Neh",13,"Nehemiah","Неемия"],["Esth",10,"Esther","Есфирь"],["Job",42,"Job","Иов"],
["Ps",150,"Psalms","Псалтирь"],["Prov",31,"Proverbs","Притчи"],["Eccl",12,"Ecclesiastes","Екклесиаст"],
["Song",8,"Song of Solomon","Песня Песней"],["Isa",66,"Isaiah","Исаия"],["Jer",52,"Jeremiah","Иеремия"],
["Lam",5,"Lamentations","Плач Иеремии"],["Ezek",48,"Ezekiel","Иезекииль"],["Dan",12,"Daniel","Даниил"],
["Hos",14,"Hosea","Осия"],["Joel",3,"Joel","Иоиль"],["Amos",9,"Amos","Амос"],
["Obad",1,"Obadiah","Авдий"],["Jonah",4,"Jonah","Иона"],["Mic",7,"Micah","Михей"],
["Nah",3,"Nahum","Наум"],["Hab",3,"Habakkuk","Аввакум"],["Zeph",3,"Zephaniah","Софония"],
["Hag",2,"Haggai","Аггей"],["Zech",14,"Zechariah","Захария"],["Mal",4,"Malachi","Малахия"],
["Matt",28,"Matthew","От Матфея"],["Mark",16,"Mark","От Марка"],["Luke",24,"Luke","От Луки"],
["John",21,"John","От Иоанна"],["Acts",28,"Acts","Деяния"],["Rom",16,"Romans","Римлянам"],
["1 Cor",16,"1 Corinthians","1 Коринфянам"],["2 Cor",13,"2 Corinthians","2 Коринфянам"],["Gal",6,"Galatians","Галатам"],
["Eph",6,"Ephesians","Ефесянам"],["Phil",4,"Philippians","Филиппийцам"],["Col",4,"Colossians","Колоссянам"],
["1 Thess",5,"1 Thessalonians","1 Фессалоникийцам"],["2 Thess",3,"2 Thessalonians","2 Фессалоникийцам"],
["1 Tim",6,"1 Timothy","1 Тимофею"],["2 Tim",4,"2 Timothy","2 Тимофею"],["Titus",3,"Titus","Титу"],
["Phlm",1,"Philemon","Филимону"],["Heb",13,"Hebrews","Евреям"],["Jas",5,"James","Иакова"],
["1 Pet",5,"1 Peter","1 Петра"],["2 Pet",3,"2 Peter","2 Петра"],["1 John",5,"1 John","1 Иоанна"],
["2 John",1,"2 John","2 Иоанна"],["3 John",1,"3 John","3 Иоанна"],["Jude",1,"Jude","Иуды"],
["Rev",22,"Revelation","Откровение"]
];
var OT_COUNT=39;

/* Audio languages and recordings. path = reader/version as used by BibleGateway. nt = New Testament only. */
var LANGS=[
 {id:"en",flag:"🇺🇸",nat:"English",en:"English",ru:"Английский",top:1},
 {id:"zh",flag:"🇨🇳",nat:"汉语",en:"Chinese",ru:"Китайский",top:1},
 {id:"es",flag:"🇪🇸",nat:"Español",en:"Spanish",ru:"Испанский",top:1},
 {id:"ar",flag:"🇸🇦",nat:"العربية",en:"Arabic",ru:"Арабский",top:1},
 {id:"pt",flag:"🇧🇷",nat:"Português",en:"Portuguese",ru:"Португальский",top:1},
 {id:"ru",flag:"🇷🇺",nat:"Русский",en:"Russian",ru:"Русский",top:1},
 {id:"fr",flag:"🇫🇷",nat:"Français",en:"French",ru:"Французский",top:1},
 {id:"de",flag:"🇩🇪",nat:"Deutsch",en:"German",ru:"Немецкий",top:1},
 {id:"ja",flag:"🇯🇵",nat:"日本語",en:"Japanese",ru:"Японский",top:1},
 {id:"cs",flag:"🇨🇿",nat:"Čeština",en:"Czech",ru:"Чешский"},
 {id:"fa",flag:"🇮🇷",nat:"فارسی",en:"Persian (Farsi)",ru:"Персидский (фарси)"},
 {id:"pdt",flag:"🌐",nat:"Plautdietsch",en:"Plautdietsch",ru:"Плаутдич"},
 {id:"ro",flag:"🇷🇴",nat:"Română",en:"Romanian",ru:"Румынский"},
 {id:"sk",flag:"🇸🇰",nat:"Slovenčina",en:"Slovak",ru:"Словацкий"},
 {id:"sw",flag:"🇰🇪",nat:"Kiswahili",en:"Swahili",ru:"Суахили"},
 {id:"sv",flag:"🇸🇪",nat:"Svenska",en:"Swedish",ru:"Шведский"},
 {id:"th",flag:"🇹🇭",nat:"ภาษาไทย",en:"Thai",ru:"Тайский"}
];
/* path = reader/version as used in BibleGateway audio links. nt = New Testament only.
   Some paths are best guesses; if a link fails, only that line needs correcting. */
var VERSIONS=[
 {id:"esv-mclean",lang:"en",label:"ESV · Max McLean",path:"mclean/esv"},
 {id:"esv-heath",lang:"en",label:"ESV · David Cochran Heath",path:"heath/esv"},
 {id:"esv-laughlin",lang:"en",label:"ESV · Marquis Laughlin (NT)",path:"laughlin/esv",nt:1},
 {id:"niv-mclean",lang:"en",label:"NIV · Max McLean",path:"mclean/niv"},
 {id:"niv-dramatized",lang:"en",label:"NIV · Dramatized",path:"dramatized/niv"},
 {id:"niv-sarris",lang:"en",label:"NIV · George W. Sarris",path:"sarris/niv"},
 {id:"nivuk-suchet",lang:"en",label:"NIVUK · David Suchet",path:"suchet/nivuk"},
 {id:"kjv-mims",lang:"en",label:"KJV · Paul Mims",path:"mims/kjv"},
 {id:"kjv-mclean",lang:"en",label:"KJV · Max McLean",path:"mclean/kjv"},
 {id:"kjv-dramatized",lang:"en",label:"KJV · Dramatized",path:"dramatized/kjv"},
 {id:"nkjv-bubb",lang:"en",label:"NKJV · Simon Bubb",path:"bubb/nkjv"},
 {id:"nkjv-laraye",lang:"en",label:"NKJV · Tinasha LaRaye",path:"laraye/nkjv"},
 {id:"nasb-mcconachie",lang:"en",label:"NASB · Dale McConachie",path:"mcconachie/nasb"},
 {id:"nasb95-mcconachie",lang:"en",label:"NASB1995 · Dale McConachie",path:"mcconachie/nasb1995"},
 {id:"csb-mohr",lang:"en",label:"CSB · Jon Mohr",path:"mohr/csb"},
 {id:"hcsb-mcconachie",lang:"en",label:"HCSB · Dale McConachie",path:"mcconachie/hcsb"},
 {id:"nlt-breathe",lang:"en",label:"NLT · Breathe",path:"breathe/nlt"},
 {id:"msg-dolan",lang:"en",label:"MSG · Kelly Ryan Dolan",path:"dolan/msg"},
 {id:"gnv-cook",lang:"en",label:"GNV · Steve Cook",path:"cook/gnv"},
 {id:"leb-logos",lang:"en",label:"LEB · Logos (NT)",path:"logos/leb",nt:1},
 {id:"app-kjv",lang:"en",label:"KJV · In-app reader",app:"kjv"},
 {id:"app-web",lang:"en",label:"WEB · In-app reader",app:"web",noaudio:1},
 {id:"app-bsb",lang:"en",label:"BSB · In-app reader",app:"bsb",noaudio:1},
 {id:"app-asv",lang:"en",label:"ASV · In-app reader",app:"asv",noaudio:1},
 {id:"app-darby",lang:"en",label:"DBY · In-app reader",app:"darby",noaudio:1},
 {id:"app-webster",lang:"en",label:"WBS · In-app reader",app:"webster",noaudio:1},
 {id:"app-ylt",lang:"en",label:"YLT · In-app reader",app:"ylt",noaudio:1},
 {id:"ccb-biblica",lang:"zh",label:"CCB · Biblica",path:"biblica/ccb"},
 {id:"ccbt-biblica",lang:"zh",label:"CCBT · Biblica",path:"biblica/ccbt"},
 {id:"csbs-hao",lang:"zh",label:"CSBS · Ran Hao (NT)",path:"hao/csbs",nt:1},
 {id:"csbt-hao",lang:"zh",label:"CSBT · Ran Hao (NT)",path:"hao/csbt",nt:1},
 {id:"lbla-montoya",lang:"es",label:"LBLA · Samuel Montoya H (NT)",path:"montoya/lbla",nt:1},
 {id:"nvi-cruz",lang:"es",label:"NVI · Rafael Cruz",path:"cruz/nvi"},
 {id:"nvi-ev",lang:"es",label:"NVI · Experiencia Viva (NT)",path:"ev/nvi",nt:1},
 {id:"app-rv1909",lang:"es",label:"RV1909 · In-app reader",app:"rv1909",noaudio:1},
 {id:"nav-biblica",lang:"ar",label:"NAV · Biblica",path:"biblica/nav"},
 {id:"nvipt-biblica",lang:"pt",label:"NVI-PT · Biblica",path:"biblica/nvipt"},
 {id:"rst-isa",lang:"ru",label:"Синодальный (RUSV) · Чтец · ISA · Digital Bible Society",bg:"RUSV",src:"dbs",home:"https://dbs.org/bibles/audio/RUSS76_ISA_FB_N"},
 {id:"rst-fcbh",lang:"ru",label:"Синодальный (RUSV) · Драматизированный · Faith Comes By Hearing",bg:"RUSV",src:"fcbh",home:"https://live.bible.is/bible/RUSSYN"},
 {id:"nrt-biblica",lang:"ru",label:"NRT · Biblica",path:"biblica/nrt"},
 {id:"app-rst",lang:"ru",label:"RST · In-app reader",app:"rst"},
 {id:"bds-biblica",lang:"fr",label:"BDS · Biblica",path:"biblica/bds"},
 {id:"hof-biblica",lang:"de",label:"HOF · Biblica",path:"biblica/hof"},
 {id:"jlb-biblica",lang:"ja",label:"JLB · Biblica (NT)",path:"biblica/jlb",nt:1},
 {id:"bk-hodul",lang:"cs",label:"BK · Joseph Hodul (NT)",path:"hodul/bk",nt:1},
 {id:"farsi-as",lang:"fa",label:"Farsi · Audio Scriptures",path:"as/farsi"},
 {id:"reimer",lang:"pdt",label:"REIMER · Elmer Reimer",path:"reimer/reimer"},
 {id:"ntlr-biblica",lang:"ro",label:"NTLR · Biblica",path:"biblica/ntlr"},
 {id:"slo1979-hodul",lang:"sk",label:"SLO1979 · Joseph Hodul (NT)",path:"hodul/slo1979",nt:1},
 {id:"snt-biblica",lang:"sw",label:"SNT · Biblica (NT)",path:"biblica/snt",nt:1},
 {id:"sfb",lang:"sv",label:"SFB · Svenska Folkbibeln",path:"sfb/sfb"},
 {id:"sfb15",lang:"sv",label:"SFB15 · Svenska Folkbibeln",path:"sfb/sfb15"},
 {id:"tncv-biblica",lang:"th",label:"TNCV · Biblica",path:"biblica/tncv"}
];


var USFM=["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA","1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO","ECC","SNG","ISA","JER","LAM","EZK","DAN","HOS","JOL","AMO","OBA","JON","MIC","NAM","HAB","ZEP","HAG","ZEC","MAL","MAT","MRK","LUK","JHN","ACT","ROM","1CO","2CO","GAL","EPH","PHP","COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAS","1PE","2PE","1JN","2JN","3JN","JUD","REV"];
function pad(n,w){return String(n).padStart(w,"0")}
function bgCode(v){return v.bg||v.label.split(" ")[0]}
function readUrl(v,i,ch){
  return "https://www.biblegateway.com/passage/?search="+encodeURIComponent(BEN[i]+" "+ch)+"&version="+encodeURIComponent(bgCode(v));
}
function chapterUrl(v,i,ch){
  var b=BOOKS[i];
  if(v.src==="dbs"){
    var nm=pad(i+1,2)+"_"+BEN[i].replace(/ /g,"");
    return "https://dbs.org/cdn/audio/RUSS76_ISA_FB_N/"+(i<OT_COUNT?"OT":"NT")+"_RUSS76/"+nm+"/"+nm+"_"+pad(ch,3)+".mp3";
  }
  if(v.src==="fcbh")return "https://live.bible.is/bible/RUSSYN/"+USFM[i]+"/"+ch;
  return ROOT+v.path+"/"+encodeURIComponent(b[0])+"."+ch;
}



var COLORS=["#2f5a3a","#b5622b","#1f5f7a","#3a5f7d","#9a7a46","#5a3f86","#4a6b34","#a8742a","#2f5f93","#2c4f72","#1f7a73","#9a5522","#85353a","#5d3d7a","#2c5348"];
var GCOLORS=["#3f7d4e","#c4622d","#2f6f9a","#7a4fa0","#b8862b"];
var QUICK=[["Law",0,4],["History",5,16],["Poetry",17,21],["Major Prophets",22,26],["Minor Prophets",27,38],["Gospels",39,42],["Acts",43,43],["Paul\u2019s letters",44,56],["General letters",57,64],["Revelation",65,65],["Whole Old Testament",0,38],["Whole New Testament",39,65]];
var PRESETS=[
 {id:"cover",cat:"whole",name:"Cover to cover in a year",days:365,groups:[rng(0,65)],desc:"Genesis to Revelation in order, about 3 chapters a day"},
 {id:"year",cat:"whole",name:"Bible in a year",days:365,groups:[rng(0,16),rng(17,21),rng(22,38),rng(39,65)],desc:"4 groups: Law and History, Poetry, Prophets, New Testament"},
 {id:"weave",cat:"whole",name:"Interwoven year",days:365,groups:[rng(0,16),rng(22,38),[18],[17,19,20,21],rng(39,65)],desc:"5 tracks side by side: Law and History, Prophets, Psalms, Wisdom, New Testament. Psalms and Wisdom days are lighter"},
 {id:"chron",cat:"whole",name:"Chronological (by book)",days:365,order:"picked",groups:[[0,17,1,2,3,4,5,6,7,8,9,12,18,19,20,21,10,11,13,30,28,31,29,27,22,32,33,35,23,24,34,26,25,14,36,37,16,15,38,39,40,41,42,43,58,47,51,52,45,46,44,48,49,50,56,53,55,54,59,60,57,64,61,62,63,65]],desc:"Books arranged in the order events happened, such as Job beside Genesis and the prophets beside the kings. Books stay whole, so this is an approximation"},
 {id:"mcheyne",cat:"whole",name:"M\u2019Cheyne-style, 4 tracks",days:365,order:"picked",groups:[rng(0,16),[17].concat(rng(19,38)),rng(39,65).concat([18]),[18].concat(rng(39,65))],desc:"Old Testament once; New Testament and Psalms twice. An adaptation of Robert Murray M\u2019Cheyne\u2019s classic plan, using whole chapters"},
 {id:"bible90",cat:"whole",name:"Whole Bible in 90 days",days:90,groups:[rng(0,65)],desc:"Genesis to Revelation, about 13 chapters a day"},
 {id:"ot365",cat:"ot",name:"Old Testament in a year",days:365,groups:[rng(0,38)],desc:"Genesis to Malachi, about 2\u20133 chapters a day"},
 {id:"ps30",cat:"ot",name:"Psalms in 30 days",days:30,groups:[[18]],desc:"All 150 psalms, 5 a day"},
 {id:"prov31",cat:"ot",name:"Proverbs in 31 days",days:31,groups:[[19]],desc:"About one chapter of Proverbs a day"},
 {id:"psprov60",cat:"ot",name:"Psalms and Proverbs in 60 days",days:60,groups:[[18],[19]],desc:"2 tracks: Psalms about 2\u20133 a day, Proverbs about half a chapter a day"},
 {id:"gos30",cat:"nt",name:"Gospels in 30 days",days:30,groups:[rng(39,42)],desc:"Matthew to John, about 3 chapters a day"},
 {id:"paul30",cat:"nt",name:"Paul\u2019s letters in 30 days",days:30,groups:[rng(44,56)],desc:"Romans to Philemon, about 3 chapters a day"},
 {id:"nt90",cat:"nt",name:"New Testament in 90 days",days:90,groups:[rng(39,65)],desc:"Matthew to Revelation, about 3 chapters a day"},
 {id:"nt180",cat:"nt",name:"New Testament in 6 months",days:180,groups:[rng(39,65)],desc:"Matthew to Revelation, about 1\u20132 chapters a day"}
];
var PCATS=[["whole","Whole Bible"],["ot","Old Testament only"],["nt","New Testament only"]];
function rng(a,b){var r=[];for(var i=a;i<=b;i++)r.push(i);return r}

/* ---------- interface language ---------- */
var I18N={
ru:{
"John in 10 days":"Иоанн за 10 дней","Daily mix (sample)":"Ежедневный микс (пример)","New Testament in 90 days":"Новый Завет за 90 дней","Bible in a year":"Библия за год",
"Rest day":"День отдыха","No audio for this book in the selected recording":"В выбранной записи нет аудио для этой книги",", read":", читать",", listen":", слушать",
"Rest day for this group":"В этой группе день отдыха","Audio plays the whole chapter.":"Аудио воспроизводит всю главу. Выберите «Читать», чтобы открыть только эти стихи.",
"Listen":"Слушать","Read":"Читать","When I tap a chapter":"При нажатии на главу",
"This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.":"В этой записи только Новый Завет. Главы Ветхого Завета затемнены. Смените версию или выберите «Читать».",
" days \u00b7 ":" дн. \u00b7 "," group":" гр."," groups":" гр.","Version":"Версия","No active plan":"Нет активного плана","Start a ready-made plan below or build your own with up to five groups of books.":"Начните готовый план ниже или создайте свой, до пяти групп книг.",
"Starts ":"Начало: ","Plan ended ":"План завершён ","Today":"Сегодня","Earlier day":"Прошедший день","Coming up":"Впереди","Previous day":"Предыдущий день","Day ":"День "," of ":" из ","Next day":"Следующий день",
"Done \u2713 (tap to undo)":"Готово \u2713 (нажмите, чтобы отменить)","Mark day done":"Отметить день выполненным","Plan progress":"Прогресс плана"," days":" дн.","Go to today":"К сегодняшнему дню","View full plan":"Весь план",
"My plans":"Мои планы","No plans yet.":"Планов пока нет.","Active":"Активный"," \u00b7 starts ":" \u00b7 начало "," days done":" дн. выполнено","Create your own plan":"Создать свой план","Ready-made plans":"Готовые планы",
"Reset plans?":"Сбросить планы?","This removes all your plans and progress.":"Все ваши планы и прогресс будут удалены.","Reset":"Сбросить","Reset plans":"Сбросить планы",
"Bible language":"Язык аудио","Bible version":"Версия и чтец","Language":"Язык меню","Search":"Поиск","Search books":"Поиск книг","Old Testament":"Ветхий Завет","New Testament":"Новый Завет",
"No books match your search.":"Книги не найдены.","Close":"Закрыть","Choose a chapter. It opens the text on BibleGateway in a new tab.":"Выберите главу. Текст откроется на BibleGateway в новой вкладке.",
" \u00b7 choose a chapter. It opens in a new tab.":" \u00b7 выберите главу. Откроется в новой вкладке.","Link not working? Open the full recording page":"Ссылка не работает? Откройте страницу записи",
"Popular languages":"Популярные языки","All other languages":"Остальные языки","Showing ":"Показаны записи: "," recordings. Change the audio language on the Whole Bible tab.":". Язык аудио можно сменить на вкладке «Вся Библия».","New Testament only":"Только Новый Завет",
"Cancel":"Отмена","Start date":"Дата начала","Choose a start date.":"Выберите дату начала.","Plan started":"План начат","Start plan":"Начать план","Back":"Назад"," done":" выполнено","Group ":"Группа ",
"Active plan":"Активный план","Set as active plan":"Сделать активным","Set as active":"Сделать активным","Delete plan?":"Удалить план?","\u201d and its progress will be removed.":"\u201d и его прогресс будут удалены.","Delete plan":"Удалить план","Plan deleted":"План удалён","Delete":"Удалить",
"Mark day ":"Отметить день "," \u00b7 Today":" \u00b7 Сегодня"," today":" сегодня","New plan":"Новый план","Step ":"Шаг ","Next":"Далее","Name and timeframe":"Название и срок","My reading plan":"Мой план чтения","Plan name":"Название плана",
"1 week":"1 неделя","2 weeks":"2 недели","30 days":"30 дней","60 days":"60 дней","90 days":"90 дней","6 months":"6 месяцев","1 year":"1 год","How long?":"Как долго?","Number of days":"Количество дней","Ends ":"Конец: ","Enter the number of days.":"Введите количество дней.",
"Pick your groups":"Выберите группы","Each day you\u2019ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.":"Каждый день вы читаете понемногу из каждой группы. Группы равномерно распределены на весь срок и заканчиваются одновременно.",
"Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.":"Порции — целые главы. Притчи разделены на короткие отрывки примерно по 10\u201315 стихов.",
"Remove ":"Убрать "," chapters":" гл.","No books yet":"Книг пока нет","Remove group ":"Удалить группу ","Edit books":"Изменить книги","Add books":"Добавить книги","Add group (":"Добавить группу (",
"Reading order inside a group":"Порядок чтения внутри группы","Reading order":"Порядок чтения","Bible order":"Порядок Библии","Order I picked":"Мой порядок"," books":" кн."," book":" кн.","Quick picks":"Быстрый выбор","Or choose books":"Или выберите книги","Already in another group":"Уже в другой группе",
"Done \u00b7 ":"Готово \u00b7 ","Enter a number of days from 1 to 1000.":"Введите число дней от 1 до 1000.","Add books to at least one group.":"Добавьте книги хотя бы в одну группу."," has no books. Add some or remove the group.":" не содержит книг. Добавьте книги или удалите группу.",
"about ":"около "," ch/day":" гл./день"," ch total \u00b7 on ":" гл. всего \u00b7 в течение "," fewer chapters than days, so there will be rest days for ":" глав меньше, чем дней, поэтому будут дни отдыха для ","those groups":"этих групп","that group":"этой группы","First days":"Первые дни","Last day: every group ends on day ":"Последний день: все группы заканчиваются в день ",
"Reading plans":"Планы чтения","Whole Bible":"Вся Библия","Poetry":"Поэзия","Law":"Закон","Gospels":"Евангелия","Psalms":"Псалмы","Proverbs":"Притчи","Choose a chapter":"Выберите главу","Chapter":"Глава","Plan":"План"
,
"History":"История","Major Prophets":"Большие пророки","Minor Prophets":"Малые пророки","Acts":"Деяния","Paul\u2019s letters":"Послания Павла","General letters":"Соборные послания","Revelation":"Откровение","Whole Old Testament":"Весь Ветхий Завет","Whole New Testament":"Весь Новый Завет","One gospel, about 2 chapters a day":"Одно Евангелие, около 2 глав в день","Matthew to Revelation, about 3 chapters a day":"От Матфея до Откровения, около 3 глав в день","4 groups: Law and History, Poetry, Prophets, New Testament":"4 группы: Закон и история, поэзия, пророки, Новый Завет"
}
};
function uiLang(){return (typeof state!=="undefined"&&state&&state.prefs&&state.prefs.ui)||"en"}
function _(s){var d=I18N[uiLang()];return d&&typeof s==="string"&&d[s]!=null?d[s]:s}
var BEN=BOOKS.map(function(b){return b[2]});
var BN={ru:BOOKS.map(function(b){return b[3]})};
var I18N_X={"es": {"John in 10 days": "Juan en 10 días", "Daily mix (sample)": "Mezcla diaria (ejemplo)", "New Testament in 90 days": "Nuevo Testamento en 90 días", "Bible in a year": "La Biblia en un año", "Rest day": "Día de descanso", "No audio for this book in the selected recording": "No hay audio de este libro en la grabación seleccionada", ", read": ", leer", ", listen": ", escuchar", "Rest day for this group": "Día de descanso para este grupo", "Audio plays the whole chapter.": "El audio reproduce el capítulo completo. Elige Leer para abrir solo estos versículos.", "Listen": "Escuchar", "Read": "Leer", "When I tap a chapter": "Al tocar un capítulo", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Esta grabación solo tiene el Nuevo Testamento. Los capítulos del Antiguo Testamento aparecen atenuados. Cambia de versión o elige Leer.", " days · ": " días · ", " group": " grupo", " groups": " grupos", "Version": "Versión", "No active plan": "Ningún plan activo", "Start a ready-made plan below or build your own with up to five groups of books.": "Empieza un plan prediseñado abajo o crea el tuyo con hasta cinco grupos de libros.", "Starts ": "Empieza el ", "Plan ended ": "El plan terminó el ", "Today": "Hoy", "Earlier day": "Día pasado", "Coming up": "Próximamente", "Previous day": "Día anterior", "Day ": "Día ", " of ": " de ", "Next day": "Día siguiente", "Done ✓ (tap to undo)": "Hecho ✓ (toca para deshacer)", "Mark day done": "Marcar día como hecho", "Plan progress": "Progreso del plan", " days": " días", "Go to today": "Ir a hoy", "View full plan": "Ver plan completo", "My plans": "Mis planes", "No plans yet.": "Aún no hay planes.", "Active": "Activo", " · starts ": " · empieza el ", " days done": " días completados", "Create your own plan": "Crea tu propio plan", "Ready-made plans": "Planes prediseñados", "Reset plans?": "¿Restablecer los planes?", "This removes all your plans and progress.": "Esto elimina todos tus planes y tu progreso.", "Reset": "Restablecer", "Reset plans": "Restablecer planes", "Bible language": "Idioma del audio", "Bible version": "Versión y lector", "Language": "Idioma del menú", "Search": "Buscar", "Search books": "Buscar libros", "Old Testament": "Antiguo Testamento", "New Testament": "Nuevo Testamento", "No books match your search.": "Ningún libro coincide con tu búsqueda.", "Close": "Cerrar", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Elige un capítulo. Abre el texto en BibleGateway en una pestaña nueva.", " · choose a chapter. It opens in a new tab.": " · elige un capítulo. Se abre en una pestaña nueva.", "Link not working? Open the full recording page": "¿No funciona el enlace? Abre la página completa de la grabación", "Popular languages": "Idiomas populares", "All other languages": "Todos los demás idiomas", "Showing ": "Mostrando grabaciones en ", " recordings. Change the audio language on the Whole Bible tab.": ". Cambia el idioma del audio en la pestaña Toda la Biblia.", "New Testament only": "Solo Nuevo Testamento", "Cancel": "Cancelar", "Start date": "Fecha de inicio", "Choose a start date.": "Elige una fecha de inicio.", "Plan started": "Plan iniciado", "Start plan": "Iniciar plan", "Back": "Atrás", " done": " hecho", "Group ": "Grupo ", "Active plan": "Plan activo", "Set as active plan": "Establecer como plan activo", "Set as active": "Establecer como activo", "Delete plan?": "¿Eliminar el plan?", "” and its progress will be removed.": "” y su progreso se eliminarán.", "Delete plan": "Eliminar plan", "Plan deleted": "Plan eliminado", "Delete": "Eliminar", "Mark day ": "Marcar día ", " · Today": " · Hoy", " today": " hoy", "New plan": "Nuevo plan", "Step ": "Paso ", "Next": "Siguiente", "Name and timeframe": "Nombre y plazo", "My reading plan": "Mi plan de lectura", "Plan name": "Nombre del plan", "1 week": "1 semana", "2 weeks": "2 semanas", "30 days": "30 días", "60 days": "60 días", "90 days": "90 días", "6 months": "6 meses", "1 year": "1 año", "How long?": "¿Cuánto tiempo?", "Number of days": "Número de días", "Ends ": "Termina el ", "Enter the number of days.": "Introduce el número de días.", "Pick your groups": "Elige tus grupos", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "Cada día leerás un poco de cada grupo. Cada grupo se reparte en todo el plazo para que todos terminen juntos.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Las porciones son capítulos completos. Proverbios se divide en secciones cortas de unos 10 a 15 versículos.", "Remove ": "Quitar ", " chapters": " capítulos", "No books yet": "Aún no hay libros", "Remove group ": "Quitar grupo ", "Edit books": "Editar libros", "Add books": "Añadir libros", "Add group (": "Añadir grupo (", "Reading order inside a group": "Orden de lectura dentro de un grupo", "Reading order": "Orden de lectura", "Bible order": "Orden bíblico", "Order I picked": "Orden que elegí", " books": " libros", " book": " libro", "Quick picks": "Selecciones rápidas", "Or choose books": "O elige libros", "Already in another group": "Ya está en otro grupo", "Done · ": "Listo · ", "Enter a number of days from 1 to 1000.": "Introduce un número de días del 1 al 1000.", "Add books to at least one group.": "Añade libros al menos a un grupo.", " has no books. Add some or remove the group.": " no tiene libros. Añade algunos o quita el grupo.", "about ": "unos ", " ch/day": " cap./día", " ch total · on ": " cap. en total · en ", " fewer chapters than days, so there will be rest days for ": " tienen menos capítulos que días, por lo que habrá días de descanso en ", "those groups": "esos grupos", "that group": "ese grupo", "First days": "Primeros días", "Last day: every group ends on day ": "Último día: todos los grupos terminan el día ", "Reading plans": "Planes de lectura", "Whole Bible": "Toda la Biblia", "Poetry": "Poesía", "Law": "Ley", "Gospels": "Evangelios", "Psalms": "Salmos", "Proverbs": "Proverbios", "Choose a chapter": "Elige un capítulo", "Chapter": "Capítulo", "Plan": "Plan", "History": "Historia", "Major Prophets": "Profetas mayores", "Minor Prophets": "Profetas menores", "Acts": "Hechos", "Paul’s letters": "Cartas de Pablo", "General letters": "Cartas generales", "Revelation": "Apocalipsis", "Whole Old Testament": "Todo el Antiguo Testamento", "Whole New Testament": "Todo el Nuevo Testamento", "One gospel, about 2 chapters a day": "Un evangelio, unos 2 capítulos al día", "Matthew to Revelation, about 3 chapters a day": "De Mateo a Apocalipsis, unos 3 capítulos al día", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 grupos: Ley e Historia, Poesía, Profetas, Nuevo Testamento"}, "fr": {"John in 10 days": "Jean en 10 jours", "Daily mix (sample)": "Mélange quotidien (exemple)", "New Testament in 90 days": "Nouveau Testament en 90 jours", "Bible in a year": "La Bible en un an", "Rest day": "Jour de repos", "No audio for this book in the selected recording": "Pas d’audio pour ce livre dans l’enregistrement choisi", ", read": ", lire", ", listen": ", écouter", "Rest day for this group": "Jour de repos pour ce groupe", "Audio plays the whole chapter.": "L’audio lit le chapitre entier. Choisissez Lire pour ouvrir seulement ces versets.", "Listen": "Écouter", "Read": "Lire", "When I tap a chapter": "Quand je touche un chapitre", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Cet enregistrement ne contient que le Nouveau Testament. Les chapitres de l’Ancien Testament sont grisés. Changez de version ou choisissez Lire.", " days · ": " jours · ", " group": " groupe", " groups": " groupes", "Version": "Version", "No active plan": "Aucun plan actif", "Start a ready-made plan below or build your own with up to five groups of books.": "Commencez un plan prêt à l’emploi ci-dessous ou créez le vôtre avec jusqu’à cinq groupes de livres.", "Starts ": "Début : ", "Plan ended ": "Plan terminé le ", "Today": "Aujourd’hui", "Earlier day": "Jour passé", "Coming up": "À venir", "Previous day": "Jour précédent", "Day ": "Jour ", " of ": " sur ", "Next day": "Jour suivant", "Done ✓ (tap to undo)": "Terminé ✓ (touchez pour annuler)", "Mark day done": "Marquer le jour comme terminé", "Plan progress": "Progression du plan", " days": " jours", "Go to today": "Aller à aujourd’hui", "View full plan": "Voir le plan complet", "My plans": "Mes plans", "No plans yet.": "Aucun plan pour le moment.", "Active": "Actif", " · starts ": " · début le ", " days done": " jours terminés", "Create your own plan": "Créer votre propre plan", "Ready-made plans": "Plans prêts à l’emploi", "Reset plans?": "Réinitialiser les plans ?", "This removes all your plans and progress.": "Cela supprime tous vos plans et votre progression.", "Reset": "Réinitialiser", "Reset plans": "Réinitialiser les plans", "Bible language": "Langue audio", "Bible version": "Version et lecteur", "Language": "Langue du menu", "Search": "Rechercher", "Search books": "Rechercher un livre", "Old Testament": "Ancien Testament", "New Testament": "Nouveau Testament", "No books match your search.": "Aucun livre ne correspond à votre recherche.", "Close": "Fermer", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Choisissez un chapitre. Le texte s’ouvre sur BibleGateway dans un nouvel onglet.", " · choose a chapter. It opens in a new tab.": " · choisissez un chapitre. Il s’ouvre dans un nouvel onglet.", "Link not working? Open the full recording page": "Le lien ne fonctionne pas ? Ouvrez la page complète de l’enregistrement", "Popular languages": "Langues populaires", "All other languages": "Toutes les autres langues", "Showing ": "Enregistrements affichés : ", " recordings. Change the audio language on the Whole Bible tab.": ". Changez la langue audio dans l’onglet Bible entière.", "New Testament only": "Nouveau Testament seulement", "Cancel": "Annuler", "Start date": "Date de début", "Choose a start date.": "Choisissez une date de début.", "Plan started": "Plan commencé", "Start plan": "Commencer le plan", "Back": "Retour", " done": " terminé", "Group ": "Groupe ", "Active plan": "Plan actif", "Set as active plan": "Définir comme plan actif", "Set as active": "Définir comme actif", "Delete plan?": "Supprimer le plan ?", "” and its progress will be removed.": "” et sa progression seront supprimés.", "Delete plan": "Supprimer le plan", "Plan deleted": "Plan supprimé", "Delete": "Supprimer", "Mark day ": "Marquer le jour ", " · Today": " · Aujourd’hui", " today": " aujourd’hui", "New plan": "Nouveau plan", "Step ": "Étape ", "Next": "Suivant", "Name and timeframe": "Nom et durée", "My reading plan": "Mon plan de lecture", "Plan name": "Nom du plan", "1 week": "1 semaine", "2 weeks": "2 semaines", "30 days": "30 jours", "60 days": "60 jours", "90 days": "90 jours", "6 months": "6 mois", "1 year": "1 an", "How long?": "Combien de temps ?", "Number of days": "Nombre de jours", "Ends ": "Fin : ", "Enter the number of days.": "Saisissez le nombre de jours.", "Pick your groups": "Choisissez vos groupes", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "Chaque jour, vous lirez un peu de chaque groupe. Chaque groupe est réparti sur toute la durée pour que tous se terminent ensemble.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Les portions sont des chapitres entiers. Les Proverbes sont découpés en courts passages d’environ 10 à 15 versets.", "Remove ": "Retirer ", " chapters": " chapitres", "No books yet": "Aucun livre pour le moment", "Remove group ": "Supprimer le groupe ", "Edit books": "Modifier les livres", "Add books": "Ajouter des livres", "Add group (": "Ajouter un groupe (", "Reading order inside a group": "Ordre de lecture dans un groupe", "Reading order": "Ordre de lecture", "Bible order": "Ordre biblique", "Order I picked": "Mon ordre", " books": " livres", " book": " livre", "Quick picks": "Sélections rapides", "Or choose books": "Ou choisissez des livres", "Already in another group": "Déjà dans un autre groupe", "Done · ": "Terminé · ", "Enter a number of days from 1 to 1000.": "Saisissez un nombre de jours de 1 à 1000.", "Add books to at least one group.": "Ajoutez des livres à au moins un groupe.", " has no books. Add some or remove the group.": " n’a aucun livre. Ajoutez-en ou supprimez le groupe.", "about ": "environ ", " ch/day": " ch./jour", " ch total · on ": " ch. au total · sur ", " fewer chapters than days, so there will be rest days for ": " ont moins de chapitres que de jours : il y aura des jours de repos pour ", "those groups": "ces groupes", "that group": "ce groupe", "First days": "Premiers jours", "Last day: every group ends on day ": "Dernier jour : tous les groupes se terminent le jour ", "Reading plans": "Plans de lecture", "Whole Bible": "Bible entière", "Poetry": "Poésie", "Law": "Loi", "Gospels": "Évangiles", "Psalms": "Psaumes", "Proverbs": "Proverbes", "Choose a chapter": "Choisissez un chapitre", "Chapter": "Chapitre", "Plan": "Plan", "History": "Histoire", "Major Prophets": "Grands prophètes", "Minor Prophets": "Petits prophètes", "Acts": "Actes", "Paul’s letters": "Lettres de Paul", "General letters": "Lettres générales", "Revelation": "Apocalypse", "Whole Old Testament": "Tout l’Ancien Testament", "Whole New Testament": "Tout le Nouveau Testament", "One gospel, about 2 chapters a day": "Un évangile, environ 2 chapitres par jour", "Matthew to Revelation, about 3 chapters a day": "De Matthieu à l’Apocalypse, environ 3 chapitres par jour", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 groupes : Loi et Histoire, Poésie, Prophètes, Nouveau Testament"}, "de": {"John in 10 days": "Johannes in 10 Tagen", "Daily mix (sample)": "Tägliche Mischung (Beispiel)", "New Testament in 90 days": "Neues Testament in 90 Tagen", "Bible in a year": "Die Bibel in einem Jahr", "Rest day": "Ruhetag", "No audio for this book in the selected recording": "Für dieses Buch gibt es in der gewählten Aufnahme kein Audio", ", read": ", lesen", ", listen": ", anhören", "Rest day for this group": "Ruhetag für diese Gruppe", "Audio plays the whole chapter.": "Das Audio spielt das ganze Kapitel ab. Wähle Lesen, um nur diese Verse zu öffnen.", "Listen": "Hören", "Read": "Lesen", "When I tap a chapter": "Wenn ich ein Kapitel antippe", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Diese Aufnahme enthält nur das Neue Testament. Kapitel des Alten Testaments sind abgeblendet. Wechsle die Version oder wähle Lesen.", " days · ": " Tage · ", " group": " Gruppe", " groups": " Gruppen", "Version": "Version", "No active plan": "Kein aktiver Plan", "Start a ready-made plan below or build your own with up to five groups of books.": "Starte unten einen fertigen Plan oder erstelle deinen eigenen mit bis zu fünf Buchgruppen.", "Starts ": "Beginnt am ", "Plan ended ": "Plan beendet am ", "Today": "Heute", "Earlier day": "Früherer Tag", "Coming up": "Demnächst", "Previous day": "Vorheriger Tag", "Day ": "Tag ", " of ": " von ", "Next day": "Nächster Tag", "Done ✓ (tap to undo)": "Erledigt ✓ (zum Rückgängigmachen tippen)", "Mark day done": "Tag als erledigt markieren", "Plan progress": "Planfortschritt", " days": " Tage", "Go to today": "Zu heute", "View full plan": "Ganzen Plan ansehen", "My plans": "Meine Pläne", "No plans yet.": "Noch keine Pläne.", "Active": "Aktiv", " · starts ": " · beginnt am ", " days done": " Tage erledigt", "Create your own plan": "Eigenen Plan erstellen", "Ready-made plans": "Fertige Pläne", "Reset plans?": "Pläne zurücksetzen?", "This removes all your plans and progress.": "Dadurch werden alle deine Pläne und dein Fortschritt gelöscht.", "Reset": "Zurücksetzen", "Reset plans": "Pläne zurücksetzen", "Bible language": "Audiosprache", "Bible version": "Version und Sprecher", "Language": "Menüsprache", "Search": "Suchen", "Search books": "Bücher suchen", "Old Testament": "Altes Testament", "New Testament": "Neues Testament", "No books match your search.": "Keine Bücher gefunden.", "Close": "Schließen", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Wähle ein Kapitel. Der Text öffnet sich bei BibleGateway in einem neuen Tab.", " · choose a chapter. It opens in a new tab.": " · wähle ein Kapitel. Es öffnet sich in einem neuen Tab.", "Link not working? Open the full recording page": "Link funktioniert nicht? Öffne die vollständige Aufnahmeseite", "Popular languages": "Beliebte Sprachen", "All other languages": "Alle anderen Sprachen", "Showing ": "Angezeigt werden Aufnahmen: ", " recordings. Change the audio language on the Whole Bible tab.": ". Ändere die Audiosprache im Tab „Ganze Bibel“.", "New Testament only": "Nur Neues Testament", "Cancel": "Abbrechen", "Start date": "Startdatum", "Choose a start date.": "Wähle ein Startdatum.", "Plan started": "Plan gestartet", "Start plan": "Plan starten", "Back": "Zurück", " done": " erledigt", "Group ": "Gruppe ", "Active plan": "Aktiver Plan", "Set as active plan": "Als aktiven Plan festlegen", "Set as active": "Als aktiv festlegen", "Delete plan?": "Plan löschen?", "” and its progress will be removed.": "” und sein Fortschritt werden gelöscht.", "Delete plan": "Plan löschen", "Plan deleted": "Plan gelöscht", "Delete": "Löschen", "Mark day ": "Tag markieren ", " · Today": " · Heute", " today": " heute", "New plan": "Neuer Plan", "Step ": "Schritt ", "Next": "Weiter", "Name and timeframe": "Name und Zeitraum", "My reading plan": "Mein Leseplan", "Plan name": "Planname", "1 week": "1 Woche", "2 weeks": "2 Wochen", "30 days": "30 Tage", "60 days": "60 Tage", "90 days": "90 Tage", "6 months": "6 Monate", "1 year": "1 Jahr", "How long?": "Wie lange?", "Number of days": "Anzahl der Tage", "Ends ": "Endet am ", "Enter the number of days.": "Gib die Anzahl der Tage ein.", "Pick your groups": "Wähle deine Gruppen", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "Jeden Tag liest du ein wenig aus jeder Gruppe. Jede Gruppe wird auf den gesamten Zeitraum verteilt, sodass alle gleichzeitig enden.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Die Abschnitte sind ganze Kapitel. Die Sprüche sind in kurze Abschnitte von etwa 10 bis 15 Versen aufgeteilt.", "Remove ": "Entfernen ", " chapters": " Kapitel", "No books yet": "Noch keine Bücher", "Remove group ": "Gruppe entfernen ", "Edit books": "Bücher bearbeiten", "Add books": "Bücher hinzufügen", "Add group (": "Gruppe hinzufügen (", "Reading order inside a group": "Lesereihenfolge innerhalb einer Gruppe", "Reading order": "Lesereihenfolge", "Bible order": "Reihenfolge der Bibel", "Order I picked": "Meine Reihenfolge", " books": " Bücher", " book": " Buch", "Quick picks": "Schnellauswahl", "Or choose books": "Oder wähle Bücher", "Already in another group": "Bereits in einer anderen Gruppe", "Done · ": "Fertig · ", "Enter a number of days from 1 to 1000.": "Gib eine Anzahl von Tagen zwischen 1 und 1000 ein.", "Add books to at least one group.": "Füge mindestens einer Gruppe Bücher hinzu.", " has no books. Add some or remove the group.": " hat keine Bücher. Füge welche hinzu oder entferne die Gruppe.", "about ": "etwa ", " ch/day": " Kap./Tag", " ch total · on ": " Kap. insgesamt · an ", " fewer chapters than days, so there will be rest days for ": " haben weniger Kapitel als Tage, daher gibt es Ruhetage für ", "those groups": "diese Gruppen", "that group": "diese Gruppe", "First days": "Erste Tage", "Last day: every group ends on day ": "Letzter Tag: Alle Gruppen enden an Tag ", "Reading plans": "Lesepläne", "Whole Bible": "Ganze Bibel", "Poetry": "Poesie", "Law": "Gesetz", "Gospels": "Evangelien", "Psalms": "Psalmen", "Proverbs": "Sprüche", "Choose a chapter": "Wähle ein Kapitel", "Chapter": "Kapitel", "Plan": "Plan", "History": "Geschichte", "Major Prophets": "Große Propheten", "Minor Prophets": "Kleine Propheten", "Acts": "Apostelgeschichte", "Paul’s letters": "Briefe des Paulus", "General letters": "Allgemeine Briefe", "Revelation": "Offenbarung", "Whole Old Testament": "Ganzes Altes Testament", "Whole New Testament": "Ganzes Neues Testament", "One gospel, about 2 chapters a day": "Ein Evangelium, etwa 2 Kapitel pro Tag", "Matthew to Revelation, about 3 chapters a day": "Von Matthäus bis Offenbarung, etwa 3 Kapitel pro Tag", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 Gruppen: Gesetz und Geschichte, Poesie, Propheten, Neues Testament"}, "pt": {"John in 10 days": "João em 10 dias", "Daily mix (sample)": "Mistura diária (exemplo)", "New Testament in 90 days": "Novo Testamento em 90 dias", "Bible in a year": "A Bíblia em um ano", "Rest day": "Dia de descanso", "No audio for this book in the selected recording": "Não há áudio deste livro na gravação selecionada", ", read": ", ler", ", listen": ", ouvir", "Rest day for this group": "Dia de descanso para este grupo", "Audio plays the whole chapter.": "O áudio reproduz o capítulo inteiro. Escolha Ler para abrir apenas estes versículos.", "Listen": "Ouvir", "Read": "Ler", "When I tap a chapter": "Ao tocar em um capítulo", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Esta gravação tem apenas o Novo Testamento. Os capítulos do Antigo Testamento aparecem esmaecidos. Troque a versão ou escolha Ler.", " days · ": " dias · ", " group": " grupo", " groups": " grupos", "Version": "Versão", "No active plan": "Nenhum plano ativo", "Start a ready-made plan below or build your own with up to five groups of books.": "Comece um plano pronto abaixo ou crie o seu com até cinco grupos de livros.", "Starts ": "Começa em ", "Plan ended ": "Plano encerrado em ", "Today": "Hoje", "Earlier day": "Dia anterior", "Coming up": "Em breve", "Previous day": "Dia anterior", "Day ": "Dia ", " of ": " de ", "Next day": "Próximo dia", "Done ✓ (tap to undo)": "Concluído ✓ (toque para desfazer)", "Mark day done": "Marcar dia como concluído", "Plan progress": "Progresso do plano", " days": " dias", "Go to today": "Ir para hoje", "View full plan": "Ver plano completo", "My plans": "Meus planos", "No plans yet.": "Ainda não há planos.", "Active": "Ativo", " · starts ": " · começa em ", " days done": " dias concluídos", "Create your own plan": "Criar seu próprio plano", "Ready-made plans": "Planos prontos", "Reset plans?": "Redefinir planos?", "This removes all your plans and progress.": "Isso remove todos os seus planos e seu progresso.", "Reset": "Redefinir", "Reset plans": "Redefinir planos", "Bible language": "Idioma do áudio", "Bible version": "Versão e leitor", "Language": "Idioma do menu", "Search": "Buscar", "Search books": "Buscar livros", "Old Testament": "Antigo Testamento", "New Testament": "Novo Testamento", "No books match your search.": "Nenhum livro corresponde à sua busca.", "Close": "Fechar", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Escolha um capítulo. O texto abre no BibleGateway em uma nova aba.", " · choose a chapter. It opens in a new tab.": " · escolha um capítulo. Abre em uma nova aba.", "Link not working? Open the full recording page": "O link não funciona? Abra a página completa da gravação", "Popular languages": "Idiomas populares", "All other languages": "Todos os outros idiomas", "Showing ": "Mostrando gravações em ", " recordings. Change the audio language on the Whole Bible tab.": ". Mude o idioma do áudio na aba Bíblia inteira.", "New Testament only": "Apenas Novo Testamento", "Cancel": "Cancelar", "Start date": "Data de início", "Choose a start date.": "Escolha uma data de início.", "Plan started": "Plano iniciado", "Start plan": "Iniciar plano", "Back": "Voltar", " done": " concluído", "Group ": "Grupo ", "Active plan": "Plano ativo", "Set as active plan": "Definir como plano ativo", "Set as active": "Definir como ativo", "Delete plan?": "Excluir plano?", "” and its progress will be removed.": "” e seu progresso serão removidos.", "Delete plan": "Excluir plano", "Plan deleted": "Plano excluído", "Delete": "Excluir", "Mark day ": "Marcar dia ", " · Today": " · Hoje", " today": " hoje", "New plan": "Novo plano", "Step ": "Passo ", "Next": "Avançar", "Name and timeframe": "Nome e prazo", "My reading plan": "Meu plano de leitura", "Plan name": "Nome do plano", "1 week": "1 semana", "2 weeks": "2 semanas", "30 days": "30 dias", "60 days": "60 dias", "90 days": "90 dias", "6 months": "6 meses", "1 year": "1 ano", "How long?": "Por quanto tempo?", "Number of days": "Número de dias", "Ends ": "Termina em ", "Enter the number of days.": "Informe o número de dias.", "Pick your groups": "Escolha seus grupos", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "A cada dia você lerá um pouco de cada grupo. Cada grupo é distribuído por todo o prazo para que todos terminem juntos.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "As porções são capítulos inteiros. Provérbios é dividido em seções curtas de cerca de 10 a 15 versículos.", "Remove ": "Remover ", " chapters": " capítulos", "No books yet": "Ainda não há livros", "Remove group ": "Remover grupo ", "Edit books": "Editar livros", "Add books": "Adicionar livros", "Add group (": "Adicionar grupo (", "Reading order inside a group": "Ordem de leitura dentro de um grupo", "Reading order": "Ordem de leitura", "Bible order": "Ordem da Bíblia", "Order I picked": "Ordem que escolhi", " books": " livros", " book": " livro", "Quick picks": "Seleções rápidas", "Or choose books": "Ou escolha livros", "Already in another group": "Já está em outro grupo", "Done · ": "Concluir · ", "Enter a number of days from 1 to 1000.": "Informe um número de dias de 1 a 1000.", "Add books to at least one group.": "Adicione livros a pelo menos um grupo.", " has no books. Add some or remove the group.": " não tem livros. Adicione alguns ou remova o grupo.", "about ": "cerca de ", " ch/day": " cap./dia", " ch total · on ": " cap. no total · em ", " fewer chapters than days, so there will be rest days for ": " têm menos capítulos do que dias, então haverá dias de descanso para ", "those groups": "esses grupos", "that group": "esse grupo", "First days": "Primeiros dias", "Last day: every group ends on day ": "Último dia: todos os grupos terminam no dia ", "Reading plans": "Planos de leitura", "Whole Bible": "Bíblia inteira", "Poetry": "Poesia", "Law": "Lei", "Gospels": "Evangelhos", "Psalms": "Salmos", "Proverbs": "Provérbios", "Choose a chapter": "Escolha um capítulo", "Chapter": "Capítulo", "Plan": "Plano", "History": "História", "Major Prophets": "Profetas maiores", "Minor Prophets": "Profetas menores", "Acts": "Atos", "Paul’s letters": "Cartas de Paulo", "General letters": "Cartas gerais", "Revelation": "Apocalipse", "Whole Old Testament": "Todo o Antigo Testamento", "Whole New Testament": "Todo o Novo Testamento", "One gospel, about 2 chapters a day": "Um evangelho, cerca de 2 capítulos por dia", "Matthew to Revelation, about 3 chapters a day": "De Mateus a Apocalipse, cerca de 3 capítulos por dia", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 grupos: Lei e História, Poesia, Profetas, Novo Testamento"}, "zh": {"John in 10 days": "10 天读约翰福音", "Daily mix (sample)": "每日混合（示例）", "New Testament in 90 days": "90 天读新约", "Bible in a year": "一年读完圣经", "Rest day": "休息日", "No audio for this book in the selected recording": "所选录音没有这卷书的音频", ", read": "（阅读）", ", listen": "（收听）", "Rest day for this group": "本组休息日", "Audio plays the whole chapter.": "音频会播放整章。选择“阅读”可只打开这些经节。", "Listen": "收听", "Read": "阅读", "When I tap a chapter": "点击章节时", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "此录音仅包含新约。旧约章节已变灰。请切换版本或选择“阅读”。", " days · ": " 天 · ", " group": " 组", " groups": " 组", "Version": "版本", "No active plan": "没有进行中的计划", "Start a ready-made plan below or build your own with up to five groups of books.": "在下方开始现成计划，或创建最多五组书卷的自定义计划。", "Starts ": "开始于 ", "Plan ended ": "计划结束于 ", "Today": "今天", "Earlier day": "往日", "Coming up": "即将到来", "Previous day": "前一天", "Day ": "第 ", " of ": " / ", "Next day": "后一天", "Done ✓ (tap to undo)": "已完成 ✓（点击撤销）", "Mark day done": "标记今日已完成", "Plan progress": "计划进度", " days": " 天", "Go to today": "回到今天", "View full plan": "查看完整计划", "My plans": "我的计划", "No plans yet.": "还没有计划。", "Active": "进行中", " · starts ": " · 开始于 ", " days done": " 天已完成", "Create your own plan": "创建自己的计划", "Ready-made plans": "现成计划", "Reset plans?": "重置计划？", "This removes all your plans and progress.": "这将删除你所有的计划和进度。", "Reset": "重置", "Reset plans": "重置计划", "Bible language": "音频语言", "Bible version": "版本与朗读者", "Language": "菜单语言", "Search": "搜索", "Search books": "搜索书卷", "Old Testament": "旧约", "New Testament": "新约", "No books match your search.": "没有符合搜索的书卷。", "Close": "关闭", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "选择一章。文本将在新标签页中于 BibleGateway 打开。", " · choose a chapter. It opens in a new tab.": " · 选择一章。将在新标签页中打开。", "Link not working? Open the full recording page": "链接无法打开？请打开完整的录音页面", "Popular languages": "常用语言", "All other languages": "其他所有语言", "Showing ": "显示的录音语言：", " recordings. Change the audio language on the Whole Bible tab.": "。可在“整本圣经”标签页更改音频语言。", "New Testament only": "仅新约", "Cancel": "取消", "Start date": "开始日期", "Choose a start date.": "请选择开始日期。", "Plan started": "计划已开始", "Start plan": "开始计划", "Back": "返回", " done": " 已完成", "Group ": "第 ", "Active plan": "进行中的计划", "Set as active plan": "设为进行中的计划", "Set as active": "设为进行中", "Delete plan?": "删除计划？", "” and its progress will be removed.": "”及其进度将被删除。", "Delete plan": "删除计划", "Plan deleted": "计划已删除", "Delete": "删除", "Mark day ": "标记第 ", " · Today": " · 今天", " today": " 今天", "New plan": "新计划", "Step ": "步骤 ", "Next": "下一步", "Name and timeframe": "名称和时长", "My reading plan": "我的读经计划", "Plan name": "计划名称", "1 week": "1 周", "2 weeks": "2 周", "30 days": "30 天", "60 days": "60 天", "90 days": "90 天", "6 months": "6 个月", "1 year": "1 年", "How long?": "多长时间？", "Number of days": "天数", "Ends ": "结束于 ", "Enter the number of days.": "请输入天数。", "Pick your groups": "选择你的分组", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "每天从每组读一点。每组均匀分布在整个时间段内，所有组同时完成。", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "每份为整章。箴言被分成每段约 10 至 15 节的短段落。", "Remove ": "移除 ", " chapters": " 章", "No books yet": "还没有书卷", "Remove group ": "移除分组 ", "Edit books": "编辑书卷", "Add books": "添加书卷", "Add group (": "添加分组（", "Reading order inside a group": "组内阅读顺序", "Reading order": "阅读顺序", "Bible order": "圣经顺序", "Order I picked": "我选择的顺序", " books": " 卷", " book": " 卷", "Quick picks": "快速选择", "Or choose books": "或选择书卷", "Already in another group": "已在另一组中", "Done · ": "完成 · ", "Enter a number of days from 1 to 1000.": "请输入 1 到 1000 之间的天数。", "Add books to at least one group.": "请至少向一个分组添加书卷。", " has no books. Add some or remove the group.": " 没有书卷。请添加书卷或删除该分组。", "about ": "约 ", " ch/day": " 章/天", " ch total · on ": " 章共 · 分布在 ", " fewer chapters than days, so there will be rest days for ": " 的章数少于天数，因此这些组会有休息日：", "those groups": "这些组", "that group": "该组", "First days": "最初几天", "Last day: every group ends on day ": "最后一天：所有组都在第 ", "Reading plans": "读经计划", "Whole Bible": "整本圣经", "Poetry": "诗歌", "Law": "律法", "Gospels": "福音书", "Psalms": "诗篇", "Proverbs": "箴言", "Choose a chapter": "选择一章", "Chapter": "章", "Plan": "计划", "History": "历史书", "Major Prophets": "大先知书", "Minor Prophets": "小先知书", "Acts": "使徒行传", "Paul’s letters": "保罗书信", "General letters": "普通书信", "Revelation": "启示录", "Whole Old Testament": "整本旧约", "Whole New Testament": "整本新约", "One gospel, about 2 chapters a day": "一卷福音书，每天约 2 章", "Matthew to Revelation, about 3 chapters a day": "从马太福音到启示录，每天约 3 章", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 组：律法与历史、诗歌、先知书、新约"}, "ja": {"John in 10 days": "10日でヨハネ", "Daily mix (sample)": "毎日ミックス（サンプル）", "New Testament in 90 days": "90日で新約聖書", "Bible in a year": "1年で聖書", "Rest day": "休息日", "No audio for this book in the selected recording": "選択した録音にはこの書の音声がありません", ", read": "（読む）", ", listen": "（聞く）", "Rest day for this group": "このグループは休息日", "Audio plays the whole chapter.": "音声は章全体を再生します。「読む」を選ぶとこれらの節だけを開きます。", "Listen": "聞く", "Read": "読む", "When I tap a chapter": "章をタップしたとき", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "この録音は新約聖書のみです。旧約聖書の章は薄く表示されています。バージョンを変更するか「読む」を選んでください。", " days · ": " 日 · ", " group": " グループ", " groups": " グループ", "Version": "バージョン", "No active plan": "有効なプランがありません", "Start a ready-made plan below or build your own with up to five groups of books.": "下の既成プランを始めるか、最大5グループの書でオリジナルプランを作成してください。", "Starts ": "開始：", "Plan ended ": "プラン終了：", "Today": "今日", "Earlier day": "過去の日", "Coming up": "これから", "Previous day": "前の日", "Day ": "第 ", " of ": " / ", "Next day": "次の日", "Done ✓ (tap to undo)": "完了 ✓（タップで取り消し）", "Mark day done": "今日を完了にする", "Plan progress": "プランの進捗", " days": " 日", "Go to today": "今日へ", "View full plan": "プラン全体を見る", "My plans": "マイプラン", "No plans yet.": "まだプランがありません。", "Active": "有効", " · starts ": " · 開始 ", " days done": " 日完了", "Create your own plan": "オリジナルプランを作成", "Ready-made plans": "既成プラン", "Reset plans?": "プランをリセットしますか？", "This removes all your plans and progress.": "すべてのプランと進捗が削除されます。", "Reset": "リセット", "Reset plans": "プランをリセット", "Bible language": "音声の言語", "Bible version": "バージョンと朗読者", "Language": "メニューの言語", "Search": "検索", "Search books": "書を検索", "Old Testament": "旧約聖書", "New Testament": "新約聖書", "No books match your search.": "検索に一致する書がありません。", "Close": "閉じる", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "章を選んでください。本文は新しいタブで BibleGateway に開きます。", " · choose a chapter. It opens in a new tab.": " · 章を選んでください。新しいタブで開きます。", "Link not working? Open the full recording page": "リンクが開けませんか？録音の全ページを開く", "Popular languages": "よく使う言語", "All other languages": "その他の言語", "Showing ": "表示中の録音：", " recordings. Change the audio language on the Whole Bible tab.": "。音声の言語は「聖書全体」タブで変更できます。", "New Testament only": "新約聖書のみ", "Cancel": "キャンセル", "Start date": "開始日", "Choose a start date.": "開始日を選んでください。", "Plan started": "プランを開始しました", "Start plan": "プランを開始", "Back": "戻る", " done": " 完了", "Group ": "グループ ", "Active plan": "有効なプラン", "Set as active plan": "有効なプランにする", "Set as active": "有効にする", "Delete plan?": "プランを削除しますか？", "” and its progress will be removed.": "」と進捗が削除されます。", "Delete plan": "プランを削除", "Plan deleted": "プランを削除しました", "Delete": "削除", "Mark day ": "日を完了にする：", " · Today": " · 今日", " today": " 今日", "New plan": "新しいプラン", "Step ": "ステップ ", "Next": "次へ", "Name and timeframe": "名前と期間", "My reading plan": "私の通読プラン", "Plan name": "プラン名", "1 week": "1週間", "2 weeks": "2週間", "30 days": "30日", "60 days": "60日", "90 days": "90日", "6 months": "6か月", "1 year": "1年", "How long?": "期間は？", "Number of days": "日数", "Ends ": "終了：", "Enter the number of days.": "日数を入力してください。", "Pick your groups": "グループを選ぶ", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "毎日、各グループから少しずつ読みます。各グループは全期間に均等に配分され、すべて同時に終わります。", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "1回分は章単位です。箴言は約10〜15節ごとの短い区切りに分けられます。", "Remove ": "削除 ", " chapters": " 章", "No books yet": "まだ書がありません", "Remove group ": "グループを削除 ", "Edit books": "書を編集", "Add books": "書を追加", "Add group (": "グループを追加（", "Reading order inside a group": "グループ内の読む順序", "Reading order": "読む順序", "Bible order": "聖書の順序", "Order I picked": "選んだ順序", " books": " 書", " book": " 書", "Quick picks": "クイック選択", "Or choose books": "または書を選ぶ", "Already in another group": "すでに別のグループにあります", "Done · ": "完了 · ", "Enter a number of days from 1 to 1000.": "1〜1000の日数を入力してください。", "Add books to at least one group.": "少なくとも1つのグループに書を追加してください。", " has no books. Add some or remove the group.": " に書がありません。書を追加するかグループを削除してください。", "about ": "約 ", " ch/day": " 章/日", " ch total · on ": " 章 · 期間 ", " fewer chapters than days, so there will be rest days for ": " は章数が日数より少ないため、休息日があります：", "those groups": "これらのグループ", "that group": "このグループ", "First days": "最初の数日", "Last day: every group ends on day ": "最終日：すべてのグループが次の日に終わります：", "Reading plans": "通読プラン", "Whole Bible": "聖書全体", "Poetry": "詩歌", "Law": "律法", "Gospels": "福音書", "Psalms": "詩篇", "Proverbs": "箴言", "Choose a chapter": "章を選ぶ", "Chapter": "章", "Plan": "プラン", "History": "歴史書", "Major Prophets": "大預言書", "Minor Prophets": "小預言書", "Acts": "使徒行伝", "Paul’s letters": "パウロの手紙", "General letters": "公同書簡", "Revelation": "黙示録", "Whole Old Testament": "旧約聖書全体", "Whole New Testament": "新約聖書全体", "One gospel, about 2 chapters a day": "福音書1つ、1日約2章", "Matthew to Revelation, about 3 chapters a day": "マタイから黙示録まで、1日約3章", "4 groups: Law and History, Poetry, Prophets, New Testament": "4グループ：律法と歴史、詩歌、預言書、新約聖書"}, "ar": {"John in 10 days": "يوحنا في 10 أيام", "Daily mix (sample)": "مزيج يومي (مثال)", "New Testament in 90 days": "العهد الجديد في 90 يومًا", "Bible in a year": "الكتاب المقدس في سنة", "Rest day": "يوم راحة", "No audio for this book in the selected recording": "لا يوجد صوت لهذا السفر في التسجيل المحدد", ", read": "، قراءة", ", listen": "، استماع", "Rest day for this group": "يوم راحة لهذه المجموعة", "Audio plays the whole chapter.": "يشغّل الصوت الأصحاح كاملًا. اختر «قراءة» لفتح هذه الآيات فقط.", "Listen": "استماع", "Read": "قراءة", "When I tap a chapter": "عند النقر على أصحاح", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "يحتوي هذا التسجيل على العهد الجديد فقط. أصحاحات العهد القديم معتّمة. غيّر النسخة أو اختر «قراءة».", " days · ": " يومًا · ", " group": " مجموعة", " groups": " مجموعات", "Version": "النسخة", "No active plan": "لا توجد خطة نشطة", "Start a ready-made plan below or build your own with up to five groups of books.": "ابدأ خطة جاهزة أدناه أو أنشئ خطتك الخاصة بما يصل إلى خمس مجموعات من الأسفار.", "Starts ": "تبدأ في ", "Plan ended ": "انتهت الخطة في ", "Today": "اليوم", "Earlier day": "يوم سابق", "Coming up": "قريبًا", "Previous day": "اليوم السابق", "Day ": "اليوم ", " of ": " من ", "Next day": "اليوم التالي", "Done ✓ (tap to undo)": "تم ✓ (انقر للتراجع)", "Mark day done": "وضع علامة إنجاز لليوم", "Plan progress": "تقدّم الخطة", " days": " يومًا", "Go to today": "الذهاب إلى اليوم", "View full plan": "عرض الخطة كاملة", "My plans": "خططي", "No plans yet.": "لا توجد خطط بعد.", "Active": "نشطة", " · starts ": " · تبدأ في ", " days done": " يومًا منجزة", "Create your own plan": "أنشئ خطتك الخاصة", "Ready-made plans": "خطط جاهزة", "Reset plans?": "إعادة ضبط الخطط؟", "This removes all your plans and progress.": "سيؤدي هذا إلى حذف جميع خططك وتقدّمك.", "Reset": "إعادة ضبط", "Reset plans": "إعادة ضبط الخطط", "Bible language": "لغة الصوت", "Bible version": "النسخة والقارئ", "Language": "لغة القائمة", "Search": "بحث", "Search books": "ابحث عن الأسفار", "Old Testament": "العهد القديم", "New Testament": "العهد الجديد", "No books match your search.": "لا توجد أسفار مطابقة لبحثك.", "Close": "إغلاق", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "اختر أصحاحًا. يُفتح النص في BibleGateway في علامة تبويب جديدة.", " · choose a chapter. It opens in a new tab.": " · اختر أصحاحًا. يُفتح في علامة تبويب جديدة.", "Link not working? Open the full recording page": "الرابط لا يعمل؟ افتح صفحة التسجيل الكاملة", "Popular languages": "اللغات الشائعة", "All other languages": "كل اللغات الأخرى", "Showing ": "التسجيلات المعروضة: ", " recordings. Change the audio language on the Whole Bible tab.": ". غيّر لغة الصوت من علامة تبويب «الكتاب المقدس كاملًا».", "New Testament only": "العهد الجديد فقط", "Cancel": "إلغاء", "Start date": "تاريخ البدء", "Choose a start date.": "اختر تاريخ البدء.", "Plan started": "بدأت الخطة", "Start plan": "ابدأ الخطة", "Back": "رجوع", " done": " منجز", "Group ": "المجموعة ", "Active plan": "الخطة النشطة", "Set as active plan": "تعيين كخطة نشطة", "Set as active": "تعيين كنشطة", "Delete plan?": "حذف الخطة؟", "” and its progress will be removed.": "” وتقدّمها سيُحذفان.", "Delete plan": "حذف الخطة", "Plan deleted": "تم حذف الخطة", "Delete": "حذف", "Mark day ": "وضع علامة لليوم ", " · Today": " · اليوم", " today": " اليوم", "New plan": "خطة جديدة", "Step ": "الخطوة ", "Next": "التالي", "Name and timeframe": "الاسم والمدة", "My reading plan": "خطتي للقراءة", "Plan name": "اسم الخطة", "1 week": "أسبوع واحد", "2 weeks": "أسبوعان", "30 days": "30 يومًا", "60 days": "60 يومًا", "90 days": "90 يومًا", "6 months": "6 أشهر", "1 year": "سنة واحدة", "How long?": "كم المدة؟", "Number of days": "عدد الأيام", "Ends ": "تنتهي في ", "Enter the number of days.": "أدخل عدد الأيام.", "Pick your groups": "اختر مجموعاتك", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "كل يوم ستقرأ قليلًا من كل مجموعة. تُوزَّع كل مجموعة على المدة كلها لتنتهي جميعها معًا.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "الأجزاء هي أصحاحات كاملة. سفر الأمثال مقسَّم إلى مقاطع قصيرة من نحو 10 إلى 15 آية.", "Remove ": "إزالة ", " chapters": " أصحاحًا", "No books yet": "لا توجد أسفار بعد", "Remove group ": "إزالة المجموعة ", "Edit books": "تعديل الأسفار", "Add books": "إضافة أسفار", "Add group (": "إضافة مجموعة (", "Reading order inside a group": "ترتيب القراءة داخل المجموعة", "Reading order": "ترتيب القراءة", "Bible order": "ترتيب الكتاب المقدس", "Order I picked": "الترتيب الذي اخترته", " books": " أسفار", " book": " سفر", "Quick picks": "اختيارات سريعة", "Or choose books": "أو اختر أسفارًا", "Already in another group": "موجود في مجموعة أخرى", "Done · ": "تم · ", "Enter a number of days from 1 to 1000.": "أدخل عدد أيام من 1 إلى 1000.", "Add books to at least one group.": "أضف أسفارًا إلى مجموعة واحدة على الأقل.", " has no books. Add some or remove the group.": " ليس فيها أسفار. أضف بعضها أو احذف المجموعة.", "about ": "نحو ", " ch/day": " أصحاح/يوم", " ch total · on ": " أصحاحًا إجمالًا · على ", " fewer chapters than days, so there will be rest days for ": " أصحاحاتها أقل من الأيام، لذا ستكون هناك أيام راحة لـ", "those groups": "هذه المجموعات", "that group": "تلك المجموعة", "First days": "الأيام الأولى", "Last day: every group ends on day ": "اليوم الأخير: تنتهي كل المجموعات في اليوم ", "Reading plans": "خطط القراءة", "Whole Bible": "الكتاب المقدس كاملًا", "Poetry": "الشعر", "Law": "الشريعة", "Gospels": "الأناجيل", "Psalms": "المزامير", "Proverbs": "الأمثال", "Choose a chapter": "اختر أصحاحًا", "Chapter": "أصحاح", "Plan": "الخطة", "History": "التاريخ", "Major Prophets": "الأنبياء الكبار", "Minor Prophets": "الأنبياء الصغار", "Acts": "أعمال الرسل", "Paul’s letters": "رسائل بولس", "General letters": "الرسائل العامة", "Revelation": "الرؤيا", "Whole Old Testament": "العهد القديم كاملًا", "Whole New Testament": "العهد الجديد كاملًا", "One gospel, about 2 chapters a day": "إنجيل واحد، نحو أصحاحين في اليوم", "Matthew to Revelation, about 3 chapters a day": "من متى إلى الرؤيا، نحو 3 أصحاحات في اليوم", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 مجموعات: الشريعة والتاريخ، الشعر، الأنبياء، العهد الجديد"}, "fa": {"John in 10 days": "یوحنا در ۱۰ روز", "Daily mix (sample)": "ترکیب روزانه (نمونه)", "New Testament in 90 days": "عهد جدید در ۹۰ روز", "Bible in a year": "کتاب مقدس در یک سال", "Rest day": "روز استراحت", "No audio for this book in the selected recording": "برای این کتاب در ضبط انتخاب‌شده صوتی وجود ندارد", ", read": "، خواندن", ", listen": "، شنیدن", "Rest day for this group": "روز استراحت برای این گروه", "Audio plays the whole chapter.": "صدا کل باب را پخش می‌کند. «خواندن» را انتخاب کنید تا فقط این آیه‌ها باز شوند.", "Listen": "شنیدن", "Read": "خواندن", "When I tap a chapter": "هنگام لمس یک باب", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "این ضبط فقط عهد جدید را دارد. بابهای عهد عتیق کم‌رنگ شده‌اند. نسخه را تغییر دهید یا «خواندن» را انتخاب کنید.", " days · ": " روز · ", " group": " گروه", " groups": " گروه", "Version": "نسخه", "No active plan": "هیچ برنامهٔ فعالی نیست", "Start a ready-made plan below or build your own with up to five groups of books.": "در پایین یک برنامهٔ آماده را شروع کنید یا برنامهٔ خودتان را با حداکثر پنج گروه کتاب بسازید.", "Starts ": "شروع: ", "Plan ended ": "پایان برنامه: ", "Today": "امروز", "Earlier day": "روز گذشته", "Coming up": "به‌زودی", "Previous day": "روز قبل", "Day ": "روز ", " of ": " از ", "Next day": "روز بعد", "Done ✓ (tap to undo)": "انجام شد ✓ (برای لغو لمس کنید)", "Mark day done": "علامت‌گذاری روز به‌عنوان انجام‌شده", "Plan progress": "پیشرفت برنامه", " days": " روز", "Go to today": "رفتن به امروز", "View full plan": "دیدن برنامهٔ کامل", "My plans": "برنامه‌های من", "No plans yet.": "هنوز برنامه‌ای نیست.", "Active": "فعال", " · starts ": " · شروع ", " days done": " روز انجام شده", "Create your own plan": "ساخت برنامهٔ خودتان", "Ready-made plans": "برنامه‌های آماده", "Reset plans?": "بازنشانی برنامه‌ها؟", "This removes all your plans and progress.": "این کار همهٔ برنامه‌ها و پیشرفت شما را حذف می‌کند.", "Reset": "بازنشانی", "Reset plans": "بازنشانی برنامه‌ها", "Bible language": "زبان صدا", "Bible version": "نسخه و گوینده", "Language": "زبان منو", "Search": "جستجو", "Search books": "جستجوی کتاب‌ها", "Old Testament": "عهد عتیق", "New Testament": "عهد جدید", "No books match your search.": "کتابی مطابق جستجوی شما نیست.", "Close": "بستن", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "یک باب انتخاب کنید. متن در BibleGateway در زبانهٔ جدید باز می‌شود.", " · choose a chapter. It opens in a new tab.": " · یک باب انتخاب کنید. در زبانهٔ جدید باز می‌شود.", "Link not working? Open the full recording page": "پیوند کار نمی‌کند؟ صفحهٔ کامل ضبط را باز کنید", "Popular languages": "زبان‌های رایج", "All other languages": "همهٔ زبان‌های دیگر", "Showing ": "ضبط‌های نمایش‌داده‌شده: ", " recordings. Change the audio language on the Whole Bible tab.": ". زبان صدا را در زبانهٔ «کل کتاب مقدس» تغییر دهید.", "New Testament only": "فقط عهد جدید", "Cancel": "لغو", "Start date": "تاریخ شروع", "Choose a start date.": "یک تاریخ شروع انتخاب کنید.", "Plan started": "برنامه شروع شد", "Start plan": "شروع برنامه", "Back": "بازگشت", " done": " انجام شده", "Group ": "گروه ", "Active plan": "برنامهٔ فعال", "Set as active plan": "تعیین به‌عنوان برنامهٔ فعال", "Set as active": "تعیین به‌عنوان فعال", "Delete plan?": "حذف برنامه؟", "” and its progress will be removed.": "» و پیشرفت آن حذف خواهد شد.", "Delete plan": "حذف برنامه", "Plan deleted": "برنامه حذف شد", "Delete": "حذف", "Mark day ": "علامت‌گذاری روز ", " · Today": " · امروز", " today": " امروز", "New plan": "برنامهٔ جدید", "Step ": "مرحلهٔ ", "Next": "بعدی", "Name and timeframe": "نام و مدت", "My reading plan": "برنامهٔ مطالعهٔ من", "Plan name": "نام برنامه", "1 week": "۱ هفته", "2 weeks": "۲ هفته", "30 days": "۳۰ روز", "60 days": "۶۰ روز", "90 days": "۹۰ روز", "6 months": "۶ ماه", "1 year": "۱ سال", "How long?": "چه مدت؟", "Number of days": "تعداد روزها", "Ends ": "پایان: ", "Enter the number of days.": "تعداد روزها را وارد کنید.", "Pick your groups": "گروه‌های خود را انتخاب کنید", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "هر روز از هر گروه کمی می‌خوانید. هر گروه در کل مدت پخش می‌شود تا همه با هم تمام شوند.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "هر بخش یک باب کامل است. امثال به بخش‌های کوتاه حدود ۱۰ تا ۱۵ آیه تقسیم شده است.", "Remove ": "حذف ", " chapters": " باب", "No books yet": "هنوز کتابی نیست", "Remove group ": "حذف گروه ", "Edit books": "ویرایش کتاب‌ها", "Add books": "افزودن کتاب", "Add group (": "افزودن گروه (", "Reading order inside a group": "ترتیب خواندن در یک گروه", "Reading order": "ترتیب خواندن", "Bible order": "ترتیب کتاب مقدس", "Order I picked": "ترتیبی که انتخاب کردم", " books": " کتاب", " book": " کتاب", "Quick picks": "انتخاب‌های سریع", "Or choose books": "یا کتاب‌ها را انتخاب کنید", "Already in another group": "قبلاً در گروه دیگری است", "Done · ": "انجام شد · ", "Enter a number of days from 1 to 1000.": "تعداد روز را از ۱ تا ۱۰۰۰ وارد کنید.", "Add books to at least one group.": "دست‌کم به یک گروه کتاب اضافه کنید.", " has no books. Add some or remove the group.": " کتابی ندارد. چند کتاب اضافه کنید یا گروه را حذف کنید.", "about ": "حدود ", " ch/day": " باب در روز", " ch total · on ": " باب در مجموع · در ", " fewer chapters than days, so there will be rest days for ": " بابهای کمتری از روزها دارند، بنابراین روزهای استراحتی خواهد بود برای ", "those groups": "این گروه‌ها", "that group": "آن گروه", "First days": "روزهای اول", "Last day: every group ends on day ": "روز آخر: همهٔ گروه‌ها در روز ", "Reading plans": "برنامه‌های مطالعه", "Whole Bible": "کل کتاب مقدس", "Poetry": "شعر", "Law": "شریعت", "Gospels": "انجیل‌ها", "Psalms": "مزامیر", "Proverbs": "امثال", "Choose a chapter": "یک باب انتخاب کنید", "Chapter": "باب", "Plan": "برنامه", "History": "تاریخ", "Major Prophets": "انبیای بزرگ", "Minor Prophets": "انبیای کوچک", "Acts": "اعمال رسولان", "Paul’s letters": "نامه‌های پولس", "General letters": "نامه‌های عمومی", "Revelation": "مکاشفه", "Whole Old Testament": "کل عهد عتیق", "Whole New Testament": "کل عهد جدید", "One gospel, about 2 chapters a day": "یک انجیل، حدود ۲ باب در روز", "Matthew to Revelation, about 3 chapters a day": "از متی تا مکاشفه، حدود ۳ باب در روز", "4 groups: Law and History, Poetry, Prophets, New Testament": "۴ گروه: شریعت و تاریخ، شعر، انبیا، عهد جدید"}, "cs": {"John in 10 days": "Jan za 10 dní", "Daily mix (sample)": "Denní mix (ukázka)", "New Testament in 90 days": "Nový zákon za 90 dní", "Bible in a year": "Bible za rok", "Rest day": "Den odpočinku", "No audio for this book in the selected recording": "Ve vybrané nahrávce není pro tuto knihu zvuk", ", read": ", číst", ", listen": ", poslouchat", "Rest day for this group": "Den odpočinku pro tuto skupinu", "Audio plays the whole chapter.": "Zvuk přehraje celou kapitolu. Zvolte Číst a otevřete jen tyto verše.", "Listen": "Poslouchat", "Read": "Číst", "When I tap a chapter": "Po klepnutí na kapitolu", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Tato nahrávka obsahuje jen Nový zákon. Kapitoly Starého zákona jsou ztlumené. Změňte verzi nebo zvolte Číst.", " days · ": " dní · ", " group": " skupina", " groups": " skupiny", "Version": "Verze", "No active plan": "Žádný aktivní plán", "Start a ready-made plan below or build your own with up to five groups of books.": "Níže začněte hotový plán, nebo si vytvořte vlastní až s pěti skupinami knih.", "Starts ": "Začíná ", "Plan ended ": "Plán skončil ", "Today": "Dnes", "Earlier day": "Dřívější den", "Coming up": "Nadcházející", "Previous day": "Předchozí den", "Day ": "Den ", " of ": " z ", "Next day": "Další den", "Done ✓ (tap to undo)": "Hotovo ✓ (klepnutím vrátíte zpět)", "Mark day done": "Označit den jako hotový", "Plan progress": "Průběh plánu", " days": " dní", "Go to today": "Přejít na dnešek", "View full plan": "Zobrazit celý plán", "My plans": "Moje plány", "No plans yet.": "Zatím žádné plány.", "Active": "Aktivní", " · starts ": " · začíná ", " days done": " dní hotovo", "Create your own plan": "Vytvořit vlastní plán", "Ready-made plans": "Hotové plány", "Reset plans?": "Obnovit plány?", "This removes all your plans and progress.": "Tím se odstraní všechny vaše plány a průběh.", "Reset": "Obnovit", "Reset plans": "Obnovit plány", "Bible language": "Jazyk zvuku", "Bible version": "Verze a čtenář", "Language": "Jazyk nabídky", "Search": "Hledat", "Search books": "Hledat knihy", "Old Testament": "Starý zákon", "New Testament": "Nový zákon", "No books match your search.": "Hledání neodpovídá žádná kniha.", "Close": "Zavřít", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Vyberte kapitolu. Text se otevře na BibleGateway v nové kartě.", " · choose a chapter. It opens in a new tab.": " · vyberte kapitolu. Otevře se v nové kartě.", "Link not working? Open the full recording page": "Odkaz nefunguje? Otevřete celou stránku nahrávky", "Popular languages": "Oblíbené jazyky", "All other languages": "Všechny ostatní jazyky", "Showing ": "Zobrazené nahrávky: ", " recordings. Change the audio language on the Whole Bible tab.": ". Jazyk zvuku změníte na kartě Celá Bible.", "New Testament only": "Pouze Nový zákon", "Cancel": "Zrušit", "Start date": "Datum zahájení", "Choose a start date.": "Vyberte datum zahájení.", "Plan started": "Plán zahájen", "Start plan": "Zahájit plán", "Back": "Zpět", " done": " hotovo", "Group ": "Skupina ", "Active plan": "Aktivní plán", "Set as active plan": "Nastavit jako aktivní plán", "Set as active": "Nastavit jako aktivní", "Delete plan?": "Smazat plán?", "” and its progress will be removed.": "“ a jeho průběh budou odstraněny.", "Delete plan": "Smazat plán", "Plan deleted": "Plán smazán", "Delete": "Smazat", "Mark day ": "Označit den ", " · Today": " · Dnes", " today": " dnes", "New plan": "Nový plán", "Step ": "Krok ", "Next": "Další", "Name and timeframe": "Název a délka", "My reading plan": "Můj čtecí plán", "Plan name": "Název plánu", "1 week": "1 týden", "2 weeks": "2 týdny", "30 days": "30 dní", "60 days": "60 dní", "90 days": "90 dní", "6 months": "6 měsíců", "1 year": "1 rok", "How long?": "Jak dlouho?", "Number of days": "Počet dní", "Ends ": "Končí ", "Enter the number of days.": "Zadejte počet dní.", "Pick your groups": "Vyberte skupiny", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "Každý den si přečtete trochu z každé skupiny. Každá skupina je rozložena na celou dobu, takže všechny skončí společně.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Úseky jsou celé kapitoly. Přísloví jsou rozdělena na krátké části po zhruba 10 až 15 verších.", "Remove ": "Odebrat ", " chapters": " kapitol", "No books yet": "Zatím žádné knihy", "Remove group ": "Odebrat skupinu ", "Edit books": "Upravit knihy", "Add books": "Přidat knihy", "Add group (": "Přidat skupinu (", "Reading order inside a group": "Pořadí čtení ve skupině", "Reading order": "Pořadí čtení", "Bible order": "Pořadí Bible", "Order I picked": "Mnou zvolené pořadí", " books": " knih", " book": " kniha", "Quick picks": "Rychlý výběr", "Or choose books": "Nebo vyberte knihy", "Already in another group": "Již v jiné skupině", "Done · ": "Hotovo · ", "Enter a number of days from 1 to 1000.": "Zadejte počet dní od 1 do 1000.", "Add books to at least one group.": "Přidejte knihy alespoň do jedné skupiny.", " has no books. Add some or remove the group.": " nemá žádné knihy. Přidejte nějaké nebo skupinu odstraňte.", "about ": "asi ", " ch/day": " kap./den", " ch total · on ": " kap. celkem · na ", " fewer chapters than days, so there will be rest days for ": " mají méně kapitol než dní, takže budou dny odpočinku pro ", "those groups": "tyto skupiny", "that group": "tuto skupinu", "First days": "První dny", "Last day: every group ends on day ": "Poslední den: všechny skupiny končí v den ", "Reading plans": "Čtecí plány", "Whole Bible": "Celá Bible", "Poetry": "Poezie", "Law": "Zákon", "Gospels": "Evangelia", "Psalms": "Žalmy", "Proverbs": "Přísloví", "Choose a chapter": "Vyberte kapitolu", "Chapter": "Kapitola", "Plan": "Plán", "History": "Dějiny", "Major Prophets": "Velcí proroci", "Minor Prophets": "Malí proroci", "Acts": "Skutky", "Paul’s letters": "Pavlovy listy", "General letters": "Obecné listy", "Revelation": "Zjevení", "Whole Old Testament": "Celý Starý zákon", "Whole New Testament": "Celý Nový zákon", "One gospel, about 2 chapters a day": "Jedno evangelium, asi 2 kapitoly denně", "Matthew to Revelation, about 3 chapters a day": "Od Matouše po Zjevení, asi 3 kapitoly denně", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 skupiny: Zákon a dějiny, poezie, proroci, Nový zákon"}, "sk": {"John in 10 days": "Ján za 10 dní", "Daily mix (sample)": "Denný mix (ukážka)", "New Testament in 90 days": "Nový zákon za 90 dní", "Bible in a year": "Biblia za rok", "Rest day": "Deň odpočinku", "No audio for this book in the selected recording": "Vo vybranej nahrávke nie je pre túto knihu zvuk", ", read": ", čítať", ", listen": ", počúvať", "Rest day for this group": "Deň odpočinku pre túto skupinu", "Audio plays the whole chapter.": "Zvuk prehrá celú kapitolu. Zvoľte Čítať a otvoríte len tieto verše.", "Listen": "Počúvať", "Read": "Čítať", "When I tap a chapter": "Po ťuknutí na kapitolu", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Táto nahrávka obsahuje len Nový zákon. Kapitoly Starého zákona sú stlmené. Zmeňte verziu alebo zvoľte Čítať.", " days · ": " dní · ", " group": " skupina", " groups": " skupiny", "Version": "Verzia", "No active plan": "Žiadny aktívny plán", "Start a ready-made plan below or build your own with up to five groups of books.": "Nižšie začnite hotový plán alebo si vytvorte vlastný až s piatimi skupinami kníh.", "Starts ": "Začína ", "Plan ended ": "Plán skončil ", "Today": "Dnes", "Earlier day": "Skorší deň", "Coming up": "Nadchádzajúce", "Previous day": "Predchádzajúci deň", "Day ": "Deň ", " of ": " z ", "Next day": "Ďalší deň", "Done ✓ (tap to undo)": "Hotovo ✓ (ťuknutím vrátite späť)", "Mark day done": "Označiť deň ako hotový", "Plan progress": "Priebeh plánu", " days": " dní", "Go to today": "Prejsť na dnešok", "View full plan": "Zobraziť celý plán", "My plans": "Moje plány", "No plans yet.": "Zatiaľ žiadne plány.", "Active": "Aktívny", " · starts ": " · začína ", " days done": " dní hotovo", "Create your own plan": "Vytvoriť vlastný plán", "Ready-made plans": "Hotové plány", "Reset plans?": "Obnoviť plány?", "This removes all your plans and progress.": "Tým sa odstránia všetky vaše plány a priebeh.", "Reset": "Obnoviť", "Reset plans": "Obnoviť plány", "Bible language": "Jazyk zvuku", "Bible version": "Verzia a čitateľ", "Language": "Jazyk ponuky", "Search": "Hľadať", "Search books": "Hľadať knihy", "Old Testament": "Starý zákon", "New Testament": "Nový zákon", "No books match your search.": "Hľadaniu nezodpovedá žiadna kniha.", "Close": "Zavrieť", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Vyberte kapitolu. Text sa otvorí na BibleGateway v novej karte.", " · choose a chapter. It opens in a new tab.": " · vyberte kapitolu. Otvorí sa v novej karte.", "Link not working? Open the full recording page": "Odkaz nefunguje? Otvorte celú stránku nahrávky", "Popular languages": "Obľúbené jazyky", "All other languages": "Všetky ostatné jazyky", "Showing ": "Zobrazené nahrávky: ", " recordings. Change the audio language on the Whole Bible tab.": ". Jazyk zvuku zmeníte na karte Celá Biblia.", "New Testament only": "Iba Nový zákon", "Cancel": "Zrušiť", "Start date": "Dátum začiatku", "Choose a start date.": "Vyberte dátum začiatku.", "Plan started": "Plán sa začal", "Start plan": "Začať plán", "Back": "Späť", " done": " hotovo", "Group ": "Skupina ", "Active plan": "Aktívny plán", "Set as active plan": "Nastaviť ako aktívny plán", "Set as active": "Nastaviť ako aktívny", "Delete plan?": "Vymazať plán?", "” and its progress will be removed.": "“ a jeho priebeh budú odstránené.", "Delete plan": "Vymazať plán", "Plan deleted": "Plán vymazaný", "Delete": "Vymazať", "Mark day ": "Označiť deň ", " · Today": " · Dnes", " today": " dnes", "New plan": "Nový plán", "Step ": "Krok ", "Next": "Ďalej", "Name and timeframe": "Názov a dĺžka", "My reading plan": "Môj čitateľský plán", "Plan name": "Názov plánu", "1 week": "1 týždeň", "2 weeks": "2 týždne", "30 days": "30 dní", "60 days": "60 dní", "90 days": "90 dní", "6 months": "6 mesiacov", "1 year": "1 rok", "How long?": "Ako dlho?", "Number of days": "Počet dní", "Ends ": "Končí ", "Enter the number of days.": "Zadajte počet dní.", "Pick your groups": "Vyberte skupiny", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "Každý deň si prečítate trochu z každej skupiny. Každá skupina je rozložená na celý čas, takže všetky skončia spoločne.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Úseky sú celé kapitoly. Príslovia sú rozdelené na krátke časti po približne 10 až 15 veršoch.", "Remove ": "Odstrániť ", " chapters": " kapitol", "No books yet": "Zatiaľ žiadne knihy", "Remove group ": "Odstrániť skupinu ", "Edit books": "Upraviť knihy", "Add books": "Pridať knihy", "Add group (": "Pridať skupinu (", "Reading order inside a group": "Poradie čítania v skupine", "Reading order": "Poradie čítania", "Bible order": "Poradie Biblie", "Order I picked": "Mnou zvolené poradie", " books": " kníh", " book": " kniha", "Quick picks": "Rýchly výber", "Or choose books": "Alebo vyberte knihy", "Already in another group": "Už v inej skupine", "Done · ": "Hotovo · ", "Enter a number of days from 1 to 1000.": "Zadajte počet dní od 1 do 1000.", "Add books to at least one group.": "Pridajte knihy aspoň do jednej skupiny.", " has no books. Add some or remove the group.": " nemá žiadne knihy. Pridajte nejaké alebo skupinu odstráňte.", "about ": "asi ", " ch/day": " kap./deň", " ch total · on ": " kap. spolu · na ", " fewer chapters than days, so there will be rest days for ": " majú menej kapitol ako dní, takže budú dni odpočinku pre ", "those groups": "tieto skupiny", "that group": "túto skupinu", "First days": "Prvé dni", "Last day: every group ends on day ": "Posledný deň: všetky skupiny končia v deň ", "Reading plans": "Čitateľské plány", "Whole Bible": "Celá Biblia", "Poetry": "Poézia", "Law": "Zákon", "Gospels": "Evanjeliá", "Psalms": "Žalmy", "Proverbs": "Príslovia", "Choose a chapter": "Vyberte kapitolu", "Chapter": "Kapitola", "Plan": "Plán", "History": "Dejiny", "Major Prophets": "Veľkí proroci", "Minor Prophets": "Malí proroci", "Acts": "Skutky apoštolov", "Paul’s letters": "Pavlove listy", "General letters": "Všeobecné listy", "Revelation": "Zjavenie", "Whole Old Testament": "Celý Starý zákon", "Whole New Testament": "Celý Nový zákon", "One gospel, about 2 chapters a day": "Jedno evanjelium, asi 2 kapitoly denne", "Matthew to Revelation, about 3 chapters a day": "Od Matúša po Zjavenie, asi 3 kapitoly denne", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 skupiny: Zákon a dejiny, poézia, proroci, Nový zákon"}, "ro": {"John in 10 days": "Ioan în 10 zile", "Daily mix (sample)": "Mix zilnic (exemplu)", "New Testament in 90 days": "Noul Testament în 90 de zile", "Bible in a year": "Biblia într-un an", "Rest day": "Zi de odihnă", "No audio for this book in the selected recording": "Nu există audio pentru această carte în înregistrarea selectată", ", read": ", citește", ", listen": ", ascultă", "Rest day for this group": "Zi de odihnă pentru acest grup", "Audio plays the whole chapter.": "Audio redă întregul capitol. Alege Citește pentru a deschide doar aceste versete.", "Listen": "Ascultă", "Read": "Citește", "When I tap a chapter": "Când ating un capitol", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Această înregistrare conține doar Noul Testament. Capitolele din Vechiul Testament sunt estompate. Schimbă versiunea sau alege Citește.", " days · ": " zile · ", " group": " grup", " groups": " grupuri", "Version": "Versiune", "No active plan": "Niciun plan activ", "Start a ready-made plan below or build your own with up to five groups of books.": "Începe mai jos un plan gata făcut sau creează-ți unul propriu cu până la cinci grupuri de cărți.", "Starts ": "Începe pe ", "Plan ended ": "Planul s-a încheiat pe ", "Today": "Astăzi", "Earlier day": "Zi anterioară", "Coming up": "Urmează", "Previous day": "Ziua anterioară", "Day ": "Ziua ", " of ": " din ", "Next day": "Ziua următoare", "Done ✓ (tap to undo)": "Gata ✓ (atinge pentru a anula)", "Mark day done": "Marchează ziua ca terminată", "Plan progress": "Progresul planului", " days": " zile", "Go to today": "Mergi la astăzi", "View full plan": "Vezi planul complet", "My plans": "Planurile mele", "No plans yet.": "Încă niciun plan.", "Active": "Activ", " · starts ": " · începe pe ", " days done": " zile terminate", "Create your own plan": "Creează-ți propriul plan", "Ready-made plans": "Planuri gata făcute", "Reset plans?": "Resetezi planurile?", "This removes all your plans and progress.": "Aceasta șterge toate planurile și progresul tău.", "Reset": "Resetează", "Reset plans": "Resetează planurile", "Bible language": "Limba audio", "Bible version": "Versiune și cititor", "Language": "Limba meniului", "Search": "Caută", "Search books": "Caută cărți", "Old Testament": "Vechiul Testament", "New Testament": "Noul Testament", "No books match your search.": "Nicio carte nu corespunde căutării.", "Close": "Închide", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Alege un capitol. Textul se deschide pe BibleGateway într-o filă nouă.", " · choose a chapter. It opens in a new tab.": " · alege un capitol. Se deschide într-o filă nouă.", "Link not working? Open the full recording page": "Linkul nu funcționează? Deschide pagina completă a înregistrării", "Popular languages": "Limbi populare", "All other languages": "Toate celelalte limbi", "Showing ": "Înregistrări afișate: ", " recordings. Change the audio language on the Whole Bible tab.": ". Schimbă limba audio din fila Biblia întreagă.", "New Testament only": "Doar Noul Testament", "Cancel": "Anulează", "Start date": "Data de început", "Choose a start date.": "Alege o dată de început.", "Plan started": "Plan început", "Start plan": "Începe planul", "Back": "Înapoi", " done": " terminat", "Group ": "Grupul ", "Active plan": "Plan activ", "Set as active plan": "Setează ca plan activ", "Set as active": "Setează ca activ", "Delete plan?": "Ștergi planul?", "” and its progress will be removed.": "” și progresul său vor fi șterse.", "Delete plan": "Șterge planul", "Plan deleted": "Plan șters", "Delete": "Șterge", "Mark day ": "Marchează ziua ", " · Today": " · Astăzi", " today": " astăzi", "New plan": "Plan nou", "Step ": "Pasul ", "Next": "Înainte", "Name and timeframe": "Nume și durată", "My reading plan": "Planul meu de citire", "Plan name": "Numele planului", "1 week": "1 săptămână", "2 weeks": "2 săptămâni", "30 days": "30 de zile", "60 days": "60 de zile", "90 days": "90 de zile", "6 months": "6 luni", "1 year": "1 an", "How long?": "Cât timp?", "Number of days": "Numărul de zile", "Ends ": "Se termină pe ", "Enter the number of days.": "Introdu numărul de zile.", "Pick your groups": "Alege grupurile", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "În fiecare zi vei citi puțin din fiecare grup. Fiecare grup este distribuit pe toată durata, astfel încât toate se termină împreună.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Porțiunile sunt capitole întregi. Proverbele sunt împărțite în secțiuni scurte de aproximativ 10–15 versete.", "Remove ": "Elimină ", " chapters": " capitole", "No books yet": "Încă nicio carte", "Remove group ": "Elimină grupul ", "Edit books": "Editează cărțile", "Add books": "Adaugă cărți", "Add group (": "Adaugă grup (", "Reading order inside a group": "Ordinea de citire în grup", "Reading order": "Ordinea de citire", "Bible order": "Ordinea Bibliei", "Order I picked": "Ordinea aleasă de mine", " books": " cărți", " book": " carte", "Quick picks": "Selecții rapide", "Or choose books": "Sau alege cărți", "Already in another group": "Deja în alt grup", "Done · ": "Gata · ", "Enter a number of days from 1 to 1000.": "Introdu un număr de zile între 1 și 1000.", "Add books to at least one group.": "Adaugă cărți în cel puțin un grup.", " has no books. Add some or remove the group.": " nu are cărți. Adaugă câteva sau elimină grupul.", "about ": "aproximativ ", " ch/day": " cap./zi", " ch total · on ": " cap. în total · în ", " fewer chapters than days, so there will be rest days for ": " au mai puține capitole decât zile, deci vor exista zile de odihnă pentru ", "those groups": "acele grupuri", "that group": "acel grup", "First days": "Primele zile", "Last day: every group ends on day ": "Ultima zi: toate grupurile se termină în ziua ", "Reading plans": "Planuri de citire", "Whole Bible": "Biblia întreagă", "Poetry": "Poezie", "Law": "Legea", "Gospels": "Evangheliile", "Psalms": "Psalmii", "Proverbs": "Proverbele", "Choose a chapter": "Alege un capitol", "Chapter": "Capitol", "Plan": "Plan", "History": "Istorie", "Major Prophets": "Profeții mari", "Minor Prophets": "Profeții mici", "Acts": "Faptele Apostolilor", "Paul’s letters": "Epistolele lui Pavel", "General letters": "Epistole generale", "Revelation": "Apocalipsa", "Whole Old Testament": "Tot Vechiul Testament", "Whole New Testament": "Tot Noul Testament", "One gospel, about 2 chapters a day": "O evanghelie, aproximativ 2 capitole pe zi", "Matthew to Revelation, about 3 chapters a day": "De la Matei la Apocalipsa, aproximativ 3 capitole pe zi", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 grupuri: Legea și istoria, poezie, profeți, Noul Testament"}, "sv": {"John in 10 days": "Johannes på 10 dagar", "Daily mix (sample)": "Daglig mix (exempel)", "New Testament in 90 days": "Nya testamentet på 90 dagar", "Bible in a year": "Bibeln på ett år", "Rest day": "Vilodag", "No audio for this book in the selected recording": "Det finns inget ljud för den här boken i den valda inspelningen", ", read": ", läs", ", listen": ", lyssna", "Rest day for this group": "Vilodag för den här gruppen", "Audio plays the whole chapter.": "Ljudet spelar upp hela kapitlet. Välj Läs för att öppna bara de här verserna.", "Listen": "Lyssna", "Read": "Läs", "When I tap a chapter": "När jag trycker på ett kapitel", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Den här inspelningen innehåller bara Nya testamentet. Kapitel i Gamla testamentet är nedtonade. Byt version eller välj Läs.", " days · ": " dagar · ", " group": " grupp", " groups": " grupper", "Version": "Version", "No active plan": "Ingen aktiv plan", "Start a ready-made plan below or build your own with up to five groups of books.": "Starta en färdig plan nedan eller skapa en egen med upp till fem grupper av böcker.", "Starts ": "Börjar ", "Plan ended ": "Planen slutade ", "Today": "Idag", "Earlier day": "Tidigare dag", "Coming up": "Kommande", "Previous day": "Föregående dag", "Day ": "Dag ", " of ": " av ", "Next day": "Nästa dag", "Done ✓ (tap to undo)": "Klar ✓ (tryck för att ångra)", "Mark day done": "Markera dagen som klar", "Plan progress": "Planens framsteg", " days": " dagar", "Go to today": "Gå till idag", "View full plan": "Visa hela planen", "My plans": "Mina planer", "No plans yet.": "Inga planer ännu.", "Active": "Aktiv", " · starts ": " · börjar ", " days done": " dagar klara", "Create your own plan": "Skapa din egen plan", "Ready-made plans": "Färdiga planer", "Reset plans?": "Återställa planerna?", "This removes all your plans and progress.": "Detta tar bort alla dina planer och dina framsteg.", "Reset": "Återställ", "Reset plans": "Återställ planer", "Bible language": "Ljudspråk", "Bible version": "Version och uppläsare", "Language": "Menyspråk", "Search": "Sök", "Search books": "Sök böcker", "Old Testament": "Gamla testamentet", "New Testament": "Nya testamentet", "No books match your search.": "Inga böcker matchar din sökning.", "Close": "Stäng", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Välj ett kapitel. Texten öppnas på BibleGateway i en ny flik.", " · choose a chapter. It opens in a new tab.": " · välj ett kapitel. Det öppnas i en ny flik.", "Link not working? Open the full recording page": "Fungerar inte länken? Öppna hela inspelningssidan", "Popular languages": "Populära språk", "All other languages": "Alla andra språk", "Showing ": "Visar inspelningar: ", " recordings. Change the audio language on the Whole Bible tab.": ". Ändra ljudspråk på fliken Hela Bibeln.", "New Testament only": "Endast Nya testamentet", "Cancel": "Avbryt", "Start date": "Startdatum", "Choose a start date.": "Välj ett startdatum.", "Plan started": "Planen har startat", "Start plan": "Starta planen", "Back": "Tillbaka", " done": " klar", "Group ": "Grupp ", "Active plan": "Aktiv plan", "Set as active plan": "Ange som aktiv plan", "Set as active": "Ange som aktiv", "Delete plan?": "Ta bort planen?", "” and its progress will be removed.": "” och dess framsteg tas bort.", "Delete plan": "Ta bort plan", "Plan deleted": "Planen har tagits bort", "Delete": "Ta bort", "Mark day ": "Markera dag ", " · Today": " · Idag", " today": " idag", "New plan": "Ny plan", "Step ": "Steg ", "Next": "Nästa", "Name and timeframe": "Namn och tidsram", "My reading plan": "Min läsplan", "Plan name": "Planens namn", "1 week": "1 vecka", "2 weeks": "2 veckor", "30 days": "30 dagar", "60 days": "60 dagar", "90 days": "90 dagar", "6 months": "6 månader", "1 year": "1 år", "How long?": "Hur länge?", "Number of days": "Antal dagar", "Ends ": "Slutar ", "Enter the number of days.": "Ange antal dagar.", "Pick your groups": "Välj dina grupper", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "Varje dag läser du lite ur varje grupp. Varje grupp fördelas över hela tidsramen så att alla blir klara samtidigt.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Delarna är hela kapitel. Ordspråksboken delas upp i korta avsnitt om cirka 10 till 15 verser.", "Remove ": "Ta bort ", " chapters": " kapitel", "No books yet": "Inga böcker ännu", "Remove group ": "Ta bort grupp ", "Edit books": "Redigera böcker", "Add books": "Lägg till böcker", "Add group (": "Lägg till grupp (", "Reading order inside a group": "Läsordning inom en grupp", "Reading order": "Läsordning", "Bible order": "Bibelns ordning", "Order I picked": "Min valda ordning", " books": " böcker", " book": " bok", "Quick picks": "Snabbval", "Or choose books": "Eller välj böcker", "Already in another group": "Redan i en annan grupp", "Done · ": "Klart · ", "Enter a number of days from 1 to 1000.": "Ange ett antal dagar från 1 till 1000.", "Add books to at least one group.": "Lägg till böcker i minst en grupp.", " has no books. Add some or remove the group.": " har inga böcker. Lägg till några eller ta bort gruppen.", "about ": "cirka ", " ch/day": " kap./dag", " ch total · on ": " kap. totalt · på ", " fewer chapters than days, so there will be rest days for ": " har färre kapitel än dagar, så det blir vilodagar för ", "those groups": "de grupperna", "that group": "den gruppen", "First days": "Första dagarna", "Last day: every group ends on day ": "Sista dagen: alla grupper slutar dag ", "Reading plans": "Läsplaner", "Whole Bible": "Hela Bibeln", "Poetry": "Poesi", "Law": "Lagen", "Gospels": "Evangelierna", "Psalms": "Psaltaren", "Proverbs": "Ordspråksboken", "Choose a chapter": "Välj ett kapitel", "Chapter": "Kapitel", "Plan": "Plan", "History": "Historia", "Major Prophets": "Stora profeterna", "Minor Prophets": "Lilla profeterna", "Acts": "Apostlagärningarna", "Paul’s letters": "Paulus brev", "General letters": "Allmänna brev", "Revelation": "Uppenbarelseboken", "Whole Old Testament": "Hela Gamla testamentet", "Whole New Testament": "Hela Nya testamentet", "One gospel, about 2 chapters a day": "Ett evangelium, cirka 2 kapitel om dagen", "Matthew to Revelation, about 3 chapters a day": "Från Matteus till Uppenbarelseboken, cirka 3 kapitel om dagen", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 grupper: Lagen och historien, poesi, profeterna, Nya testamentet"}, "sw": {"John in 10 days": "Yohana kwa siku 10", "Daily mix (sample)": "Mchanganyiko wa kila siku (mfano)", "New Testament in 90 days": "Agano Jipya kwa siku 90", "Bible in a year": "Biblia kwa mwaka mmoja", "Rest day": "Siku ya mapumziko", "No audio for this book in the selected recording": "Hakuna sauti ya kitabu hiki katika rekodi iliyochaguliwa", ", read": ", soma", ", listen": ", sikiliza", "Rest day for this group": "Siku ya mapumziko kwa kundi hili", "Audio plays the whole chapter.": "Sauti inacheza sura nzima. Chagua Soma ili kufungua mistari hii tu.", "Listen": "Sikiliza", "Read": "Soma", "When I tap a chapter": "Ninapogusa sura", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Rekodi hii ina Agano Jipya tu. Sura za Agano la Kale zimefifishwa. Badilisha toleo au chagua Soma.", " days · ": " siku · ", " group": " kundi", " groups": " makundi", "Version": "Toleo", "No active plan": "Hakuna mpango unaoendelea", "Start a ready-made plan below or build your own with up to five groups of books.": "Anza mpango uliotayarishwa hapa chini au tengeneza wako na hadi makundi matano ya vitabu.", "Starts ": "Unaanza ", "Plan ended ": "Mpango uliisha ", "Today": "Leo", "Earlier day": "Siku iliyopita", "Coming up": "Zinazokuja", "Previous day": "Siku iliyotangulia", "Day ": "Siku ", " of ": " ya ", "Next day": "Siku inayofuata", "Done ✓ (tap to undo)": "Imekamilika ✓ (gusa kutendua)", "Mark day done": "Weka alama siku imekamilika", "Plan progress": "Maendeleo ya mpango", " days": " siku", "Go to today": "Nenda leo", "View full plan": "Tazama mpango mzima", "My plans": "Mipango yangu", "No plans yet.": "Bado hakuna mipango.", "Active": "Unaendelea", " · starts ": " · unaanza ", " days done": " siku zimekamilika", "Create your own plan": "Tengeneza mpango wako mwenyewe", "Ready-made plans": "Mipango iliyotayarishwa", "Reset plans?": "Weka upya mipango?", "This removes all your plans and progress.": "Hii inafuta mipango yako yote na maendeleo yako.", "Reset": "Weka upya", "Reset plans": "Weka upya mipango", "Bible language": "Lugha ya sauti", "Bible version": "Toleo na msomaji", "Language": "Lugha ya menyu", "Search": "Tafuta", "Search books": "Tafuta vitabu", "Old Testament": "Agano la Kale", "New Testament": "Agano Jipya", "No books match your search.": "Hakuna kitabu kinacholingana na utafutaji wako.", "Close": "Funga", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Chagua sura. Maandishi hufunguka kwenye BibleGateway katika kichupo kipya.", " · choose a chapter. It opens in a new tab.": " · chagua sura. Hufunguka katika kichupo kipya.", "Link not working? Open the full recording page": "Kiungo hakifanyi kazi? Fungua ukurasa kamili wa rekodi", "Popular languages": "Lugha maarufu", "All other languages": "Lugha nyingine zote", "Showing ": "Rekodi zinazoonyeshwa: ", " recordings. Change the audio language on the Whole Bible tab.": ". Badilisha lugha ya sauti kwenye kichupo cha Biblia Nzima.", "New Testament only": "Agano Jipya tu", "Cancel": "Ghairi", "Start date": "Tarehe ya kuanza", "Choose a start date.": "Chagua tarehe ya kuanza.", "Plan started": "Mpango umeanza", "Start plan": "Anza mpango", "Back": "Rudi", " done": " imekamilika", "Group ": "Kundi ", "Active plan": "Mpango unaoendelea", "Set as active plan": "Weka kama mpango unaoendelea", "Set as active": "Weka kama unaoendelea", "Delete plan?": "Futa mpango?", "” and its progress will be removed.": "” na maendeleo yake vitafutwa.", "Delete plan": "Futa mpango", "Plan deleted": "Mpango umefutwa", "Delete": "Futa", "Mark day ": "Weka alama siku ", " · Today": " · Leo", " today": " leo", "New plan": "Mpango mpya", "Step ": "Hatua ", "Next": "Endelea", "Name and timeframe": "Jina na muda", "My reading plan": "Mpango wangu wa kusoma", "Plan name": "Jina la mpango", "1 week": "Wiki 1", "2 weeks": "Wiki 2", "30 days": "Siku 30", "60 days": "Siku 60", "90 days": "Siku 90", "6 months": "Miezi 6", "1 year": "Mwaka 1", "How long?": "Kwa muda gani?", "Number of days": "Idadi ya siku", "Ends ": "Unaisha ", "Enter the number of days.": "Weka idadi ya siku.", "Pick your groups": "Chagua makundi yako", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "Kila siku utasoma kidogo kutoka kila kundi. Kila kundi linagawanywa kwa muda wote ili yote yaishe pamoja.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Sehemu ni sura nzima. Methali imegawanywa katika sehemu fupi za takriban mistari 10 hadi 15.", "Remove ": "Ondoa ", " chapters": " sura", "No books yet": "Bado hakuna vitabu", "Remove group ": "Ondoa kundi ", "Edit books": "Hariri vitabu", "Add books": "Ongeza vitabu", "Add group (": "Ongeza kundi (", "Reading order inside a group": "Mpangilio wa kusoma ndani ya kundi", "Reading order": "Mpangilio wa kusoma", "Bible order": "Mpangilio wa Biblia", "Order I picked": "Mpangilio niliochagua", " books": " vitabu", " book": " kitabu", "Quick picks": "Chaguo za haraka", "Or choose books": "Au chagua vitabu", "Already in another group": "Tayari katika kundi lingine", "Done · ": "Imekamilika · ", "Enter a number of days from 1 to 1000.": "Weka idadi ya siku kutoka 1 hadi 1000.", "Add books to at least one group.": "Ongeza vitabu kwenye angalau kundi moja.", " has no books. Add some or remove the group.": " halina vitabu. Ongeza vingine au liondoe kundi.", "about ": "takriban ", " ch/day": " sura/siku", " ch total · on ": " sura kwa jumla · katika ", " fewer chapters than days, so there will be rest days for ": " yana sura chache kuliko siku, kwa hiyo kutakuwa na siku za mapumziko kwa ", "those groups": "makundi hayo", "that group": "kundi hilo", "First days": "Siku za kwanza", "Last day: every group ends on day ": "Siku ya mwisho: makundi yote yanaisha siku ya ", "Reading plans": "Mipango ya kusoma", "Whole Bible": "Biblia Nzima", "Poetry": "Ushairi", "Law": "Torati", "Gospels": "Injili", "Psalms": "Zaburi", "Proverbs": "Methali", "Choose a chapter": "Chagua sura", "Chapter": "Sura", "Plan": "Mpango", "History": "Historia", "Major Prophets": "Manabii wakuu", "Minor Prophets": "Manabii wadogo", "Acts": "Matendo ya Mitume", "Paul’s letters": "Barua za Paulo", "General letters": "Barua za jumla", "Revelation": "Ufunuo", "Whole Old Testament": "Agano la Kale lote", "Whole New Testament": "Agano Jipya lote", "One gospel, about 2 chapters a day": "Injili moja, takriban sura 2 kwa siku", "Matthew to Revelation, about 3 chapters a day": "Kuanzia Mathayo hadi Ufunuo, takriban sura 3 kwa siku", "4 groups: Law and History, Poetry, Prophets, New Testament": "Makundi 4: Torati na Historia, Ushairi, Manabii, Agano Jipya"}, "th": {"John in 10 days": "ยอห์นใน 10 วัน", "Daily mix (sample)": "ผสมรายวัน (ตัวอย่าง)", "New Testament in 90 days": "พันธสัญญาใหม่ใน 90 วัน", "Bible in a year": "พระคัมภีร์ใน 1 ปี", "Rest day": "วันพัก", "No audio for this book in the selected recording": "ไม่มีเสียงของหนังสือเล่มนี้ในการบันทึกที่เลือก", ", read": " อ่าน", ", listen": " ฟัง", "Rest day for this group": "วันพักของกลุ่มนี้", "Audio plays the whole chapter.": "เสียงจะเล่นทั้งบท เลือก “อ่าน” เพื่อเปิดเฉพาะข้อเหล่านี้", "Listen": "ฟัง", "Read": "อ่าน", "When I tap a chapter": "เมื่อฉันแตะที่บท", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "การบันทึกนี้มีเฉพาะพันธสัญญาใหม่ บทของพันธสัญญาเดิมจะจางลง เปลี่ยนฉบับหรือเลือก “อ่าน”", " days · ": " วัน · ", " group": " กลุ่ม", " groups": " กลุ่ม", "Version": "ฉบับ", "No active plan": "ไม่มีแผนที่ใช้งานอยู่", "Start a ready-made plan below or build your own with up to five groups of books.": "เริ่มแผนสำเร็จรูปด้านล่าง หรือสร้างแผนของคุณเองได้สูงสุดห้ากลุ่มหนังสือ", "Starts ": "เริ่ม ", "Plan ended ": "แผนสิ้นสุด ", "Today": "วันนี้", "Earlier day": "วันก่อนหน้า", "Coming up": "กำลังจะมาถึง", "Previous day": "วันก่อนหน้า", "Day ": "วันที่ ", " of ": " จาก ", "Next day": "วันถัดไป", "Done ✓ (tap to undo)": "เสร็จแล้ว ✓ (แตะเพื่อยกเลิก)", "Mark day done": "ทำเครื่องหมายว่าวันนี้เสร็จแล้ว", "Plan progress": "ความคืบหน้าของแผน", " days": " วัน", "Go to today": "ไปที่วันนี้", "View full plan": "ดูแผนทั้งหมด", "My plans": "แผนของฉัน", "No plans yet.": "ยังไม่มีแผน", "Active": "ใช้งานอยู่", " · starts ": " · เริ่ม ", " days done": " วันที่เสร็จแล้ว", "Create your own plan": "สร้างแผนของคุณเอง", "Ready-made plans": "แผนสำเร็จรูป", "Reset plans?": "รีเซ็ตแผนหรือไม่", "This removes all your plans and progress.": "การดำเนินการนี้จะลบแผนและความคืบหน้าทั้งหมดของคุณ", "Reset": "รีเซ็ต", "Reset plans": "รีเซ็ตแผน", "Bible language": "ภาษาของเสียง", "Bible version": "ฉบับและผู้อ่าน", "Language": "ภาษาของเมนู", "Search": "ค้นหา", "Search books": "ค้นหาหนังสือ", "Old Testament": "พันธสัญญาเดิม", "New Testament": "พันธสัญญาใหม่", "No books match your search.": "ไม่พบหนังสือที่ตรงกับการค้นหา", "Close": "ปิด", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "เลือกบท ข้อความจะเปิดบน BibleGateway ในแท็บใหม่", " · choose a chapter. It opens in a new tab.": " · เลือกบท จะเปิดในแท็บใหม่", "Link not working? Open the full recording page": "ลิงก์ใช้ไม่ได้ใช่ไหม เปิดหน้าการบันทึกฉบับเต็ม", "Popular languages": "ภาษายอดนิยม", "All other languages": "ภาษาอื่นทั้งหมด", "Showing ": "การบันทึกที่แสดง: ", " recordings. Change the audio language on the Whole Bible tab.": " เปลี่ยนภาษาของเสียงได้ที่แท็บพระคัมภีร์ทั้งเล่ม", "New Testament only": "เฉพาะพันธสัญญาใหม่", "Cancel": "ยกเลิก", "Start date": "วันที่เริ่ม", "Choose a start date.": "เลือกวันที่เริ่ม", "Plan started": "เริ่มแผนแล้ว", "Start plan": "เริ่มแผน", "Back": "กลับ", " done": " เสร็จแล้ว", "Group ": "กลุ่มที่ ", "Active plan": "แผนที่ใช้งานอยู่", "Set as active plan": "ตั้งเป็นแผนที่ใช้งาน", "Set as active": "ตั้งเป็นที่ใช้งาน", "Delete plan?": "ลบแผนหรือไม่", "” and its progress will be removed.": "” และความคืบหน้าจะถูกลบ", "Delete plan": "ลบแผน", "Plan deleted": "ลบแผนแล้ว", "Delete": "ลบ", "Mark day ": "ทำเครื่องหมายวันที่ ", " · Today": " · วันนี้", " today": " วันนี้", "New plan": "แผนใหม่", "Step ": "ขั้นตอนที่ ", "Next": "ถัดไป", "Name and timeframe": "ชื่อและระยะเวลา", "My reading plan": "แผนอ่านของฉัน", "Plan name": "ชื่อแผน", "1 week": "1 สัปดาห์", "2 weeks": "2 สัปดาห์", "30 days": "30 วัน", "60 days": "60 วัน", "90 days": "90 วัน", "6 months": "6 เดือน", "1 year": "1 ปี", "How long?": "นานเท่าไร", "Number of days": "จำนวนวัน", "Ends ": "สิ้นสุด ", "Enter the number of days.": "ใส่จำนวนวัน", "Pick your groups": "เลือกกลุ่มของคุณ", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "ทุกวันคุณจะอ่านเล็กน้อยจากแต่ละกลุ่ม แต่ละกลุ่มกระจายตลอดระยะเวลาทั้งหมดเพื่อให้จบพร้อมกัน", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "ส่วนที่อ่านคือบททั้งบท หนังสือสุภาษิตแบ่งเป็นตอนสั้น ๆ ประมาณ 10 ถึง 15 ข้อ", "Remove ": "ลบ ", " chapters": " บท", "No books yet": "ยังไม่มีหนังสือ", "Remove group ": "ลบกลุ่ม ", "Edit books": "แก้ไขหนังสือ", "Add books": "เพิ่มหนังสือ", "Add group (": "เพิ่มกลุ่ม (", "Reading order inside a group": "ลำดับการอ่านภายในกลุ่ม", "Reading order": "ลำดับการอ่าน", "Bible order": "ลำดับตามพระคัมภีร์", "Order I picked": "ลำดับที่ฉันเลือก", " books": " เล่ม", " book": " เล่ม", "Quick picks": "เลือกด่วน", "Or choose books": "หรือเลือกหนังสือ", "Already in another group": "อยู่ในกลุ่มอื่นแล้ว", "Done · ": "เสร็จ · ", "Enter a number of days from 1 to 1000.": "ใส่จำนวนวันตั้งแต่ 1 ถึง 1000", "Add books to at least one group.": "เพิ่มหนังสืออย่างน้อยหนึ่งกลุ่ม", " has no books. Add some or remove the group.": " ไม่มีหนังสือ เพิ่มหนังสือหรือลบกลุ่ม", "about ": "ประมาณ ", " ch/day": " บท/วัน", " ch total · on ": " บทรวม · ใน ", " fewer chapters than days, so there will be rest days for ": " มีจำนวนบทน้อยกว่าจำนวนวัน จึงมีวันพักสำหรับ", "those groups": "กลุ่มเหล่านั้น", "that group": "กลุ่มนั้น", "First days": "วันแรก ๆ", "Last day: every group ends on day ": "วันสุดท้าย: ทุกกลุ่มจบในวันที่ ", "Reading plans": "แผนการอ่าน", "Whole Bible": "พระคัมภีร์ทั้งเล่ม", "Poetry": "กวีนิพนธ์", "Law": "พระราชบัญญัติ", "Gospels": "พระกิตติคุณ", "Psalms": "สดุดี", "Proverbs": "สุภาษิต", "Choose a chapter": "เลือกบท", "Chapter": "บท", "Plan": "แผน", "History": "ประวัติศาสตร์", "Major Prophets": "ผู้เผยพระวจนะใหญ่", "Minor Prophets": "ผู้เผยพระวจนะเล็ก", "Acts": "กิจการ", "Paul’s letters": "จดหมายของเปาโล", "General letters": "จดหมายทั่วไป", "Revelation": "วิวรณ์", "Whole Old Testament": "พันธสัญญาเดิมทั้งหมด", "Whole New Testament": "พันธสัญญาใหม่ทั้งหมด", "One gospel, about 2 chapters a day": "พระกิตติคุณหนึ่งเล่ม ประมาณ 2 บทต่อวัน", "Matthew to Revelation, about 3 chapters a day": "จากมัทธิวถึงวิวรณ์ ประมาณ 3 บทต่อวัน", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 กลุ่ม: พระราชบัญญัติและประวัติศาสตร์ กวีนิพนธ์ ผู้เผยพระวจนะ พันธสัญญาใหม่"}, "pdt": {"John in 10 days": "Johannes in 10 Tagen", "Daily mix (sample)": "Tägliche Mischung (Beispiel)", "New Testament in 90 days": "Neues Testament in 90 Tagen", "Bible in a year": "Die Bibel in einem Jahr", "Rest day": "Ruhetag", "No audio for this book in the selected recording": "Für dieses Buch gibt es in der gewählten Aufnahme kein Audio", ", read": ", lesen", ", listen": ", anhören", "Rest day for this group": "Ruhetag für diese Gruppe", "Audio plays the whole chapter.": "Das Audio spielt das ganze Kapitel ab. Wähle Lesen, um nur diese Verse zu öffnen.", "Listen": "Hören", "Read": "Lesen", "When I tap a chapter": "Wenn ich ein Kapitel antippe", "This recording has the New Testament only. Old Testament chapters are dimmed. Switch version or choose Read.": "Diese Aufnahme enthält nur das Neue Testament. Kapitel des Alten Testaments sind abgeblendet. Wechsle die Version oder wähle Lesen.", " days · ": " Tage · ", " group": " Gruppe", " groups": " Gruppen", "Version": "Version", "No active plan": "Kein aktiver Plan", "Start a ready-made plan below or build your own with up to five groups of books.": "Starte unten einen fertigen Plan oder erstelle deinen eigenen mit bis zu fünf Buchgruppen.", "Starts ": "Beginnt am ", "Plan ended ": "Plan beendet am ", "Today": "Heute", "Earlier day": "Früherer Tag", "Coming up": "Demnächst", "Previous day": "Vorheriger Tag", "Day ": "Tag ", " of ": " von ", "Next day": "Nächster Tag", "Done ✓ (tap to undo)": "Erledigt ✓ (zum Rückgängigmachen tippen)", "Mark day done": "Tag als erledigt markieren", "Plan progress": "Planfortschritt", " days": " Tage", "Go to today": "Zu heute", "View full plan": "Ganzen Plan ansehen", "My plans": "Meine Pläne", "No plans yet.": "Noch keine Pläne.", "Active": "Aktiv", " · starts ": " · beginnt am ", " days done": " Tage erledigt", "Create your own plan": "Eigenen Plan erstellen", "Ready-made plans": "Fertige Pläne", "Reset plans?": "Pläne zurücksetzen?", "This removes all your plans and progress.": "Dadurch werden alle deine Pläne und dein Fortschritt gelöscht.", "Reset": "Zurücksetzen", "Reset plans": "Pläne zurücksetzen", "Bible language": "Audiosprache", "Bible version": "Version und Sprecher", "Language": "Menüsprache", "Search": "Suchen", "Search books": "Bücher suchen", "Old Testament": "Altes Testament", "New Testament": "Neues Testament", "No books match your search.": "Keine Bücher gefunden.", "Close": "Schließen", "Choose a chapter. It opens the text on BibleGateway in a new tab.": "Wähle ein Kapitel. Der Text öffnet sich bei BibleGateway in einem neuen Tab.", " · choose a chapter. It opens in a new tab.": " · wähle ein Kapitel. Es öffnet sich in einem neuen Tab.", "Link not working? Open the full recording page": "Link funktioniert nicht? Öffne die vollständige Aufnahmeseite", "Popular languages": "Beliebte Sprachen", "All other languages": "Alle anderen Sprachen", "Showing ": "Angezeigt werden Aufnahmen: ", " recordings. Change the audio language on the Whole Bible tab.": ". Ändere die Audiosprache im Tab „Ganze Bibel“.", "New Testament only": "Nur Neues Testament", "Cancel": "Abbrechen", "Start date": "Startdatum", "Choose a start date.": "Wähle ein Startdatum.", "Plan started": "Plan gestartet", "Start plan": "Plan starten", "Back": "Zurück", " done": " erledigt", "Group ": "Gruppe ", "Active plan": "Aktiver Plan", "Set as active plan": "Als aktiven Plan festlegen", "Set as active": "Als aktiv festlegen", "Delete plan?": "Plan löschen?", "” and its progress will be removed.": "” und sein Fortschritt werden gelöscht.", "Delete plan": "Plan löschen", "Plan deleted": "Plan gelöscht", "Delete": "Löschen", "Mark day ": "Tag markieren ", " · Today": " · Heute", " today": " heute", "New plan": "Neuer Plan", "Step ": "Schritt ", "Next": "Weiter", "Name and timeframe": "Name und Zeitraum", "My reading plan": "Mein Leseplan", "Plan name": "Planname", "1 week": "1 Woche", "2 weeks": "2 Wochen", "30 days": "30 Tage", "60 days": "60 Tage", "90 days": "90 Tage", "6 months": "6 Monate", "1 year": "1 Jahr", "How long?": "Wie lange?", "Number of days": "Anzahl der Tage", "Ends ": "Endet am ", "Enter the number of days.": "Gib die Anzahl der Tage ein.", "Pick your groups": "Wähle deine Gruppen", "Each day you’ll read a little from every group. Each group is spread across the whole timeframe so they all finish together.": "Jeden Tag liest du ein wenig aus jeder Gruppe. Jede Gruppe wird auf den gesamten Zeitraum verteilt, sodass alle gleichzeitig enden.", "Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses.": "Die Abschnitte sind ganze Kapitel. Die Sprüche sind in kurze Abschnitte von etwa 10 bis 15 Versen aufgeteilt.", "Remove ": "Entfernen ", " chapters": " Kapitel", "No books yet": "Noch keine Bücher", "Remove group ": "Gruppe entfernen ", "Edit books": "Bücher bearbeiten", "Add books": "Bücher hinzufügen", "Add group (": "Gruppe hinzufügen (", "Reading order inside a group": "Lesereihenfolge innerhalb einer Gruppe", "Reading order": "Lesereihenfolge", "Bible order": "Reihenfolge der Bibel", "Order I picked": "Meine Reihenfolge", " books": " Bücher", " book": " Buch", "Quick picks": "Schnellauswahl", "Or choose books": "Oder wähle Bücher", "Already in another group": "Bereits in einer anderen Gruppe", "Done · ": "Fertig · ", "Enter a number of days from 1 to 1000.": "Gib eine Anzahl von Tagen zwischen 1 und 1000 ein.", "Add books to at least one group.": "Füge mindestens einer Gruppe Bücher hinzu.", " has no books. Add some or remove the group.": " hat keine Bücher. Füge welche hinzu oder entferne die Gruppe.", "about ": "etwa ", " ch/day": " Kap./Tag", " ch total · on ": " Kap. insgesamt · an ", " fewer chapters than days, so there will be rest days for ": " haben weniger Kapitel als Tage, daher gibt es Ruhetage für ", "those groups": "diese Gruppen", "that group": "diese Gruppe", "First days": "Erste Tage", "Last day: every group ends on day ": "Letzter Tag: Alle Gruppen enden an Tag ", "Reading plans": "Lesepläne", "Whole Bible": "Ganze Bibel", "Poetry": "Poesie", "Law": "Gesetz", "Gospels": "Evangelien", "Psalms": "Psalmen", "Proverbs": "Sprüche", "Choose a chapter": "Wähle ein Kapitel", "Chapter": "Kapitel", "Plan": "Plan", "History": "Geschichte", "Major Prophets": "Große Propheten", "Minor Prophets": "Kleine Propheten", "Acts": "Apostelgeschichte", "Paul’s letters": "Briefe des Paulus", "General letters": "Allgemeine Briefe", "Revelation": "Offenbarung", "Whole Old Testament": "Ganzes Altes Testament", "Whole New Testament": "Ganzes Neues Testament", "One gospel, about 2 chapters a day": "Ein Evangelium, etwa 2 Kapitel pro Tag", "Matthew to Revelation, about 3 chapters a day": "Von Matthäus bis Offenbarung, etwa 3 Kapitel pro Tag", "4 groups: Law and History, Poetry, Prophets, New Testament": "4 Gruppen: Gesetz und Geschichte, Poesie, Propheten, Neues Testament"}};
var BN_X={"es": ["Génesis", "Éxodo", "Levítico", "Números", "Deuteronomio", "Josué", "Jueces", "Rut", "1 Samuel", "2 Samuel", "1 Reyes", "2 Reyes", "1 Crónicas", "2 Crónicas", "Esdras", "Nehemías", "Ester", "Job", "Salmos", "Proverbios", "Eclesiastés", "Cantares", "Isaías", "Jeremías", "Lamentaciones", "Ezequiel", "Daniel", "Oseas", "Joel", "Amós", "Abdías", "Jonás", "Miqueas", "Nahúm", "Habacuc", "Sofonías", "Hageo", "Zacarías", "Malaquías", "Mateo", "Marcos", "Lucas", "Juan", "Hechos", "Romanos", "1 Corintios", "2 Corintios", "Gálatas", "Efesios", "Filipenses", "Colosenses", "1 Tesalonicenses", "2 Tesalonicenses", "1 Timoteo", "2 Timoteo", "Tito", "Filemón", "Hebreos", "Santiago", "1 Pedro", "2 Pedro", "1 Juan", "2 Juan", "3 Juan", "Judas", "Apocalipsis"], "fr": ["Genèse", "Exode", "Lévitique", "Nombres", "Deutéronome", "Josué", "Juges", "Ruth", "1 Samuel", "2 Samuel", "1 Rois", "2 Rois", "1 Chroniques", "2 Chroniques", "Esdras", "Néhémie", "Esther", "Job", "Psaumes", "Proverbes", "Ecclésiaste", "Cantique des cantiques", "Ésaïe", "Jérémie", "Lamentations", "Ézéchiel", "Daniel", "Osée", "Joël", "Amos", "Abdias", "Jonas", "Michée", "Nahum", "Habacuc", "Sophonie", "Aggée", "Zacharie", "Malachie", "Matthieu", "Marc", "Luc", "Jean", "Actes", "Romains", "1 Corinthiens", "2 Corinthiens", "Galates", "Éphésiens", "Philippiens", "Colossiens", "1 Thessaloniciens", "2 Thessaloniciens", "1 Timothée", "2 Timothée", "Tite", "Philémon", "Hébreux", "Jacques", "1 Pierre", "2 Pierre", "1 Jean", "2 Jean", "3 Jean", "Jude", "Apocalypse"], "de": ["1. Mose", "2. Mose", "3. Mose", "4. Mose", "5. Mose", "Josua", "Richter", "Rut", "1. Samuel", "2. Samuel", "1. Könige", "2. Könige", "1. Chronik", "2. Chronik", "Esra", "Nehemia", "Ester", "Hiob", "Psalmen", "Sprüche", "Prediger", "Hohelied", "Jesaja", "Jeremia", "Klagelieder", "Hesekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadja", "Jona", "Micha", "Nahum", "Habakuk", "Zefanja", "Haggai", "Sacharja", "Maleachi", "Matthäus", "Markus", "Lukas", "Johannes", "Apostelgeschichte", "Römer", "1. Korinther", "2. Korinther", "Galater", "Epheser", "Philipper", "Kolosser", "1. Thessalonicher", "2. Thessalonicher", "1. Timotheus", "2. Timotheus", "Titus", "Philemon", "Hebräer", "Jakobus", "1. Petrus", "2. Petrus", "1. Johannes", "2. Johannes", "3. Johannes", "Judas", "Offenbarung"], "pt": ["Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio", "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel", "1 Reis", "2 Reis", "1 Crônicas", "2 Crônicas", "Esdras", "Neemias", "Ester", "Jó", "Salmos", "Provérbios", "Eclesiastes", "Cantares", "Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel", "Oseias", "Joel", "Amós", "Obadias", "Jonas", "Miqueias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias", "Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "1 Coríntios", "2 Coríntios", "Gálatas", "Efésios", "Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses", "1 Timóteo", "2 Timóteo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro", "1 João", "2 João", "3 João", "Judas", "Apocalipse"], "zh": ["创世记", "出埃及记", "利未记", "民数记", "申命记", "约书亚记", "士师记", "路得记", "撒母耳记上", "撒母耳记下", "列王纪上", "列王纪下", "历代志上", "历代志下", "以斯拉记", "尼希米记", "以斯帖记", "约伯记", "诗篇", "箴言", "传道书", "雅歌", "以赛亚书", "耶利米书", "耶利米哀歌", "以西结书", "但以理书", "何西阿书", "约珥书", "阿摩司书", "俄巴底亚书", "约拿书", "弥迦书", "那鸿书", "哈巴谷书", "西番雅书", "哈该书", "撒迦利亚书", "玛拉基书", "马太福音", "马可福音", "路加福音", "约翰福音", "使徒行传", "罗马书", "哥林多前书", "哥林多后书", "加拉太书", "以弗所书", "腓立比书", "歌罗西书", "帖撒罗尼迦前书", "帖撒罗尼迦后书", "提摩太前书", "提摩太后书", "提多书", "腓利门书", "希伯来书", "雅各书", "彼得前书", "彼得后书", "约翰一书", "约翰二书", "约翰三书", "犹大书", "启示录"], "ja": ["創世記", "出エジプト記", "レビ記", "民数記", "申命記", "ヨシュア記", "士師記", "ルツ記", "サムエル記上", "サムエル記下", "列王記上", "列王記下", "歴代誌上", "歴代誌下", "エズラ記", "ネヘミヤ記", "エステル記", "ヨブ記", "詩篇", "箴言", "伝道者の書", "雅歌", "イザヤ書", "エレミヤ書", "哀歌", "エゼキエル書", "ダニエル書", "ホセア書", "ヨエル書", "アモス書", "オバデヤ書", "ヨナ書", "ミカ書", "ナホム書", "ハバクク書", "ゼパニヤ書", "ハガイ書", "ゼカリヤ書", "マラキ書", "マタイの福音書", "マルコの福音書", "ルカの福音書", "ヨハネの福音書", "使徒の働き", "ローマ人への手紙", "コリント人への手紙第一", "コリント人への手紙第二", "ガラテヤ人への手紙", "エペソ人への手紙", "ピリピ人への手紙", "コロサイ人への手紙", "テサロニケ人への手紙第一", "テサロニケ人への手紙第二", "テモテへの手紙第一", "テモテへの手紙第二", "テトスへの手紙", "ピレモンへの手紙", "ヘブル人への手紙", "ヤコブの手紙", "ペテロの手紙第一", "ペテロの手紙第二", "ヨハネの手紙第一", "ヨハネの手紙第二", "ヨハネの手紙第三", "ユダの手紙", "ヨハネの黙示録"], "ar": ["التكوين", "الخروج", "اللاويين", "العدد", "التثنية", "يشوع", "القضاة", "راعوث", "صموئيل الأول", "صموئيل الثاني", "الملوك الأول", "الملوك الثاني", "أخبار الأيام الأول", "أخبار الأيام الثاني", "عزرا", "نحميا", "أستير", "أيوب", "المزامير", "الأمثال", "الجامعة", "نشيد الأنشاد", "إشعياء", "إرميا", "مراثي إرميا", "حزقيال", "دانيال", "هوشع", "يوئيل", "عاموس", "عوبديا", "يونان", "ميخا", "ناحوم", "حبقوق", "صفنيا", "حجي", "زكريا", "ملاخي", "متى", "مرقس", "لوقا", "يوحنا", "أعمال الرسل", "رومية", "كورنثوس الأولى", "كورنثوس الثانية", "غلاطية", "أفسس", "فيلبي", "كولوسي", "تسالونيكي الأولى", "تسالونيكي الثانية", "تيموثاوس الأولى", "تيموثاوس الثانية", "تيطس", "فليمون", "العبرانيين", "يعقوب", "بطرس الأولى", "بطرس الثانية", "يوحنا الأولى", "يوحنا الثانية", "يوحنا الثالثة", "يهوذا", "رؤيا يوحنا"], "fa": ["پیدایش", "خروج", "لاویان", "اعداد", "تثنیه", "یوشع", "داوران", "روت", "اول سموئیل", "دوم سموئیل", "اول پادشاهان", "دوم پادشاهان", "اول تواریخ", "دوم تواریخ", "عزرا", "نحمیا", "استر", "ایوب", "مزامیر", "امثال", "جامعه", "غزل غزل‌ها", "اشعیا", "ارمیا", "مراثی", "حزقیال", "دانیال", "هوشع", "یوئیل", "عاموس", "عوبدیا", "یونس", "میکاه", "ناحوم", "حبقوق", "صفنیا", "حجی", "زکریا", "ملاکی", "متی", "مرقس", "لوقا", "یوحنا", "اعمال رسولان", "رومیان", "اول قرنتیان", "دوم قرنتیان", "غلاطیان", "افسسیان", "فیلیپیان", "کولسیان", "اول تسالونیکیان", "دوم تسالونیکیان", "اول تیموتائوس", "دوم تیموتائوس", "تیطس", "فلیمون", "عبرانیان", "یعقوب", "اول پطرس", "دوم پطرس", "اول یوحنا", "دوم یوحنا", "سوم یوحنا", "یهودا", "مکاشفه"], "cs": ["Genesis", "Exodus", "Leviticus", "Numeri", "Deuteronomium", "Jozue", "Soudců", "Rút", "1. Samuelova", "2. Samuelova", "1. Královská", "2. Královská", "1. Paralipomenon", "2. Paralipomenon", "Ezdráš", "Nehemjáš", "Ester", "Job", "Žalmy", "Přísloví", "Kazatel", "Píseň písní", "Izajáš", "Jeremjáš", "Pláč", "Ezechiel", "Daniel", "Ozeáš", "Joel", "Ámos", "Abdijáš", "Jonáš", "Micheáš", "Nahum", "Abakuk", "Sofonjáš", "Ageus", "Zachariáš", "Malachiáš", "Matouš", "Marek", "Lukáš", "Jan", "Skutky", "Římanům", "1. Korintským", "2. Korintským", "Galatským", "Efezským", "Filipským", "Koloským", "1. Tesalonickým", "2. Tesalonickým", "1. Timoteovi", "2. Timoteovi", "Titovi", "Filemonovi", "Židům", "Jakubův", "1. Petrův", "2. Petrův", "1. Janův", "2. Janův", "3. Janův", "Judův", "Zjevení"], "sk": ["Genezis", "Exodus", "Levitikus", "Numeri", "Deuteronómium", "Jozue", "Sudcov", "Rút", "1. Samuelova", "2. Samuelova", "1. kniha Kráľov", "2. kniha Kráľov", "1. kniha Kroník", "2. kniha Kroník", "Ezdráš", "Nehemiáš", "Ester", "Jób", "Žalmy", "Príslovia", "Kazateľ", "Pieseň piesní", "Izaiáš", "Jeremiáš", "Plač", "Ezechiel", "Daniel", "Ozeáš", "Joel", "Amos", "Abdiáš", "Jonáš", "Micheáš", "Nahum", "Habakuk", "Sofoniáš", "Aggeus", "Zachariáš", "Malachiáš", "Matúš", "Marek", "Lukáš", "Ján", "Skutky apoštolov", "Rimanom", "1. Korinťanom", "2. Korinťanom", "Galaťanom", "Efezanom", "Filipanom", "Kolosanom", "1. Solúnčanom", "2. Solúnčanom", "1. Timotejovi", "2. Timotejovi", "Títovi", "Filemonovi", "Hebrejom", "Jakub", "1. Petrov", "2. Petrov", "1. Jánov", "2. Jánov", "3. Jánov", "Júda", "Zjavenie"], "ro": ["Geneza", "Exodul", "Leviticul", "Numeri", "Deuteronomul", "Iosua", "Judecători", "Rut", "1 Samuel", "2 Samuel", "1 Regi", "2 Regi", "1 Cronici", "2 Cronici", "Ezra", "Neemia", "Estera", "Iov", "Psalmii", "Proverbele", "Eclesiastul", "Cântarea Cântărilor", "Isaia", "Ieremia", "Plângerile lui Ieremia", "Ezechiel", "Daniel", "Osea", "Ioel", "Amos", "Obadia", "Iona", "Mica", "Naum", "Habacuc", "Țefania", "Hagai", "Zaharia", "Maleahi", "Matei", "Marcu", "Luca", "Ioan", "Faptele Apostolilor", "Romani", "1 Corinteni", "2 Corinteni", "Galateni", "Efeseni", "Filipeni", "Coloseni", "1 Tesaloniceni", "2 Tesaloniceni", "1 Timotei", "2 Timotei", "Tit", "Filimon", "Evrei", "Iacov", "1 Petru", "2 Petru", "1 Ioan", "2 Ioan", "3 Ioan", "Iuda", "Apocalipsa"], "sv": ["1 Mosebok", "2 Mosebok", "3 Mosebok", "4 Mosebok", "5 Mosebok", "Josua", "Domarboken", "Rut", "1 Samuelsboken", "2 Samuelsboken", "1 Kungaboken", "2 Kungaboken", "1 Krönikeboken", "2 Krönikeboken", "Esra", "Nehemja", "Ester", "Job", "Psaltaren", "Ordspråksboken", "Predikaren", "Höga visan", "Jesaja", "Jeremia", "Klagovisorna", "Hesekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadja", "Jona", "Mika", "Nahum", "Habackuk", "Sefanja", "Haggai", "Sakarja", "Malaki", "Matteusevangeliet", "Markusevangeliet", "Lukasevangeliet", "Johannesevangeliet", "Apostlagärningarna", "Romarbrevet", "1 Korinthierbrevet", "2 Korinthierbrevet", "Galaterbrevet", "Efesierbrevet", "Filipperbrevet", "Kolosserbrevet", "1 Thessalonikerbrevet", "2 Thessalonikerbrevet", "1 Timotheosbrevet", "2 Timotheosbrevet", "Titusbrevet", "Filemonbrevet", "Hebreerbrevet", "Jakobsbrevet", "1 Petrusbrevet", "2 Petrusbrevet", "1 Johannesbrevet", "2 Johannesbrevet", "3 Johannesbrevet", "Judasbrevet", "Uppenbarelseboken"], "sw": ["Mwanzo", "Kutoka", "Walawi", "Hesabu", "Kumbukumbu la Torati", "Yoshua", "Waamuzi", "Ruthu", "1 Samweli", "2 Samweli", "1 Wafalme", "2 Wafalme", "1 Mambo ya Nyakati", "2 Mambo ya Nyakati", "Ezra", "Nehemia", "Esta", "Ayubu", "Zaburi", "Methali", "Mhubiri", "Wimbo Ulio Bora", "Isaya", "Yeremia", "Maombolezo", "Ezekieli", "Danieli", "Hosea", "Yoeli", "Amosi", "Obadia", "Yona", "Mika", "Nahumu", "Habakuki", "Sefania", "Hagai", "Zekaria", "Malaki", "Mathayo", "Marko", "Luka", "Yohana", "Matendo ya Mitume", "Warumi", "1 Wakorintho", "2 Wakorintho", "Wagalatia", "Waefeso", "Wafilipi", "Wakolosai", "1 Wathesalonike", "2 Wathesalonike", "1 Timotheo", "2 Timotheo", "Tito", "Filemoni", "Waebrania", "Yakobo", "1 Petro", "2 Petro", "1 Yohana", "2 Yohana", "3 Yohana", "Yuda", "Ufunuo wa Yohana"], "th": ["ปฐมกาล", "อพยพ", "เลวีนิติ", "กันดารวิถี", "เฉลยธรรมบัญญัติ", "โยชูวา", "ผู้วินิจฉัย", "นางรูธ", "1 ซามูเอล", "2 ซามูเอล", "1 กษัตริย์", "2 กษัตริย์", "1 พงศาวดาร", "2 พงศาวดาร", "เอสรา", "เนหะมีย์", "เอสเธอร์", "โยบ", "สดุดี", "สุภาษิต", "ปัญญาจารย์", "เพลงซาโลมอน", "อิสยาห์", "เยเรมีย์", "เพลงคร่ำครวญ", "เอเสเคียล", "ดาเนียล", "โฮเชยา", "โยเอล", "อาโมส", "โอบาดีห์", "โยนาห์", "มีคาห์", "นาฮูม", "ฮาบากุก", "เศฟันยาห์", "ฮักกัย", "เศคาริยาห์", "มาลาคี", "มัทธิว", "มาระโก", "ลูกา", "ยอห์น", "กิจการ", "โรม", "1 โครินธ์", "2 โครินธ์", "กาลาเทีย", "เอเฟซัส", "ฟีลิปปี", "โคโลสี", "1 เธสะโลนิกา", "2 เธสะโลนิกา", "1 ทิโมธี", "2 ทิโมธี", "ทิตัส", "ฟีเลโมน", "ฮีบรู", "ยากอบ", "1 เปโตร", "2 เปโตร", "1 ยอห์น", "2 ยอห์น", "3 ยอห์น", "ยูดา", "วิวรณ์"], "pdt": ["1. Mose", "2. Mose", "3. Mose", "4. Mose", "5. Mose", "Josua", "Richter", "Rut", "1. Samuel", "2. Samuel", "1. Könige", "2. Könige", "1. Chronik", "2. Chronik", "Esra", "Nehemia", "Ester", "Hiob", "Psalmen", "Sprüche", "Prediger", "Hohelied", "Jesaja", "Jeremia", "Klagelieder", "Hesekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadja", "Jona", "Micha", "Nahum", "Habakuk", "Zefanja", "Haggai", "Sacharja", "Maleachi", "Matthäus", "Markus", "Lukas", "Johannes", "Apostelgeschichte", "Römer", "1. Korinther", "2. Korinther", "Galater", "Epheser", "Philipper", "Kolosser", "1. Thessalonicher", "2. Thessalonicher", "1. Timotheus", "2. Timotheus", "Titus", "Philemon", "Hebräer", "Jakobus", "1. Petrus", "2. Petrus", "1. Johannes", "2. Johannes", "3. Johannes", "Judas", "Offenbarung"]};
var I18N_RD={
 ru:{"In-app reader":"Читалка в приложении","Continue reading":"Продолжить чтение","No audio is available.":"Аудио недоступно.","The reader could not start. Reload the app and try again.":"Читалка не запустилась. Перезагрузите приложение и повторите."},
 es:{"In-app reader":"Lector integrado","Continue reading":"Continuar leyendo","No audio is available.":"No hay audio disponible.","The reader could not start. Reload the app and try again.":"El lector no pudo iniciar. Recarga la app e inténtalo de nuevo.","Opens at the first chapter of the day. The chapters after it follow.":"Se abre en el primer capítulo del día. Los siguientes capítulos continúan.","Audio plays the whole chapter. Read opens the whole chapter too.":"El audio reproduce el capítulo completo. Leer también abre el capítulo completo."}
};
var ru_extra={"Opens at the first chapter of the day. The chapters after it follow.":"Открывается с первой главы дня. Следующие главы идут дальше.","Audio plays the whole chapter. Read opens the whole chapter too.":"Аудио воспроизводит всю главу. «Читать» тоже открывает всю главу."};
for(var _e in ru_extra)I18N_RD.ru[_e]=ru_extra[_e];
for(var _k in I18N_X)I18N[_k]=I18N_X[_k];
for(var _rl in I18N_RD){I18N[_rl]=I18N[_rl]||{};for(var _rk in I18N_RD[_rl])I18N[_rl][_rk]=I18N_RD[_rl][_rk]}for(var _k2 in BN_X)BN[_k2]=BN_X[_k2];
var RICO=IMG.rico;
var NEWL={"ru": ["Язык Библии", "Версия Библии", "Язык"], "es": ["Idioma de la Biblia", "Versión de la Biblia", "Idioma"], "fr": ["Langue de la Bible", "Version de la Bible", "Langue"], "de": ["Bibelsprache", "Bibelversion", "Sprache"], "pt": ["Idioma da Bíblia", "Versão da Bíblia", "Idioma"], "zh": ["圣经语言", "圣经版本", "语言"], "ja": ["聖書の言語", "聖書のバージョン", "言語"], "ar": ["لغة الكتاب المقدس", "نسخة الكتاب المقدس", "اللغة"], "fa": ["زبان کتاب مقدس", "نسخهٔ کتاب مقدس", "زبان"], "cs": ["Jazyk Bible", "Verze Bible", "Jazyk"], "sk": ["Jazyk Biblie", "Verzia Biblie", "Jazyk"], "ro": ["Limba Bibliei", "Versiunea Bibliei", "Limba"], "sv": ["Bibelspråk", "Bibelversion", "Språk"], "sw": ["Lugha ya Biblia", "Toleo la Biblia", "Lugha"], "th": ["ภาษาพระคัมภีร์", "ฉบับพระคัมภีร์", "ภาษา"], "pdt": ["Bibelsprache", "Bibelversion", "Sprache"]};

var VNL={"ru": ["Текст", "Аудио", "НЗ", "Недоступно", "Текст этой версии недоступен. Смените версию или выберите «Слушать».", "Текст этой версии есть только для Нового Завета. Смените версию или выберите «Слушать»."], "es": ["Texto", "Audio", "NT", "No disponible", "Esta versión no tiene texto disponible. Cambia de versión o elige Escuchar.", "El texto de esta versión solo cubre el Nuevo Testamento. Cambia de versión o elige Escuchar."], "fr": ["Texte", "Audio", "NT", "Non disponible", "Cette version n’a pas de texte disponible. Changez de version ou choisissez Écouter.", "Le texte de cette version ne couvre que le Nouveau Testament. Changez de version ou choisissez Écouter."], "de": ["Text", "Audio", "NT", "Nicht verfügbar", "Für diese Version ist kein Text verfügbar. Wechsle die Version oder wähle Hören.", "Der Text dieser Version umfasst nur das Neue Testament. Wechsle die Version oder wähle Hören."], "pt": ["Texto", "Áudio", "NT", "Indisponível", "Esta versão não tem texto disponível. Troque a versão ou escolha Ouvir.", "O texto desta versão cobre apenas o Novo Testamento. Troque a versão ou escolha Ouvir."], "zh": ["文字", "音频", "新约", "不可用", "此版本没有可用的文字。请切换版本或选择“收听”。", "此版本的文字仅包含新约。请切换版本或选择“收听”。"], "ja": ["テキスト", "音声", "新約", "利用不可", "このバージョンにはテキストがありません。バージョンを変更するか「聞く」を選んでください。", "このバージョンのテキストは新約聖書のみです。バージョンを変更するか「聞く」を選んでください。"], "ar": ["نص", "صوت", "ع.ج", "غير متاح", "لا يتوفر نص لهذه النسخة. غيّر النسخة أو اختر «استماع».", "نص هذه النسخة يشمل العهد الجديد فقط. غيّر النسخة أو اختر «استماع»."], "fa": ["متن", "صدا", "ع.ج", "در دسترس نیست", "متنی برای این نسخه موجود نیست. نسخه را تغییر دهید یا «شنیدن» را انتخاب کنید.", "متن این نسخه فقط عهد جدید را دربر می‌گیرد. نسخه را تغییر دهید یا «شنیدن» را انتخاب کنید."], "cs": ["Text", "Zvuk", "NZ", "Nedostupné", "Pro tuto verzi není k dispozici text. Změňte verzi nebo zvolte Poslouchat.", "Text této verze zahrnuje jen Nový zákon. Změňte verzi nebo zvolte Poslouchat."], "sk": ["Text", "Zvuk", "NZ", "Nedostupné", "Pre túto verziu nie je k dispozícii text. Zmeňte verziu alebo zvoľte Počúvať.", "Text tejto verzie zahŕňa len Nový zákon. Zmeňte verziu alebo zvoľte Počúvať."], "ro": ["Text", "Audio", "NT", "Indisponibil", "Pentru această versiune nu există text disponibil. Schimbă versiunea sau alege Ascultă.", "Textul acestei versiuni cuprinde doar Noul Testament. Schimbă versiunea sau alege Ascultă."], "sv": ["Text", "Ljud", "NT", "Inte tillgänglig", "Den här versionen har ingen text tillgänglig. Byt version eller välj Lyssna.", "Textversionen finns bara för Nya testamentet. Byt version eller välj Lyssna."], "sw": ["Maandishi", "Sauti", "AJ", "Haipatikani", "Toleo hili halina maandishi. Badilisha toleo au chagua Sikiliza.", "Maandishi ya toleo hili ni ya Agano Jipya tu. Badilisha toleo au chagua Sikiliza."], "th": ["ข้อความ", "เสียง", "NT", "ไม่มี", "ฉบับนี้ไม่มีข้อความ เปลี่ยนฉบับหรือเลือก “ฟัง”", "ข้อความของฉบับนี้มีเฉพาะพันธสัญญาใหม่ เปลี่ยนฉบับหรือเลือก “ฟัง”"], "pdt": ["Text", "Audio", "NT", "Nicht verfügbar", "Für diese Version ist kein Text verfügbar. Wechsle die Version oder wähle Hören.", "Der Text dieser Version umfasst nur das Neue Testament. Wechsle die Version oder wähle Hören."]};var VNK=["Text", "Audio", "NT", "Not available", "This version has no text available. Switch version or choose Listen.", "This version\\u2019s text covers the New Testament only. Switch version or choose Listen."];
for(var _v in VNL){I18N[_v]=I18N[_v]||{};VNK.forEach(function(k,i){I18N[_v][k]=VNL[_v][i]})}
for(var _l in NEWL){I18N[_l]=I18N[_l]||{};I18N[_l]["Bible language"]=NEWL[_l][0];I18N[_l]["Bible version"]=NEWL[_l][1];I18N[_l]["Language"]=NEWL[_l][2]}
function applyBookNames(){var n=BN[uiLang()];BOOKS.forEach(function(b,i){b[2]=n&&n[i]?n[i]:BEN[i]})}

/* ---------- helpers ---------- */
function $(id){return document.getElementById(id)}
function h(tag,p,kids){var e=document.createElement(tag);p=p||{};for(var k in p){if(p[k]==null)continue;if(k==="class")e.className=p[k];else if(k==="text")e.textContent=_(p[k]);else if(k==="html")e.innerHTML=p[k];else if(k.slice(0,2)==="on")e[k]=p[k];else e.setAttribute(k,(k==="aria-label"||k==="placeholder"||k==="title"||k==="alt")?_(p[k]):p[k])}(kids||[]).forEach(function(c){if(c)e.appendChild(typeof c==="string"?document.createTextNode(_(c)):c)});return e}
function ic(n){return h("span",{class:"ic",html:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[n]||"")+'</svg>'})}
function pad2(n){return String(n).padStart(2,"0")}
function fdate(d){return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate())}
function pdate(s){var q=s.split("-");return new Date(+q[0],+q[1]-1,+q[2])}
function todayStr(){return fdate(new Date())}
function addDays(s,n){var d=pdate(s);d.setDate(d.getDate()+n);return fdate(d)}
function diffDays(a,b){return Math.round((pdate(a)-pdate(b))/86400000)}
var LOC={"en": "en-US", "zh": "zh-CN", "es": "es", "ar": "ar", "pt": "pt-BR", "ru": "ru", "fr": "fr", "de": "de", "ja": "ja", "cs": "cs", "fa": "fa", "pdt": "de", "ro": "ro", "sk": "sk", "sw": "sw", "sv": "sv", "th": "th"};
function loc(){return LOC[uiLang()]||"en-US"}
function nice(s){return pdate(s).toLocaleDateString(loc(),{weekday:"short",month:"short",day:"numeric"})}
function niceY(s){return pdate(s).toLocaleDateString(loc(),{month:"short",day:"numeric",year:"numeric"})}
function toast(msg){var t=$("toast");t.textContent=_(msg);t.style.display="block";clearTimeout(toast._t);toast._t=setTimeout(function(){t.style.display="none"},2200)}

/* ---------- state ---------- */
var KEY="audio-bible-draft11";
var state=null,viewDay=null,query="";
function langById(id){return LANGS.filter(function(l){return l.id===id})[0]||LANGS[0]}
function versionsFor(l){return VERSIONS.filter(function(v){return v.lang===l})}
function curVersion(){var v=VERSIONS.filter(function(x){return x.id===state.prefs.ver})[0];if(!v||v.lang!==state.prefs.lang){v=versionsFor(state.prefs.lang)[0];state.prefs.ver=v.id}return v}
function seed(){
  var t=todayStr();
  return {prefs:{lang:"en",ver:"esv-mclean",mode:"listen",tab:"plans",theme:"auto"},
   plans:[],customs:[],active:null};
}
function load(){try{var s=JSON.parse(localStorage.getItem(KEY));if(s&&s.prefs&&s.plans){s.plans=s.plans.filter(function(p){return p.id!=="p-sample"});if(s.active==="p-sample"||!s.plans.some(function(p){return p.id===s.active}))s.active=s.plans.length?s.plans[0].id:null;if(!s.customs)s.customs=[];state=s;return}}catch(e){}state=seed()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state,function(k,v){return k.charAt(0)==="_"?undefined:v}))}catch(e){}}
function activePlan(){return state.plans.filter(function(p){return p.id===state.active})[0]||null}
function applyTheme(){var r=document.documentElement,t=state.prefs.theme;if(t==="light"||t==="dark")r.setAttribute("data-theme",t);else r.removeAttribute("data-theme")}

/* ---------- schedule ---------- */
var PROV=19;
var PV=[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31];
function unitsOf(books){var L=[];books.forEach(function(b){
  if(b===PROV){for(var c=1;c<=PV.length;c++){var n=PV[c-1],k=Math.ceil(n/15),base=Math.floor(n/k),rem=n%k,v=1;for(var i=0;i<k;i++){var sz=base+(i<rem?1:0);L.push({b:b,c:c,v1:v,v2:v+sz-1});v+=sz}}}
  else for(var c2=1;c2<=BOOKS[b][1];c2++)L.push({b:b,c:c2,v1:0,v2:0});
});return L}
function totalChapters(books){return books.reduce(function(n,b){return n+BOOKS[b][1]},0)}
function orderBooks(g,order){return order==="picked"?g.slice():g.slice().sort(function(a,b){return a-b})}
function schedule(plan){
  if(plan._s)return plan._s;
  var D=plan.days,lists=plan.groups.map(function(g){return unitsOf(orderBooks(g,plan.order))}),days=[];
  for(var d=0;d<D;d++)days.push(lists.map(function(L){var n=L.length;return L.slice(Math.floor(n*d/D),Math.floor(n*(d+1)/D))}));
  plan._s=days;return days;
}
function segs(units){var s=[];units.forEach(function(u){var l=s[s.length-1];if(l&&l.b===u.b)l.units.push(u);else s.push({b:u.b,units:[u]})});return s}
function propRange(u){var f=u[0],l=u[u.length-1],fw=f.v1===1,lw=l.v2===PV[l.c-1];
  if(f.c===l.c)return(fw&&lw)?""+f.c:f.c+":"+f.v1+"\u2013"+l.v2;
  if(fw&&lw)return f.c+"\u2013"+l.c;
  return f.c+":"+f.v1+"\u2013"+l.c+":"+l.v2}
function segLabel(sg){var bn=BOOKS[sg.b][2],u=sg.units;
  if(sg.b===PROV)return bn+" "+propRange(u);
  var a=u[0].c,z=u[u.length-1].c;return bn+" "+(a===z?a:a+"\u2013"+z)}
function itemsText(units){return units.length?segs(units).map(segLabel).join(" \u00b7 "):"Rest day"}
function planDayIndex(plan){return diffDays(todayStr(),plan.start)}
function doneCount(plan){var n=0;for(var k in plan.done)if(plan.done[k])n++;return n}

/* ---------- chapter marks + done circle ---------- */
var fpRebuild=null;
function chKey(d,u){return d+":"+u.b+":"+u.c+":"+(u.v1||0)}
function dayUnits(plan,d){var a=[];(schedule(plan)[d]||[]).forEach(function(g){g.forEach(function(u){a.push(u)})});return a}
function chMark(plan,d,u){return plan.ch&&plan.ch[chKey(d,u)]||""}
function effMark(plan,d,u){var m=chMark(plan,d,u);return !m&&plan.done&&plan.done[d]?"c":m}
function checkChapter(plan,d,u){setMark(plan,d,u,"c");autoDone(plan,d);save()}
function uncheckChapter(plan,d,u){
  if(plan.done[d])dayUnits(plan,d).forEach(function(x){if(!chMark(plan,d,x))setMark(plan,d,x,"c")});
  setMark(plan,d,u,"");plan.done[d]=0;save()}
function setDayDone(plan,d,on){
  dayUnits(plan,d).forEach(function(x){setMark(plan,d,x,on?"c":"")});
  plan.done[d]=on?1:0;save()}
function setMark(plan,d,u,m){if(!plan.ch)plan.ch={};if(m)plan.ch[chKey(d,u)]=m;else delete plan.ch[chKey(d,u)]}
function refreshPlanViews(){renderPlansTab();if(fpRebuild)fpRebuild()}
/* the reader reports a chapter whose audio played to the end: leave a light-green "played" mark in the active plan */
function autoDone(plan,d){
  var us=dayUnits(plan,d);
  if(us.length&&us.every(function(x){var m=chMark(plan,d,x);return m==="p"||m==="c"}))plan.done[d]=1;
}
function markPlayed(b,c){
  var plan=activePlan();if(!plan||plan.completed)return;
  var D=plan.days,t=planDayIndex(plan),cur=viewDay!=null?viewDay:Math.min(Math.max(t,0),D-1),order=[cur],i;
  for(i=cur-1;i>=0;i--)order.push(i);
  for(i=0;i<order.length;i++){
    var d=order[i],us=dayUnits(plan,d).filter(function(u){return u.b===b&&u.c===c});
    if(!us.length)continue;
    us.forEach(function(u){var m=chMark(plan,d,u);if(m!=="c"&&m!=="p")setMark(plan,d,u,"p")});
    autoDone(plan,d);save();return;
  }
}
function markOpenedDay(plan,idx){
  dayUnits(plan,idx).forEach(function(u){if(!chMark(plan,idx,u))setMark(plan,idx,u,"o")});
  save();setTimeout(refreshPlanViews,0);
}
function completeThrough(plan,d){
  for(var i=0;i<=d;i++){dayUnits(plan,i).forEach(function(x){setMark(plan,i,x,"c")});plan.done[i]=1}
  save();
}
function paintPill(el,m,base){
  el.classList.remove("mp","mc","mo");if(m)el.classList.add("m"+m);
  var t=m==="p"?"Played through in the app":m==="c"?"Confirmed":m==="o"?"Opened in another app":"";
  el.setAttribute("aria-label",base+(t?", "+_(t):""));if(t)el.title=_(t);else el.removeAttribute("title");
}
function dayMenu(plan,d,refresh){
  openSheet(function(box){
    box.appendChild(sheetHead(_("Day ")+(d+1)));
    box.appendChild(h("button",{class:"btn",type:"button",style:"width:100%;margin-top:6px",onclick:function(){completeThrough(plan,d);closeSheet();refresh()}},["Mark everything completed up to here"]));
    box.appendChild(h("button",{class:"btn ghost",type:"button",style:"width:100%;margin-top:6px",onclick:closeSheet},["Cancel"]));
  });
}
/* tap: a ring draws itself and the circle turns green. Press and hold on a green circle: it turns red and undraws; let it finish and it goes back to grey. */
function doneCircle(isDone,label,onSet,onClear,small,onMenu){
  var b=h("button",{class:"dcirc"+(small?" sm":"")+(isDone?" on":""),type:"button","aria-pressed":isDone?"true":"false","aria-label":label+(isDone?_(" (press and hold to undo)"):"")},[h("span",{class:"dcin"},[ic("check")])]);
  var raf=0,busy=false,holding=false;
  function ring(p,a){b.style.setProperty("--p",p);b.style.setProperty("--a",a||0)}
  /* both directions go clockwise: drawing moves the leading end round, undoing moves the trailing end round */
  function anim(mode,ms,fin){var t0=performance.now();function f(){var k=Math.min(1,(performance.now()-t0)/ms);if(mode==="draw")ring(100*k,0);else ring(100,100*k);if(k<1)raf=requestAnimationFrame(f);else{raf=0;fin()}}raf=requestAnimationFrame(f)}
  ring(isDone?100:0,0);
  var mt=0,mfired=false;
  function mstop(){clearTimeout(mt);mt=0}
  b.onclick=function(){if(mfired){mfired=false;return}if(isDone||busy)return;busy=true;b.classList.add("trace");anim("draw",450,function(){onSet()})};
  function begin(){if(!isDone||busy||holding)return;holding=true;b.classList.add("hold");anim("undo",800,function(){holding=false;busy=true;onClear()})}
  function abort(){if(!holding)return;holding=false;cancelAnimationFrame(raf);raf=0;b.classList.remove("hold");ring(100,0)}
  b.onpointerdown=function(){mfired=false;begin();if(!isDone&&onMenu&&!busy){mstop();mt=setTimeout(function(){mt=0;mfired=true;onMenu()},500)}};
  b.onpointerup=b.onpointerleave=b.onpointercancel=function(){mstop();abort()};
  b.onkeydown=function(e){if((e.key==="Enter"||e.key===" ")&&!e.repeat&&isDone){e.preventDefault();begin()}};
  b.onkeyup=function(e){if(e.key==="Enter"||e.key===" ")abort()};
  b.oncontextmenu=function(e){e.preventDefault()};
  return b;
}

/* ---------- chapter pills ---------- */
function readUrlV(v,b,c,v1,v2){
  return "https://www.biblegateway.com/passage/?search="+encodeURIComponent(BEN[b]+" "+c+":"+v1+"-"+v2)+"&version="+encodeURIComponent(bgCode(v));
}
function chPill(b,c,u,ctx){
  var v=curVersion(),part=u&&u.v1,sm=ctx&&ctx.sm?" sm":"";
  var label=part?c+":"+u.v1+"\u2013"+u.v2:String(c);
  var base=BOOKS[b][2]+" "+label,unit={b:b,c:c,v1:part?u.v1:0};
  if(!ctx||!ctx.plan){
    if(!(availFor(v,b,false)||availFor(v,b,true)))return h("span",{class:"cp dis"+sm,title:"Not available in this version"},[label]);
    var el0=h("a",{class:"cp"+sm,href:"#",role:"button","aria-label":base},[label]);
    el0.onclick=function(e){e.preventDefault();choosePlayMethod(b,c,u,null)};return el0}
  /* inside a plan a chapter is a check box: tap checks it, tap again unchecks it */
  var el=h("a",{class:"cp pg"+sm,href:"#",role:"button"},[label]);
  function eff(){return effMark(ctx.plan,ctx.d,unit)}
  function on(){var m=eff();return m==="p"||m==="c"}
  paintPill(el,eff(),base);
  el.oncontextmenu=function(e){e.preventDefault()};
  el.onclick=function(e){e.preventDefault();
    if(on())uncheckChapter(ctx.plan,ctx.d,unit);else checkChapter(ctx.plan,ctx.d,unit);
    ctx.refresh()};
  return el;
}
function passageRow(units,color,ctx){
  var body=h("div",{class:"pbody"});
  if(!units.length)body.appendChild(h("div",{class:"prest",text:"Rest day for this group"}));
  else segs(units).forEach(function(sg){
    body.appendChild(h("div",{class:"plabel",text:segLabel(sg)}));
    var p=h("div",{class:"pills2"}),seen={};
    sg.units.forEach(function(u){
      if(sg.b===PROV)p.appendChild(chPill(sg.b,u.c,u,ctx));
      else if(!seen[u.c]){seen[u.c]=1;p.appendChild(chPill(sg.b,u.c,null,ctx))}
    });
    body.appendChild(p);
    if(sg.b===PROV){
      body.appendChild(h("div",{class:"note",style:"margin:0 0 6px",text:"Audio plays the whole chapter."}));
      var seenC={};
      sg.units.forEach(function(u){
        if(seenC[u.c])return;seenC[u.c]=1;
        if(u.v1>1){var pc=Math.max(0,Math.floor((u.v1-1)/PV[u.c-1]*20)*5-5);
          body.appendChild(h("div",{class:"note skip",style:"margin:0 0 6px",text:"Chapter "+u.c+": today starts at verse "+u.v1+". Skip ahead to about "+pc+"% of the audio (estimated by verse count, set a little early on purpose)."}))}
      });
    }
  });
  return h("div",{class:"prow"},[h("span",{class:"gdot",style:"background:"+color}),body]);
}
function linkSheet(title,sub,listen,read,back,onGo){
  openSheet(function(box){
    box.appendChild(sheetHead(title));
    if(sub)box.appendChild(h("p",{class:"note",text:sub}));
    function opt(kind,href){
      var isL=kind==="l",lbl=isL?"Listen":"Read",icn=ic(isL?"headphones":"book-2");
      if(typeof href==="function")return h("a",{class:"popt "+kind,href:"#",role:"button",onclick:function(e){e.preventDefault();if(onGo)try{onGo()}catch(x){}href();closeSheet()}},[icn,lbl]);
      if(href)return h("a",{class:"popt "+kind,href:href,target:"_blank",rel:"noopener",onclick:function(){if(onGo)try{onGo()}catch(x){}setTimeout(closeSheet,0)}},[icn,lbl]);
      return h("div",{class:"popt off","aria-disabled":"true"},[icn,lbl+" \u00b7 not available"]);
    }
    box.appendChild(opt("l",listen));
    box.appendChild(opt("r",read));
    if(back)box.appendChild(h("button",{class:"btn ghost",type:"button",style:"margin-top:6px",onclick:back},["Back"]));
  });
}
/* in-app versions open the reader (and start the audio for Listen) instead of an outside site */
/* the reader tells the app when it has loaded or closed, so the Continue reading card stays current */
window.onBBReader=function(what){try{if(what==="opened"&&typeof splashGo==="function")splashGo();renderBibleTab();if(what==="closed")refreshPlanViews()}catch(e){}};
window.onBBChapterDone=function(tr,b,c){try{markPlayed(b,c)}catch(e){}};
function openApp(v,b,c,play,list){
  if(window.BBReader&&BBReader.open(v.app,b,c,{play:!!play,list:list||null}))return;
  toast("The reader could not start. Reload the app and try again.");
}
function choosePlayMethod(b,c,u,back,onGo){
  var v=curVersion(),part=u&&u.v1;
  var label=BOOKS[b][2]+" "+(part?c+":"+u.v1+"\u2013"+u.v2:c);
  if(v.app){closeSheet();openApp(v,b,c,false);return}
  var L=availFor(v,b,false)?chapterUrl(v,b,c):null;
  var R=availFor(v,b,true)?(part?readUrlV(v,b,c,u.v1,u.v2):readUrl(v,b,c)):null;
  linkSheet(label,part?"Audio plays the whole chapter. Read opens just these verses.":"",L,R,back,onGo);
}
function choosePlayDay(plan,idx){
  var v=curVersion(),us=[];
  schedule(plan)[idx].forEach(function(g){g.forEach(function(u){us.push(u)})});
  var title="Day "+(idx+1)+" \u00b7 all chapters";
  if(!us.length){linkSheet(title,"Rest day.",null,null);return}
  var aOK=us.every(function(u){return availFor(v,u.b,false)}),rOK=us.every(function(u){return availFor(v,u.b,true)});
  if(v.app){closeSheet();openApp(v,us[0].b,us[0].c,aOK,us.map(function(u){return{b:u.b,c:u.c}}));return}
  var L=aOK?bgAudioUrl(plan,idx,v):null;
  var R=rOK?"https://www.biblegateway.com/passage/?search="+encodeURIComponent(us.map(function(u){return BEN[u.b]+" "+u.c+(u.v1?":"+u.v1+"-"+u.v2:"")}).join("; "))+"&version="+encodeURIComponent(bgCode(v)):null;
  linkSheet(title,"",L,R,null,function(){markOpenedDay(plan,idx)});
}

var VN={"esv-mclean": ["English Standard Version (ESV)", "Max McLean", 1], "esv-heath": ["English Standard Version (ESV)", "David Cochran Heath", 1], "esv-laughlin": ["English Standard Version (ESV)", "Marquis Laughlin", 1], "niv-mclean": ["New International Version (NIV)", "Max McLean", 1], "niv-dramatized": ["New International Version (NIV)", "Dramatized", 1], "niv-sarris": ["New International Version (NIV)", "George W. Sarris", 1], "nivuk-suchet": ["New International Version UK (NIVUK)", "David Suchet", 1], "kjv-mims": ["King James Version (KJV)", "Paul Mims", 1], "kjv-mclean": ["King James Version (KJV)", "Max McLean", 1], "kjv-dramatized": ["King James Version (KJV)", "Dramatized", 1], "nkjv-bubb": ["New King James Version (NKJV)", "Simon Bubb", 1], "nkjv-laraye": ["New King James Version (NKJV)", "Tinasha LaRaye", 1], "nasb-mcconachie": ["New American Standard Bible (NASB)", "Dale McConachie", 1], "nasb95-mcconachie": ["New American Standard Bible 1995 (NASB1995)", "Dale McConachie", 1], "csb-mohr": ["Christian Standard Bible (CSB)", "Jon Mohr", 1], "hcsb-mcconachie": ["Holman Christian Standard Bible (HCSB)", "Dale McConachie", 1], "nlt-breathe": ["New Living Translation (NLT)", "Breathe", 1], "msg-dolan": ["The Message (MSG)", "Kelly Ryan Dolan", 1], "gnv-cook": ["1599 Geneva Bible (GNV)", "Steve Cook", 1], "leb-logos": ["Lexham English Bible (LEB)", "Logos", 1], "ccb-biblica": ["圣经当代译本·简体 (CCB)", "Biblica", 1], "ccbt-biblica": ["聖經當代譯本·繁體 (CCBT)", "Biblica", 1], "csbs-hao": ["中文标准译本·简体 (CSBS)", "Ran Hao", 1], "csbt-hao": ["中文標準譯本·繁體 (CSBT)", "Ran Hao", 1], "lbla-montoya": ["La Biblia de las Américas (LBLA)", "Samuel Montoya H", 1], "nvi-cruz": ["Nueva Versión Internacional (NVI)", "Rafael Cruz", 1], "nvi-ev": ["Nueva Versión Internacional (NVI)", "Experiencia Viva", 1], "nav-biblica": ["الترجمة العربية الجديدة (NAV)", "Biblica", 1], "nvipt-biblica": ["Nova Versão Internacional (NVI-PT)", "Biblica", 1], "rst-isa": ["Синодальный перевод (RUSV)", "§R · ISA · Digital Bible Society", 1], "rst-fcbh": ["Синодальный перевод (RUSV)", "§D · Faith Comes By Hearing", 1], "nrt-biblica": ["Новый русский перевод (NRT)", "Biblica", 1], "bds-biblica": ["La Bible du Semeur (BDS)", "Biblica", 1], "hof-biblica": ["Hoffnung für Alle (HOF)", "Biblica", 1], "jlb-biblica": ["リビングバイブル (JLB)", "Biblica", 1], "bk-hodul": ["Bible Kralická (BK)", "Joseph Hodul", 1], "farsi-as": ["کتاب مقدس فارسی", "Audio Scriptures", 0], "reimer": ["Reimer 2001 (REIMER)", "Elmer Reimer", 2], "ntlr-biblica": ["Nouă Traducere în Limba Română (NTLR)", "Biblica", 1], "slo1979-hodul": ["SLO1979", "Joseph Hodul", 0], "snt-biblica": ["Agano Jipya (SNT)", "Biblica", 2], "sfb": ["Svenska Folkbibeln (SFB)", "Svenska Folkbibeln", 1], "sfb15": ["Svenska Folkbibeln 2015 (SFB15)", "Svenska Folkbibeln", 1], "tncv-biblica": ["พระคัมภีร์ไทยฉบับร่วมสมัยใหม่ (TNCV)", "Biblica", 1]};
var VK=["ccb", "ccbt", "csbs", "csbt", "lbla", "nvi", "nav", "nvipt", "rusv", "nrt", "bds", "hof", "jlb", "bk", "farsi", "reimer", "ntlr", "slo", "snt", "sfb", "sfb15", "tncv"];
var VKEY={"ccb-biblica": "ccb", "ccbt-biblica": "ccbt", "csbs-hao": "csbs", "csbt-hao": "csbt", "lbla-montoya": "lbla", "nvi-cruz": "nvi", "nvi-ev": "nvi", "nav-biblica": "nav", "nvipt-biblica": "nvipt", "rst-isa": "rusv", "rst-fcbh": "rusv", "nrt-biblica": "nrt", "bds-biblica": "bds", "hof-biblica": "hof", "jlb-biblica": "jlb", "bk-hodul": "bk", "farsi-as": "farsi", "reimer": "reimer", "ntlr-biblica": "ntlr", "slo1979-hodul": "slo", "snt-biblica": "snt", "sfb": "sfb", "sfb15": "sfb15", "tncv-biblica": "tncv"};
var VNAMES={"en": ["Chinese Contemporary Bible, Simplified (CCB)", "Chinese Contemporary Bible, Traditional (CCBT)", "Chinese Standard Bible, Simplified (CSBS)", "Chinese Standard Bible, Traditional (CSBT)", "Bible of the Americas, Spanish (LBLA)", "New International Version, Spanish (NVI)", "New Arabic Version (NAV)", "New International Version, Portuguese (NVI-PT)", "Russian Synodal Version (RUSV)", "New Russian Translation (NRT)", "The Sower’s Bible, French (BDS)", "Hope for All, German (HOF)", "Japanese Living Bible (JLB)", "Kralice Bible, Czech (BK)", "Farsi (Persian) Bible", "Reimer 2001, Plautdietsch (REIMER)", "New Romanian Translation (NTLR)", "Slovak 1979 (SLO1979)", "Swahili New Testament (SNT)", "Swedish People’s Bible (SFB)", "Swedish People’s Bible 2015 (SFB15)", "Thai New Contemporary Bible (TNCV)"], "es": ["Biblia Contemporánea China, simplificada (CCB)", "Biblia Contemporánea China, tradicional (CCBT)", "Biblia Estándar China, simplificada (CSBS)", "Biblia Estándar China, tradicional (CSBT)", "La Biblia de las Américas (LBLA)", "Nueva Versión Internacional (NVI)", "Nueva Versión Árabe (NAV)", "Nueva Versión Internacional, portugués (NVI-PT)", "Versión Sinodal Rusa (RUSV)", "Nueva Traducción Rusa (NRT)", "La Biblia del Sembrador, francés (BDS)", "Esperanza para Todos, alemán (HOF)", "Biblia Viviente Japonesa (JLB)", "Biblia de Kralice, checo (BK)", "Biblia en farsi (persa)", "Reimer 2001, plautdietsch (REIMER)", "Nueva Traducción Rumana (NTLR)", "Eslovaco 1979 (SLO1979)", "Nuevo Testamento en suajili (SNT)", "Biblia del Pueblo Sueca (SFB)", "Biblia del Pueblo Sueca 2015 (SFB15)", "Nueva Biblia Contemporánea Tailandesa (TNCV)"], "fr": ["Bible Contemporaine Chinoise, simplifiée (CCB)", "Bible Contemporaine Chinoise, traditionnelle (CCBT)", "Bible Standard Chinoise, simplifiée (CSBS)", "Bible Standard Chinoise, traditionnelle (CSBT)", "La Bible des Amériques, espagnol (LBLA)", "Nouvelle Version Internationale, espagnol (NVI)", "Nouvelle Version Arabe (NAV)", "Nouvelle Version Internationale, portugais (NVI-PT)", "Version Synodale Russe (RUSV)", "Nouvelle Traduction Russe (NRT)", "La Bible du Semeur (BDS)", "Espoir pour tous, allemand (HOF)", "Bible Vivante Japonaise (JLB)", "Bible de Kralice, tchèque (BK)", "Bible en farsi (persan)", "Reimer 2001, plautdietsch (REIMER)", "Nouvelle Traduction Roumaine (NTLR)", "Slovaque 1979 (SLO1979)", "Nouveau Testament en swahili (SNT)", "Bible du Peuple Suédoise (SFB)", "Bible du Peuple Suédoise 2015 (SFB15)", "Nouvelle Bible Contemporaine Thaïe (TNCV)"], "de": ["Chinesische Zeitgenössische Bibel, vereinfacht (CCB)", "Chinesische Zeitgenössische Bibel, traditionell (CCBT)", "Chinesische Standardbibel, vereinfacht (CSBS)", "Chinesische Standardbibel, traditionell (CSBT)", "Bibel der Amerikas, Spanisch (LBLA)", "Neue Internationale Version, Spanisch (NVI)", "Neue Arabische Version (NAV)", "Neue Internationale Version, Portugiesisch (NVI-PT)", "Russische Synodalübersetzung (RUSV)", "Neue Russische Übersetzung (NRT)", "Die Bibel des Sämanns, Französisch (BDS)", "Hoffnung für Alle (HOF)", "Japanische Lebensbibel (JLB)", "Kralitzer Bibel, Tschechisch (BK)", "Farsi-Bibel (Persisch)", "Reimer 2001, Plautdietsch (REIMER)", "Neue Rumänische Übersetzung (NTLR)", "Slowakisch 1979 (SLO1979)", "Neues Testament auf Suaheli (SNT)", "Schwedische Volksbibel (SFB)", "Schwedische Volksbibel 2015 (SFB15)", "Neue Zeitgenössische Thai-Bibel (TNCV)"], "pt": ["Bíblia Contemporânea Chinesa, simplificada (CCB)", "Bíblia Contemporânea Chinesa, tradicional (CCBT)", "Bíblia Padrão Chinesa, simplificada (CSBS)", "Bíblia Padrão Chinesa, tradicional (CSBT)", "A Bíblia das Américas, espanhol (LBLA)", "Nueva Versión Internacional, espanhol (NVI)", "Nova Versão Árabe (NAV)", "Nova Versão Internacional (NVI-PT)", "Versão Sinodal Russa (RUSV)", "Nova Tradução Russa (NRT)", "A Bíblia do Semeador, francês (BDS)", "Esperança para Todos, alemão (HOF)", "Bíblia Viva Japonesa (JLB)", "Bíblia de Kralice, tcheco (BK)", "Bíblia em farsi (persa)", "Reimer 2001, plautdietsch (REIMER)", "Nova Tradução Romena (NTLR)", "Eslovaco 1979 (SLO1979)", "Novo Testamento em suaíli (SNT)", "Bíblia do Povo Sueca (SFB)", "Bíblia do Povo Sueca 2015 (SFB15)", "Nova Bíblia Contemporânea Tailandesa (TNCV)"], "ru": ["Современная китайская Библия, упрощённая (CCB)", "Современная китайская Библия, традиционная (CCBT)", "Китайская стандартная Библия, упрощённая (CSBS)", "Китайская стандартная Библия, традиционная (CSBT)", "Библия Америк, испанский (LBLA)", "Новая международная версия, испанский (NVI)", "Новый арабский перевод (NAV)", "Новая международная версия, португальский (NVI-PT)", "Синодальный перевод (RUSV)", "Новый русский перевод (NRT)", "Библия Сеятеля, французский (BDS)", "Надежда для всех, немецкий (HOF)", "Японская Живая Библия (JLB)", "Кралицкая Библия, чешский (BK)", "Библия на фарси (персидский)", "Реймер 2001, плаутдич (REIMER)", "Новый румынский перевод (NTLR)", "Словацкий 1979 (SLO1979)", "Новый Завет на суахили (SNT)", "Шведская народная Библия (SFB)", "Шведская народная Библия 2015 (SFB15)", "Новая современная тайская Библия (TNCV)"], "zh": ["圣经当代译本·简体 (CCB)", "圣经当代译本·繁体 (CCBT)", "中文标准译本·简体 (CSBS)", "中文标准译本·繁体 (CSBT)", "美洲圣经，西班牙语 (LBLA)", "新国际版，西班牙语 (NVI)", "新阿拉伯语译本 (NAV)", "新国际版，葡萄牙语 (NVI-PT)", "俄语主教公会译本 (RUSV)", "新俄语译本 (NRT)", "播种者圣经，法语 (BDS)", "万民希望，德语 (HOF)", "日语生活圣经 (JLB)", "克拉利采圣经，捷克语 (BK)", "波斯语圣经", "莱默 2001，低地德语 (REIMER)", "新罗马尼亚语译本 (NTLR)", "斯洛伐克语 1979 (SLO1979)", "斯瓦希里语新约 (SNT)", "瑞典人民圣经 (SFB)", "瑞典人民圣经 2015 (SFB15)", "泰语新当代圣经 (TNCV)"], "ja": ["現代中国語聖書・簡体字 (CCB)", "現代中国語聖書・繁体字 (CCBT)", "中国語標準訳聖書・簡体字 (CSBS)", "中国語標準訳聖書・繁体字 (CSBT)", "アメリカ大陸聖書・スペイン語 (LBLA)", "新国際訳・スペイン語 (NVI)", "新アラビア語訳 (NAV)", "新国際訳・ポルトガル語 (NVI-PT)", "ロシア語シノド訳 (RUSV)", "新ロシア語訳 (NRT)", "種まく人の聖書・フランス語 (BDS)", "すべての人に希望を・ドイツ語 (HOF)", "リビングバイブル (JLB)", "クラリツェ聖書・チェコ語 (BK)", "ペルシア語聖書", "ライマー 2001・低地ドイツ語 (REIMER)", "新ルーマニア語訳 (NTLR)", "スロバキア語 1979 (SLO1979)", "スワヒリ語新約聖書 (SNT)", "スウェーデン民衆聖書 (SFB)", "スウェーデン民衆聖書 2015 (SFB15)", "タイ語新現代聖書 (TNCV)"], "ar": ["الكتاب المقدس المعاصر الصيني، المبسّط (CCB)", "الكتاب المقدس المعاصر الصيني، التقليدي (CCBT)", "الكتاب المقدس الصيني القياسي، المبسّط (CSBS)", "الكتاب المقدس الصيني القياسي، التقليدي (CSBT)", "كتاب الأمريكتين المقدس، الإسبانية (LBLA)", "النسخة الدولية الجديدة، الإسبانية (NVI)", "الترجمة العربية الجديدة (NAV)", "النسخة الدولية الجديدة، البرتغالية (NVI-PT)", "الترجمة السينودسية الروسية (RUSV)", "الترجمة الروسية الجديدة (NRT)", "كتاب الزارع المقدس، الفرنسية (BDS)", "أمل للجميع، الألمانية (HOF)", "الكتاب المقدس الحي الياباني (JLB)", "كتاب كرالتسه المقدس، التشيكية (BK)", "الكتاب المقدس بالفارسية", "رايمر 2001، البلاوتديتش (REIMER)", "الترجمة الرومانية الجديدة (NTLR)", "السلوفاكية 1979 (SLO1979)", "العهد الجديد بالسواحيلية (SNT)", "الكتاب المقدس الشعبي السويدي (SFB)", "الكتاب المقدس الشعبي السويدي 2015 (SFB15)", "الكتاب المقدس التايلاندي المعاصر الجديد (TNCV)"], "fa": ["کتاب مقدس معاصر چینی، ساده‌شده (CCB)", "کتاب مقدس معاصر چینی، سنتی (CCBT)", "کتاب مقدس استاندارد چینی، ساده‌شده (CSBS)", "کتاب مقدس استاندارد چینی، سنتی (CSBT)", "کتاب مقدس امریکاها، اسپانیایی (LBLA)", "نسخهٔ بین‌المللی جدید، اسپانیایی (NVI)", "ترجمهٔ جدید عربی (NAV)", "نسخهٔ بین‌المللی جدید، پرتغالی (NVI-PT)", "ترجمهٔ سینودال روسی (RUSV)", "ترجمهٔ جدید روسی (NRT)", "کتاب مقدس برزگر، فرانسوی (BDS)", "امید برای همه، آلمانی (HOF)", "کتاب مقدس زنده ژاپنی (JLB)", "کتاب مقدس کرالیتسه، چکی (BK)", "کتاب مقدس فارسی", "رایمر ۲۰۰۱، پلاوتدیچ (REIMER)", "ترجمهٔ جدید رومانیایی (NTLR)", "اسلواکی ۱۹۷۹ (SLO1979)", "عهد جدید سواحیلی (SNT)", "کتاب مقدس مردمی سوئدی (SFB)", "کتاب مقدس مردمی سوئدی ۲۰۱۵ (SFB15)", "کتاب مقدس معاصر جدید تایلندی (TNCV)"], "cs": ["Čínská současná Bible, zjednodušená (CCB)", "Čínská současná Bible, tradiční (CCBT)", "Čínská standardní Bible, zjednodušená (CSBS)", "Čínská standardní Bible, tradiční (CSBT)", "Bible Ameriky, španělsky (LBLA)", "Nová mezinárodní verze, španělsky (NVI)", "Nový arabský překlad (NAV)", "Nová mezinárodní verze, portugalsky (NVI-PT)", "Ruský synodální překlad (RUSV)", "Nový ruský překlad (NRT)", "Bible Rozsévače, francouzsky (BDS)", "Naděje pro všechny, německy (HOF)", "Japonská Živá Bible (JLB)", "Bible kralická (BK)", "Bible ve farsí (perština)", "Reimer 2001, plautdietsch (REIMER)", "Nový rumunský překlad (NTLR)", "Slovenština 1979 (SLO1979)", "Nový zákon ve svahilštině (SNT)", "Švédská lidová Bible (SFB)", "Švédská lidová Bible 2015 (SFB15)", "Nová současná thajská Bible (TNCV)"], "sk": ["Čínska súčasná Biblia, zjednodušená (CCB)", "Čínska súčasná Biblia, tradičná (CCBT)", "Čínska štandardná Biblia, zjednodušená (CSBS)", "Čínska štandardná Biblia, tradičná (CSBT)", "Biblia Ameriky, po španielsky (LBLA)", "Nová medzinárodná verzia, po španielsky (NVI)", "Nový arabský preklad (NAV)", "Nová medzinárodná verzia, po portugalsky (NVI-PT)", "Ruský synodálny preklad (RUSV)", "Nový ruský preklad (NRT)", "Biblia Rozsievača, po francúzsky (BDS)", "Nádej pre všetkých, po nemecky (HOF)", "Japonská Živá Biblia (JLB)", "Kralická Biblia, po česky (BK)", "Biblia vo farsi (perzština)", "Reimer 2001, plautdietsch (REIMER)", "Nový rumunský preklad (NTLR)", "Slovenčina 1979 (SLO1979)", "Nový zákon v svahilčine (SNT)", "Švédska ľudová Biblia (SFB)", "Švédska ľudová Biblia 2015 (SFB15)", "Nová súčasná thajská Biblia (TNCV)"], "ro": ["Biblia Contemporană Chineză, simplificată (CCB)", "Biblia Contemporană Chineză, tradițională (CCBT)", "Biblia Standard Chineză, simplificată (CSBS)", "Biblia Standard Chineză, tradițională (CSBT)", "Biblia Americilor, spaniolă (LBLA)", "Noua Versiune Internațională, spaniolă (NVI)", "Noua Versiune Arabă (NAV)", "Noua Versiune Internațională, portugheză (NVI-PT)", "Versiunea Sinodală Rusă (RUSV)", "Noua Traducere Rusă (NRT)", "Biblia Semănătorului, franceză (BDS)", "Speranță pentru toți, germană (HOF)", "Biblia Vie Japoneză (JLB)", "Biblia de la Kralice, cehă (BK)", "Biblia în farsi (persană)", "Reimer 2001, plautdietsch (REIMER)", "Nouă Traducere în Limba Română (NTLR)", "Slovacă 1979 (SLO1979)", "Noul Testament în swahili (SNT)", "Biblia Poporului Suedeză (SFB)", "Biblia Poporului Suedeză 2015 (SFB15)", "Noua Biblie Contemporană Thailandeză (TNCV)"], "sv": ["Kinesisk samtida bibel, förenklad (CCB)", "Kinesisk samtida bibel, traditionell (CCBT)", "Kinesisk standardbibel, förenklad (CSBS)", "Kinesisk standardbibel, traditionell (CSBT)", "Amerikas bibel, spanska (LBLA)", "Nya internationella versionen, spanska (NVI)", "Ny arabisk version (NAV)", "Nya internationella versionen, portugisiska (NVI-PT)", "Rysk synodalöversättning (RUSV)", "Ny rysk översättning (NRT)", "Såningsmannens bibel, franska (BDS)", "Hopp för alla, tyska (HOF)", "Japansk levande bibel (JLB)", "Kralicebibeln, tjeckiska (BK)", "Farsibibel (persiska)", "Reimer 2001, plautdietsch (REIMER)", "Ny rumänsk översättning (NTLR)", "Slovakiska 1979 (SLO1979)", "Nya testamentet på swahili (SNT)", "Svenska Folkbibeln (SFB)", "Svenska Folkbibeln 2015 (SFB15)", "Ny samtida thailändsk bibel (TNCV)"], "sw": ["Biblia ya Kisasa ya Kichina, iliyorahisishwa (CCB)", "Biblia ya Kisasa ya Kichina, ya jadi (CCBT)", "Biblia Sanifu ya Kichina, iliyorahisishwa (CSBS)", "Biblia Sanifu ya Kichina, ya jadi (CSBT)", "Biblia ya Amerika, Kihispania (LBLA)", "Toleo Jipya la Kimataifa, Kihispania (NVI)", "Toleo Jipya la Kiarabu (NAV)", "Toleo Jipya la Kimataifa, Kireno (NVI-PT)", "Tafsiri ya Sinodi ya Kirusi (RUSV)", "Tafsiri Mpya ya Kirusi (NRT)", "Biblia ya Mpanzi, Kifaransa (BDS)", "Tumaini kwa Wote, Kijerumani (HOF)", "Biblia Hai ya Kijapani (JLB)", "Biblia ya Kralice, Kicheki (BK)", "Biblia ya Kifarsi (Kiajemi)", "Reimer 2001, Plautdietsch (REIMER)", "Tafsiri Mpya ya Kiromania (NTLR)", "Kislovakia 1979 (SLO1979)", "Agano Jipya la Kiswahili (SNT)", "Biblia ya Watu ya Kiswidi (SFB)", "Biblia ya Watu ya Kiswidi 2015 (SFB15)", "Biblia Mpya ya Kisasa ya Kithai (TNCV)"], "th": ["พระคัมภีร์จีนร่วมสมัย แบบตัวย่อ (CCB)", "พระคัมภีร์จีนร่วมสมัย แบบตัวเต็ม (CCBT)", "พระคัมภีร์จีนมาตรฐาน แบบตัวย่อ (CSBS)", "พระคัมภีร์จีนมาตรฐาน แบบตัวเต็ม (CSBT)", "พระคัมภีร์แห่งอเมริกา ภาษาสเปน (LBLA)", "ฉบับสากลใหม่ ภาษาสเปน (NVI)", "ฉบับอาหรับใหม่ (NAV)", "ฉบับสากลใหม่ ภาษาโปรตุเกส (NVI-PT)", "ฉบับซีโนดัลรัสเซีย (RUSV)", "ฉบับแปลรัสเซียใหม่ (NRT)", "พระคัมภีร์ผู้หว่าน ภาษาฝรั่งเศส (BDS)", "ความหวังสำหรับทุกคน ภาษาเยอรมัน (HOF)", "พระคัมภีร์ญี่ปุ่นฉบับชีวิต (JLB)", "พระคัมภีร์คราลิตเซ ภาษาเช็ก (BK)", "พระคัมภีร์ภาษาเปอร์เซีย", "ไรเมอร์ 2001 ภาษาเยอรมันต่ำ (REIMER)", "ฉบับแปลโรมาเนียใหม่ (NTLR)", "สโลวัก 1979 (SLO1979)", "พันธสัญญาใหม่ภาษาสวาฮีลี (SNT)", "พระคัมภีร์ประชาชนสวีเดน (SFB)", "พระคัมภีร์ประชาชนสวีเดน 2015 (SFB15)", "พระคัมภีร์ไทยฉบับร่วมสมัยใหม่ (TNCV)"], "pdt": ["Chinesische Zeitgenössische Bibel, vereinfacht (CCB)", "Chinesische Zeitgenössische Bibel, traditionell (CCBT)", "Chinesische Standardbibel, vereinfacht (CSBS)", "Chinesische Standardbibel, traditionell (CSBT)", "Bibel der Amerikas, Spanisch (LBLA)", "Neue Internationale Version, Spanisch (NVI)", "Neue Arabische Version (NAV)", "Neue Internationale Version, Portugiesisch (NVI-PT)", "Russische Synodalübersetzung (RUSV)", "Neue Russische Übersetzung (NRT)", "Die Bibel des Sämanns, Französisch (BDS)", "Hoffnung für Alle (HOF)", "Japanische Lebensbibel (JLB)", "Kralitzer Bibel, Tschechisch (BK)", "Farsi-Bibel (Persisch)", "Reimer 2001, Plautdietsch (REIMER)", "Neue Rumänische Übersetzung (NTLR)", "Slowakisch 1979 (SLO1979)", "Neues Testament auf Suaheli (SNT)", "Schwedische Volksbibel (SFB)", "Schwedische Volksbibel 2015 (SFB15)", "Neue Zeitgenössische Thai-Bibel (TNCV)"]};
var VRD={"en": ["Reader", "Dramatized"], "ru": ["Чтец", "Драматизированный"], "es": ["Lector", "Dramatizado"], "fr": ["Lecteur", "Dramatisé"], "de": ["Sprecher", "Dramatisiert"], "pt": ["Leitor", "Dramatizado"], "zh": ["朗读者", "戏剧化"], "ja": ["朗読者", "ドラマ形式"], "ar": ["قارئ", "تمثيلي"], "fa": ["گوینده", "نمایشی"], "cs": ["Čtenář", "Dramatizované"], "sk": ["Čitateľ", "Dramatizované"], "ro": ["Cititor", "Dramatizat"], "sv": ["Uppläsare", "Dramatiserad"], "sw": ["Msomaji", "Igizo"], "th": ["ผู้อ่าน", "ละครเสียง"], "pdt": ["Sprecher", "Dramatisiert"]};
/* in-app reader versions: name, label under it, text level (1 = whole Bible) */
VN["app-kjv"]=["King James Version (KJV)","In-app reader",1];
VN["app-web"]=["World English Bible (WEB)","In-app reader",1];
VN["app-bsb"]=["Berean Standard Bible (BSB)","In-app reader",1];
VN["app-asv"]=["American Standard Version (ASV)","In-app reader",1];
VN["app-darby"]=["Darby Translation (DBY)","In-app reader",1];
VN["app-webster"]=["Webster\u2019s Bible (WBS)","In-app reader",1];
VN["app-ylt"]=["Young\u2019s Literal Translation (YLT)","In-app reader",1];
VN["app-rst"]=["\u0421\u0438\u043d\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 (RST)","In-app reader",1];
VN["app-rv1909"]=["Reina-Valera 1909 (RV1909)","In-app reader",1];
function vName(v){var k=VKEY[v.id];if(k){var tb=VNAMES[uiLang()]||VNAMES.en;return tb[VK.indexOf(k)]}var x=VN[v.id];return x?x[0]:v.label}
function vReader(v){var x=VN[v.id];if(!x)return "";var rd=VRD[uiLang()]||VRD.en;return x[1].replace("\u00a7R",rd[0]).replace("\u00a7D",rd[1])}
function vTextLevel(v){var x=VN[v.id];return x?x[2]:1}
function vTitle(v){var r=vReader(v);return vName(v)+(r?" \u00b7 "+r:"")}
function audioLevel(v){return v.noaudio?0:(v.nt?2:1)}
function availFor(v,b,rd){var f=rd?vTextLevel(v):audioLevel(v);return f===1||(f===2&&b>=OT_COUNT)}
function vBadge(kind,level){
  var on=level>0,tip=_(kind==="text"?"Text":"Audio")+(on?(level===2?" ("+_("NT")+")":""):" \u2013 "+_("Not available"));
  var b=h("span",{class:"vb "+(on?"on":"off"),title:tip,"aria-label":tip,role:"img"},[ic(kind==="text"?"book-2":"headphones")]);
  if(on&&level===2)b.appendChild(h("span",{class:"nt",text:_("NT"),"aria-hidden":"true"}));
  return b;
}
function ntNote(){var v=curVersion(),t=vTextLevel(v),m=[];
  if(v.nt)m.push("Audio covers the New Testament only.");
  if(t===2)m.push("Text covers the New Testament only.");
  if(v.noaudio)m.push("No audio is available.");
  if(t===0)m.push("No text is available.");
  return m.length?h("p",{class:"note",text:m.join(" ")+" Unavailable options are grayed out."}):null}

/* ---------- shared controls (both tabs) ---------- */
function renderControls(){
  var el=$("ctl");el.innerHTML="";
  var v=curVersion(),L=langById(state.prefs.lang);
  el.appendChild(h("div",{class:"icard"},[
    h("button",{class:"irow",type:"button",onclick:openLang},[h("img",{class:"rico",src:RICO.lang,alt:""}),h("span",{class:"rt"},[h("small",{text:"Bible language"}),h("b",{dir:"auto",text:L.flag+" "+L.nat+(L.nat!==L.en?" \u00b7 "+L.en:"")})]),ic("chevron-right")]),
    h("button",{class:"irow",type:"button",onclick:openVersions},[h("img",{class:"rico",src:RICO.ver,alt:""}),h("span",{class:"rt"},[h("small",{text:"Bible version"}),h("b",{dir:"auto",text:vTitle(v)})]),ic("chevron-right")]),
    h("button",{class:"irow",type:"button",onclick:function(){openLang({mode:"ui"})}},[h("img",{class:"rico",src:RICO.ui,alt:""}),h("span",{class:"rt"},[h("small",{text:"Language"}),h("b",{dir:"auto",text:langById(uiLang()).flag+" "+langById(uiLang()).nat})]),ic("chevron-right")])
  ]));

  var nn=ntNote();if(nn)el.appendChild(nn);
}

/* ---------- Reading plans tab ---------- */
function planSub(p){return p.days+_(" days \u00b7 ")+p.groups.length+(p.groups.length===1?" group":" groups")}
function verRow(){var v=curVersion();return h("button",{class:"verrow",type:"button",onclick:openVersions},[h("small",{text:"Bible version"}),h("b",{dir:"auto",text:vTitle(v)}),ic("chevron-down")])}
function nextActive(){var n=state.plans.filter(function(p){return !p.completed})[0];state.active=n?n.id:null}
function planCard(p){
  var dc2=doneCount(p),act=p.id===state.active&&!p.completed;
  return h("button",{class:"pcard",type:"button",onclick:function(){planSheet(p.id)}},[
    h("div",{class:"n"},[p.name,act?h("span",{class:"badge",text:"Active"}):null,p.completed?h("span",{class:"badge",text:"Completed"}):null]),
    h("div",{class:"s",text:planSub(p)+_(" \u00b7 starts ")+niceY(p.start)+" \u00b7 "+dc2+_(" of ")+p.days+_(" days done")}),
    h("div",{class:"bar"},[h("div",{style:"width:"+Math.round(dc2/p.days*100)+"%"})])]);
}
function planSheet(id){
  var p=state.plans.filter(function(x){return x.id===id})[0];if(!p)return;
  var act=p.id===state.active&&!p.completed;
  openSheet(function(box){
    box.appendChild(sheetHead(p.name));
    box.appendChild(h("p",{class:"muted small",text:planSub(p)+" \u00b7 "+doneCount(p)+_(" of ")+p.days+_(" days done")}));
    var g=h("div",{style:"display:grid;gap:8px;margin-top:6px"});
    if(!p.completed&&!act)g.appendChild(h("button",{class:"btn",type:"button",onclick:function(){state.active=p.id;viewDay=null;save();closeSheet();refreshAll();toast("Set as active plan")}},["Set as active"]));
    g.appendChild(h("button",{class:"btn alt",type:"button",onclick:function(){closeSheet();openBuilderFor("edit-plan",p)}},[ic("edit"),"Edit"]));
    if(!p.completed)g.appendChild(h("button",{class:"btn alt",type:"button",onclick:function(){p.completed=todayStr();if(state.active===p.id)nextActive();viewDay=null;save();closeSheet();refreshAll();toast("Moved to completed plans")}},["Mark as completed"]));
    else g.appendChild(h("button",{class:"btn alt",type:"button",onclick:function(){delete p.completed;if(!state.active)state.active=p.id;save();closeSheet();refreshAll();toast("Moved back to in progress")}},["Move back to in progress"]));
    g.appendChild(h("button",{class:"btn danger",type:"button",onclick:function(){closeSheet();confirmSheet("Delete plan?","\u201c"+p.name+_("\u201d and its progress will be removed."),"Delete plan",true,function(){
      state.plans=state.plans.filter(function(x){return x.id!==p.id});if(state.active===p.id)nextActive();viewDay=null;save();refreshAll();toast("Plan deleted")})}},[ic("trash"),"Delete"]));
    box.appendChild(g);
  });
}
function customCard(c){
  return h("button",{class:"pcard",type:"button",onclick:function(){customSheet(c.id)}},[
    h("div",{class:"n",text:c.name}),h("div",{class:"s",text:planSub(c)})]);
}
function customSheet(id){
  var c=state.customs.filter(function(x){return x.id===id})[0];if(!c)return;
  openSheet(function(box){
    box.appendChild(sheetHead(c.name));
    box.appendChild(h("p",{class:"muted small",text:planSub(c)}));
    var g=h("div",{style:"display:grid;gap:8px;margin-top:6px"});
    g.appendChild(h("button",{class:"btn",type:"button",onclick:function(){closeSheet();startPresetSheet({name:c.name,desc:planSub(c),days:c.days,order:c.order,groups:c.groups})}},["Start plan"]));
    g.appendChild(h("button",{class:"btn alt",type:"button",onclick:function(){closeSheet();openBuilderFor("edit-custom",c)}},[ic("edit"),"Edit"]));
    g.appendChild(h("button",{class:"btn danger",type:"button",onclick:function(){closeSheet();confirmSheet("Delete custom plan?","\u201c"+c.name+_("\u201d will be removed from your custom plans. Plans you already started from it are not affected."),"Delete",true,function(){
      state.customs=state.customs.filter(function(x){return x.id!==c.id});save();refreshAll();toast("Custom plan deleted")})}},[ic("trash"),"Delete"]));
    box.appendChild(g);
  });
}
function renderPlansTab(){
  var el=$("tab-plans");el.innerHTML="";
  var plan=activePlan();
  if(plan&&plan.completed)plan=null;
  if(!plan){
    el.appendChild(h("div",{class:"card"},[h("div",{class:"plabel",text:"No active plan"}),h("p",{class:"muted small",text:"Start a ready-made plan below or build your own with up to five groups of books."})]));
  }else{
    var D=plan.days,today=planDayIndex(plan),idx=viewDay!=null?viewDay:Math.min(Math.max(today,0),D-1);
    var sched=schedule(plan)[idx],isDone=!!plan.done[idx];
    var status=today<0?_("Starts ")+nice(plan.start):(today>=D&&viewDay==null?_("Plan ended ")+nice(addDays(plan.start,D-1)):(idx===today?_("Today"):(idx<today?_("Earlier day"):_("Coming up"))));
    var card=h("div",{class:"card"});
    card.appendChild(h("div",{class:"dayhead"},[
      h("button",{class:"dnav",type:"button","aria-label":"Previous day",disabled:idx===0?"":null,onclick:function(){viewDay=idx-1;renderPlansTab()}},[ic("chevron-left")]),
      h("div",{class:"mid"},[h("div",{class:"nm"},[plan.name,h("span",{class:"badge",style:"margin-left:8px;vertical-align:middle",text:"Active"})]),h("div",{class:"muted small",text:_("Day ")+(idx+1)+_(" of ")+D+" \u00b7 "+nice(addDays(plan.start,idx))+" \u00b7 "+status})]),
      h("button",{class:"dnav",type:"button","aria-label":"Next day",disabled:idx>=D-1?"":null,onclick:function(){viewDay=idx+1;renderPlansTab()}},[ic("chevron-right")])
    ]));
    var play=h("button",{class:"btn",type:"button",style:"width:100%",onclick:function(){choosePlayDay(plan,idx)}},["▶︎ Play all chapters"]);
    var circ=doneCircle(isDone,_("Day ")+(idx+1)+_(" complete"),function(){setDayDone(plan,idx,true);renderPlansTab()},function(){setDayDone(plan,idx,false);renderPlansTab()},false,function(){dayMenu(plan,idx,renderPlansTab)});
    card.appendChild(h("div",{style:"margin-top:8px"},[play]));
    var rows=h("div",{style:"margin-top:8px"});
    var ctx={plan:plan,d:idx,refresh:renderPlansTab};
    sched.forEach(function(units,gi){rows.appendChild(passageRow(units,GCOLORS[gi%GCOLORS.length],ctx))});
    card.appendChild(rows);
    card.appendChild(h("p",{class:"muted small",style:"margin:6px 2px 0",text:"Tap a chapter to check it. Tap it again to uncheck it."}));
    card.appendChild(h("div",{class:"dcwrap"},[circ]));
    var dc=doneCount(plan);
    card.appendChild(h("div",{style:"margin-top:14px"},[
      h("div",{style:"display:flex;justify-content:space-between;margin-bottom:6px"},[h("b",{class:"small",text:"Plan progress"}),h("span",{class:"muted small",text:dc+_(" of ")+D+_(" days")})]),
      h("div",{class:"bar"},[h("div",{style:"width:"+Math.round(dc/D*100)+"%"})])]));
    if(dc>=D)card.appendChild(h("button",{class:"btn alt sm",type:"button",style:"width:100%;margin-top:12px",onclick:function(){plan.completed=todayStr();nextActive();viewDay=null;save();refreshAll();toast("Moved to completed plans")}},["Move to completed plans"]));
    card.appendChild(h("div",{style:"display:flex;gap:8px;margin-top:12px"},[
      idx!==Math.min(Math.max(today,0),D-1)?h("button",{class:"btn alt sm",type:"button",style:"flex:1",onclick:function(){viewDay=null;renderPlansTab()}},["Go to today"]):null,
      h("button",{class:"btn ghost sm",type:"button",style:"flex:1",onclick:function(){fullPlanView(plan.id)}},["View full plan"])]));
    el.appendChild(card);
  }
  var prog=state.plans.filter(function(p){return !p.completed}),comp=state.plans.filter(function(p){return p.completed});
  el.appendChild(h("h2",{class:"sec",text:"In progress"}));
  if(!prog.length)el.appendChild(h("p",{class:"note",text:"Nothing in progress."}));
  prog.forEach(function(p){el.appendChild(planCard(p))});
  if(comp.length){el.appendChild(h("h2",{class:"sec",text:"Completed plans"}));comp.forEach(function(p){el.appendChild(planCard(p))})}
  el.appendChild(h("h2",{class:"sec",text:"Custom plans"}));
  state.customs.forEach(function(c){el.appendChild(customCard(c))});
  el.appendChild(h("button",{class:"newplan",type:"button",onclick:openBuilder},[ic("plus"),"Create your custom plan"]));
  el.appendChild(h("h2",{class:"sec",text:"Ready-made plans"}));
  var pv=curVersion();
  PCATS.forEach(function(ct){
    el.appendChild(h("h3",{class:"psub",text:ct[1]}));
    PRESETS.filter(function(p){return p.cat===ct[0]}).forEach(function(p){
      var okA=p.groups.every(function(g){return g.every(function(b){return availFor(pv,b,false)})}),okR=p.groups.every(function(g){return g.every(function(b){return availFor(pv,b,true)})}),ok=okA||okR;
      var kids=[h("div",{class:"n",text:p.name}),h("div",{class:"s",text:p.days+_(" days \u00b7 ")+p.desc})];
      if(!ok)kids.push(h("div",{class:"s dimnote",text:"Includes books this version doesn\u2019t have. Switch version to use them."}));else if(!okA||!okR)kids.push(h("div",{class:"s dimnote",text:"Some books have no "+(okA?"text":"audio")+" in this version."}));
      el.appendChild(h("button",{class:"pcard"+(ok?"":" pdim"),type:"button",onclick:function(){startPresetSheet(p)}},kids));
    });
  });
  el.appendChild(h("div",{class:"foot"},[h("button",{class:"linkbtn",type:"button",onclick:function(){confirmSheet("Reset plans?","This removes all your plans and progress.","Reset",true,function(){state=seed();viewDay=null;save();refreshAll();toast("Reset")})}},["Reset plans"])]));
}

/* ---------- Whole Bible tab ---------- */
function renderBibleTab(){
  var el=$("tab-bible");el.innerHTML="";
  var v=curVersion();
  var ql=query.trim().toLowerCase(),shown=[0,0];
  var gOT=h("div",{class:"grid"}),gNT=h("div",{class:"grid"});
  BOOKS.forEach(function(b,i){
    var isOT=i<OT_COUNT;
    if(ql&&(b[2].toLowerCase().indexOf(ql)<0&&BEN[i].toLowerCase().indexOf(ql)<0))return;
    shown[isOT?0:1]++;
    var btn=h("button",{class:"book",type:"button",style:"--c:"+COLORS[i%COLORS.length]+";background-image:url("+TILES[i]+")"});
    btn.appendChild(h("img",{src:BOOKICONS[i].src,alt:"",width:"36",height:"36"}));
    btn.appendChild(h("span",{class:"bn",text:b[2]}));
    if(!(availFor(v,i,false)||availFor(v,i,true)))btn.disabled=true;else btn.onclick=function(){openChapters(i)};
    (isOT?gOT:gNT).appendChild(btn);
  });
  var sb=h("button",{class:"sbtn",type:"button",onclick:function(){var r=$("srow");r.hidden=!r.hidden;if(r.hidden){query="";renderBibleTab()}else $("q").focus()}},[ic("search"),"Search"]);
  var inp=h("input",{type:"search",id:"q",placeholder:"Search books",autocomplete:"off","aria-label":"Search books",value:query,oninput:function(){query=this.value;var pos=this.selectionStart;renderBibleTab();var q=$("q");q.focus();try{q.setSelectionRange(pos,pos)}catch(e){}}});
  var srow=h("div",{class:"searchrow",id:"srow"},[inp]);srow.hidden=!query;
  var sv=window.BBReader&&BBReader.saved();
  if(sv&&!ql){
    var sver=VERSIONS.filter(function(x){return x.app===sv.tr})[0];
    el.appendChild(h("button",{class:"pcard",type:"button",onclick:function(){BBReader.open(sv.tr,sv.b,sv.c,{resume:true})}},[
      h("div",{class:"n",text:"Continue reading"}),
      h("div",{class:"s",dir:"auto",text:_(BEN[sv.b])+" "+sv.c+(sver?" \u00b7 "+vName(sver):"")})]));
  }
  el.appendChild(h("div",{class:"sh"},[h("h2",{text:shown[0]||!shown[1]?"Old Testament":"Search"}),h("span",{class:"ln"}),sb]));
  el.appendChild(srow);
  if(shown[0])el.appendChild(gOT);
  if(shown[1]){el.appendChild(h("div",{class:"sh"},[h("h2",{text:"New Testament"}),h("span",{class:"ln"})]));el.appendChild(gNT)}
  if(!shown[0]&&!shown[1])el.appendChild(h("p",{class:"note",text:"No books match your search."}));
}

/* ---------- sheets ---------- */
var lastFocus=null;
function openSheet(build){lastFocus=document.activeElement;var b=$("sheetBox");b.innerHTML="";build(b);$("overlay").classList.add("show");$("overlay").setAttribute("aria-hidden","false");b.scrollTop=0}
function closeSheet(){$("overlay").classList.remove("show");$("overlay").setAttribute("aria-hidden","true");if(lastFocus&&lastFocus.focus)try{lastFocus.focus()}catch(e){}}
$("overlay").onclick=function(e){if(e.target===$("overlay"))closeSheet()};
document.addEventListener("keydown",function(e){if(e.key==="Escape"){if($("overlay").classList.contains("show"))closeSheet();else if(!$("screen").hidden)hideScreen()}});
function sheetHead(title,icon){return h("div",{class:"shead"},[h("div",{class:"st"},[icon?h("img",{class:"rico",src:icon,alt:""}):null,h("span",{text:title})]),h("button",{class:"xbtn",type:"button","aria-label":"Close",onclick:closeSheet},[ic("x")])])}

function openChapters(i){
  var b=BOOKS[i],v=curVersion();
  openSheet(function(box){
    var ban=h("div",{class:"banner",style:"--c:"+COLORS[i%COLORS.length]+";background-image:url("+TILES[i]+")"},[
      h("div",{class:"bh"},[h("img",{src:BOOKICONS[i].src,alt:""}),h("div",{class:"st",text:b[2]})]),
      h("button",{class:"xbtn",type:"button","aria-label":"Close",onclick:closeSheet,style:"background:rgba(255,255,255,.92);color:#10294a"},[ic("x")])
    ]);
    box.appendChild(ban);
    box.appendChild(h("p",{class:"note",text:"Choose a chapter, then pick Listen or Read."}));
    var g=h("div",{class:"cgrid"});
    for(var c=1;c<=b[1];c++)(function(ch){
      g.appendChild(h("a",{class:"cnum",href:"#",role:"button","aria-label":b[2]+" "+ch,text:String(ch),onclick:function(e){e.preventDefault();choosePlayMethod(i,ch,null,function(){openChapters(i)})}}));
    })(c);
    box.appendChild(g);
  });
}
function openLang(opts){
  var mode=(opts&&opts.splash===true)?"splash":(opts&&opts.mode)||"audio";
  openSheet(function(box){
    box.appendChild(sheetHead(mode==="splash"?tx("choose"):mode==="ui"?"Language":"Bible language",mode==="splash"?null:mode==="ui"?RICO.ui:RICO.lang));
    var top=LANGS.filter(function(l){return l.top}),rest=LANGS.filter(function(l){return !l.top}).sort(function(a,b){return a.en.localeCompare(b.en)});
    [[mode==="splash"?null:"Popular languages",top],[mode==="splash"?null:"All other languages",rest]].forEach(function(sec){
      if(sec[0])box.appendChild(h("div",{class:"lhead",text:sec[0]}));
      sec[1].forEach(function(l){
        var on=l.id===(mode==="audio"?state.prefs.lang:uiLang());
        box.appendChild(h("button",{class:"lrow",type:"button","aria-pressed":on,onclick:function(){
          if(mode==="splash"||mode==="ui"){state.prefs.ui=l.id}
          if(mode==="splash"||mode==="audio"){state.prefs.lang=l.id;state.prefs.ver=(versionsFor(l.id).filter(function(v){return !v.nt})[0]||versionsFor(l.id)[0]).id}
          save();closeSheet();refreshAll();if(mode==="splash"&&opts.onDone)opts.onDone()}},[
          h("span",{class:"flag",text:l.flag,"aria-hidden":"true"}),
          h("span",{class:"names"},[h("div",{class:"nat",dir:"auto",text:l.nat}),l.nat!==l.en?h("div",{class:"sec",text:l.en}):null]),
          on?h("span",{class:"tick",text:"\u2713","aria-hidden":"true"}):null]));
      });
    });
  });
}

/* ---------- downloads: keep a translation on this device (text and audio apart, only when asked) ---------- */
function dlIcon(state,f){
  var C=62.83,col=state==="full"?"#2e8b57":state==="part"?"#2f6fdb":"currentColor";
  var ring=state==="full"?'<circle cx="12" cy="12" r="10.5" fill="#2e8b57" stroke="none"/>':
    '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="'+(state==="off"?".25":".3")+'"/>'+
    (state==="part"?'<circle cx="12" cy="12" r="10" stroke="#2f6fdb" stroke-width="2.6" stroke-dasharray="'+(Math.max(.06,f)*C).toFixed(1)+' '+C+'" transform="rotate(-90 12 12)"/>':"");
  var mark=state==="full"?'<path d="M7.5 12.5l3 3 6-6.5" stroke="#fff" stroke-width="2.4"/>':
    '<path d="M12 7v8m-3.5-3.2L12 15.3l3.5-3.5" stroke="'+col+'" stroke-width="2"/>';
  return h("span",{class:"dli "+state,html:'<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ring+mark+'</svg>'});
}
function dlCount(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,",")}
function openDownloads(v,view){
  var dl=window.BBReader&&BBReader.dl,id=v.app,tok="dl"+Date.now(),st=null,sel={},open={},mode=view||{k:"main"};
  function mine(){var b=$("sheetBox");return $("overlay").classList.contains("show")&&b.getAttribute("data-dl")===tok}
  function onJob(){if(!mine()){dl.off(onJob);return}refresh()}
  function refresh(){dl.status(id).then(function(x){st=x;paint()},function(){st=null;paint(true)})}
  function kindName(k){return k==="text"?"Text":"Audio"}
  function startKind(k,pairs){
    if(k==="audio"&&!(mode.warned)){mode={k:"warn",kind:k,pairs:pairs};paint();return}
    dl.start(id,k,pairs)
  }
  function pairsFromSel(k){
    var out=[];Object.keys(sel).forEach(function(key){if(sel[key]){var a=key.split(".");out.push([+a[0],+a[1]])}});
    out.sort(function(x,y){return x[0]-y[0]||x[1]-y[1]});return out;
  }
  function bar(done,total,running){
    var f=total?done/total:0;
    return h("div",{class:"dlbar"+(done>=total&&total?" full":"")},[h("i",{style:"width:"+Math.round(f*100)+"%"})]);
  }
  function section(k){
    var d=st[k],j=dl.job(id,k),box=h("div",{class:"dlsec"});
    box.appendChild(h("div",{class:"dlh"},[h("b",{text:kindName(k)}),h("span",{text:d.done>=d.total?"All "+dlCount(d.total)+" chapters saved":dlCount(d.done)+" of "+dlCount(d.total)+" chapters saved"})]));
    box.appendChild(bar(d.done,d.total));
    if(j&&j.running)box.appendChild(h("p",{class:"note",text:"Saving "+BOOKS[j.at?j.at[0]:0][2]+" "+(j.at?j.at[1]:"")+" \u00b7 "+dlCount(j.i)+" of "+dlCount(j.total)+" this round"}));
    if(j&&j.finished&&j.skipped&&j.skipped.length){
      box.appendChild(h("p",{class:"note",text:"Skipped "+j.skipped.length+" chapters the audio host doesn't have: "+j.skipped.map(function(p){return BOOKS[p[0]][2]+" "+p[1]}).join(", ")+"."}));
    }
    if(j&&j.error){
      var msg=j.error==="full"?"The device ran out of storage space for this. What's already saved is kept.":
        j.error==="offline"?"No connection. What's already saved is kept; tap Resume when you're back online.":
        j.error==="nocache"?"This browser can't keep files for offline use here.":
        "Couldn't save that file. What's already saved is kept; you can try again.";
      box.appendChild(h("p",{class:"note err",text:msg}));
    }
    var row=h("div",{class:"dlrow"});
    if(j&&j.running)row.appendChild(h("button",{class:"btn sm",type:"button",onclick:function(){dl.pause(id,k)}},["Pause"]));
    else if(j&&!j.finished&&j.i<j.total)row.appendChild(h("button",{class:"btn sm",type:"button",onclick:function(){dl.resume(id,k)}},["Resume"]));
    else if(d.done<d.total)row.appendChild(h("button",{class:"btn sm",type:"button",onclick:function(){startKind(k,null)}},["Download whole Bible"]));
    if(!(j&&j.running)){
      row.appendChild(h("button",{class:"btn sm ghost",type:"button",onclick:function(){mode={k:"pick",kind:k};sel={};open={};paint()}},["Choose books\u2026"]));
      if(d.done>0)row.appendChild(h("button",{class:"btn sm ghost",type:"button",onclick:function(){mode={k:"rm",kind:k};paint()}},["Remove"]));
    }
    box.appendChild(row);
    return box;
  }
  function paint(failed){
    var b=$("sheetBox");b.setAttribute("data-dl",tok);b.innerHTML="";
    b.appendChild(sheetHead(vName(v)));
    if(!dl.supported()){b.appendChild(h("p",{class:"note",text:"This browser can't keep files for offline use here, so downloading isn't available."}));return}
    if(failed||!st){b.appendChild(h("p",{class:"note",text:failed?"Couldn't read this translation. Check your connection and try again.":"Loading\u2026"}));return}
    if(mode.k==="warn"){
      b.appendChild(h("p",{class:"muted",text:"Audio is saved in your browser's storage on this device. Depending on your device's storage limits (iPhones can be strict), it may or may not all stay saved for offline use. Audio files are large: a whole Bible can run to hundreds of megabytes."}));
      b.appendChild(h("div",{style:"display:grid;gap:8px;margin-top:12px"},[
        h("button",{class:"btn",type:"button",onclick:function(){var m=mode;mode={k:"main",warned:true};dl.start(id,m.kind,m.pairs);paint()}},["Start download"]),
        h("button",{class:"btn ghost",type:"button",onclick:function(){mode={k:"main"};paint()}},["Cancel"])]));
      return;
    }
    if(mode.k==="rm"){
      b.appendChild(h("p",{class:"muted",text:"Remove the downloaded "+kindName(mode.kind).toLowerCase()+" for this translation from this device? You can download it again later."}));
      b.appendChild(h("div",{style:"display:grid;gap:8px;margin-top:12px"},[
        h("button",{class:"btn danger",type:"button",onclick:function(){var k=mode.kind;mode={k:"main"};dl.remove(id,k).then(refresh)}},["Remove"]),
        h("button",{class:"btn ghost",type:"button",onclick:function(){mode={k:"main"};paint()}},["Cancel"])]));
      return;
    }
    if(mode.k==="pick"){
      var d=st[mode.kind],n=Object.keys(sel).filter(function(x){return sel[x]}).length;
      b.appendChild(h("p",{class:"note",text:kindName(mode.kind)+": tap a book to select it, or open it to pick chapters."}));
      d.books.forEach(function(bk,bi){
        if(!bk.total)return;
        var all=true;for(var c=1;c<=bk.total;c++)if(!sel[bi+"."+c]){all=false;break}
        var head=h("div",{class:"bkrow"},[
          h("button",{class:"bkchk"+(all?" on":""),type:"button","aria-label":"Select "+BOOKS[bi][2],"aria-pressed":all,onclick:function(){for(var c=1;c<=bk.total;c++)sel[bi+"."+c]=!all;paint()}},[all?"\u2713":""]),
          h("button",{class:"bkname",type:"button",onclick:function(){open[bi]=!open[bi];paint()}},[h("span",{text:BOOKS[bi][2]}),h("small",{text:bk.done>=bk.total?"saved":bk.done+"/"+bk.total})])]);
        var wrap=h("div",{class:"bk"+(bk.done>=bk.total?" full":bk.done>0?" part":"")},[head]);
        if(open[bi]){
          var g=h("div",{class:"chgrid"});
          for(var c=1;c<=bk.total;c++)(function(c){
            g.appendChild(h("button",{class:"chc"+(bk.chs[c-1]?" got":"")+(sel[bi+"."+c]?" on":""),type:"button","aria-pressed":!!sel[bi+"."+c],onclick:function(){sel[bi+"."+c]=!sel[bi+"."+c];paint()}},[String(c)]));
          })(c);
          wrap.appendChild(g);
        }
        b.appendChild(wrap);
      });
      b.appendChild(h("div",{class:"sfoot"},[
        h("button",{class:"btn ghost",type:"button",onclick:function(){mode={k:"main"};paint()}},["Back"]),
        h("button",{class:"btn",type:"button",disabled:n?null:"",onclick:function(){var k=mode.kind,p=pairsFromSel(k);mode={k:"main"};startKind(k,p);if(mode.k==="main"){paint()}}},[n?"Download "+n+" chapter"+(n===1?"":"s"):"Download"])]));
      return;
    }
    b.appendChild(h("p",{class:"note",text:"Saved on this device only when you choose it. Nothing downloads on its own."}));
    b.appendChild(section("text"));
    if(st.audio)b.appendChild(section("audio"));
    else b.appendChild(h("p",{class:"note",text:"Audio isn't available for this translation."}));
  }
  $("sheetBox").setAttribute("data-dl",tok);
  openSheet(function(b){b.setAttribute("data-dl",tok);b.appendChild(sheetHead(vName(v)));b.appendChild(h("p",{class:"note",text:"Loading\u2026"}))});
  dl.on(onJob);
  refresh();
}
function openVersions(){
  openSheet(function(box){
    box.appendChild(sheetHead("Bible version",RICO.ver));
    var L=langById(state.prefs.lang);
    box.appendChild(h("p",{class:"note",dir:"auto",text:L.flag+" "+L.nat+(L.nat!==L.en?" \u00b7 "+L.en:"")}));
    var all=versionsFor(state.prefs.lang);
    all.filter(function(v){return v.app}).concat(all.filter(function(v){return !v.app})).forEach(function(v){
      var on=v.id===state.prefs.ver,r=vReader(v);
      var row=h("button",{class:"lrow vrow",type:"button","aria-pressed":on,onclick:function(){state.prefs.ver=v.id;save();closeSheet();refreshAll()}},[
        h("span",{class:"names"},[h("div",{class:"nat",dir:"auto",text:vName(v)}),r?h("div",{class:"sec",dir:"auto",text:r}):null]),
        h("span",{class:"vbs"},[vBadge("text",vTextLevel(v)),vBadge("audio",audioLevel(v))]),
        on?h("span",{class:"tick",text:"\u2713","aria-hidden":"true"}):null]);
      var wrap=h("div",{class:"vwrap"},[row]);
      if(v.app&&window.BBReader&&BBReader.dl){
        var btn=h("button",{class:"dlbtn",type:"button","aria-label":"Downloads for "+vName(v),onclick:function(){openDownloads(v)}},[dlIcon("none",0)]);
        wrap.appendChild(btn);
        BBReader.dl.quick(v.app).then(function(q){
          var f=q.text/q.total;btn.innerHTML="";btn.appendChild(dlIcon(q.text>=q.total?"full":q.text>0?"part":"none",f));
        }).catch(function(){});
      }else{
        var nb=h("button",{class:"dlbtn off",type:"button","aria-disabled":"true","aria-label":"Not available for download"},[dlIcon("off",0)]);
        nb.onclick=function(e){
          e.stopPropagation();
          clearTimeout(nb._r);clearTimeout(nb._t);
          var old=wrap.querySelector(".dltip");if(old)old.remove();
          nb.classList.add("flash");
          nb._r=setTimeout(function(){nb.classList.remove("flash")},700);
          var tip=h("div",{class:"dltip",role:"status",text:"Not available for download"});
          wrap.appendChild(tip);
          nb._t=setTimeout(function(){tip.remove()},3000);
        };
        wrap.appendChild(nb);
      }
      box.appendChild(wrap);
    });
  });
}
function confirmSheet(title,msg,okLabel,danger,onOk){
  openSheet(function(box){
    box.appendChild(sheetHead(title));
    box.appendChild(h("p",{class:"muted",text:msg}));
    box.appendChild(h("div",{style:"display:grid;gap:8px;margin-top:12px"},[
      h("button",{class:"btn"+(danger?" danger":""),type:"button",onclick:function(){closeSheet();onOk()}},[okLabel]),
      h("button",{class:"btn ghost",type:"button",onclick:closeSheet},["Cancel"])]));
  });
}

function startPresetSheet(p){
  var start=todayStr();
  openSheet(function(box){
    box.appendChild(sheetHead(p.name));
    box.appendChild(h("p",{class:"muted",text:p.desc+"."}));
    var inp=h("input",{type:"date",value:start,"aria-label":"Start date"});
    box.appendChild(h("div",{class:"field"},[h("label",{text:"Start date"}),inp]));
    var err=h("div",{class:"err",hidden:""});
    box.appendChild(err);
    box.appendChild(h("button",{class:"btn",type:"button",style:"margin-top:8px",onclick:function(){
      if(!inp.value){err.hidden=false;err.textContent="Choose a start date.";return}
      var plan={id:"p"+Date.now(),name:p.name,start:inp.value,days:p.days,order:p.order||"bible",groups:p.groups.map(function(g){return g.slice()}),done:{},ch:{}};
      state.plans.push(plan);state.active=plan.id;viewDay=null;save();closeSheet();setTab("plans");refreshAll();toast("Plan started");
    }},["Start plan"]));
    if(p.cat)box.appendChild(h("button",{class:"btn ghost",type:"button",style:"margin-top:8px",onclick:function(){closeSheet();cloneNotice(p)}},["Edit as my own copy"]));
  });
}
function cloneNotice(p){
  openSheet(function(box){
    box.appendChild(sheetHead("Edit this plan?"));
    box.appendChild(h("p",{class:"muted",text:"Ready-made plans can\u2019t be changed. We\u2019ll make your own copy in Custom plans. You\u2019ll give it a new name, then you can change anything you like. The original stays exactly as it is."}));
    box.appendChild(h("div",{style:"display:grid;gap:8px;margin-top:12px"},[
      h("button",{class:"btn",type:"button",onclick:function(){closeSheet();openBuilderFor("clone",p)}},["Make my own copy"]),
      h("button",{class:"btn ghost",type:"button",onclick:closeSheet},["Cancel"])]));
  });
}

/* ---------- Plan detail screen ---------- */
function showScreen(node){var s=$("screen");s.innerHTML="";s.appendChild(node);s.hidden=false;s.scrollTop=0;document.body.style.overflow="hidden"}
function hideScreen(){fpRebuild=null;$("screen").hidden=true;$("screen").innerHTML="";document.body.style.overflow=""}
function bgAudioUrl(plan,dayIdx,v){
  var refs=[],seen={};
  schedule(plan)[dayIdx].forEach(function(units){
    units.forEach(function(u){var r=BOOKS[u.b][0]+"."+u.c;if(!seen[r]){seen[r]=1;refs.push(r)}});
  });
  var vkey=VKEY[v.id]||"esv",rkey="mclean";
  if(/drama|dramatized/i.test(v.label))rkey="dramatized";
  return "https://www.biblegateway.com/audio/"+rkey+"/"+vkey+"/"+refs.join(",");
}
function fullPlanView(id){
  var plan=state.plans.filter(function(p){return p.id===id})[0];if(!plan)return;
  var D=plan.days,sch=schedule(plan);
  function dayRowFor(i){
    var row=h("div",{class:"fpday"});
    var cur;
    function circ(){return doneCircle(!!plan.done[i],_("Day ")+(i+1)+_(" complete"),function(){setDayDone(plan,i,true);build(true)},function(){setDayDone(plan,i,false);build(true)},true,function(){dayMenu(plan,i,function(){build(true)})})}
    function swap(){var n=circ();row.replaceChild(n,cur);cur=n}
    cur=circ();row.appendChild(cur);
    var info=h("div",{class:"fpinfo"});
    info.appendChild(h("div",{class:"fpday-num",text:"Day "+(i+1)}));
    row.appendChild(info);
    row.appendChild(h("button",{class:"btn sm",type:"button",onclick:function(){choosePlayDay(plan,i)}},["\u25b6\ufe0e Play"]));
    var allUnits=[];sch[i].forEach(function(u){allUnits=allUnits.concat(u)});
    var chapDiv=h("div",{class:"fpchaps"});
    var ctx={plan:plan,d:i,sm:true,refresh:function(){build(true)}};
    if(!allUnits.length)chapDiv.appendChild(h("span",{class:"fpbk",text:_("Rest day")}));
    segs(allUnits).forEach(function(sg){
      chapDiv.appendChild(h("span",{class:"fpbk",text:BOOKS[sg.b][2]}));
      var seen={};
      sg.units.forEach(function(u){
        if(sg.b===PROV)chapDiv.appendChild(chPill(sg.b,u.c,u,ctx));
        else if(!seen[u.c]){seen[u.c]=1;chapDiv.appendChild(chPill(sg.b,u.c,null,ctx))}
      });
    });
    row.appendChild(chapDiv);
    return row;
  }
  function build(keep){
    var old=keep&&document.querySelector("#screen .fpbody"),top=old?old.scrollTop:0;
    var body=h("div",{class:"fpbody"});
    body.appendChild(h("p",{class:"muted small",style:"margin:0 2px 10px",text:"Tap a chapter or circle to check it. Tap a chapter again to uncheck it."}));
    for(var i=0;i<D;i++)body.appendChild(dayRowFor(i));
    showScreen(h("div",{class:"fullplan"},[screenHeader(plan.name,hideScreen,""),body]));
    body.scrollTop=top;
  }
  fpRebuild=function(){build(true)};
  build(false);
}
function screenHeader(title,onBack,stepText){
  return h("div",{class:"shd"},[h("button",{class:"xbtn",type:"button","aria-label":"Back",onclick:onBack},[ic("arrow-left")]),h("div",{class:"ttl",text:title}),stepText?h("div",{class:"step",text:stepText}):null]);
}
function groupNames(g){var o=orderBooks(g,"bible");if(!o.length)return "no books";var parts=[],st=o[0],pv=o[0];
  for(var i=1;i<=o.length;i++){if(i<o.length&&o[i]===pv+1){pv=o[i];continue}parts.push(st===pv?BOOKS[st][2]:BOOKS[st][2]+"\u2013"+BOOKS[pv][2]);if(i<o.length){st=o[i];pv=o[i]}}
  return parts.join(", ")}

/* ---------- Builder ---------- */
var draft=null,bstep=1,berr="";
var DAYCHIPS=[7,14,30,60,90,180,365];
function openBuilder(){openBuilderFor("new",null)}
function openBuilderFor(mode,src){
  var days=src?src.days:30;
  draft={mode:mode,srcId:src&&src.id||null,presetName:mode==="clone"?src.name:null,
    name:mode==="clone"?src.name+" (my copy)":(src?src.name:""),
    start:mode==="edit-plan"?src.start:todayStr(),days:days,custom:DAYCHIPS.indexOf(days)<0,
    groups:src?src.groups.map(function(g){return g.slice()}):[[]],order:src&&src.order||"bible"};
  bstep=1;berr="";renderBuilder();
}
function renderBuilder(){
  var wrap=h("div",{class:"sinner"});
  var ttl=draft.mode==="new"?"New plan":draft.mode==="clone"?"Your copy":"Edit plan";
  wrap.appendChild(screenHeader(ttl,function(){if(bstep>1){bstep--;berr="";renderBuilder()}else hideScreen()},_("Step ")+bstep+" of 3"));
  var body=h("div",{class:"sbody"});
  if(bstep===1)builderStep1(body);else if(bstep===2)builderStep2(body);else builderStep3(body);
  if(berr)body.appendChild(h("div",{class:"err",role:"alert",text:berr}));
  wrap.appendChild(body);
  var foot=h("div",{class:"sfoot"});
  foot.appendChild(h("button",{class:"btn ghost",type:"button",onclick:function(){if(bstep>1){bstep--;berr="";renderBuilder()}else hideScreen()}},[bstep>1?"Back":"Cancel"]));
  if(bstep<3)foot.appendChild(h("button",{class:"btn",type:"button",onclick:builderNext},["Next"]));
  else if(draft.mode==="new"||draft.mode==="clone"){
    var st="padding:0 8px;font-size:14px;line-height:1.15";
    foot.appendChild(h("button",{class:"btn alt",type:"button",style:st,onclick:function(){builderFinish("later")}},["Save for later"]));
    foot.appendChild(h("button",{class:"btn",type:"button",style:st,onclick:function(){builderFinish("active")}},["Make active"]));
  }else foot.appendChild(h("button",{class:"btn",type:"button",onclick:function(){builderFinish("save")}},["Save changes"]));
  wrap.appendChild(foot);
  var keep=$("screen").scrollTop;showScreen(wrap);$("screen").scrollTop=keep;
}
function builderStep1(body){
  body.appendChild(h("h1",{class:"pg",text:"Name and timeframe"}));
  if(draft.mode==="clone")body.appendChild(h("p",{class:"note",text:"This is your own copy of \u201c"+draft.presetName+"\u201d. Give it a new name and change anything you like. The ready-made original stays as it is."}));
  var nm=h("input",{type:"text",placeholder:"My reading plan",value:draft.name,maxlength:"60","aria-label":"Plan name",oninput:function(){draft.name=this.value}});
  body.appendChild(h("div",{class:"field"},[h("label",{text:"Plan name"}),nm]));
  if(draft.mode!=="edit-custom"){
    var st=h("input",{type:"date",value:draft.start,"aria-label":"Start date",onchange:function(){draft.start=this.value;renderBuilder()}});
    body.appendChild(h("div",{class:"field"},[h("label",{text:"Start date"}),st]));
    if(draft.mode==="new"||draft.mode==="clone")body.appendChild(h("p",{class:"muted small",style:"margin:-4px 2px 10px",text:"Used if you make the plan active."}));
  }
  var chips=h("div",{class:"chiprow"});
  [[7,"1 week"],[14,"2 weeks"],[30,"30 days"],[60,"60 days"],[90,"90 days"],[180,"6 months"],[365,"1 year"]].forEach(function(o){
    chips.appendChild(h("button",{class:"chipb",type:"button","aria-pressed":!draft.custom&&draft.days===o[0],onclick:function(){draft.days=o[0];draft.custom=false;renderBuilder()}},[o[1]]));
  });
  chips.appendChild(h("button",{class:"chipb",type:"button","aria-pressed":draft.custom,onclick:function(){draft.custom=true;renderBuilder()}},["Custom"]));
  body.appendChild(h("div",{class:"field"},[h("label",{text:"How long?"}),chips]));
  if(draft.custom){
    body.appendChild(h("div",{class:"field"},[h("label",{text:"Number of days"}),h("input",{type:"number",min:"1",max:"1000",inputmode:"numeric",value:String(draft.days),"aria-label":"Number of days",oninput:function(){draft.days=parseInt(this.value,10)||0;var e=$("endline");if(e)e.textContent=endText()}})]));
  }
  if(draft.mode!=="edit-custom")body.appendChild(h("p",{class:"muted",id:"endline",text:endText()}));
}
function endText(){return draft.days>0&&draft.start?_("Ends ")+niceY(addDays(draft.start,draft.days-1))+".":"Enter the number of days."}
function builderStep2(body){
  body.appendChild(h("h1",{class:"pg",text:"Pick your groups"}));
  body.appendChild(h("p",{class:"muted",style:"margin:0 2px 6px",text:"Each day you\u2019ll read a little from every group. Each group is spread across the whole timeframe so they all finish together."}));
  body.appendChild(h("p",{class:"muted small",style:"margin:0 2px 12px",text:"Portions are whole chapters. Proverbs is split into short sections of about 10 to 15 verses."}));
  var used={};
  draft.groups.forEach(function(g,gi){
    var col=GCOLORS[gi%GCOLORS.length];
    var chips=h("div",{class:"bchips"});
    g.forEach(function(b){chips.appendChild(h("span",{class:"bch"},[BOOKS[b][2],h("button",{type:"button","aria-label":_("Remove ")+BOOKS[b][2],onclick:function(){draft.groups[gi]=draft.groups[gi].filter(function(x){return x!==b});berr="";renderBuilder()}},[ic("x")])]))});
    var head=h("div",{class:"gh"},[h("b",{text:_("Group ")+(gi+1)}),h("span",{class:"muted small",text:g.length?totalChapters(g)+_(" chapters"):"No books yet"})]);
    if(draft.groups.length>1)head.appendChild(h("button",{class:"xbtn",type:"button","aria-label":_("Remove group ")+(gi+1),onclick:function(){draft.groups.splice(gi,1);berr="";renderBuilder()}},[ic("trash")]));
    body.appendChild(h("div",{class:"gcard",style:"border-left-color:"+col},[head,chips,h("button",{class:"btn alt sm",type:"button",onclick:function(){openPicker(gi)}},[ic("plus"),g.length?"Edit books":"Add books"])]));
  });
  if(draft.groups.length<5)body.appendChild(h("button",{class:"newplan",type:"button",onclick:function(){draft.groups.push([]);berr="";renderBuilder()}},[ic("plus"),_("Add group (")+draft.groups.length+" of 5)"]));
  body.appendChild(h("h2",{class:"sec",text:"Reading order inside a group"}));
  body.appendChild(h("div",{class:"seg",role:"group","aria-label":"Reading order"},[
    h("button",{type:"button","aria-pressed":draft.order==="bible",onclick:function(){draft.order="bible";renderBuilder()}},["Bible order"]),
    h("button",{type:"button","aria-pressed":draft.order==="picked",onclick:function(){draft.order="picked";renderBuilder()}},["Order I picked"])]));
}
function openPicker(gi){
  var tmp=draft.groups[gi].slice(),other={};
  draft.groups.forEach(function(g,i){if(i!==gi)g.forEach(function(b){other[b]=true})});
  openSheet(function(box){
    function draw(){
      box.innerHTML="";
      box.appendChild(sheetHead(_("Group ")+(gi+1)+_(" books")));
      box.appendChild(h("div",{class:"lbl",text:"Quick picks"}));
      var q=h("div",{class:"chiprow"});
      QUICK.forEach(function(o){
        var set=rng(o[1],o[2]).filter(function(b){return !other[b]});
        var all=set.length>0&&set.every(function(b){return tmp.indexOf(b)>=0});
        q.appendChild(h("button",{class:"chipb",type:"button","aria-pressed":all,disabled:set.length?null:"",onclick:function(){
          if(all)tmp=tmp.filter(function(b){return set.indexOf(b)<0});else set.forEach(function(b){if(tmp.indexOf(b)<0)tmp.push(b)});draw()}},[o[0]]));
      });
      box.appendChild(q);
      box.appendChild(h("div",{class:"lbl",style:"margin-top:16px",text:"Or choose books"}));
      var g=h("div",{class:"pick"});
      BOOKS.forEach(function(b,i){
        var on=tmp.indexOf(i)>=0;
        g.appendChild(h("button",{type:"button","aria-pressed":on,disabled:other[i]?"":null,title:other[i]?"Already in another group":"",onclick:function(){if(on)tmp=tmp.filter(function(x){return x!==i});else tmp.push(i);draw()}},[b[2]]));
      });
      box.appendChild(g);
      box.appendChild(h("button",{class:"btn",type:"button",style:"margin-top:14px",onclick:function(){draft.groups[gi]=tmp;berr="";closeSheet();renderBuilder()}},[_("Done \u00b7 ")+tmp.length+(tmp.length===1?" book":" books")+(tmp.length?" \u00b7 "+totalChapters(tmp)+_(" chapters"):"")]));
    }
    draw();
  });
}
function builderNext(){
  berr="";
  if(bstep===1){
    if(draft.mode==="clone"&&(draft.name||"").trim().toLowerCase()===draft.presetName.toLowerCase()){berr="Give your copy a new name. The ready-made original stays unchanged.";return renderBuilder()}
    if(draft.mode!=="edit-custom"&&!draft.start){berr="Choose a start date.";return renderBuilder()}
    if(!(draft.days>=1&&draft.days<=1000)){berr="Enter a number of days from 1 to 1000.";return renderBuilder()}
    bstep=2;return renderBuilder();
  }
  if(bstep===2){
    var gs=draft.groups.map(function(g,i){return{g:g,i:i}}).filter(function(x){return x.g.length});
    var empty=draft.groups.findIndex(function(g){return !g.length});
    if(!gs.length){berr="Add books to at least one group.";return renderBuilder()}
    if(empty>=0&&draft.groups.length>1){berr=_("Group ")+(empty+1)+_(" has no books. Add some or remove the group.");return renderBuilder()}
    bstep=3;return renderBuilder();
  }
}
function builderFinish(kind){
  var groups=draft.groups.filter(function(g){return g.length}).map(function(g){return g.slice()}),name=(draft.name||"").trim()||"My reading plan";
  if(draft.mode==="edit-plan"){
    var p=state.plans.filter(function(x){return x.id===draft.srcId})[0];if(!p){hideScreen();return}
    p.name=name;p.start=draft.start;p.days=draft.days;p.order=draft.order;p.groups=groups;delete p._s;
    Object.keys(p.done||{}).forEach(function(k){if(parseInt(k,10)>=p.days)delete p.done[k]});
    Object.keys(p.ch||{}).forEach(function(k){if(parseInt(k,10)>=p.days)delete p.ch[k]});
    viewDay=null;save();hideScreen();refreshAll();toast("Plan updated");return;
  }
  if(draft.mode==="edit-custom"){
    var c=state.customs.filter(function(x){return x.id===draft.srcId})[0];if(!c){hideScreen();return}
    c.name=name;c.days=draft.days;c.order=draft.order;c.groups=groups;
    save();hideScreen();refreshAll();toast("Custom plan updated");return;
  }
  state.customs.push({id:"c"+Date.now(),name:name,days:draft.days,order:draft.order,groups:groups.map(function(g){return g.slice()})});
  if(kind==="active"){
    var plan={id:"p"+Date.now(),name:name,start:draft.start,days:draft.days,order:draft.order,groups:groups,done:{},ch:{}};
    state.plans.push(plan);state.active=plan.id;viewDay=null;toast("Plan started");
  }else toast("Saved to custom plans");
  save();hideScreen();setTab("plans");refreshAll();
}
function builderStep3(body){
  var tmp={days:draft.days,order:draft.order,groups:draft.groups.filter(function(g){return g.length})};
  var sched=schedule(tmp);
  body.appendChild(h("h1",{class:"pg",text:"Preview"}));
  if(draft.mode==="new"||draft.mode==="clone")body.appendChild(h("p",{class:"note",text:"Save for later keeps it in Custom plans without starting it. Make active starts it on the start date and replaces your current active plan."}));
  if(draft.mode==="edit-plan")body.appendChild(h("p",{class:"note",text:"Your progress is kept. It stays with the same day numbers."}));
  var sum=h("div",{class:"card"},[h("b",{text:(draft.name||"").trim()||"My reading plan"}),h("div",{class:"muted small",text:draft.days+_(" days \u00b7 ")+niceY(draft.start)+" to "+niceY(addDays(draft.start,draft.days-1))})]);
  tmp.groups.forEach(function(g,gi){
    var n=totalChapters(g),per=n/draft.days,nu=unitsOf(g).length;
    var txt=per>=1?_("about ")+(Math.round(per*10)/10)+_(" ch/day"):n+_(" ch total \u00b7 on ")+Math.min(nu,draft.days)+_(" of ")+draft.days+_(" days");
    sum.appendChild(h("div",{class:"sumrow"},[h("span",{class:"gdot",style:"background:"+GCOLORS[gi%GCOLORS.length]+";margin-top:0"}),h("div",{style:"min-width:0"},[h("div",{class:"small",style:"font-weight:600",text:_("Group ")+(gi+1)}),h("div",{class:"muted small",text:groupNames(g)})]),h("div",{class:"sr",text:txt})]));
  });
  body.appendChild(sum);
  var short=tmp.groups.map(function(g,i){return unitsOf(orderBooks(g,tmp.order)).length<draft.days?i+1:0}).filter(Boolean);
  if(short.length)body.appendChild(h("p",{class:"note",text:_("Group ")+short.join(", ")+" "+(short.length>1?"have":"has")+_(" fewer chapters than days, so there will be rest days for ")+(short.length>1?"those groups":"that group")+"."}));
  body.appendChild(h("h2",{class:"sec",text:"First days"}));
  for(var d=0;d<Math.min(3,draft.days);d++){
    var c=h("div",{class:"daycard",style:"content-visibility:visible"});
    var info=h("div",{class:"dinfo"},[h("div",{class:"dh",text:_("Day ")+(d+1)+" \u00b7 "+nice(addDays(draft.start,d))})]);
    sched[d].forEach(function(items,gi){info.appendChild(h("div",{class:"prow"},[h("span",{class:"gdot",style:"background:"+GCOLORS[gi%GCOLORS.length]}),h("div",{class:"pbody"},[h("div",{class:"plabel",style:"margin:0;font-weight:500",text:itemsText(items)})])]))});
    c.appendChild(info);body.appendChild(c);
  }
  body.appendChild(h("p",{class:"note",text:_("Last day: every group ends on day ")+draft.days+"."}));
}

/* ---------- splash translations ---------- */
var DESC_EN="Plan your Bible reading, choose your preferred translation and language, and connect directly to the Bible reading or listening service of your choice.";
var TX={
 en:{choose:"Choose your language",tag:"A Bible Reading Planner",desc:DESC_EN,tap:"Tap to continue"},
 zh:{choose:"选择您的语言",tag:"圣经阅读计划",desc:"规划您的圣经阅读，选择您喜爱的译本和语言，并直接连接到您选择的圣经阅读或收听服务。",tap:"点击继续"},
 es:{choose:"Elige tu idioma",tag:"Un planificador de lectura bíblica",desc:"Planifica tu lectura de la Biblia, elige tu traducción e idioma preferidos y conéctate directamente con el servicio de lectura o audio bíblico que prefieras.",tap:"Toca para continuar"},
 ar:{choose:"اختر لغتك",tag:"مخطِّط لقراءة الكتاب المقدس",desc:"خطِّط لقراءتك للكتاب المقدس، واختر الترجمة واللغة المفضلتين لديك، وتواصل مباشرة مع خدمة قراءة الكتاب المقدس أو الاستماع إليه التي تختارها.",tap:"اضغط للمتابعة"},
 pt:{choose:"Escolha seu idioma",tag:"Um planejador de leitura da Bíblia",desc:"Planeje sua leitura da Bíblia, escolha sua tradução e idioma preferidos e conecte-se diretamente ao serviço de leitura ou áudio bíblico de sua preferência.",tap:"Toque para continuar"},
 ru:{choose:"Выберите язык",tag:"Планировщик чтения Библии",desc:"Планируйте чтение Библии, выбирайте предпочитаемый перевод и язык и переходите напрямую к выбранному сервису чтения или прослушивания Библии.",tap:"Нажмите, чтобы продолжить"},
 fr:{choose:"Choisissez votre langue",tag:"Un planificateur de lecture de la Bible",desc:"Planifiez votre lecture de la Bible, choisissez votre traduction et votre langue préférées, et accédez directement au service de lecture ou d\u2019écoute de la Bible de votre choix.",tap:"Touchez pour continuer"},
 de:{choose:"Wählen Sie Ihre Sprache",tag:"Ein Bibelleseplaner",desc:"Planen Sie Ihre Bibellese, wählen Sie Ihre bevorzugte Übersetzung und Sprache und gelangen Sie direkt zum Bibel-Lese- oder Hörangebot Ihrer Wahl.",tap:"Zum Fortfahren tippen"},
 ja:{choose:"言語を選択してください",tag:"聖書通読プランナー",desc:"聖書を読む計画を立て、お好みの翻訳と言語を選び、ご希望の聖書の閲覧・音声サービスに直接アクセスできます。",tap:"タップして続ける"},
 cs:{choose:"Vyberte svůj jazyk",tag:"Plánovač čtení Bible",desc:"Naplánujte si čtení Bible, vyberte si preferovaný překlad a jazyk a připojte se přímo ke službě pro čtení nebo poslech Bible, kterou si zvolíte.",tap:"Klepnutím pokračujte"},
 fa:{choose:"زبان خود را انتخاب کنید",tag:"برنامه‌ریز مطالعهٔ کتاب مقدس",desc:"مطالعهٔ کتاب مقدس خود را برنامه‌ریزی کنید، ترجمه و زبان مورد نظرتان را انتخاب کنید و مستقیماً به سرویس خواندن یا شنیدن کتاب مقدس مورد نظرتان متصل شوید.",tap:"برای ادامه ضربه بزنید"},
 ro:{choose:"Alegeți limba",tag:"Un planificator de citire a Bibliei",desc:"Planificați-vă citirea Bibliei, alegeți traducerea și limba preferate și conectați-vă direct la serviciul de citire sau de ascultare a Bibliei dorit.",tap:"Atingeți pentru a continua"},
 sk:{choose:"Vyberte svoj jazyk",tag:"Plánovač čítania Biblie",desc:"Naplánujte si čítanie Biblie, vyberte si preferovaný preklad a jazyk a pripojte sa priamo k službe na čítanie alebo počúvanie Biblie, ktorú si zvolíte.",tap:"Ťuknutím pokračujte"},
 sw:{choose:"Chagua lugha yako",tag:"Mpangilio wa Kusoma Biblia",desc:"Panga usomaji wako wa Biblia, chagua tafsiri na lugha unayopendelea, na uunganishwe moja kwa moja na huduma ya kusoma au kusikiliza Biblia unayoichagua.",tap:"Gusa ili kuendelea"},
 sv:{choose:"Välj ditt språk",tag:"En bibelläsningsplanerare",desc:"Planera din bibelläsning, välj din föredragna översättning och ditt språk och anslut direkt till den tjänst för bibelläsning eller bibellyssning som du väljer.",tap:"Tryck för att fortsätta"},
 th:{choose:"เลือกภาษาของคุณ",tag:"ตัวช่วยวางแผนอ่านพระคัมภีร์",desc:"วางแผนการอ่านพระคัมภีร์ของคุณ เลือกฉบับแปลและภาษาที่คุณชอบ และเชื่อมต่อโดยตรงกับบริการอ่านหรือฟังพระคัมภีร์ที่คุณเลือก",tap:"แตะเพื่อดำเนินการต่อ"}
 /* Plautdietsch (pdt) not yet translated: falls back to English */
};
var RTL={ar:1,fa:1},NOSP={ar:1,fa:1,th:1,zh:1,ja:1};
function tx(k,id){var T=TX[id||uiLang()]||TX.en;return T[k]||TX.en[k]}
function renderHero(){applyBookNames();$("tabPlansT").textContent=_("Reading plans");$("tabBibleT").textContent=_("Whole Bible");var s=$("heroSub");if(s)s.textContent=tx("tag");var r=RTL[uiLang()]?"rtl":"ltr";document.documentElement.setAttribute("lang",uiLang());document.querySelector(".app").dir=r}

/* ---------- splash ---------- */
var spReady=false,spAuto=null,spGone=false;
function splashText(){
  var id=uiLang(),L=langById(id),sp=$("splash");
  sp.setAttribute("lang",id);sp.classList.toggle("nosp",!!NOSP[id]);
  var dir=RTL[id]?"rtl":"ltr";
  ["spTag","spDesc","spChoose","spTap"].forEach(function(x){$(x).dir=dir});
  $("spTag").textContent=tx("tag");$("spDesc").textContent=tx("desc");
  $("spChoose").textContent=tx("choose");$("spTap").textContent=tx("tap");
  $("spFlag").textContent=L.flag;$("spNm").textContent=L.nat;$("spNm").dir="auto";
}
function splashSwap(){var sp=$("splash");sp.classList.add("swap");setTimeout(function(){splashText();sp.classList.remove("swap")},190)}
function splashGo(){
  if(spGone)return;spGone=true;clearTimeout(spAuto);
  var sp=$("splash");sp.classList.add("out");setTimeout(function(){sp.classList.add("gone")},650);
}
function revealDesc(){
  var g=$("spGd");g.style.display="flex";
  setTimeout(function(){g.classList.add("in")},30);
  setTimeout(function(){$("spTap").classList.add("show");spReady=true},750);
}
function splashStart(){
  var sp=$("splash");
  $("spChev").innerHTML="";$("spChev").appendChild(ic("chevron-down"));
  splashText();
  if(!state.prefs.ui)state.prefs.ui=(state.prefs.chosen&&TX[state.prefs.lang])?state.prefs.lang:"en";
  var returning=!!state.prefs.chosen;
  setTimeout(function(){$("spLogo").classList.add("in")},150);
  setTimeout(function(){$("spG1").classList.add("in")},1000);
  if(returning){
    $("spG2").style.display="none";
    setTimeout(revealDesc,1500);
  }else{
    setTimeout(function(){$("spG2").classList.add("in")},1500);
  }
  $("spLangBtn").onclick=function(e){
    e.stopPropagation();clearTimeout(spAuto);
    openLang({splash:true,onDone:function(){
      state.prefs.chosen=1;save();
      $("spG2").classList.remove("in");
      splashSwap();
      setTimeout(function(){$("spG2").style.display="none";revealDesc()},550);
    }});
  };
  sp.onclick=function(e){if(e.target.closest("#spLangBtn"))return;splashGo()};
}

/* ---------- shell ---------- */
function setTab(name){
  state.prefs.tab=name;save();
  $("tab-plans").hidden=name!=="plans";$("tab-bible").hidden=name!=="bible";
  $("tabPlans").setAttribute("aria-selected",name==="plans");$("tabBible").setAttribute("aria-selected",name==="bible");
}
function refreshAll(){renderHero();renderControls();renderPlansTab();renderBibleTab()}
$("tabPlans").onclick=function(){setTab("plans")};
$("tabBible").onclick=function(){setTab("bible")};
load();applyTheme();

$("tpi").innerHTML=ic("calendar-event").innerHTML;$("tpg").innerHTML=ic("chevron-right").innerHTML;
$("tbi").innerHTML=ic("book-2").innerHTML;$("tbg").innerHTML=ic("chevron-right").innerHTML;
refreshAll();setTab(state.prefs.tab==="bible"?"bible":"plans");splashStart();

/* header logo + sticky tab bar state */
(function(){
  var hl=$("heroLogo"),sl=$("spLogo");if(hl&&sl)hl.src=sl.src;
  var tabs=document.querySelector(".tabs"),sent=$("tabSent");
  var probe=document.createElement("div");
  probe.style.cssText="position:absolute;visibility:hidden;pointer-events:none;padding-top:env(safe-area-inset-top,0px)";
  document.body.appendChild(probe);
  var raf=0;
  function upd(){raf=0;var inset=parseFloat(getComputedStyle(probe).paddingTop)||0;
    tabs.classList.toggle("stuck",sent.getBoundingClientRect().top<inset-0.5)}
  function queue(){if(!raf)raf=requestAnimationFrame(upd)}
  document.addEventListener("scroll",queue,true);window.addEventListener("resize",queue);
  upd();
})();

/* temporary logo-glow adjuster: long-press the header logo.
   The glow is drawn on a canvas that covers the whole header, from an exact distance
   field around the logo's shape, so it can be any size without ever showing a box edge. */
(function(){
  var logo=$("heroLogo"),hero=document.querySelector(".hero"),cv=$("glowCv"),panel=$("glowPanel");
  var T=$("glT"),F=$("glF"),O=$("glO"),To=$("glTo"),Fo=$("glFo"),Oo=$("glOo");
  var DEF={t:0.9,f:3.8,o:85};
  var vals={t:DEF.t,f:DEF.f,o:DEF.o};
  var LIM={t:[0,400],f:[0,400],o:[0,100]};
  var SLOW=10; /* how many times finer than a normal slider */
  var off=document.createElement("canvas"),oc=off.getContext&&off.getContext("2d"),cx=cv.getContext&&cv.getContext("2d");
  var gw=0,gh=0,S=1,dist=null,maskKey="",img=null,raf=0;
  var INF=1e20;

  /* squared Euclidean distance transform (Felzenszwalb & Huttenlocher), one line */
  function dt1(f,n,d,v,z){
    var k=0,q,s;v[0]=0;z[0]=-INF;z[1]=INF;
    for(q=1;q<n;q++){
      s=((f[q]+q*q)-(f[v[k]]+v[k]*v[k]))/(2*q-2*v[k]);
      while(s<=z[k]){k--;s=((f[q]+q*q)-(f[v[k]]+v[k]*v[k]))/(2*q-2*v[k])}
      k++;v[k]=q;z[k]=s;z[k+1]=INF;
    }
    k=0;
    for(q=0;q<n;q++){while(z[k+1]<q)k++;d[q]=(q-v[k])*(q-v[k])+f[v[k]]}
  }

  function buildMask(){
    if(!oc||!cx)return false;
    var hr=hero.getBoundingClientRect(),lr=logo.getBoundingClientRect();
    var hw=hr.width,hh=hr.height;
    if(!hw||!hh||!logo.complete||!logo.naturalWidth||!lr.width)return false;
    var dpr=Math.min(window.devicePixelRatio||1,3);
    var s=Math.min(dpr,Math.sqrt(1500000/(hw*hh)));
    var w=Math.max(1,Math.round(hw*s)),h=Math.max(1,Math.round(hh*s));
    var key=[w,h,Math.round((lr.left-hr.left)*100),Math.round((lr.top-hr.top)*100),Math.round(lr.width),Math.round(lr.height),s.toFixed(3)].join();
    if(key===maskKey&&dist)return true;
    off.width=w;off.height=h;oc.clearRect(0,0,w,h);
    oc.drawImage(logo,(lr.left-hr.left)*s,(lr.top-hr.top)*s,lr.width*s,lr.height*s);
    var a;try{a=oc.getImageData(0,0,w,h).data}catch(err){return false}var n=w*h,i,x,y;
    dist=new Float32Array(n);
    for(i=0;i<n;i++)dist[i]=a[i*4+3]>=64?0:INF;
    var m=Math.max(w,h),f=new Float64Array(m),d=new Float64Array(m),v=new Int32Array(m),z=new Float64Array(m+1);
    for(y=0;y<h;y++){
      for(x=0;x<w;x++)f[x]=dist[y*w+x];
      dt1(f,w,d,v,z);
      for(x=0;x<w;x++)dist[y*w+x]=d[x];
    }
    for(x=0;x<w;x++){
      for(y=0;y<h;y++)f[y]=dist[y*w+x];
      dt1(f,h,d,v,z);
      for(y=0;y<h;y++)dist[y*w+x]=d[y];
    }
    gw=w;gh=h;S=s;maskKey=key;img=null;
    return true;
  }

  function render(){
    raf=0;
    if(!buildMask())return;
    var t=vals.t,f=vals.f,o=vals.o/100,i,n=gw*gh;
    if(cv.width!==gw||cv.height!==gh){cv.width=gw;cv.height=gh}
    if(!img)img=cx.createImageData(gw,gh);
    var px=img.data;
    px.fill(0);
    if(o>0&&(t>0||f>0)){
      var reach=t+f+1,reach2=reach*reach*S*S,k=1/S;
      for(i=0;i<n;i++){
        var d2=dist[i];
        if(d2>reach2)continue;
        var dd=Math.sqrt(d2)*k,al;
        if(f>0){
          if(dd<=t)al=1;else{var u=(dd-t)/f;al=u>=1?0:1-u*u*(3-2*u)}
        }else{
          al=(t-dd)*S+.5;al=al<0?0:al>1?1:al;
        }
        if(al>0){var j=i*4;px[j]=255;px[j+1]=255;px[j+2]=255;px[j+3]=Math.round(al*o*255)}
      }
    }
    cx.putImageData(img,0,0);
  }
  function schedule(){if(!raf)raf=requestAnimationFrame(render)}
  window.__glowRender=render;

  function readouts(){
    To.textContent=vals.t.toFixed(1)+" px";Fo.textContent=vals.f.toFixed(1)+" px";Oo.textContent=vals.o.toFixed(1)+"%";
    T.setAttribute("aria-valuenow",vals.t.toFixed(1));F.setAttribute("aria-valuenow",vals.f.toFixed(1));O.setAttribute("aria-valuenow",vals.o.toFixed(1));
  }
  function onChange(){readouts();schedule()}

  /* A jog slider: the knob always sits in the middle. Drag it left/right to change the value
     (SLOW times finer than a normal slider); when you let go it springs back to the middle
     so you can keep sliding the same way as many times as you like. */
  function jog(el,key){
    var thumb=el.querySelector(".jthumb"),drag=null;
    function setOff(px){thumb.style.transform="translateX("+px+"px)"}
    el.addEventListener("pointerdown",function(e){
      var W=el.getBoundingClientRect().width,travel=Math.max(40,W-30);
      drag={x0:e.clientX||0,v0:vals[key],travel:travel,k:(LIM[key][1]-LIM[key][0])/travel/SLOW};
      try{el.setPointerCapture(e.pointerId)}catch(_){}
      el.classList.add("drag");e.preventDefault();
    });
    el.addEventListener("pointermove",function(e){
      if(!drag)return;
      var half=drag.travel/2,off=Math.max(-half,Math.min(half,(e.clientX||0)-drag.x0));
      setOff(off);
      var v=drag.v0+off*drag.k;
      vals[key]=Math.max(LIM[key][0],Math.min(LIM[key][1],v));
      onChange();
    });
    function end(){if(!drag)return;drag=null;el.classList.remove("drag");setOff(0)}
    ["pointerup","pointercancel","lostpointercapture"].forEach(function(n){el.addEventListener(n,end)});
  }
  jog(T,"t");jog(F,"f");jog(O,"o");
  function setVals(t,f,o){vals.t=t;vals.f=f;vals.o=o;onChange()}
  $("glR").onclick=function(){setVals(DEF.t,DEF.f,DEF.o)};
  $("glD").onclick=function(){panel.hidden=true};
  setVals(DEF.t,DEF.f,DEF.o);
  window.__glow={vals:vals,render:render};
  logo.addEventListener("load",schedule);
  window.addEventListener("resize",schedule);
  if(window.ResizeObserver)new ResizeObserver(schedule).observe(hero);
  schedule();

  /* press and hold the logo for 10 seconds to open the (hidden) glow panel */
  var timer=0,sx=0,sy=0;
  function cancel(){if(timer){clearTimeout(timer);timer=0}}
  logo.addEventListener("pointerdown",function(e){
    cancel();sx=e.clientX||0;sy=e.clientY||0;
    timer=setTimeout(function(){timer=0;panel.hidden=false},10000);
  });
  logo.addEventListener("pointermove",function(e){
    if(timer&&(Math.abs((e.clientX||0)-sx)>30||Math.abs((e.clientY||0)-sy)>30))cancel();
  });
  ["pointerup","pointercancel","pointerleave"].forEach(function(n){logo.addEventListener(n,cancel)});
  logo.addEventListener("contextmenu",function(e){e.preventDefault()});
})();

/* PWA: offline support (only on real http(s) hosting) */
(function(){try{if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}catch(e){}})();
