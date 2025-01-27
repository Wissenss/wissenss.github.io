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
        
        <section class="flex-section">
            <div>
                <h2>What</h2>
                <p>
                    This is my personal discord bot, where I occasionally hop in to add new features that I find interesting. At the time of writing, the bot can:

                    <ul>
                        <li>Play music</li>
                        <li>Solve chess puzzles</li>
                        <li>Control my PC</li>
                        <li>Unlock achivements</li>
                        <li>Query twitter</li>
                    </ul>

                    If you'd like to try it out, feel free to <a href="https://discord.com/invite/gwPrgp5fxM">join the discord server here</a>. I don't maintain a public invite link for adding the bot to your own server, but if you're interested, send me a DM on Discord, and I'll be happy to provide one!
                </p>
            </div>

            <div class="commit-history-container">
                <commit-history :history="commits" :count="commitsCount" :days="daysOfUpdates"></commit-history>
            </div>
        </section>

        <section>
            <h2>Disclaimer</h2>
            <p>
                The Naota project is developed for academic popuses only. We do not hold ourselves responsable for the improper use of this code base. 
                Please review the <a href="https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy">Discord Developer Policy</a> 
                and <a href="https://developers.google.com/youtube/terms/api-services-terms-of-service">Youtube API Terms of Service</a> before moving forward.
            </p>
        </section>
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

            getRepoCommits(this.name, 12).then(data => {
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