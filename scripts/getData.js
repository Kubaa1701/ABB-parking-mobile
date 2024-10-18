export default async function getData(endpoint) {
  const url =
    'https://parking-api-f6gjdyg6hpa9hjh0.polandcentral-01.azurewebsites.net/' +
    endpoint;
  try {
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return;
  }
}
