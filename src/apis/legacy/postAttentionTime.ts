export default async function postAttentionTime(bmId: number, attentionTime: number): Promise<void> {
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  await fetch(`${key}/histories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ bmId, viewTime: attentionTime * 1000 }),
  });
}
