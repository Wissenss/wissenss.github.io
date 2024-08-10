app.component('projects-catalog', {
  template:
  /*html*/
  `
  <div class="projects-catalog">
    <div class="catalog-filter">
      <button 
        v-for="(platform, index) in platforms" 
        :key="index" 
        class="catalog-option" 
        :class="selectedPlatform == index ? 'selected' : ''"
        @click="setSelectedPlatform(index);">
        {{ platforms[index] }}
      </button>
    </div>

    <div class="projects">
      <project-display
        v-for="(project, index) in projects" 
        :key="index"
        :name="project.name"
        :tags="project.tags"
        :stack="project.stack"
        :description="project.description"
        :image="project.image"
        :url="project.url"
        :filter="selectedTag">
      </project-display>
    </div>

  </div>
  `,
  data(){
    return {
      platforms: ['web', 'desktop', 'all'],
      selectedPlatform: 1,
      projects: [
        {
          name: 'Naota',
          tags: ['desktop'],
          stack: ['Python', 'YouTubeAPI'],
          description: 'A discord bot that streams YouTube audio',
          image: './img/Naota_1.png',
          url: 'https://github.com/Wissenss/Naota.git'
        },
        {
          name: 'Rooster Games Site',
          tags: ['web'],
          stack: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
          description: 'The website for Rooster Games dev club',
          image: './img/RoosterGamesSite_1.png',
          url: 'https://roostergamesclub.github.io/Site/'
        },
        {
          name: 'VASCII',
          tags: ['desktop'],
          stack: ['Python'],
          description: 'A tool to visualize videos as ASCII art',
          image: './img/VASCII_1.jpg',
          url: 'https://github.com/Wissenss/VASCII/blob/main/main.py'
        },
        {
          name: 'PathFi',
          tags: ['desktop'],
          stack: ['Python'],
          description: 'A pathfinding algorithm visualizer',
          image: './img/PathFi_1.jpg',
          url: 'https://roostergamesclub.github.io/Site/'
        }
      ]
    }
  },
  methods: {
    setSelectedPlatform(index){
      this.selectedPlatform = index;
    }
  },
  computed: {
    selectedTag() {
      return this.platforms[this.selectedPlatform];
    }
  }
})