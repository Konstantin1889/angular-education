const getLocalStorageItem = (key: string, defaultValue: string = ''): string => {
  return localStorage.getItem(key) ?? defaultValue;
};

export const characterData: Record<string, string> = {
  acrobatics: 'acrobatics',
  armorClass: 'armorClass',
  athletics: 'athletics',
  attension: 'attension',
  charClass: 'charClass',
  charismaMod: 'charismaMod',
  charismaStat: 'charismaStat',
  charName: 'charName',
  charOrigin: 'charOrigin',
  charRace: 'charRace',
  charWorldView: 'charWorldView',
  charXP: 'charXP',
  deception: 'deception',
  dexMod: 'dexMod',
  dexStat: 'dexStat',
  diceHealth: 'diceHealth',
  diceMax: 'diceMax',
  enduranceMod: 'enduranceMod',
  enduranceStat: 'enduranceStat',
  handDex: 'handDex',
  health: 'health',
  healthMax: 'healthMax',
  hystory: 'hystory',
  initiative: 'initiative',
  insihgt: 'insihgt',
  inspiration: 'inspiration',
  intellectMod: 'intellectMod',
  intellectStat: 'intellectStat',
  intimidation: 'intimidation',
  investigation: 'investigation',
  magic: 'magic',
  medicine: 'medicine',
  nature: 'nature',
  pasiveVisdom: 'pasiveVisdom',
  performance: 'performance',
  persuasion: 'persuasion',
  powerMod: 'powerMod',
  powerStat: 'powerStat',
  religion: 'religion',
  rescuesCharisma: 'rescuesCharisma',
  rescuesDex: 'rescuesDex',
  rescuesEndurance: 'rescuesEndurance',
  rescuesIntellect: 'rescuesIntellect',
  rescuesPower: 'rescuesPower',
  rescuesWisdom: 'rescuesWisdom',
  skillBonus: 'skillBonus',
  speed: 'speed',
  stealth: 'stealth',
  survival: 'survival',
  temporaryHealth: 'temporaryHealth',
  training: 'training',
  userName: 'userName',
  wisdomMod: 'wisdomMod',
  wisdomStat: 'wisdomStat',
};

Object.keys(characterData).forEach((key) => {
  characterData[key] = getLocalStorageItem(characterData[key]);
});

// Шаблон данных для чекбоксов
const characterCheckboxesDataTemplate: Record<string, string> = {
  acrobaticsCheck: 'acrobaticsCheck',
  athleticsCheck: 'athleticsCheck',
  attentionCheck: 'attentionCheck',
  deceptionCheck: 'deceptionCheck',
  false1: 'false1',
  false2: 'false2',
  false3: 'false3',
  handDexCheck: 'handDexCheck',
  hystoryCheck: 'hystoryCheck',
  insightCheck: 'insightCheck',
  intimidationCheck: 'intimidationCheck',
  investigationsCheck: 'investigationsCheck',
  magicCheck: 'magicCheck',
  medicineCheck: 'medicineCheck',
  natureCheck: 'natureCheck',
  performanceCheck: 'performanceCheck',
  persuasionCheck: 'persuasionCheck',
  religionCheck: 'religionCheck',
  rescuesCharismaCheck: 'rescuesCharismaCheck',
  rescuesDexCheck: 'rescuesDexCheck',
  rescuesEnduranceCheck: 'rescuesEnduranceCheck',
  rescuesIntellectCheck: 'rescuesIntellectCheck',
  rescuesPowerCheck: 'rescuesPowerCheck',
  rescuesWisdomCheck: 'rescuesWisdomCheck',
  stealthCheck: 'stealthCheck',
  success1: 'success1',
  success2: 'success2',
  success3: 'success3',
  survivalCheck: 'survivalCheck',
  trainingCheck: 'trainingCheck',
};

function getLocalStorageBoolean(key: string): boolean {
  const item = localStorage.getItem(key);
  return item === 'true'; // Преобразуем строку в булево значение
}

// Объект с данными чекбоксов и загрузка значений из localStorage
export const characterCheckboxesData: Record<string, boolean> = Object.keys(characterCheckboxesDataTemplate).reduce((acc, key) => {
  acc[key] = getLocalStorageBoolean(key); // Загружаем состояние из localStorage
  return acc;
}, {} as Record<string, boolean>);

export const characterTextAreasData: Record<string, string> = {
  atackSpells: 'atackSpells',
  equipment: 'equipment',
  features: 'features',
  ideals: 'ideals',
  otherSkills: 'otherSkills',
  personalityTraits: 'personalityTraits',
  ties: 'ties',
};

Object.keys(characterTextAreasData).forEach((key) => {
  characterTextAreasData[key] = getLocalStorageItem(characterTextAreasData[key]);
});
