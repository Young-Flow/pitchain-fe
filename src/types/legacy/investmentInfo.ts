import { Dayjs } from 'dayjs';

export interface InvestmentInfo {
  pricePerShare: number;
  maxIssuedShare: number;
  valuationCap: number;
  investmentGoal: number;
  minimumInvestment: number;
  maximumInvestment: number;
  investorCount: number;
  investmentSum: number;
  achievementRate: number;
  deadline: Dayjs;
}

export interface OfferInfos
  extends Pick<
    InvestmentInfo,
    'investmentGoal' | 'investmentSum' | 'investorCount' | 'minimumInvestment' | 'deadline'
  > {}
