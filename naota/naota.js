const naotaComponent = {
    template:
    /*html*/
    `
    <header>
        <h1>Naota</h1>
        <h2>{{ description }}</h2>

        <p v-for="commit in commits">{{ commit.commit.message }}</p>
    </header>
    `,
    data(){
        return {
            description : "",
            commits : []
        }
    },
    created(){
        console.log("created called")
        this.loadRepoInfo();
    },
    methods:{
        loadRepoInfo() {
            getRepoInfo("naota").then(data => {
                this.description = data.description
            });

            getRepoCommits("naota").then(data => {
                this.commits = data
            });
        }
    }
}

app.component('naota-page', naotaComponent);