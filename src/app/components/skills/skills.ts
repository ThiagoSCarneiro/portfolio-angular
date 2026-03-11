import { Component } from '@angular/core';

interface Skill {
  name: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Front-end',
      icon: '🎨',
      skills: [
        { name: 'Angular', color: '#dd0031' },
        { name: 'React', color: '#61dafb' },
        { name: 'HTML/CSS', color: '#e34f26' },
        { name: 'JavaScript', color: '#f7df1e' },
      ],
    },
    {
      title: 'Back-end',
      icon: '⚙️',
      skills: [
        { name: 'Java', color: '#007396' },
        { name: 'PHP', color: '#777bb4' },
        { name: 'Laravel', color: '#ff2d20' },
        { name: 'Spring Boot', color: '#6db33f' },
      ],
    },
    {
      title: 'Banco de Dados',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', color: '#4479a1' },
      ],
    },
    {
      title: 'Ferramentas',
      icon: '🔧',
      skills: [
        { name: 'Git', color: '#f05032' },
        { name: 'Docker', color: '#2496ed' },
      ],
    },
  ];
}
