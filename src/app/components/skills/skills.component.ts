import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories = [
      {
        title: 'Frontend', icon: 'bi-window',
        skills: [
          { name: 'Angular',     icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/angular/DD0031)' },
          { name: 'React',       icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/react/61DAFB)' },
          { name: 'TypeScript',  icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/typescript/3178C6)' },
          { name: 'HTML5',       icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/html5/E34F26)' },
          { name: 'CSS3',        icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/css3/1572B6)' },
          { name: 'Bootstrap',   icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/bootstrap/7952B3)' },
        ]
      },
      {
        title: 'Backend', icon: 'bi-server',
        skills: [
          { name: 'Spring Boot', icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/springboot/6DB33F)' },
          { name: 'Node.js',     icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/nodedotjs/339933)' },
          { name: 'Java',        icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/openjdk/ED8B00)' },
          { name: 'Python',      icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/python/3776AB)' },
          { name: 'PostgreSQL',  icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/postgresql/336791)' },
          { name: 'MongoDB',     icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/mongodb/47A248)' },
        ]
      },
      {
        title: 'Herramientas', icon: 'bi-tools',
        skills: [
          { name: 'Git',        icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/git/F05032)' },
          { name: 'Docker',     icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/docker/2496ED)' },
          { name: 'Kubernetes', icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/kubernetes/326CE5)' },
          { name: 'GitHub',     icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/github/181717)' },
          { name: 'Figma',      icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/figma/F24E1E)' },
          { name: 'VS Code',    icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/visualstudiocode/007ACC)' },
        ]
      },
      {
        title: 'Aprendiendo', icon: 'bi-mortarboard',
        skills: [
          { name: 'Rust',      icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/rust/000000)' },
          { name: 'Go',        icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/go/00ADD8)' },
          { name: 'AWS',       icon: '[cdn.simpleicons.org](https://cdn.simpleicons.org/amazonaws/FF9900)' },
        ]
      }
    ];
}
