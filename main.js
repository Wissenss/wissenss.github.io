const app = Vue.createApp({
  data() { 
    return {}
  },
  template:
  /*html*/
  `
  <nav>
    <a class="bi-list nav-burger-button"></a>

    <div class="options">
      <div class="left">
        <a href="#">Leonardo Merino</a>
      </div>

      <div class="right">
        <a href="#about-me">About me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <router-link to="/naota">Naota</router-link>
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