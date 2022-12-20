export default async function getRepos() {
  const username = 'Dank-del';
  // const token = 'YOUR_PERSONAL_ACCESS_TOKEN';

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100&type=public`
    // {
    //   headers: {
    //     Authorization: `bearer ${token}`,
    //   },
    // }
  );

  if (response.ok) {
    const repos = await response.json();
    const pinnedRepos = repos.filter((repo) => repo.topics.includes('pf'));
    return pinnedRepos;
  } else {
    throw new Error('Failed to fetch repositories');
  }
}
