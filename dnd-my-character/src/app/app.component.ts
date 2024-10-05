import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  character = {
    acrobatics: localStorage.getItem('acrobatics') ?? '',
    armorClass: localStorage.getItem('armorClass') ?? '',
    athletics: localStorage.getItem('athletics') ?? '',
    attension: localStorage.getItem('attension') ?? '',
    charClass: localStorage.getItem('charClass') ?? '',
    charismaMod: localStorage.getItem('charismaMod') ?? '',
    charismaStat: localStorage.getItem('charismaStat') ?? '',
    charName: localStorage.getItem('charName') ?? '',
    charOrigin: localStorage.getItem('charOrigin') ?? '',
    charRace: localStorage.getItem('charRace') ?? '',
    charWorldView: localStorage.getItem('charWorldView') ?? '',
    charXP: localStorage.getItem('charXP') ?? '',
    deception: localStorage.getItem('deception') ?? '',
    dexMod: localStorage.getItem('dexMod') ?? '',
    dexStat: localStorage.getItem('dexStat') ?? '',
    diceHealth: localStorage.getItem('diceHealth') ?? '',
    diceMax: localStorage.getItem('diceMax') ?? '',
    enduranceMod: localStorage.getItem('enduranceMod') ?? '',
    enduranceStat: localStorage.getItem('enduranceStat') ?? '',
    handDex: localStorage.getItem('handDex') ?? '',
    health: localStorage.getItem('health') ?? '',
    healthMax: localStorage.getItem('healthMax') ?? '',
    hystory: localStorage.getItem('hystory') ?? '',
    initiative: localStorage.getItem('initiative') ?? '',
    insihgt: localStorage.getItem('insihgt') ?? '',
    inspiration: localStorage.getItem('inspiration') ?? '',
    intellectMod: localStorage.getItem('intellectMod') ?? '',
    intellectStat: localStorage.getItem('intellectStat') ?? '',
    intimidation: localStorage.getItem('intimidation') ?? '',
    investigation: localStorage.getItem('investigation') ?? '',
    magic: localStorage.getItem('magic') ?? '',
    medicine: localStorage.getItem('medicine') ?? '',
    nature: localStorage.getItem('nature') ?? '',
    pasiveVisdom: localStorage.getItem('pasiveVisdom') ?? '',
    performance: localStorage.getItem('performance') ?? '',
    persuasion: localStorage.getItem('persuasion') ?? '',
    powerMod: localStorage.getItem('powerMod') ?? '',
    powerStat: localStorage.getItem('powerStat') ?? '',
    religion: localStorage.getItem('religion') ?? '',
    rescuesCharisma: localStorage.getItem('rescuesCharisma') ?? '',
    rescuesDex: localStorage.getItem('rescuesDex') ?? '',
    rescuesEndurance: localStorage.getItem('rescuesEndurance') ?? '',
    rescuesIntellect: localStorage.getItem('rescuesIntellect') ?? '',
    rescuesPower: localStorage.getItem('rescuesPower') ?? '',
    rescuesWisdom: localStorage.getItem('rescuesWisdom') ?? '',
    skillBonus: localStorage.getItem('skillBonus') ?? '',
    speed: localStorage.getItem('speed') ?? '',
    stealth: localStorage.getItem('stealth') ?? '',
    survival: localStorage.getItem('survival') ?? '',
    temporaryHealth: localStorage.getItem('temporaryHealth') ?? '',
    training: localStorage.getItem('training') ?? '',
    userName: localStorage.getItem('userName') ?? '',
    wisdomMod: localStorage.getItem('wisdomMod') ?? '',
    wisdomStat: localStorage.getItem('wisdomStat') ?? '',
  };

  characterCheckboxes = {
    acrobaticsCheck: localStorage.getItem('acrobaticsCheck') === 'true',
    athleticsCheck: localStorage.getItem('athleticsCheck') === 'true',
    attentionCheck: localStorage.getItem('attentionCheck') === 'true',
    deceptionCheck: localStorage.getItem('deceptionCheck') === 'true',
    false1: localStorage.getItem('false1') === 'true',
    false2: localStorage.getItem('false2') === 'true',
    false3: localStorage.getItem('false3') === 'true',
    handDexCheck: localStorage.getItem('handDexCheck') === 'true',
    hystoryCheck: localStorage.getItem('hystoryCheck') === 'true',
    insightCheck: localStorage.getItem('insightCheck') === 'true',
    intimidationCheck: localStorage.getItem('intimidationCheck') === 'true',
    investigationsCheck: localStorage.getItem('investigationsCheck') === 'true',
    magicCheck: localStorage.getItem('magicCheck') === 'true',
    medicineCheck: localStorage.getItem('medicineCheck') === 'true',
    natureCheck: localStorage.getItem('natureCheck') === 'true',
    performanceCheck: localStorage.getItem('performanceCheck') === 'true',
    persuasionCheck: localStorage.getItem('persuasionCheck') === 'true',
    religionCheck: localStorage.getItem('religionCheck') === 'true',
    rescuesCharismaCheck: localStorage.getItem('rescuesCharismaCheck') === 'true',
    rescuesDexCheck: localStorage.getItem('rescuesDexCheck') === 'true',
    rescuesEnduranceCheck: localStorage.getItem('rescuesEnduranceCheck') === 'true',
    rescuesIntellectCheck: localStorage.getItem('rescuesIntellectCheck') === 'true',
    rescuesPowerCheck: localStorage.getItem('rescuesPowerCheck') === 'true',
    rescuesWisdomCheck: localStorage.getItem('rescuesWisdomCheck') === 'true',
    stealthCheck: localStorage.getItem('stealthCheck') === 'true',
    success1: localStorage.getItem('success1') === 'true',
    success2: localStorage.getItem('success2') === 'true',
    success3: localStorage.getItem('success3') === 'true',
    survivalCheck: localStorage.getItem('survivalCheck') === 'true',
    trainingCheck: localStorage.getItem('trainingCheck') === 'true',
  };

  characterTextAreas = {
    atackSpells: localStorage.getItem('atackSpells') ?? '',
    equipment: localStorage.getItem('equipment') ?? '',
    features: localStorage.getItem('features') ?? '',
    ideals: localStorage.getItem('ideals') ?? '',
    otherSkills: localStorage.getItem('otherSkills') ?? '',
    personalityTraits: localStorage.getItem('personalityTraits') ?? '',
    ties: localStorage.getItem('ties') ?? '',
  };

  saveAllChanges(): void {
    Object.keys(this.character).forEach(key => {
      localStorage.setItem(key, this.character[key as keyof typeof this.character]);
    });

    Object.keys(this.characterCheckboxes).forEach(key => {
      localStorage.setItem(key, this.characterCheckboxes[key as keyof typeof this.characterCheckboxes].toString());
    });

    Object.keys(this.characterTextAreas).forEach(key => {
      localStorage.setItem(key, this.characterTextAreas[key as keyof typeof this.characterTextAreas]);
    });

    console.log('All changes saved.');
  }
}
