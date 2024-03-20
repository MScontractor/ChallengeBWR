const defaultUrl = 'http://localhost:3001/api/';

export const getRequest = (endpoint, onComplete) =>
  fetch(`${defaultUrl}${endpoint}`, {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
  .then((response) => 
    response.json()
  )
  .then((data) => {
    onComplete(data)
  })
  .catch((error) => console.error(`Error fetching ${endpoint}:`, error));

export const putRequest = (endpoint, onComplete, body) =>
  fetch(`${defaultUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
  .then(() => {
    onComplete()
  })
  .catch((error) => console.error(`Error updating ${endpoint}:`, error));