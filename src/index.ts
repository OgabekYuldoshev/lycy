type Dictionary = Record<string, string>;

const exactWordMap: Dictionary = {
  mesenat: "меценат",
  "nuqtayi nazar": "нуқтаи назар",
  biolyuminessensiya: "биолюминесценция",
  differensiatsiya: "дифференциация",
  gallyutsinatsiya: "галлюцинация",
  teleinssenirovka: "телеинсценировка",
  lyuminessensiya: "люминесценция",
  rekognossirovka: "рекогносцировка",
  sitodiagnostika: "цитодиагностика",
  broneavtomobil: "бронеавтомобил[ь]",
  dissotsiatsiya: "диссоциация",
  nitroglitserin: "нитроглицерин",
  shtangensirkul: "штангенциркул[ь]",
  "alma-terapiya": "альма-терапия",
  avtomagistral: "автомагистрал[ь]",
  geliotsentrik: "гелиоцентрик",
  koeffitsiyent: "коэффициент",
  politsmeyster: "полицмейстер",
  predoxranitel: "предохранител[ь]",
  radiospektakl: "радиоспектакл[ь]",
  reemigratsiya: "реэмиграция",
  reevakuatsiya: "реэвакуация",
  sivilizatsiya: "цивилизация",
  devalvatsiya: "девальвация",
  inssenirovka: "инсценировка",
  kapelmeyster: "капельмейстер",
  kinofestival: "кинофестивал[ь]",
  kinossenariy: "киносценарий",
  levomitsetin: "левомицетин",
  pulverizator: "пульверизатор",
  revalvatsiya: "ревальвация",
  sutemizuvchi: "сутэмизувчи",
  viklyuchatel: "виключател[ь]",
  yuriskonsult: "юрисконсульт",
  avtopritsep: "автоприцеп",
  bakteritsid: "бактерицид",
  brutsellyoz: "бруцеллёз",
  feldmarshal: "фельдмаршал",
  geotsentrik: "геоцентрик",
  glyatsiolog: "гляциолог",
  kinokonsert: "киноконцерт",
  konferansye: "конферансье",
  mikroinsult: "микроинсульт",
  monokultura: "монокультура",
  penitsillin: "пенициллин",
  "press-papye": "пресс-папье",
  retsipiyent: "реципиент",
  shmutstitul: "шмуцтитул",
  vklyuchatel: "включател[ь]",
  xoletsistit: "холецистит",
  adyunktura: "адъюнктура",
  bolshevizm: "большевизм",
  bronenoses: "броненосец",
  cherepitsa: "черепица",
  eskadrilya: "эскадрилья",
  fizkultura: "физкультура",
  fortepyano: "фортепьяно",
  fotoatelye: "фотоателье",
  giposulfit: "гипосульфит",
  gipotsentr: "гипоцентр",
  gorizontal: "горизонтал[ь]",
  gotovalniy: "готовальний",
  kanserogen: "канцероген",
  kastryulka: "кастрюлька",
  kolonsifra: "колонцифра",
  konsepsiya: "концепция",
  konsessiya: "концессия",
  korrupsiya: "коррупция",
  litsenziya: "лицензия",
  marselyeza: "марсельеза",
  menshevizm: "меньшевизм",
  mikrorayon: "микрорайон",
  mizanssena: "мизансцена",
  munitsipal: "муниципал",
  oftalmolog: "офтальмолог",
  palpatsiya: "пальпация",
  pochtalyon: "почтальон",
  pulmonolog: "пульмонолог",
  qaynegachi: "қайнэгачи",
  retsenzent: "рецензент",
  retsenziya: "рецензия",
  sellyuloza: "целлюлоза",
  sentrifuga: "центрифуга",
  sitologiya: "цитология",
  ssintigraf: "сцинтиграф",
  tendensioz: "тенденциоз",
  uborshitsa: "уборшица",
  valeryanka: "валерьянка",
  valvatsiya: "вальвация",
  violonchel: "виолончел[ь]",
  xolodilnik: "холодильник",
  aryergard: "арьергард",
  atsetilen: "ацетилен",
  avianoses: "авианосец",
  avtomobil: "автомобил[ь]",
  biomitsin: "биомицин",
  bolshevik: "большевик",
  byulleten: "бюллетен[ь]",
  epitsentr: "эпицентр",
  feldyeger: "фельдъегер[ь]",
  fotoalbom: "фотоальбом",
  geraldika: "геральдика",
  gerbitsid: "гербицид",
  glitserin: "глицерин",
  gorchitsa: "горчица",
  gusenitsa: "гусеница",
  inyeksiya: "инъекция",
  katapulta: "катапульта",
  kompanyon: "компаньон",
  kompyuter: "компьютер",
  konferens: "конференц",
  konfutsiy: "конфуций",
  konslager: "концлагер[ь]",
  kulturizm: "культуризм",
  lyutetsiy: "лютеций",
  magistral: "магистрал[ь]",
  meditsina: "медицина",
  menshevik: "меньшевик",
  mikrofilm: "микрофильм",
  minonoses: "миноносец",
  ofitsiant: "официант",
  okkultizm: "оккультизм",
  ordinares: "ординарец",
  patsifist: "пацифист",
  patsifizm: "пацифизм",
  patsiyent: "пациент",
  pestitsid: "пестицид",
  platsdarm: "плацдарм",
  platskart: "плацкарт",
  plebissit: "плебисцит",
  selluloid: "целлулоид",
  siferblat: "циферблат",
  sirkulyar: "циркуляр",
  sitokimyo: "цитокимё",
  sotsiolog: "социолог",
  spetsifik: "специфик",
  texnetsiy: "технеций",
  ultimatum: "ультиматум",
  umivalnik: "умивальник",
  vermishel: "вермишел[ь]",
  vestibyul: "вестибюл[ь]",
  videofilm: "видеофильм",
  aksioner: "акционер",
  albatros: "альбатрос",
  alpinist: "альпинист",
  alpinizm: "альпинизм",
  amalgama: "амальгама",
  arergard: "арьергард",
  banderol: "бандерол[ь]",
  barelyef: "барельеф",
  batalyon: "батальон",
  batsilla: "бацилла",
  belveder: "бельведер",
  biofiltr: "биофильтр",
  brakoner: "браконьер",
  budilnik: "будильник",
  buldenej: "бульденеж",
  buldozer: "бульдозер",
  diagonal: "диагонал[ь]",
  dirijabl: "дирижабл[ь]",
  dvigatel: "двигател[ь]",
  emulsiya: "эмульсия",
  endshpil: "эндшпил[ь]",
  fagotsit: "фагоцит",
  falsifik: "фальсифик",
  feldsher: "фельдшер",
  festival: "фестивал[ь]",
  fitonsid: "фитонцид",
  gaubitsa: "гаубица",
  genotsid: "геноцид",
  giatsint: "гиацинт",
  gospital: "госпитал[ь]",
  intervyu: "интервью",
  inventar: "инвентар[ь]",
  kalendar: "календар[ь]",
  kalkulya: "калькуля",
  kastryul: "кастрюл[ь]",
  kinofilm: "кинофильм",
  konsentr: "концентр",
  konsulta: "консульта",
  konveyer: "конвейер",
  marganes: "марганец",
  matritsa: "матрица",
  medalyon: "медальон",
  modelyer: "модельер",
  monastir: "монастир[ь]",
  nimpalto: "нимпальто",
  parallel: "параллел[ь]",
  pavilyon: "павильон",
  pechenye: "печенье",
  petlitsa: "петлица",
  poyabzal: "пойабзал",
  poyafzal: "пойафзал",
  poyandoz: "пойандоз",
  poyustun: "пойустун",
  protsent: "процент",
  protsess: "процесс",
  rentabel: "рентабел[ь]",
  retsidiv: "рецидив",
  revolver: "револьвер",
  rubilnik: "рубильник",
  sekretar: "секретар[ь]",
  selderey: "сельдерей",
  sellofan: "целлофан",
  sentyabr: "сентябр[ь]",
  shifoner: "шифоньер",
  shnitsel: "шницел[ь]",
  shpindel: "шпиндел[ь]",
  shtempel: "штемпел[ь]",
  shtepsel: "штепсел[ь]",
  shveysar: "швейцар",
  silitsiy: "силиций",
  sisterna: "цистерна",
  spektakl: "спектакл[ь]",
  ssenariy: "сценарий",
  stronsiy: "стронций",
  tablitsa: "таблица",
  telefilm: "телефильм",
  teplitsa: "теплица",
  vedomost: "ведомост[ь]",
  abssess: "абсцесс",
  akletel: "акварел[ь]",
  alkogol: "алкогол[ь]",
  ansambl: "ансамбл[ь]",
  apelsin: "апельсин",
  atseton: "ацетон",
  beletaj: "бельэтаж",
  belgiya: "бельгия",
  belting: "бельтинг",
  bilyard: "бильярд",
  bolonya: "болонья",
  botsman: "боцман",
  diafilm: "диафильм",
  dotsent: "доцент",
  ensefal: "энцефал",
  esmines: "эсминец",
  feleton: "фельетон",
  folklor: "фольклор",
  fransuz: "француз",
  gastrol: "гастрол[ь]",
  gelmint: "гельминт",
  gorelef: "горельеф",
  interer: "интерьер",
  italyan: "итальян",
  jenshen: "женьшен[ь]",
  kanifol: "канифол[ь]",
  kansler: "канцлер",
  kapsyul: "капсюл[ь]",
  karamel: "карамел[ь]",
  kartech: "картеч[ь]",
  karusel: "карусел[ь]",
  kokteyl: "коктейл[ь]",
  konsern: "концерн",
  konsert: "концерт",
  kontrol: "контрол[ь]",
  konyunktura: "конъюнктура",
  konyuktivit: "коньюктивит",
  kulmina: "кульмина",
  kultiva: "культива",
  lotsman: "лоцман",
  mayonez: "майонез",
  melxior: "мельхиор",
  molbert: "мольберт",
  ofitser: "офицер",
  oktyabr: "октябр[ь]",
  partyer: "партьер",
  penalti: "пенальти",
  plastir: "пластир[ь]",
  porshen: "поршен[ь]",
  portfel: "портфел[ь]",
  premyer: "премьер",
  pristan: "пристан[ь]",
  pritsep: "прицеп",
  razyezd: "разъезд",
  retsept: "рецепт",
  sentner: "центнер",
  senzura: "цензура",
  sesarka: "цесарка",
  seytnot: "цейтнот",
  shagren: "шагрен[ь]",
  shampun: "шампун[ь]",
  shpatel: "шпател[ь]",
  shpilka: "шпилька",
  shtapel: "штапел[ь]",
  silindr: "цилиндр",
  sitoliz: "цитолиз",
  skalpel: "скальпел[ь]",
  sterjen: "стержен[ь]",
  subyekt: "субъект",
  tekstil: "текстил[ь]",
  vaksina: "вакцина",
  letyete: "варьете",
  vernyer: "верньер",
  vinetka: "виньетка",
  vodevil: "водевил[ь]",
  volfram: "вольфрам",
  xrustal: "хрустал[ь]",
  aksent: "акцент",
  aksiya: "акция",
  alyans: "альянс",
  artikl: "артикл[ь]",
  asfalt: "асфальт",
  atelye: "ателье",
  balneo: "бальнео",
  balzam: "бальзам",
  baryer: "барьер",
  barrel: "баррел[ь]",
  bazalt: "базальт",
  binokl: "бинокл[ь]",
  buldog: "бульдог",
  bulyon: "бульон",
  bullet: "бульвар",
  chizel: "чизел[ь]",
  dalton: "дальтон",
  dekabr: "декабр[ь]",
  delfin: "дельфин",
  fakult: "факульт",
  fevral: "феврал[ь]",
  galvan: "гальван",
  gantel: "гантел[ь]",
  garmon: "гармон[ь]",
  gersog: "герцог",
  grifel: "грифел[ь]",
  impuls: "импульс",
  insult: "инсульт",
  kalsiy: "кальций",
  karate: "каратэ",
  karyer: "карьер",
  kartel: "картел[ь]",
  kobalt: "кобальт",
  konyak: "коньяк",
  krovat: "кроват[ь]",
  kuryer: "курьер",
  lanset: "ланцет",
  litsey: "лицей",
  losyon: "лосьон",
  migren: "мигрен[ь]",
  moyupa: "мойупа",
  nippel: "ниппел[ь]",
  noyabr: "ноябр[ь]",
  oblast: "област[ь]",
  obyekt: "объект",
  patrul: "патрул[ь]",
  pechat: "печат[ь]",
  pinset: "пинцет",
  pitssa: "пицца",
  pleyer: "плейер",
  povest: "повест[ь]",
  profil: "профил[ь]",
  pulpit: "пульпит",
  rantye: "рантье",
  relyef: "рельеф",
  retush: "ретуш[ь]",
  ritsar: "рицар[ь]",
  selsiy: "цельсий",
  sement: "цемент",
  senyor: "сеньор",
  senzor: "цензор",
  shinel: "шинел[ь]",
  shpris: "шприц",
  sirkul: "циркул[ь]",
  sirroz: "цирроз",
  sistit: "цистит",
  sitata: "цитата",
  sitrus: "цитрус",
  slanes: "сланец",
  slesar: "слесар[ь]",
  spiral: "спирал[ь]",
  statya: "статья",
  stayer: "стайер",
  stelka: "стелька",
  sulfat: "сульфат",
  sunami: "цунами",
  syomka: "съёмка",
  terset: "терцет",
  tonnel: "тоннел[ь]",
  tunnel: "туннел[ь]",
  tyulen: "тюлен[ь]",
  veksel: "вексел[ь]",
  velvet: "вельвет",
  ventil: "вентил[ь]",
  vimpel: "вимпел[ь]",
  volost: "волост[ь]",
  vulgar: "вульгар",
  yanlet: "январ[ь]",
  yogurt: "йогурт",
  abzas: "абзац",
  aksiz: "акциз",
  albom: "альбом",
  aprel: "апрел[ь]",
  artel: "артел[ь]",
  delta: "дельта",
  detal: "детал[ь]",
  dizel: "дизел[ь]",
  filtr: "фильтр",
  folga: "фольга",
  fonar: "фонар[ь]",
  gavan: "гаван[ь]",
  gilza: "гильза",
  guash: "гуаш[ь]",
  kabel: "кабел[ь]",
  kafel: "кафел[ь]",
  kalka: "калька",
  kisel: "кисел[ь]",
  kitel: "кител[ь]",
  knyaz: "княз[ь]",
  konki: "коньки",
  kreml: "кремл[ь]",
  klets: "кварц",
  lager: "лагер[ь]",
  latun: "латун[ь]",
  losos: "лосос[ь]",
  mayor: "майор",
  mebel: "мебел[ь]",
  medal: "медал[ь]",
  model: "модел[ь]",
  motel: "мотел[ь]",
  multi: "мульти",
  nenes: "ненец",
  nikel: "никел[ь]",
  palma: "пальма",
  palto: "пальто",
  panel: "панел[ь]",
  parol: "парол[ь]",
  pedal: "педал[ь]",
  polka: "полька",
  pulpa: "пульпа",
  pyesa: "пьеса",
  ranes: "ранец",
  rayon: "район",
  reket: "рэкет",
  rezba: "резьба",
  riyel: "риел[ь]",
  royal: "роял[ь]",
  saldo: "сальдо",
  salto: "сальто",
  sanga: "цанга",
  sapfa: "цапфа",
  sedra: "цедра",
  seriy: "церий",
  seziy: "цезий",
  singa: "цинга",
  sinka: "синька",
  siren: "сирен[ь]",
  sobol: "собол[ь]",
  sokol: "цокол[ь]",
  sudya: "судья",
  syezd: "съезд",
  tabel: "табел[ь]",
  tigel: "тигел[ь]",
  tokar: "токар[ь]",
  ultra: "ультра",
  vanil: "ванил[ь]",
  yakor: "якор[ь]",
  alfa: "альфа",
  bron: "брон[ь]",
  drel: "дрел[ь]",
  duel: "дуэл[ь]",
  emal: "эмал[ь]",
  film: "фильм",
  foye: "фойе",
  fris: "фриц",
  gers: "герц",
  golf: "гольф",
  iyul: "июл[ь]",
  iyun: "июн[ь]",
  kyat: "кьят",
  neft: "нефт[ь]",
  otel: "отел[ь]",
  pech: "печ[ь]",
  puls: "пульс",
  pult: "пульт",
  rels: "рельс",
  rubl: "рубл[ь]",
  seld: "сельд[ь]",
  sent: "цент",
  senz: "ценз",
  sian: "циан",
  sikl: "цикл",
  sink: "цинк",
  sirk: "цирк",
  stil: "стил[ь]",
  talk: "тальк",
  tyul: "тюл[ь]",
  util: "утил[ь]",
  vals: "вальс",
  verf: "верф[ь]",
  volt: "вольт",
  yoga: "йога",
  yuan: "юан[ь]",
  alt: "альт",
  mil: "мил[ь]",
  nol: "нол[ь]",
  rol: "рол[ь]",
  rul: "рул[ь]",
  sex: "цех",
  "yana-da": "янада"
};

