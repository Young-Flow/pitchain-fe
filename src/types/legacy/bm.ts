import { Dayjs } from 'dayjs';

export interface BM {
  bmId: number;
  title: string;
  subTitle: string;
  company: string;
  mainCategory: string;
  subCategory: string[];
  logoImg: string;
  description: string;
  descriptionImg: string;
  address: string;
  createdAt: Dayjs;
  shortPitchURL: string;
  ptImgResList: Array<{
    id: number;
    src: string;
  }>;
}
