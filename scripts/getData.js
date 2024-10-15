export default async function getData(endpoint) {
  const url = 'http://localhost:5000/' + endpoint;
  try {
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return;
  }
}
