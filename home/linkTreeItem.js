app.component('link-tree-item', {
  props: {
    icon: { 
      type: String,
      required: true 
    },
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  template:
  /*html*/
  `
  <li class="link-tree-item">
    <a :href="url" target="_blank">
      <span class="item-icon" :class="icon"></span>
      <!-- <span>{{ name }}</span> -->
    </a>
  </li>
  `
})