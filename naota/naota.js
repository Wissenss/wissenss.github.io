const naotaComponent = {
    template:
    /*html*/
    `
    <div class="naota-page">
        <header>
            <div class="container">
                <div class="title">
                    <h1>Naota</h1>
                    <h2 class="text-highlight">{{ description }}</h2>
                    <div class="links-bar">
                        <link-button link="https://github.com/Wissenss/Naota" message="Look at the source"></link-button>
                        <link-button link="https://discord.gg/gwPrgp5fxM" message="Try it out"></link-button>
                    </div>
                </div>
            </div>
        </header>    

        <commit-history :history="commits" :count="commitsCount" :days="daysOfUpdates"></commit-history>
    </div>
    `,
    data(){
        return {
            name : "naota",
            description : "",
            updatedAt : new Date(),
            createdAt : new Date(),
            commitsCount : 0,
            commits : []
        }
    },
    created(){
        this.loadRepoInfo();
    },
    methods:{
        async loadRepoInfo() {

            DEBUG && console.log("called: loadRepoInfo...");

            getRepoInfo(this.name).then(data => {
                this.description = data.description;
                this.updatedAt = new Date(data.updated_at);
                this.createdAt = new Date(data.created_at);

                DEBUG && console.log("repo general info:");
                DEBUG && console.log(data);
            });

            getRepoCommits(this.name).then(data => {
                this.commits = data;

                DEBUG && console.log("repo commits:");
                DEBUG && console.log(data);
            });

            getRepoCommitCount(this.name).then(data => {
                this.commitsCount = data;

                DEBUG && console.log("repo commits count:");
                DEBUG && console.log(data);
            });
        }
    },
    computed: {
        daysOfUpdates() {
            // here delta is on milliseconds
            let delta = (this.updatedAt.getTime() - this.createdAt.getTime()) / 1000;

            // here is on days
            delta /= (60 * 60 * 24);

            return Math.round(delta);
        }
    }
}

app.component('naota-page', naotaComponent);