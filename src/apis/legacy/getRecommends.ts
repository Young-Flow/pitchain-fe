import { ShortPitch } from 'src/types/legacy/shortpitch';
import { ResponseShortPitch } from 'src/types/legacy/responseTypes';

async function getRecommends(): Promise<number[]> {
  const res = await fetch('http://localhost:8000/recommendations/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      memberId: 5,
      num_recommendations: 3,
    }),
  });
  const body = await res.json().then((data) => {
    return data.bmId_recommendations as number[];
  });

  return body;
}

export default async function getTrueRecommendations(): Promise<ShortPitch[]> {
  const bmList: number[] = await getRecommends();
  const listStr = bmList.map((item) => `bmIds=${item}`).join('&');
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  const res = await fetch(`${key}/sps/recommendation?${listStr}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json().then((body) => body.data as ResponseShortPitch[]);
  const result: ShortPitch[] = data.map((resItem) => ({
    bmId: resItem.bmId,
    videoUrl: resItem.spURL,
    thumbnailImg: resItem.thumbnailImgURL,
    title: resItem.name,
    company: resItem.company,
    avatar: resItem.logoImgURL,
    views: resItem.views,
    mainCategory: resItem.mainCategory,
    subCategory: resItem.subCategories,
  }));
  return result;
}