const specialWordMap: Dictionary = {
  sirka: "сирка",
  singari: "сингари",
  prinsip: "принцип",
  detsi: "деци",
  sikl: "цикл",
  vitse: "вице",
  devalvatsiya: "девальвация",
  valvatsiya: "вальвация",
  pensiya: "пенсия",
  versiya: "версия",
  jinsiyat: "жинсият",
  Sirka: "Сирка",
  Singari: "Сингари",
  Prinsip: "Принцип",
  Detsi: "Деци",
  Sikl: "Цикл",
  Vitse: "Вице",
  Devalvatsiya: "Девальвация",
  Valvatsiya: "Вальвация",
  Pensiya: "Пенсия",
  Versiya: "Версия",
  Jinsiyat: "Жинсият",
  SIRKA: "СИРКА",
  SINGARI: "СИНГАРИ",
  PRINSIP: "ПРИНЦИП",
  DETSI: "ДЕЦИ",
  SIKL: "ЦИКЛ",
  VITSE: "ВИЦЕ",
  DEVALVATSIYA: "ДЕВАЛЬВАЦИЯ",
  VALVATSIYA: "ВАЛЬВАЦИЯ",
  PENSIYA: "ПЕНСИЯ",
  VERSIYA: "ВЕРСИЯ",
  JINSIYAT: "ЖИНСИЯТ"
};

