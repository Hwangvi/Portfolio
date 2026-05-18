import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce App',
      description: 'Tienda online con carrito, pasarela de pago y panel de administración.',
      image: 'assets/projects/ecommerce.png',
      techs: [
        { name: 'Angular', color: '#dd0031' },
        { name: 'Spring Boot', color: '#6db33f' },
        { name: 'PostgreSQL', color: '#336791' }
      ],
      github: '[github.com](https://github.com/tuusuario/ecommerce)',
      demo: '[ecommerce.tudominio.com](https://ecommerce.tudominio.com)'
    },
    {
      title: 'Task Manager',
      description: 'App de gestión de tareas con drag & drop, etiquetas y calendario.',
      image: 'assets/projects/tasks.png',
      techs: [
        { name: 'React', color: '#61dafb' },
        { name: 'Node.js', color: '#339933' },
        { name: 'MongoDB', color: '#47a248' }
      ],
      github: '[github.com](https://github.com/tuusuario/tasks)',
      demo: '[tasks.tudominio.com](https://tasks.tudominio.com)'
    },
  ];
}
