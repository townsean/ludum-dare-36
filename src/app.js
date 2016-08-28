
export class App {
  
  configureRouter(config, router) {
    this.router = router;

    config.title = 'Ancient Ciphers';
    config.map([
      { route: '',         name: 'home',     moduleId: 'pages/home',    title: 'Home',    nav: true },
      { route: 'about',    name: 'about',    moduleId: 'pages/about',   title: 'About',   nav: true },
      { route: 'contact',  name: 'contact',  moduleId: 'pages/contact', title: 'Contact', nav: true } 
    ]);
  }
}
