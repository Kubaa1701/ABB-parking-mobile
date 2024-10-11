export default async function getReservationStatus() {
  const response = fetch(
    'http://localhost:5000/user/post/receiveReservationDate',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '1',
        day: '13',
        month: '12',
      }),
    }
  );
  const data = (await response).json();
  return data;
}
