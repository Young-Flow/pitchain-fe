import { Dayjs } from 'dayjs';

export interface Comment {
  id: number;
  writer: {
    id: number;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: Dayjs;
  updatedAt: Dayjs;
}
