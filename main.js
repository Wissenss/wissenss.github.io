const DEBUG = true;
let LIGHT_MODE = false; 

const app = Vue.createApp({
  data() { 
    return {}
  },
  template:
  /*html*/
  `
  <nav>
    <a onclick="toggleNav();" class="bi-list nav-burger-button"></a>

    <div class="options hidden">
      <div class="left">
        <router-link onclick="hideNav(); scrollToSelector('.main-text');" to="/">Leonardo Merino</router-link>
      </div>

      <div class="right">
        <router-link onclick="hideNav(); scrollToSelector('#about-me');" to="/">About me</router-link>
        <!-- <router-link onclick="hideNav(); scrollToSelector('#experience')" to="/">Experience</router-link> -->
        <router-link onclick="hideNav(); scrollToSelector('#projects')" to="/">Projects</router-link>
        <router-link v-if="$route.path === '/'" onclick="hideNav(); scrollToSelector('.naota-page')" to="/naota">Naota</router-link>
        <a onclick="previewCV();">Resume</a>
        <a class="theme-button bi-moon-fill" onclick="toggleTheme();"></a>
      </div>
    </div>
  </nav>

  <main>
    <router-view></router-view>
  </main>
  
  <footer>
    <div class="footer-name">
      <span>© 2024 Leonardo Merino. All rights reserved.</span>
    </div>

    <div class="footer-links">
      <a class="bi-github" href="https://github.com/Wissenss" target="_blank"></a>
      <a class="bi-linkedin" href="https://www.linkedin.com/in/leonardo-merino-056b4b222/" target="_blank"></a>
      <a class="bi-stack-overflow" href="https://stackoverflow.com/users/16513233/leonardo-merino" target="_blank"></a>
    </div>
  </footer>
  `
})
