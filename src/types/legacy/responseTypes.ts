export interface ResponseShortPitch {
  bmId: number;
  spURL: string;
  thumbnailImgURL: string;
  views: number;
  name: string;
  logoImgURL: string;
  mainCategory: string;
  subCategories: string[];
  company: string;
  isLiked: boolean;
  likeCnt: number;
}

export interface ResponseComment {
  commentId: number;
  writerId: number;
  writerName: string;
  writerProfileImg: string;
  content: string;
  delYN: boolean;
  createdAt: string;
  updatedAt: string;
}

export type GetShortPitchListResponse = Promise<ResponseShortPitch[]>;

export interface GetBMDetailResponse {
  id: 0;
  name: string;
  company: string;
  intro: string;
  mainCategory: string;
  subCategories: string[];
  logoImgURL: string;
  description: string;
  descImgURL: string;
  address: string;
  createdAt: string;
  longPitchUrl: string;
  spURL: string;
  isLiked: true;
  likeCnt: 0;
  ptImgResList: [
    {
      serialNum: 0;
      imgURL: string;
    },
  ];
}

export interface GetCommentsResponse extends ResponseComment {
  replyComments: ResponseComment[];
}

export interface ResponseInvestmentInfo {
  raisedAmount: number;
  achievementRate: number;
  investorNum: number;
  minimumAmount: number;
  maximumAmount: number;
  valuationCap: number;
  pricePerShare: number;
  maxIssuedShare: number;
  goalInvestment: number;
  deadline: string;
}
