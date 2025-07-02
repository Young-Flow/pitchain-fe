import { useQuery } from '@tanstack/react-query';
import getComment from '@api/getComment';
import { Comment as CommentType } from 'src/types/comment';
import { Avatar } from '@components/legacy/ui';

interface CommentProps {
  avatar: string;
  name: string;
  time: string;
  content: string;
}

function Comment({ name, time, content }: CommentProps) {
  return (
    <div className="flex flex-col items-stretch rounded-[8px] border-[1px] border-[#D8D8D8] p-[16px]">
      <div className="flex">
        <div className="flex h-[48px] w-[48px] items-center justify-center">
          <Avatar src="https://avatar.iran.liara.run/public" className="object-contain" size={48} />
        </div>
        <div className="flex h-[48px] flex-col justify-between p-[4px] pl-[16px]">
          <div className="font-Paperlogy text-[16px]">{name}</div>
          <div className="text-[14px] text-[#666]">{time}</div>
        </div>
      </div>
      <div className="leading[20px] pt-[12px] text-[14px]">{content}</div>
    </div>
  );
}

export default function CommentList() {
  const { data: Comments } = useQuery<CommentType[]>({
    queryFn: async () => await getComment(1),
    queryKey: ['comments', 1],
    staleTime: 1000 * 10,
  });
  return (
    <div className="mt-[36px] mb-[72px] flex w-full flex-col items-stretch gap-[28px]">
      {Comments?.map((comment) => (
        <Comment
          key={comment.id}
          avatar={comment.writer.avatar}
          name={comment.writer.name}
          time={comment.createdAt.format('M월 D일')}
          content={comment.content}
        />
      ))}
    </div>
  );
}
