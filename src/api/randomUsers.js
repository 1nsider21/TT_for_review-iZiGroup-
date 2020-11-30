const getApiUrl = (numberOfUsers) => `https://randomuser.me/api/?results=${numberOfUsers}`;

export const getRandomUsers = (count) => {
  const apiUrl = getApiUrl(count);
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => data.results);
}

