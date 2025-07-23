import { ResponseShortPitch } from 'src/types/legacy/responseTypes';
import { ShortPitch } from 'src/types/legacy/shortpitch';

export async function getShortPitchList(): Promise<ShortPitch[]> {
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  const res = await fetch(`${key}/sps`, {
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

export async function getShortPitchListByCategory(category: string): Promise<ShortPitch[]> {
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  const res = await fetch(`${key}/sps/category?mainCategoryInKorean=${category}`, {
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

export async function getShortPitchInfo(bmId: number): Promise<ShortPitch> {
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  const res = await fetch(`${key}/sps/${bmId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json().then((data) => {
    return data.data as ResponseShortPitch;
  });
  const result: ShortPitch = {
    bmId: data.bmId,
    videoUrl: data.spURL,
    thumbnailImg: data.thumbnailImgURL,
    title: data.name,
    company: data.company,
    avatar: data.logoImgURL,
    views: data.views,
    mainCategory: data.mainCategory,
    subCategory: data.subCategories,
  };
  return result;
}
