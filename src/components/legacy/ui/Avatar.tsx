interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size: number;
}

export default function Avatar({ size, className, ...props }: AvatarProps) {
  return (
    <div className="flex items-center justify-center">
      <img className={`${`w-[${size}px] h-[${size}px]`} object-cover object-center ${className}`} {...props} />
    </div>
  );
}
