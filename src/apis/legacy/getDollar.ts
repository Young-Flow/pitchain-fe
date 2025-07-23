export default async function getDollar(won: number): Promise<number> {
  if (won < 1) return 0;
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  const res = await fetch(`${key}/currency?amount=${won}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const result = await res.json().then((res) => Number(res.data.calculatedAmount) as number);
  console.log(result);
  return result;
}
