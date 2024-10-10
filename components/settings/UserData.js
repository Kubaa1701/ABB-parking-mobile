export default async function UserData(id) {
  const url = "http://localhost:5000/user/post/receiveUserId";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  const data = await response.json();
  return data;
}
