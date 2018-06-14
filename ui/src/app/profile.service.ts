import { Injectable } from '@angular/core';
import { ProfileInfo } from './profileInfo';
import { Profile } from 'selenium-webdriver/firefox';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  profiles: ProfileInfo[] = [
    { name: "Derek", day: 1, status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "Hansel", day: 2, status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1, cols:1 },
    { name: "Valentina", day: 3, status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1 , cols:1},
    { name: "Mugatu", day: 4, status: "Designing the masterplan", about: "I'm a tirant", messages: [], rows: 3, cols:1},
    { name: "Katinka", day: 5, status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "Rufus", day: 6, status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1 , cols:1},
    { name: "Brint", day: 7, status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "Meekus", day: 8, status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "EvilDJ", day: 9, status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    //{ name: "JPPrewit", day: 1, status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
  ];

  getAll(): ProfileInfo [] {
    return this.profiles;
  }
}
