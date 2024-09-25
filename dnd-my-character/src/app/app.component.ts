import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dnd-my-character';
  userName: string = '';
  charName: string = '';
  charClass: string = '';
  charOrigin: string = '';
  charRace: string = '';
  charWorldView: string = '';
  charXP: string = '';
  powerStat: string = '';
  powerMod: string = '';
  dexStat: string = '';
  dexMod: string = '';
  enduranceStat: string = '';
  enduranceMod: string = '';
  intellectStat: string = '';
  intellectMod: string = '';
  wisdomStat: string = '';
  wisdomMod: string = '';
  charismaStat: string = '';
  charismaMod: string = '';
  pasiveVisdom: string = '';
  armorClass: string = '';
  initiative: string = '';
  speed: string = '';
  healthMax: string = '';
  health: string = '';
  temporaryHealth: string = '';
  diceMax: string = '';
  diceHealth: string = '';
  inspiration: string = '';
  skillBonus: string = '';
  rescuesPower: string = '';
  rescuesDex: string = '';
  rescuesEndurance: string = '';
  rescuesIntellect: string = '';
  rescuesWisdom: string = '';
  rescuesCharisma: string = '';

  //Переменные checkbox
  success1: boolean = false;
  success2: boolean = false;
  success3: boolean = false;
  false1: boolean = false;
  false2: boolean = false;
  false3: boolean = false;
  rescuesPowerCheck: boolean = false;
  rescuesDexCheck: boolean = false;
  rescuesEnduranceCheck: boolean = false;
  rescuesIntellectCheck: boolean = false;
  rescuesWisdomCheck: boolean = false;
  rescuesCharismaCheck: boolean = false;

  //Переменные для textarea
  otherSkills: string ='';
  atackSpells: string ='';
  equipment: string ='';
  personalityTraits: string ='';
  ideals: string ='';
  ties: string ='';
  features: string ='';

  ngOnInit(): void {
    // Загружает сохраненные данные из localStorage
    const savedUserName = localStorage.getItem('userName');
    const savedClass = localStorage.getItem('charClass');
    const savedOrigin = localStorage.getItem('charOrigin');
    const savedName = localStorage.getItem('charName');
    const savedRace = localStorage.getItem('charRace');
    const savedWorldView = localStorage.getItem('charWorldView');
    const savedXP = localStorage.getItem('charXP');
    const savedPowerStat = localStorage.getItem('powerStat');
    const savedPowerMod = localStorage.getItem('powerMod');
    const savedDexStat = localStorage.getItem('dexStat');
    const savedDexMod = localStorage.getItem('dexMod');
    const savedEnduranceStat = localStorage.getItem('enduranceStat');
    const savedEnduranceMod = localStorage.getItem('enduranceMod');
    const savedIntellectStat = localStorage.getItem('intellectStat');
    const savedIntellectMod = localStorage.getItem('intellectMod');
    const savedWisdomStat = localStorage.getItem('wisdomStat');
    const savedWisdomMod = localStorage.getItem('wisdomMod');
    const savedCharismaStat = localStorage.getItem('charismaStat');
    const savedCharismaMod = localStorage.getItem('charismaMod');
    const savedPasiveVisdom = localStorage.getItem('pasiveVisdom');
    const savedArmorClass = localStorage.getItem('armorClass');
    const savedInitiative = localStorage.getItem('initiative');
    const savedSpeed = localStorage.getItem('speed');
    const savedHealthMax = localStorage.getItem('healthMax');
    const savedHealth = localStorage.getItem('health');
    const savedTemporaryHealth = localStorage.getItem('temporaryHealth');
    const savedDiceMax = localStorage.getItem('diceMax');
    const savedDiceHealth = localStorage.getItem('diceHealth');
    const savedInspiration = localStorage.getItem('inspiration');
    const savedSkillBonus = localStorage.getItem('skillBonus');
    const savedRescuesPower = localStorage.getItem('rescuesPower');
    const savedRescuesDex = localStorage.getItem('rescuesDex');
    const savedRescuesEndurance = localStorage.getItem('rescuesEndurance');
    const savedRescuesIntellect = localStorage.getItem('rescuesIntellect');
    const savedRescuesWisdom = localStorage.getItem('rescuesWisdom');
    const savedRescuesCharisma = localStorage.getItem('rescuesCharisma');

    //Загружает сохраненные данные checkbox
    const savedSuccess1 = localStorage.getItem('success1');
    const savedSuccess2 = localStorage.getItem('success2');
    const savedSuccess3 = localStorage.getItem('success3');
    const savedFalse1 = localStorage.getItem('false1');
    const savedFalse2 = localStorage.getItem('false2');
    const savedFalse3 = localStorage.getItem('false3');
    const savedRescuesPowerCheck = localStorage.getItem('rescuesPowerCheck');
    const saveRescuesDexCheck = localStorage.getItem('rescuesDexCheck');
    const saveRescuesEnduranceCheck = localStorage.getItem('rescuesEnduranceCheck');
    const saveRescuesIntellectCheck = localStorage.getItem('rescuesIntellectCheck');
    const saveRescuesWisdomCheck = localStorage.getItem('rescuesWisdomCheck');
    const saveRescuesCharismaCheckk = localStorage.getItem('rescuesCharismaCheck');

    //Загружает сохраненные данные textarea
    const savedOtherSkills = localStorage.getItem('otherSkills');
    const savedAtackSpells = localStorage.getItem('atackSpells');
    const savedEquipment = localStorage.getItem('equipment');
    const savedPersonalityTraits = localStorage.getItem('personalityTraits');
    const savedIdeals = localStorage.getItem('ideals');
    const savedTies = localStorage.getItem('ties');
    const savedFeatures = localStorage.getItem('features');

    if (savedUserName) {
      this.userName = savedUserName;
    }

    if (savedName) {
      this.charName = savedName;
    }

    if (savedClass) {
      this.charClass = savedClass;
    }

    if (savedOrigin) {
      this.charOrigin = savedOrigin;
    }

    if (savedRace) {
      this.charRace = savedRace;
    }

    if (savedWorldView) {
      this.charWorldView = savedWorldView;
    }

    if (savedXP) {
      this.charXP = savedXP;
    }

    if (savedPowerStat) {
      this.powerStat = savedPowerStat;
    }

    if (savedPowerMod) {
      this.powerMod = savedPowerMod;
    }

    if (savedDexStat) {
      this.dexStat = savedDexStat;
    }

    if (savedDexMod) {
      this.dexMod = savedDexMod;
    }

    if (savedEnduranceStat) {
      this.enduranceStat = savedEnduranceStat;
    }

    if (savedEnduranceMod) {
      this.enduranceMod = savedEnduranceMod;
    }

    if (savedIntellectStat) {
      this.intellectStat = savedIntellectStat;
    }

    if (savedIntellectMod) {
      this.intellectMod = savedIntellectMod;
    }

    if (savedWisdomStat) {
      this.wisdomStat = savedWisdomStat;
    }

    if (savedWisdomMod) {
      this.wisdomMod = savedWisdomMod;
    }

    if (savedCharismaStat) {
      this.charismaStat = savedCharismaStat;
    }

    if (savedCharismaMod) {
      this.charismaMod = savedCharismaMod;
    }

    if (savedPasiveVisdom) {
      this.pasiveVisdom = savedPasiveVisdom;
    }

    if (savedArmorClass) {
      this.armorClass = savedArmorClass;
    }

    if (savedInitiative) {
      this.initiative = savedInitiative;
    }

    if (savedSpeed) {
      this.speed = savedSpeed;
    }

    if (savedHealthMax) {
      this.healthMax = savedHealthMax;
    }

    if (savedHealth) {
      this.health = savedHealth;
    }

    if (savedTemporaryHealth) {
      this.temporaryHealth = savedTemporaryHealth;
    }

    if (savedDiceMax) {
      this.diceMax = savedDiceMax;
    }

    if (savedDiceHealth) {
      this.diceHealth = savedDiceHealth;
    }

    if (savedInspiration) {
      this.inspiration = savedInspiration;
    }

    if (savedSkillBonus) {
      this.skillBonus = savedSkillBonus;
    }

    if (savedRescuesPower) {
      this.rescuesPower = savedRescuesPower;
    }

    if (savedRescuesDex) {
      this.rescuesDex = savedRescuesDex;
    }

    if (savedRescuesEndurance) {
      this.rescuesEndurance = savedRescuesEndurance;
    }

    if (savedRescuesIntellect) {
      this.rescuesIntellect = savedRescuesIntellect;
    }

    if (savedRescuesWisdom) {
      this.rescuesWisdom = savedRescuesWisdom;
    }

    if (savedRescuesCharisma) {
      this.rescuesCharisma = savedRescuesCharisma;
    }


    //Проверка загруженны ли данные checkbox в lockalStorrage
    if (savedSuccess1 !== null) { 
      this.success1 = savedSuccess1 === 'true';
    }

    if (savedSuccess2 !== null) { 
      this.success2 = savedSuccess2 === 'true';
    }

    if (savedSuccess3 !== null) { 
      this.success3 = savedSuccess3 === 'true';
    }

    if (savedFalse1 !== null) { 
      this.false1 = savedFalse1 === 'true';
    }

    if (savedFalse2 !== null) { 
      this.false2 = savedFalse2 === 'true';
    }

    if (savedFalse3 !== null) { 
      this.false3 = savedFalse3 === 'true';
    }

    if (savedRescuesPowerCheck !== null) { 
      this.rescuesPowerCheck = savedRescuesPowerCheck === 'true';
    }

    if (saveRescuesDexCheck !== null) { 
      this.rescuesDexCheck = saveRescuesDexCheck === 'true';
    }

    if (saveRescuesEnduranceCheck !== null) { 
      this.rescuesEnduranceCheck = saveRescuesEnduranceCheck === 'true';
    }

    if (saveRescuesIntellectCheck !== null) { 
      this.rescuesIntellectCheck = saveRescuesIntellectCheck === 'true';
    }

    if (saveRescuesWisdomCheck !== null) { 
      this.rescuesWisdomCheck = saveRescuesWisdomCheck === 'true';
    }

    if (saveRescuesCharismaCheckk !== null) { 
      this.rescuesCharismaCheck = saveRescuesCharismaCheckk === 'true';
    }

    //Проверка загруженны ли данные checkbox в textarea
    if (savedOtherSkills) {
      this.otherSkills = savedOtherSkills;
    }

    if (savedAtackSpells) {
      this.atackSpells = savedAtackSpells;
    }

    if (savedEquipment) {
      this.equipment = savedEquipment;
    }

    if (savedPersonalityTraits) {
      this.personalityTraits = savedPersonalityTraits;
    }

    if (savedIdeals) {
      this.ideals = savedIdeals;
    }

    if (savedTies) {
      this.ties = savedTies;
    }

    if (savedFeatures) {
      this.features = savedFeatures;
    }
  }

  saveAllChanges(): void {
    // Сохраняем все изменения в localStorage
    localStorage.setItem('charName', this.charName);
    localStorage.setItem('charClass', this.charClass);
    localStorage.setItem('charOrigin', this.charOrigin);
    localStorage.setItem('userName', this.userName);
    localStorage.setItem('charRace', this.charRace);
    localStorage.setItem('charWorldView', this.charWorldView);
    localStorage.setItem('charXP', this.charXP);
    localStorage.setItem('powerStat', this.powerStat);
    localStorage.setItem('powerMod', this.powerMod);
    localStorage.setItem('dexStat', this.dexStat);
    localStorage.setItem('dexMod', this.dexMod);
    localStorage.setItem('enduranceStat', this.enduranceStat);
    localStorage.setItem('enduranceMod', this.enduranceMod);
    localStorage.setItem('intellectStat', this.intellectStat);
    localStorage.setItem('intellectMod', this.intellectMod);
    localStorage.setItem('wisdomStat', this.wisdomStat);
    localStorage.setItem('wisdomMod', this.wisdomMod);
    localStorage.setItem('charismaStat', this.charismaStat);
    localStorage.setItem('charismaMod', this.charismaMod);
    localStorage.setItem('pasiveVisdom', this.pasiveVisdom);
    localStorage.setItem('armorClass', this.armorClass);
    localStorage.setItem('initiative', this.initiative);
    localStorage.setItem('speed', this.speed);
    localStorage.setItem('healthMax', this.healthMax);
    localStorage.setItem('health', this.health);
    localStorage.setItem('temporaryHealth', this.temporaryHealth);
    localStorage.setItem('diceMax', this.diceMax);
    localStorage.setItem('diceHealth', this.diceHealth);
    localStorage.setItem('inspiration', this.inspiration);
    localStorage.setItem('skillBonus', this.skillBonus);
    localStorage.setItem('rescuesPower', this.rescuesPower);
    localStorage.setItem('rescuesDex', this.rescuesDex);
    localStorage.setItem('rescuesEndurance', this.rescuesEndurance);
    localStorage.setItem('rescuesIntellect', this.rescuesIntellect);
    localStorage.setItem('rescuesWisdom', this.rescuesWisdom);
    localStorage.setItem('rescuesCharisma', this.rescuesCharisma);

    //Сохраняет изменения checkbox
    localStorage.setItem('success1', this.success1.toString());
    localStorage.setItem('success2', this.success2.toString());
    localStorage.setItem('success3', this.success3.toString());
    localStorage.setItem('rescuesPowerCheck', this.rescuesPowerCheck.toString());
    localStorage.setItem('rescuesDexCheck', this.rescuesDexCheck.toString());
    localStorage.setItem('rescuesEnduranceCheck', this.rescuesEnduranceCheck.toString());
    localStorage.setItem('rescuesIntellectCheck', this.rescuesIntellectCheck.toString());
    localStorage.setItem('rescuesWisdomCheck', this.rescuesWisdomCheck.toString());
    localStorage.setItem('rescuesCharismaCheck', this.rescuesCharismaCheck.toString());

    //Сохраняет изменения textarea
    localStorage.setItem('otherSkills', this.otherSkills);
    localStorage.setItem('atackSpells', this.atackSpells);
    localStorage.setItem('equipment', this.equipment);
    localStorage.setItem('personalityTraits', this.personalityTraits);
    localStorage.setItem('ideals', this.ideals);
    localStorage.setItem('ties', this.ties);
    localStorage.setItem('features', this.features);

    console.log('All changes saved:');
  }
}