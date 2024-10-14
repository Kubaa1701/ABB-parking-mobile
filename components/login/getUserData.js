export default async function getLoginLink() {
  const url = 'http://localhost:5000/user/oauth/getUserData';
  try {
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return;
  }
}