const patternWordMap: Dictionary = {
  bsiya: "бция",
  bsion: "бцион",
  ksiya: "кция",
  ksion: "кцион",
  nsiya: "нция",
  nsion: "нцион",
  rsiya: "рция",
  rsion: "рцион",
  psiya: "пция",
  psion: "пцион",
  tsiya: "ция",
  tsist: "цист",
  tsizm: "цизм",
  tsit: "цит",
  tsevt: "цевт",
  tsept: "цепт",
  tser: "цер",
  tsia: "циа",
  sia: "циа",
  tsikl: "цикл",
  tsio: "цио",
  tsiu: "циу",
  siu: "циу",
  BSIYA: "БЦИЯ",
  BSION: "БЦИОН",
  KSIYA: "КЦИЯ",
  KSION: "КЦИОН",
  NSIYA: "НЦИЯ",
  NSION: "НЦИОН",
  RSIYA: "РЦИЯ",
  RSION: "РЦИОН",
  PSIYA: "ПЦИЯ",
  PSION: "ПЦИОН",
  TSIYA: "ЦИЯ",
  TSIST: "ЦИСТ",
  TSIZM: "ЦИЗМ",
  TSIT: "ЦИТ",
  TSEVT: "ЦЕВТ",
  TSEPT: "ЦЕПТ",
  TSER: "ЦЕР",
  TSIA: "ЦИА",
  SIA: "ЦИА",
  TSIKL: "ЦИКЛ",
  TSIO: "ЦИО",
  TSIU: "ЦИУ",
  SIU: "ЦИУ"
};

