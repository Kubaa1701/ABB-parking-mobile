export default async function LogOut() {
  const url = "http://localhost:5000/user/oauth/getLogoutLink";
  try {
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return;
  }
}
