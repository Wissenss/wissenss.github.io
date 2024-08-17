app.component('project-display', {
  props: {
    filter: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    stack: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    }, 
    image: {
      types: String,
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
  <a class="project-display" :href="url" target="_blank" v-if="visible">
    <div class="image-container">
      <img :src="image"/>
    </div>
    <div class="text-container">
      <h4>{{ name }}</h4>
      <p>{{ description }}</p>
      <span v-for="(tech, index) in stack" :key="index" class="stack-tag">{{ tech }}</span>
    </div>
  </a>
  `,
  computed: {
    visible(){
      if (this.filter == "all")
      {
        return true;
      }

      return this.tags.indexOf(this.filter) > -1;
    }
  }
})