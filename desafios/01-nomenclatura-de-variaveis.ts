const userCategories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserCategoryByGithubUsername(request, response) {
  const githubUsername = String(request.query.username)
  if (!githubUsername) {
    return response.status(400).json({
      message: `Please provide an username to search on GitHub API`
    })
  }

  const userDataResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
  if (userDataResponse.status === 404) {
    return response.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const userData = await userDataResponse.json()
  const userCategoriesSortedByFollowers= userCategories.sort((categoryA, categoryB) =>  categoryB.followers - categoryA.followers); 
  const userCategory = userCategoriesSortedByFollowers.find(category => userData.followers > category.followers)

  const result = {
    githubUsername,
    category: userCategory.title
  }

  return result
}

getUserCategoryByGithubUsername({ query: {
  username: 'josepholiveira'
}}, {})