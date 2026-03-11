import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    this.initTheme();
  }

  toggleTheme() {
    const isDark = !this.isDarkMode.value;
    this.isDarkMode.next(isDark);
    this.applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  private initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    this.isDarkMode.next(isDark);
    this.applyTheme(isDark);
  }

  private applyTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }
}
