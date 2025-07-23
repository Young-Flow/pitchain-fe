const key = import.meta.env.VITE_API_END_POINT;

export default async function getAuth() {
  const res = await fetch(`${key}/dev-token?id=1`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
  });
  const { data } = await res.json();
  await localStorage.setItem('accessToken', data);
}
