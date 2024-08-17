const homeComponent = {
  template:
  /*html*/
  `
  <div class="home-page">
    <header>

      <div class="background">
        <img src="./img/headerBackground.gif"/>
        <div class="filter second"></div>
        <div class="filter"></div>
      </div>

      <div class="main-text">
        <div class="title">
          <h1>Leonardo Merino</h1>
          <div class="sub-titles">
            <h2 class="text-highlight">Software Developer</h2>
            <h2 class="text-highlight">Web Developer</h2>
            <h2 class="text-highlight">Fullstack Developer</h2>
            <h2 class="text-highlight">Software Developer</h2>
          </div>
        </div>

        <!--
        <div class="link-tree">
          <ul>
            <link-tree-item icon="bi-github" name="GitHub" url="https://github.com/Wissenss"></link-tree-item>
            <link-tree-item icon="bi-linkedin" name="LinkedIn" url="https://www.linkedin.com/in/leonardo-merino-056b4b222/"></link-tree-item>
            <link-tree-item icon="bi-stack-overflow" name="Stack Overflow" url="https://stackoverflow.com/users/16513233/leonardo-merino"></link-tree-item>
          </ul>
        </div>
        -->

        <div class="pin-points">
          <ul>
            <li>{{yearsOfExperience}}+ years of professional experience</li>
            <li>web and desktop technologies</li>
            <li>commited and efficient</li>
          </ul>
        </div>
      </div>
    </header>

    <section id="about-me">
      <h2>About me</h2>
      <h3>I like to learn and build cool stuff!</h3>
      <p>
        For the last three years I've worked prefessionally building desktop and web applications. During this time I've become experience with fullstack development, source control and relational databases. I'm highly interested in mastering new technologies and make ideas become real.
      </p>

      <stack-slider></stack-slider>

    </section>

    <section id="projects" style="text-align: right;">
      <h2>Projects</h2>
      <h3>Look what I've build!</h3>

      <projects-catalog></projects-catalog>
    </section>

  </div>
  `,
  computed:{
    yearsOfExperience(){
      const firstExperience = new Date(2021, 6, 1, 0);
      const lastExperience = new Date();

      return lastExperience.getFullYear() - firstExperience.getFullYear();
    }
  }
}

app.component('home-page', homeComponent);