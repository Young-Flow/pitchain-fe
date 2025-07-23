import { ResponseInvestmentInfo } from 'src/types/legacy/responseTypes';
import { InvestmentInfo } from 'src/types/legacy/investmentInfo';
import dayjs from 'dayjs';

export default async function getInvestmentInfo(bmId: number): Promise<InvestmentInfo> {
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  const res = await fetch(`${key}/bms/${bmId}/investment`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json().then((body) => body.data as ResponseInvestmentInfo);
  const result: InvestmentInfo = {
    pricePerShare: data.pricePerShare,
    maxIssuedShare: data.maxIssuedShare,
    valuationCap: data.valuationCap,
    investmentGoal: data.goalInvestment,
    minimumInvestment: data.minimumAmount,
    maximumInvestment: data.maximumAmount,
    investorCount: data.investorNum,
    investmentSum: data.raisedAmount,
    achievementRate: data.achievementRate,
    deadline: dayjs(data.deadline),
  };
  return result;
}
