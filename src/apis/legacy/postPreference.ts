export default async function postPreference(preferences: string[]): Promise<void> {
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  await fetch(`${key}/preferences`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(preferences),
  });
}
