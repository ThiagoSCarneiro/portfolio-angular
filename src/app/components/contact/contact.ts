import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  openLink(url: string) {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'Thiago_da_Silva.pdf';
    link.download = 'Thiago_da_Silva.pdf';
    link.click();
  }
}
