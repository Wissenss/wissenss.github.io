app.component("link-button", {
  props: {
    link: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: ""
    }
  },
  template: 
  /*html*/
  `
  <a class="link-button" :href="link" target="_blank">
    {{ message }}
  </a>
  `
});