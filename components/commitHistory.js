app.component('commit-history', {
  props: {
    count: {
      type: Number,
      required: true
    },
    history: {
      type: Array,
      required: true
    },
    days: {
      type: Number,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="commit-history">
    <div class="top-bar">
      <h3>
          <span class="text-highlight">  {{ days }} days of development</span>
          <span class="text-highlight">  {{ count}} total commits</span>
      </h3>
    </div>

    <div class="list">
      <div v-for="commit in history" class="commit">
        <a class="sha" :href="commit.url">{{ commit.sha.slice(0, 8) }}</a>
        <span class="message">{{ commit.commit.message }}</span>
      </div>    
    </div>
  </div>
  `
});