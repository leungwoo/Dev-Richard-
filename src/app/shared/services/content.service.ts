import { Injectable } from '@angular/core';
import { Level } from 'src/app/Level';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  public pages: Level = {
    home: {
      title: 'Home',
      subtitle: ' Welcome Home!',
      content: 'Some home content',
      image: 'assets/caribbean.jpeg',
    },
    about: {
      title: 'About',
      subtitle: ' About Us',
      content: 'Some content about us',
      image: 'assets/future.jpeg',
    },
    contact: {
      title: 'Contact',
      subtitle: ' Contact Us',
      content: 'How to contact us',
      image: 'assets/unstoppable.jpeg',
    },
  };

  constructor() {}
}
