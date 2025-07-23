import { GetBMDetailResponse } from 'src/types/legacy/responseTypes';
import dayjs from 'dayjs';
import { BM } from 'src/types/legacy/bm';

export default async function getBmDetail(bmId: number): Promise<BM> {
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  const res = await fetch(`${key}/bms/${bmId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json().then((body) => body.data as GetBMDetailResponse);
  const result: BM = {
    bmId: data.id,
    title: data.name,
    subTitle: data.intro,
    company: data.company,
    mainCategory: data.mainCategory,
    subCategory: data.subCategories,
    logoImg: data.logoImgURL,
    description: data.description,
    descriptionImg: data.descImgURL,
    address: data.address,
    createdAt: dayjs(),
    shortPitchURL: data.spURL,
    ptImgResList: data.ptImgResList.map(({ serialNum, imgURL }) => ({
      id: serialNum,
      src: imgURL,
    })),
  };
  return result;
}
