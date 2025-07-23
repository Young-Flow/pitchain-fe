import dayjs from 'dayjs';

import { Comment } from 'src/types/legacy/comment';
import { InvestmentInfo } from 'src/types/legacy/investmentInfo';
import { useQuery } from '@tanstack/react-query';
import getInvestmentInfo from '@apis/legacy/getInvestmentInfo';
import getComment from '@apis/legacy/getComment';

interface usePitchInfoProps {
  pitchId: number;
}

export default function usePitchInfo({ pitchId }: usePitchInfoProps): {
  investmentInfo: InvestmentInfo;
  comments: Comment[];
  isLoading: boolean;
} {
  const { data: investmentInfo, isLoading: isLoadingInvestmentInfo } = useQuery<InvestmentInfo>({
    queryKey: ['investmentInfo', pitchId],
    queryFn: async () => await getInvestmentInfo(pitchId),
    staleTime: 1000 * 10,
  });

  const { data: comments, isLoading: isLoadingComments } = useQuery<Comment[]>({
    queryKey: ['comments', pitchId],
    queryFn: async () => await getComment(pitchId),
    staleTime: 1000 * 10,
  });

  const isLoading = isLoadingInvestmentInfo && isLoadingComments;

  return {
    investmentInfo: investmentInfo ?? SKELETON_INVESTMENT,
    comments: comments ?? [],
    isLoading,
  };
}

const SKELETON_INVESTMENT: InvestmentInfo = {
  investmentSum: 0,
  achievementRate: 0,
  investorCount: 0,
  minimumInvestment: 0,
  maximumInvestment: 0,
  valuationCap: 0,
  pricePerShare: 0,
  maxIssuedShare: 0,
  investmentGoal: 0,
  deadline: dayjs(),
};
