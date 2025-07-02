import { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ShortPitch } from 'src/types/shortpitch';
import { useQuery } from '@tanstack/react-query';
import { getShortPitchInfo } from '@api/getShortPitch';
import getDollar from '@api/getDollar';

export default function PaymentPage() {
  const { BMId: bmId } = useParams<{ BMId: string }>();
  const { data: companyInfo } = useQuery<ShortPitch>({
    queryKey: ['shortPitchInfo', Number(bmId)],
    queryFn: async () => await getShortPitchInfo(Number(bmId)),
    staleTime: 1000 * 10,
    placeholderData: {
      title: '',
      avatar: '',
      bmId: 0,
      videoUrl: '',
      thumbnailImg: '',
      company: '회사명',
      views: 0,
      mainCategory: '',
      subCategory: [''],
    },
  });

  const title = companyInfo?.company ?? '회사명';
  const logo = companyInfo?.avatar ?? '';

  const [inputValue, setInputValue] = useState<number>();

  const { data: currency } = useQuery<number>({
    queryKey: ['wonInDollar'],
    queryFn: async () => await getDollar(1000),
  });

  const { data: wonInDollar } = useQuery<number>({
    queryKey: ['wonInDollar', inputValue],
    queryFn: async () => {
      if (!inputValue || inputValue === 0) return 0;
      return await getDollar(inputValue);
    },
  });

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if (Object.is(Number(newValue), NaN)) {
      if (!inputValue) setInputValue(0);
      return;
    }
    setInputValue(Number(e.target.value));
  }

  const navigate = useNavigate();

  function handlePayClick() {
    const result = confirm('결제가 완료되었습니다');
    if (result) navigate('/main');
  }

  return (
    <div className="flex w-full flex-1 flex-col px-[232px] pt-14">
      <div className="flex flex-col items-stretch self-stretch px-[160px] pt-16">
        <div className="flex w-[656px] items-center border-b-[1px] pb-4">
          <div className="flex h-[50px] w-[50px] items-center justify-center">
            <img src={logo} className="h-[72px] w-[136px] object-contain" alt="로고" />
          </div>
          <div className="font-Paperlogy ml-3 line-clamp-1 max-w-[600px] text-[32px] leading-[50px] font-medium tracking-[0px] overflow-ellipsis">
            {title}
          </div>
        </div>
        <div className="flex flex-col pt-[48px]">
          <h3 className="text-[24px]">투자 금액</h3>

          <div className="py-5">
            <label className="flex w-[630px] items-center rounded-[8px] border-2 border-[#9CDBA6] px-2 py-1">
              <input
                value={inputValue}
                onChange={handleInput}
                className="h-[40px] w-auto outline-none"
                placeholder="결제 금액을 입력하세요!"
              />
            </label>
            <div className="flex flex-col gap-1 pt-3">
              <div className="h-[20px] text-[20px] leading-[20px] text-[#666]">
                {!inputValue || inputValue === 0
                  ? `현재 환율: 1000원 = ${currency?.toLocaleString()} USD`
                  : `결제 금액: ${inputValue.toLocaleString()} 원 = ${wonInDollar?.toLocaleString()} USD`}
              </div>
              <div className="text-[14px] text-[#aaa]">환율은 23:30(KST)마다 갱신됩니다</div>
            </div>
            <div className="flex w-full flex-row-reverse">
              <button onClick={handlePayClick} className="bg-secondary rounded-[8px] px-3 py-2 text-white">
                결제하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
