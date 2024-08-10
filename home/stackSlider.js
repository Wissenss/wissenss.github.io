app.component('stack-slider', {
  props:{},
  template: 
  /*html*/
  `
  <div class="stack-slider">
    <stack-slider-slide></stack-slider-slide>
    <stack-slider-slide></stack-slider-slide>
  </div>
  `
})

app.component('stack-slider-slide', {
  template:
  /*html*/
  `
  <div class="stack-slider-slide">
      <span class="devicon-github-plain"></span>
      <span class="devicon-git-plain"></span>

      <span class="devicon-postman-plain"></span>

      <span class="devicon-html5-plain"></span>
      <span class="devicon-css3-plain"></span>
      <span class="devicon-javascript-plain"></span>
      <span class="devicon-vuejs-plain"></span>
      <span class="devicon-jquery-plain"></span>

      <span class="devicon-python-plain"></span>

      <span class="devicon-cplusplus-plain"></span>
      <span class="devicon-csharp-plain"></span>
      <span class="devicon-dotnetcore-plain"></span>
      <!-- <span class="devicon-nuget-original"></span> -->
      <span class="devicon-visualstudio-plain"></span>

      <span class="devicon-sqlite-plain"></span>

      <span class="devicon-godot-plain"></span>

      <span class="devicon-slack-plain"></span>
      <span class="devicon-sourcetree-original"></span>
      <span class="devicon-jira-plain"></span>
      <span class="devicon-confluence-plain"></span>
  </div>
  `
})
