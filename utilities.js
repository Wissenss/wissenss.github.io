async function getRepoInfo(repo, owner="wissenss")
{
    url = `https://api.github.com/repos/${owner}/${repo}`;

    const response = await fetch(url);

    if (!response.ok)
    {
        throw new Error(response.Error);
    }

    const data = await response.json()

    return data;
}

async function getRepoCommits(repo, lastN=6, owner="wissenss")
{
    const url = new URL(`https://api.github.com/repos/${owner}/${repo}/commits`);

    url.searchParams.append('per_page', lastN);

    const response = await fetch(url.href);

    if (!response.ok)
    {
        throw new Error(response.Error)
    }

    const data = await response.json(); 

    return data;
}

async function getRepoCommitCount(repo, owner="wissenss")
{
    const url = new URL(`https://api.github.com/repos/${owner}/${repo}/commits`);

    url.searchParams.append('per_page', 1);

    const response = await fetch(url.href);

    if (!response.ok)
    {
        throw new Error(response.Error)
    }

    let rawCount = await response.headers.get('link').match(/"next".*page=([0-9]+).*"last"/)[1]

    return parseInt(rawCount);
}

function toggleNav()
{
    const navOptions = document.querySelector("nav .options");
    navOptions.classList.toggle("hidden");
}

function hideNav()
{
    const navOptions = document.querySelector("nav .options");
    navOptions.classList.add("hidden");
}

function scrollToSelector(selector)
{
  const element = document.querySelector(selector);

  element.scrollIntoView({
    behavior: 'smooth'
  });
}

function setLightTheme()
{
    const documentStyle = document.documentElement.style;

    // backgournd colors
    documentStyle.setProperty("--background-main", "var(--background-main-light)");
    documentStyle.setProperty("--background-secondary", "var(--background-secondary-light)");

    // text colors
    documentStyle.setProperty("--text-main", "var(--text-main-light)");
    documentStyle.setProperty("--text-secondary", "var(--text-secondary-light)");

    // highlights
    documentStyle.setProperty("--highlight-main", "var(--highlight-main-light)");
    documentStyle.setProperty("--highlight-main-transparent", "var(--highlight-main-transparent-light)");

    // home page exclusive
    documentStyle.setProperty("--home-filter", "var(--home-filter-light)");
    documentStyle.setProperty("--home-color-filter", "var(--home-color-filter-light)");
}

function setDarkTheme()
{
    const documentStyle = document.documentElement.style;

    // backgournd colors
    documentStyle.setProperty("--background-main", "var(--background-darker)");
    documentStyle.setProperty("--background-secondary", "var(--background-dark)");

    // text colors
    documentStyle.setProperty("--text-main", "var(--text-main-dark)");
    documentStyle.setProperty("--text-secondary", "var(--text-secondary-dark)");

    // highlights
    documentStyle.setProperty("--highlight-main", "var(--highlight-main-dark)");
    documentStyle.setProperty("--highlight-main-transparent", "var(--highlight-main-transparent-dark)");

    // home page exclusive
    documentStyle.setProperty("--home-filter", "var(--home-filter-dark)");
    documentStyle.setProperty("--home-color-filter", "var(--home-color-filter-dark)");
}

function setTheme(ligthMode)
{
    const button = document.querySelector(".theme-button");

    button.classList.remove("bi-moon-fill");
    button.classList.remove("bi-sun-fill");

    if (ligthMode)
    {
        setLightTheme();

        button.classList.add("bi-sun-fill");
    }
    else 
    {
        setDarkTheme();

        button.classList.add("bi-moon-fill");
    }

    localStorage.setItem("ligthMode", ligthMode);
}

function toggleTheme()
{
    LIGHT_MODE = !LIGHT_MODE;

    setTheme(LIGHT_MODE);
}