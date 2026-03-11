import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  highlights = [
    { icon: '🎯', title: 'Foco em Resultados', description: 'Código limpo e performático que entrega valor real ao negócio.' },
    { icon: '🚀', title: 'Tecnologias Modernas', description: 'Entusiasta em inovação, sempre disposto a aprender novas ferramentas e metodologias.' },
    { icon: '🤝', title: 'Colaborativo', description: 'Trabalho em equipe e comunicação clara para projetos de sucesso.' },
    { icon: '📱', title: 'Responsivo', description: 'Interfaces que funcionam perfeitamente em qualquer dispositivo.' },
  ];
}
