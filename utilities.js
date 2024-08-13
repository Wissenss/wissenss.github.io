async function get_repository_info(repo, owner = "Wissenss")
{
  url = `https://api.github.com/repos/${owner}/${repo}`;

  const response = await fetch(url);

  if (!response.ok)
  {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();

  return json;
}