const latinChars = [
  "w", "W", "YO'", "Yo'", "yo'", "YO", "Yo", "yo", "YA", "Ya", "ya", "YE", "Ye", "ye", "YU", "Yu", "yu", "CH", "Ch", "ch", "S'H", "S'h", "s'h", "SH", "Sh", "sh", "A", "a", "B", "b", "D", "d", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "X", "x", "Y", "y", "Z", "z", "c", "C"
];

const cyrillicChars = [
  "в", "В", "ЙЎ", "Йў", "йў", "Ё", "Ё", "ё", "Я", "Я", "я", "Е", "Е", "е", "Ю", "Ю", "ю", "Ч", "Ч", "ч", "СҲ", "Сҳ", "сҳ", "Ш", "Ш", "ш", "А", "а", "Б", "б", "Д", "д", "Ф", "ф", "Г", "г", "Ҳ", "ҳ", "И", "и", "Ж", "ж", "К", "к", "Л", "л", "М", "м", "Н", "н", "О", "о", "П", "п", "Қ", "қ", "Р", "р", "С", "с", "Т", "т", "У", "у", "В", "в", "Х", "х", "Й", "й", "З", "з", "с", "С"
];

const cyrillicLetters = [
  "ы", "Ы", "ЕЪ", "Еъ", "еъ", "СҲ", "Сҳ", "сҳ", "ЪЮ", "ъю", "ЬЮ", "ью", "ЬО", "ьо", "ЬЕ", "ье", "ЬЁ", "ьё", "ЪЕ", "ъе", "ЪЁ", "ъё", "А", "а", "Б", "б", "В", "в", "Г", "г", "Д", "д", "ё", "Ж", "ж", "З", "з", "И", "и", "Й", "й", "К", "к", "Л", "л", "М", "м", "Н", "н", "О", "о", "П", "п", "Р", "р", "С", "с", "Т", "т", "У", "у", "Ф", "ф", "Х", "х", "ч", "ш", "Э", "э", "ю", "я", "Ў", "ў", "Қ", "қ", "Ғ", "ғ", "Ҳ", "ҳ", "Ъ", "ъ", "Ь", "ь"
];

