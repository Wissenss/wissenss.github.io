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