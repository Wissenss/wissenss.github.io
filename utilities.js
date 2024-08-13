async function getRepoInfo(repo, owner="wissenss")
{
    url = `https://api.github.com/repos/${owner}/${repo}`;

    const response = await fetch(url);

    if (!response.ok)
    {
        throw new Error(response.Error);
    }

    return await response.json();
}

async function getRepoCommits(repo, owner="wissenss")
{
    url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    const response = await fetch(url);

    if (!response.ok)
    {
        throw new Error(response.Error)
    }

    return await response.json();
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