const latinLetters = [
  "i", "I", "Eʼ", "Eʼ", "eʼ", "SʼH", "Sʼh", "sʼh", "YU", "yu", "YU", "yu", "YO", "yo", "YE", "ye", "YO", "yo", "YE", "ye", "YO", "yo", "A", "a", "B", "b", "V", "v", "G", "g", "D", "d", "yo", "J", "j", "Z", "z", "I", "i", "Y", "y", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "R", "r", "S", "s", "T", "t", "U", "u", "F", "f", "X", "x", "ch", "sh", "E", "e", "yu", "ya", "Oʻ", "oʻ", "Q", "q", "Gʻ", "gʻ", "H", "h", "ʼ", "ʼ", "", ""
];

function replaceByArray(text: string, from: string[], to: string[]): string {
  for (let i = 0; i < from.length; i++) {
    text = text.replace(new RegExp(from[i], "g"), to[i]);
  }
  return text;
}

function replaceByDictionary(text: string, dict: Dictionary): string {
  for (const key in dict) {
    text = text.replace(new RegExp(key, "g"), dict[key]);
  }
  return text;
}

function replaceWordsWithCase(text: string, dict: Dictionary): string {
  for (const key in dict) {
    const replacement = dict[key];
    const regex = new RegExp("\\b" + key, "gi");
    text = text.replace(regex, (match) => {
      if (match === match.toLowerCase()) return replacement;
      if (match === match.toUpperCase()) return replacement.toUpperCase();
      return replacement.charAt(0).toUpperCase() + replacement.slice(1);
    });
  }
  return text;
}

