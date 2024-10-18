export default async function sendData(endpoint, userData) {
  const url =
    'https://parking-api-f6gjdyg6hpa9hjh0.polandcentral-01.azurewebsites.net/' +
    endpoint;
  try {
    const response = fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = (await response).json();
    return data;
  } catch (error) {
    console.error(error.message);
    return;
  }
}
