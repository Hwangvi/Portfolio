import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private dark = true;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.dark = savedTheme === 'dark';
    }
    this.applyTheme();
  }

  toggle() {
    this.dark = !this.dark;
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');
    this.applyTheme();
  }

  isDark() {
    return this.dark;
  }

  private applyTheme() {
    document.documentElement.setAttribute(
      'data-theme',
      this.dark ? 'dark' : 'light',
    );
  }
}
