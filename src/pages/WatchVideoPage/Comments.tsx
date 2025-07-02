import { useRef, useEffect } from 'react';
import { Comment as CommentIcon } from '@assets/icons';

import { Comment } from 'src/types/comment';

export default function Comments({ comments }: { comments: Comment[] }) {
  const indexRef = useRef<number>(0);
  const commentContainerRef = useRef<HTMLUListElement>(null);

  const commentList = comments.map(({ id: commentId, content }) => (
    <li className="absolute line-clamp-4 text-[14px] opacity-0" key={commentId}>
      {content}
    </li>
  ));

  useEffect(() => {
    if (commentList.length === 0) return;

    const hideCommentAnimation = ['transition-all', 'translate-y-1', 'duration-800', 'opacity-0', 'ease-in-out'];
    const showCommentAnimation = ['transition-opacity', 'opacity-100', 'duration-300'];

    function cycleComments(commentList: HTMLCollection) {
      if (commentList) {
        const currentIndex = indexRef.current;
        const nextIndex = (currentIndex + 1) % commentList.length;

        const currCommentClass = commentList[indexRef.current].classList;
        const nextCommentClass = commentList[nextIndex].classList;

        currCommentClass.remove(...showCommentAnimation);
        currCommentClass.add(...hideCommentAnimation);

        nextCommentClass.remove(...hideCommentAnimation);
        nextCommentClass.add(...showCommentAnimation);

        indexRef.current = nextIndex;
      }
    }

    let interval = null;
    const commentContainer = commentContainerRef.current;

    if (commentContainer) {
      const commentList = commentContainerRef.current.children;
      commentList[0].classList.add('opacity-100');
      interval = setInterval(() => {
        cycleComments(commentList);
      }, 8000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [commentList]);

  return (
    <div className="my-3 flex h-[122px] w-full flex-col items-stretch">
      <div className="font-Paperlogy flex w-full items-center pb-1 font-bold text-[#cccccc]">
        <CommentIcon className="mr-1 h-6 w-6 fill-[#cccccc]" />
        comments
      </div>
      <ul ref={commentContainerRef} id="comments-container" className="relative">
        {commentList}
      </ul>
    </div>
  );
}
