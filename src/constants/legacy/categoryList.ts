import * as categoryIcon from '@assets/category';
import { Category } from 'src/types/legacy/category';

const categoryList: Category[] = [
  {
    key: 'all',
    name: '전체',
    icon: categoryIcon.All,
    group: [
      {
        key: '',
        name: '',
      },
    ],
  },
  {
    key: '테크/디지털',
    name: '디지털',
    icon: categoryIcon.Digital,
    group: [
      {
        key: 'AI 및 머신러닝',
        name: 'AI 및 머신러닝',
      },
      {
        key: 'SaaS',
        name: 'SaaS',
      },
      {
        key: '메타버스 콘텐츠',
        name: '메타버스 콘텐츠',
      },
      {
        key: '앱 개발 관련 콘텐츠',
        name: '앱 개발 관련 콘텐츠',
      },
      {
        key: '블록체인 및 Web3',
        name: '블록체인 및 Web3',
      },
      {
        key: 'IT 하드웨어 및 디바이스',
        name: 'IT 하드웨어 및 디바이스',
      },
    ],
  },
  {
    key: '커머스/플랫폼/커뮤니티',
    name: '플랫폼',
    icon: categoryIcon.OnlinePlatform,
    group: [
      {
        key: '전자상거래',
        name: '전자상거래',
      },
      {
        key: '중고거래 및 리셀',
        name: '중고거래 및 리셀',
      },
      {
        key: '지역커뮤니티 및 네트워크',
        name: '지역커뮤니티 및 네트워크',
      },
      {
        key: '리뷰 및 큐레이션 기반',
        name: '리뷰 및 큐레이션 기반',
      },
    ],
  },
  {
    key: '요식업',
    name: '요식업',
    icon: categoryIcon.Restaraunt,
    group: [
      {
        key: '로컬푸드',
        name: '로컬푸드',
      },
      {
        key: '해외음식',
        name: '해외음식',
      },
      {
        key: '간편식/밀키트',
        name: '간편식/밀키트',
      },
      {
        key: '헬스케어/다이어트',
        name: '헬스케어/다이어트',
      },
      {
        key: '디저트/간식',
        name: '디저트/간식',
      },
      {
        key: '소스/조미료',
        name: '소스/조미료',
      },
      {
        key: '주류',
        name: '주류',
      },
      {
        key: '음료/커피',
        name: '음료/커피',
      },
    ],
  },
  {
    key: '스포츠/아웃도어',
    name: '스포츠',
    icon: categoryIcon.Digital,
    group: [
      {
        key: 'e-스포츠 관련 제품',
        name: 'e-스포츠 관련 제품',
      },
      {
        key: '캠핑',
        name: '캠핑',
      },
      {
        key: '홈트레이닝',
        name: '홈트레이닝',
      },
      {
        key: '등산',
        name: '등산',
      },
      {
        key: '골프',
        name: '골프',
      },
      {
        key: '러닝',
        name: '러닝',
      },
      {
        key: '낚시',
        name: '낚시',
      },
      {
        key: '테니스',
        name: '테니스',
      },
      {
        key: '자전거',
        name: '자전거',
      },
      {
        key: '스포츠 레슨/트레이닝',
        name: '스포츠 레슨/트레이닝',
      },
    ],
  },
  {
    key: '엔터테인먼트',
    name: '엔터테인먼트',
    icon: categoryIcon.Entertainment,
    group: [
      {
        key: '오락 콘텐츠',
        name: '오락 콘텐츠',
      },
      {
        key: '보드게임 및 TPRG',
        name: '보드게임 및 TPRG',
      },
      {
        key: '온라인 게임',
        name: '온라인 게임',
      },
      {
        key: '디지털 게임',
        name: '디지털 게임',
      },
      {
        key: '웹툰 및 스토리 콘텐츠',
        name: '웹툰 및 스토리 콘텐츠',
      },
      {
        key: '대중 공연',
        name: '대중 공연',
      },
      {
        key: '음악',
        name: '음악',
      },
      {
        key: '영상',
        name: '영상',
      },
    ],
  },
  {
    key: '인사/법률/비지니스',
    name: '기업 솔루션',
    icon: categoryIcon.CorpSolution,
    group: [
      {
        key: 'HR 솔루션',
        name: 'HR 솔루션',
      },
      {
        key: '노무 관리',
        name: '노무 관리',
      },
      {
        key: '리걸 테크',
        name: '리걸 테크',
      },
      {
        key: '컨설팅',
        name: '컨설팅',
      },
      {
        key: '리모트 워크',
        name: '리모트 워크',
      },
      {
        key: '홍보&마케팅',
        name: '홍보&마케팅',
      },
    ],
  },
  {
    key: '제조/하드웨어',
    name: '제조',
    icon: categoryIcon.Manufacture,
    group: [
      {
        key: 'highTech',
        name: '고기술(반도체,항공우주)',
      },
      {
        key: 'midHighTech',
        name: '중고기술(자동차, 산업 기계)',
      },
      {
        key: 'midLowTech',
        name: '중저기술(일반 기계,소비재)',
      },
      {
        key: 'lowTech',
        name: '저기술(전통 공예품, 소규모 생산품)',
      },
    ],
  },
  {
    key: '라이프 스타일 및 여가',
    name: '리빙',
    icon: categoryIcon.LifeStyle,
    group: [
      {
        key: '레저 및 관광',
        name: '레저 및 관광',
      },
      {
        key: '뷰티 및 웰니스',
        name: '뷰티 및 웰니스',
      },
      {
        key: '홈&리빙(가구, 인테리어, 주방용품)',
        name: '홈&리빙(가구, 인테리어, 주방용품)',
      },
      {
        key: '패션 및 의류',
        name: '패션 및 의류',
      },
      {
        key: '반려동물',
        name: '반려동물',
      },
      {
        key: '숙박 및 임대업',
        name: '숙박 및 임대업',
      },
    ],
  },
  {
    key: '과학 전문기술',
    name: '전문기술',
    icon: categoryIcon.Science,
    group: [
      {
        key: '생명과학 및 바이오테크',
        name: '생명과학 및 바이오테크',
      },
      {
        key: '에너지 및 환경 기술',
        name: '에너지 및 환경 기술',
      },
      {
        key: 'R&D 및 실험 서비스',
        name: 'R&D 및 실험 서비스',
      },
      {
        key: 'ESG',
        name: 'ESG',
      },
    ],
  },
  {
    key: '창작 및 문화',
    name: '문화',
    icon: categoryIcon.ArtAndCulture,
    group: [
      {
        key: '산업디자인',
        name: '산업디자인',
      },
      {
        key: '미술 및 공예',
        name: '미술 및 공예',
      },
      {
        key: '출판 및 문학',
        name: '출판 및 문학',
      },
      {
        key: '공연 예술 및 전시회',
        name: '공연 예술 및 전시회',
      },
      {
        key: '문화유산',
        name: '문화유산',
      },
    ],
  },
  {
    key: '교통/모빌리티',
    name: '교통',
    icon: categoryIcon.Mobility,
    group: [
      {
        key: '차량 공유',
        name: '차량 공유',
      },
      {
        key: '전기차 관련 기술',
        name: '전기차 관련 기술',
      },
      {
        key: '드론',
        name: '드론',
      },
    ],
  },
  {
    key: '금융/보험/핀테크',
    name: '핀테크',
    icon: categoryIcon.HealthCare,
    group: [
      {
        key: '디지털 금융 및 지급 결제',
        name: '디지털 금융 및 지급 결제',
      },
      {
        key: '재무관리',
        name: '재무관리',
      },
      {
        key: '인슈어테크',
        name: '인슈어테크',
      },
    ],
  },
];

export default categoryList;
