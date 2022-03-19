export interface Level {
  home: Home;
  about: About;
  contact: Contact;
}
export interface Home {
  title: 'Home';
  subtitle: ' Welcome Home!';
  content: 'Some home content';
  image: 'assets/caribbean.jpeg';
}
export interface About {
  title: 'About';
  subtitle: ' About Us';
  content: 'Some content about us';
  image: 'assets/future.jpeg';
}
export interface Contact {
  title: 'Contact';
  subtitle: ' Contact Us';
  content: 'How to contact us';
  image: 'assets/unstoppable.jpeg';
}
