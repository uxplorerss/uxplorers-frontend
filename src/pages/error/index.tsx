import { useNavigate } from '@tanstack/react-router';
import { Typography } from '../../common/components';
import MainButton from '../../common/components/MainButton';

function ErrorComponent() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px 25px' }}>
      <Typography variant="body1">
        <p>이 경로와 시간대의 버스를 검색하지 못했어요.</p>
        <p>조건을 바꾸어 다시 검색해 주세요.</p>
        <p>
          배차에 대해 추가로 궁금한 점이 있다면 <br></br> 출발 터미널에 문의해
          주세요.
        </p>
      </Typography>
      <MainButton
        cx={{ marginTop: '50px' }}
        children="다시 예매하기"
        onClick={() => {
          navigate({ to: '/booking' });
        }}
      />
    </div>
  );
}

export default ErrorComponent;
