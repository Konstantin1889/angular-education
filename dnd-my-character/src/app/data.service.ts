import { Injectable } from '@angular/core';
import { LocalSaveService } from './local-save.service';
import '../app/app.interfaces'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  playerData = {
    characterName: '',
    characterClass: '',
    playerName: '',
    origins: '',
    race: '',
    worldview: '',
    xp: '',
  }

  mainStatsData = {
    powerMod: '',
    dexMod: '',
    enduranceMod: '',
    intellectMod: '',
    wisdomMod: '',
    charismaMod: '',
    powerStat: '',
    dexStat: '',
    enduranceStat: '',
    intellectStat: '',
    wisdomStat: '',
    charismaStat: '',
  }

  skillsStatsData = {
    inspiration: '',
    skillBonus: '',
    power: '',
    dex: '',
    endurance: '',
    intellect: '',
    wisdom: '',
    charisma: '',
    acrobatics: '',
    athletics: '',
    attention: '',
    survival: '',
    training: '',
    intimidation: '',
    performance: '',
    hystory: '',
    handDex: '',
    magic: '',
    medicine: '',
    deception: '',
    nature: '',
    insight: '',
    investigations: '',
    religion: '',
    stealth: '',
    persuasion: '',
    pasiveVisdom: '',
  }

  textAreaData = {
    otherSkills: '',
    atackAndSpells: '',
    equipment: '',
    persTraits: '',
    ideals: '',
    ties: '',
    features: '',
  }

  healthData = {
    armorClass: '',
    initiative: '',
    speed: '',
    maxHealth: '',
    nowHealth: '',
    timeHealth: '',
    maxHealthDice: '',
    nowHealthDice: '',
  }

  checkboxData = {
    powerCheck: '',
    dexCheck: '',
    enduranceCheck: '',
    intellectCheck: '',
    wisdomCheck: '',
    charismaCheck: '',
    acrobaticsCheck: '',
    athleticsCheck: '',
    attentionCheck: '',
    survivalCheck: '',
    trainingCheck: '',
    intimidationCheck: '',
    performanceCheck: '',
    hystoryCheck: '',
    handDexCheck: '',
    magicCheck: '',
    medicineCheck: '',
    deceptionCheck: '',
    natureCheck: '',
    insightCheck: '',
    investigationsCheck: '',
    religionCheck: '',
    stealthCheck: '',
    persuasionCheck: '',
    success1: '',
    success2: '',
    success3: '',
    fail1: '',
    fail2: '',
    fail3: '',
  }

  private localsaveservice: LocalSaveService;

  constructor() {
    this.localsaveservice = new LocalSaveService()
    this.playerData = this.localsaveservice.storageGet('playerData');
    this.mainStatsData = this.localsaveservice.storageGet('mainStatsData');
    this.skillsStatsData = this.localsaveservice.storageGet('skilsStatsData');
    this.textAreaData = this.localsaveservice.storageGet('textAreaData');
    this.healthData = this.localsaveservice.storageGet('healthData');
    this.checkboxData = this.localsaveservice.storageGet('checkboxData');
  }

  saveLocal () {
    this.localsaveservice.storageSet('playerData', this.playerData)
    this.localsaveservice.storageSet('mainStatsData', this.mainStatsData)
    this.localsaveservice.storageSet('skilsStatsData', this.skillsStatsData)
    this.localsaveservice.storageSet('textAreaData', this.textAreaData)
    this.localsaveservice.storageSet('healthData', this.healthData)
    this.localsaveservice.storageSet('checkboxData', this.checkboxData)
  }
}
