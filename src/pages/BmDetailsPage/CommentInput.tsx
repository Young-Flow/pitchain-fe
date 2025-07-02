import { useRef } from 'react';
import { Avatar } from '@components/legacy/ui';

export default function CommentInput() {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function autoResize() {
    if (!inputRef.current) return;
    const el = inputRef.current;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }

  return (
    <div className="flex w-full flex-col items-stretch">
      <div className="flex items-start justify-between">
        <Avatar src="https://avatar.iran.liara.run/public" size={48} />
        <textarea
          ref={inputRef}
          className="ml-[16px] flex-1 resize-none overflow-hidden rounded-[8px] border-[1px] p-[10px]"
          onInput={autoResize}
        ></textarea>
      </div>
      <div className="flex items-center justify-end pt-[8px]">
        <button className="rounded-[8px] bg-[#9CDBA6] px-[36px] py-[10px] text-center text-white">게시</button>
      </div>
    </div>
  );
}
