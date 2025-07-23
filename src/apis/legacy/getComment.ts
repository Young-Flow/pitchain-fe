import { GetCommentsResponse } from 'src/types/legacy/responseTypes';
import { Comment } from 'src/types/legacy/comment';
import dayjs from 'dayjs';

export default async function getComment(bmId: number): Promise<Comment[]> {
  const key = import.meta.env.VITE_API_END_POINT;
  const accessToken = localStorage.getItem('accessToken');
  const res = await fetch(`${key}/bms/${bmId}/comments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json().then((res) => res.data as GetCommentsResponse[]);
  const result: Comment[] = data.map(
    ({ commentId, writerId, writerName, writerProfileImg, content, createdAt, updatedAt }) => ({
      id: commentId,
      writer: {
        id: writerId,
        name: writerName,
        avatar: writerProfileImg,
      },
      content: content,
      createdAt: dayjs(createdAt),
      updatedAt: dayjs(updatedAt),
    }),
  );
  return result;
}
