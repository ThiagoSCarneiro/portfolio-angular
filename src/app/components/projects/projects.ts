import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'PDV Educacional (Projeto Integrador)',
      description: 'Projeto Integrador do curso Técnico. Sistema de Ponto de Venda com as principais operações comerciais, incluindo um módulo de ajuda com intuito educacional sobre cada operação do sistema.',
      tags: ['Java', 'Swing', 'MySQL', 'Desktop'],
      emoji: '💻',
    },
    {
      title: 'EduControle (Projeto Integrador)',
      description: 'Sistema complementar ao PDV Educacional. Adiciona funcionalidades de controle e gestão, como gerenciamento de usuários e suas permissões, controle de produtos e lotes, gestão de recebimentos e geração de relatórios.',
      tags: ['Laravel', 'React', 'MySQL', 'API REST'],
      emoji: '⚙️',
    },
    {
      title: 'EduEstoque (Projeto Integrador)',
      description: 'O EduEstoque é um App mobile complementar ao EduControle e ao PDV, com foco no recebimento dos lotes usando scanner de QR Code, além da visualização dos produtos a chegar no dia.',
      tags: ['React Native', 'Mobile', 'Laravel', 'API REST'],
      emoji: '📱',
    },
    {
      title: 'VendaCerta (Projeto Pessoal - Em Construção)',
      description: 'App mobile de PDV, baseado nos sistemas do projeto integrador. Focado em auxiliar vendedores ambulantes a controlar seus produtos e gerar relatórios que ajudam a analisar os dias de melhor venda.',
      tags: ['Angular', 'Spring Boot', 'Java', 'API REST'],
      emoji: '📈',
      githubUrl: 'https://github.com/ThiagoSCarneiro/VendaCerta',
    },
  ];
}
