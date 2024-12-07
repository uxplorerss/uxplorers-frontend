import { useNavigate } from '@tanstack/react-router';
import { Typography } from '../../common/components';
import MainButton from '../../common/components/MainButton';
import { css, Theme } from '@emotion/react';

function ErrorComponent({
  needRebooking,
  direction,
}: {
  needRebooking: boolean;
  direction?: 'in' | 'out';
}) {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px 25px' }}>
      <Typography
        variant="body1"
        cx={(theme) => css`
          color: ${theme.colors.gray[4]};
        `}
      >
        {needRebooking ? (
          <p>이 경로나 날짜의 버스를 검색하지 못했어요.</p>
        ) : (
          <p>시간, 조건에 맞는 버스를 검색하지 못했어요.</p>
        )}
        <p>시간이나 조건을 바꾸어 다시 검색해 주세요.</p>
        <p>
          배차에 대해 추가로 궁금한 점이 있다면 <br></br> 출발 터미널에 문의해
          주세요.
        </p>
      </Typography>

      {direction === 'in' && (
        <MainButton
          cx={{ marginTop: '50px' }}
          css={(theme: Theme) => css`
            background-color: ${theme.colors.primary.base};
          `}
          children="가는 길만 편도 예매하기"
          onClick={() => {
            navigate({ to: '/booking/bookingConfirmation' });
          }}
        />
      )}

      {needRebooking && (
        <MainButton
          css={{ marginTop: '50px' }}
          children="처음부터 다시 예매하기"
          onClick={() => {
            navigate({ to: '/booking' });
          }}
        />
      )}
    </div>
  );
}

export default ErrorComponent;