function replaceSpecialWords(text: string, dict: Dictionary): string {
  if (!Object.keys(dict).length) return text;

  for (const key in dict) {
    const original = dict[key];
    const keyCyr = latinToCyrillic(key, {}, false, {});
    const valueCyr = latinToCyrillic(original, {}, false, {});

    const pattern = new RegExp(`(^| )(${key}|${original}|${keyCyr}|${valueCyr})($| )`, "gmi");
    text = text.replace(pattern, `$1${original}$3`);
  }

  return text;
}

export function latinToCyrillic(
  input: string,
  wordMap: Dictionary = {},
  enableSpecial = true,
  specialMap: Dictionary = {}
): string {
  let text = input
    .replace(/Gʻ|Gʼ|G’|G'|G`|G‘/g, "Ғ")
    .replace(/gʻ|gʼ|g’|g'|g`|g‘/g, "ғ")
    .replace(/Oʻ|Oʼ|O’|O'|O`|O‘/g, "Ў")
    .replace(/oʻ|oʼ|o’|o'|o`|o‘/g, "ў")
    .replace(/ʻ|’|'|`|‘/g, "ʼ")
    .replace(/“([^“”]+)”/g, "«$1»")
    .replace(/"([^"]+)"/g, "«$1»")
    .replace(/-da\b/g, "dа")
    .replace(/-ku\b/g, "ku")
    .replace(/-chi\b/g, "chi")
    .replace(/-yu\b/g, "yu")
    .replace(/-u\b/g, "u");

  text = replaceWordsWithCase(text, Object.keys(wordMap).length ? wordMap : exactWordMap);
  text = replaceByDictionary(text, patternWordMap);

  text = text
    .replace(/ʼ([A-Z])/g, "Ъ$1")
    .replace(/ʼ([a-z])/g, "ъ$1")
    .replace(/([ОЕOE])ʼ/g, "$1Ъ")
    .replace(/([оеoe])ʼ/g, "$1ъ");

  text = replaceByArray(text, latinChars, cyrillicChars);

  if (enableSpecial) {
    const mapToUse = Object.keys(specialMap).length > 0 ? specialMap : specialWordMap;
    text = replaceSpecialWords(text, mapToUse);
  }
  return text;
}

export function cyrillicToLatin(
  input: string,
  enableSpecial = true,
  specialMap: Dictionary = {}
): string {
  let text = input
    .replace(/"([^\"]+)"/g, "“$1”")
    .replace(/«([^»]+)»/g, "“$1”")

    // ✅ Avval maxsus belgilarni to'g'rilaymiz
    .replace(/Ё([А-Я])/g, "Yo$1")
    .replace(/Ё([а-я])/g, "Yo$1")
    .replace(/Ё/g, "Yo")
    .replace(/ё([а-я])/g, "yo$1")
    .replace(/ё/g, "yo")
    .replace(/Ч/g, "Ch")
    .replace(/ч/g, "ch")
    .replace(/Ш/g, "Sh")
    .replace(/ш/g, "sh")
    .replace(/Ю/g, "Yu")
    .replace(/ю/g, "yu")
    .replace(/Я/g, "Ya")
    .replace(/я/g, "ya")

    // E harfini boshida yoki orqasida tovushli harf bo‘lsa Ye qilib o‘zgartirish
    .replace(/\bЕ/g, "Ye")
    .replace(/\bе/g, "ye")

    .replace(/Ц/g, "Ts")
    .replace(/ц/g, "ts")
    .replace(/Е/g, "E")
    .replace(/е/g, "e")

    .replace(/[ʻ’'`‘]+/g, "‘")
    .replace(/(\d+)-(yanlet|fevral|mart|aprel|may|iyun|iyul|avgust|sentyabr|oktyabr|noyabr|dekabr)/gi, "$1-$2")
    .replace(/(\d{3,4})-(yil|YIL|y\.)/g, "$1-$2")
    .replace(/\bnuqtai nazar/g, "nuqtayi nazar")
    .replace(/\btarjimai hol/g, "tarjimayi hol")
    .replace(/\byanada\b/g, "yana-da");

  text = replaceByArray(text, cyrillicLetters, latinLetters);

  if (enableSpecial) {
    const mapToUse = Object.keys(specialMap).length > 0 ? specialMap : specialWordMap;
    text = replaceSpecialWords(text, mapToUse);
  }

  return text;
}