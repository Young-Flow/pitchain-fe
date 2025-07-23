import getBmDetail from '@apis/legacy/getBmDetail';
import getInvestmentInfo from '@apis/legacy/getInvestmentInfo';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { BM } from 'src/types/legacy/bm';
import { InvestmentInfo } from 'src/types/legacy/investmentInfo';

export default function useBMDetail(bmId: number) {
  const { data: bmInfo } = useQuery<BM>({
    queryFn: async () => await getBmDetail(bmId),
    queryKey: ['bmInfo', 'detail', bmId],
    staleTime: 1000 * 10,
  });

  const { data: investmentInfo } = useQuery<InvestmentInfo>({
    queryFn: async () => await getInvestmentInfo(bmId),
    queryKey: ['bmInfo', 'investmentInfo', bmId],
    staleTime: 1000 * 10,
  });

  return {
    bmInfo: bmInfo ?? DUMMY_BM,
    investmentInfo: investmentInfo ?? DUMMY_INVESTMENTINFO,
  };
}

const DUMMY_BM: BM = {
  bmId: 121,
  title: '쾌적한 지하철 탑승을 위한 스케이트보드 사업',
  subTitle: '진짜 빠릅니다',
  company: '신속 메트로 슈즈',
  mainCategory: 'mobility',
  subCategory: ['mobility'],
  logoImg: 'abcd',
  description:
    '쾌적한 지하철 탑승을 위한 스케이트보드 사업은 도시 내 이동을 보다 효율적이고 편리하게 만들어주는 혁신적인 서비스입니다. 출퇴근 시간대의 혼잡한 지하철은 많은 이들에게 스트레스를 주는 문제로 자리 잡았습니다. 이에, 가볍고 휴대성이 뛰어난 스케이트보드를 활용해 지하철역과 최종 목적지 간의 이동을 빠르고 간편하게 할 수 있도록 돕는 것이 본 사업의 핵심입니다. 스케이트보드는 접이식으로 설계되어 지하철 내에서도 공간을 적게 차지하며, 필요할 때 쉽게 펼쳐 사용할 수 있습니다. 또한, 친환경 소재로 제작되어 지속 가능한 도시 이동 수단으로 주목받고 있습니다. 이러한 스케이트보드와 더불어 사용자의 이동 데이터를 기반으로 최적의 경로를 추천하는 앱을 제공해 효율성을 극대화합니다. 사업의 목표는 도심 내 이동 시간을 단축하고, 대중교통 이용의 편의성을 향상시켜 더 많은 사람들이 쾌적한 환경에서 지하철을 이용할 수 있도록 돕는 것입니다.',
  descriptionImg: 'https://picsum.photos/200/300',
  address: '',
  createdAt: dayjs(),
  shortPitchURL: '',
  ptImgResList: [],
};

const DUMMY_INVESTMENTINFO: InvestmentInfo = {
  investmentSum: 500000,
  achievementRate: 75,
  investorCount: 120,
  minimumInvestment: 10000,
  maximumInvestment: 100000,
  valuationCap: 2000000,
  pricePerShare: 500,
  maxIssuedShare: 4000,
  investmentGoal: 1000000,
  deadline: dayjs(),
};
