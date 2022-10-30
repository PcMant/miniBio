import { Component, OnInit, Renderer2 } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MiniBio';
  github = faGithub;
  twitter = faTwitter;
  web = faGlobe;
  linkedin = faLinkedin;

  isDarkMode = false;
  sol = faSun;
  luna = faMoon;
  
  user = {
    image: '../assets/img/logo0.png',
    username: 'Juan Molina',
    description: "Web Developer && SysAdmin 👨🏻‍💻<br/> 📧 <a href='mailto:info@pcmant.com' style='text-decoration: none !important;'>info@pcmant.com</a>",
    links: [
      {
        link: "https://github.com/PcMant",
        title: "Mis proyectos en GitHub",
        icon: this.github
      },
      {
        link: "https://twitter.com/ipcmant",
        title: "Mi twtter",
        icon: this.twitter
      },
      {
        link: "https://www.pcmant.com/",
        title: "Mi Web",
        icon: this.web
      },
      {
        link: "https://www.linkedin.com/in/juanmol/",
        title: "Mi perfil de Linkedin",
        icon: this.linkedin
      }
  ]
};

  constructor(private renderer: Renderer2){}

  ngOnInit(){
    if (window.matchMedia && window.matchMedia('(preferers-color-scheme: dark)')){
      // dark mode
      console.log("Dark mode ON");
    }
  }

  changeMode(){
    this.isDarkMode = !this.isDarkMode;

    if(this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

}
