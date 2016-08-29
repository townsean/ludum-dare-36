
export class App {
  
  configureRouter(config, router) {
    this.router = router;

    config.title = 'Ancient Ciphers';
    config.map([
      { route: '',              name: 'home',          moduleId: 'pages/home',          title: 'Home',          nav: true },
      { route: 'about',         name: 'about',         moduleId: 'pages/about',         title: 'About',         nav: true },
      { route: 'contact',       name: 'contact',       moduleId: 'pages/contact',       title: 'Contact',       nav: true }, 
      { route: 'caesar-cipher', name: 'caesar-cipher', moduleId: 'pages/caesar-cipher', title: 'Caesar Cipher' }, 
      { route: 'cipher-disk',   name: 'cipher-disk',   moduleId: 'pages/cipher-disk',   title: 'Cipher Cipher' }  
    ]);
  }
}
