export default async function findUser() {
  const url = "http://localhost:5000/user/oauth/findUser";
  try {
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return;
  }
}
