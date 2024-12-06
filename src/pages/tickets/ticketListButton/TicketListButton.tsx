import { Link } from '@tanstack/react-router';
import { Button, Typography } from '../../../common/components';
import { css } from '@emotion/react';
import { convertAMPMHHMM } from '../../../utils/convertDate';
import { buttonCSS } from './index.styles';
import { Bus } from '../../../types';
import InfoIcon from '../../../assets/InfoIcon.svg?react';
import { Tooltip } from 'react-tooltip';

function ButtonComponent({ bus }: { bus: Bus }) {
  return (
    <Link to="/booking/seats">
      <Button cx={(theme) => buttonCSS(theme)}>
        <Typography variant="title3">
          {convertAMPMHHMM(new Date(bus.startDate))}
        </Typography>
        <div className="charge-time__container">
          <div className="tags">
            <Typography
              variant="body3"
              cx={(theme) => css`
                color: ${theme.colors.primary.base};
              `}
              backgroundColor="primary"
            >
              무정차
            </Typography>
            <Typography
              variant="body4"
              cx={(theme) => css`
                color: ${theme.colors.gray[0]};
              `}
              as="span"
            >
              {bus.company}
            </Typography>
          </div>
          <Typography variant="title3" as="div">
            {bus.fee.adults.toLocaleString()} 원
          </Typography>
          <Typography
            variant="body4"
            cx={(theme) => css`
              color: ${theme.colors.gray[4]};
            `}
          >
            {bus.eta} 예상
          </Typography>
        </div>
        <div className="busInfo">
          <Typography variant="title3" as="div">
            {`${bus.seats.length || 28}석`}
          </Typography>
          <Typography
            variant="body4"
            cx={(theme) => css`
              color: ${theme.colors.primary.base};
            `}
          >
            {bus.class}
          </Typography>
          <InfoIcon
            data-tooltip-id="bus-ticket-tooltip"
            data-tooltip-content="좌석수는 부정확할 수 있습니다. 터미널에서 확인해 주세요."
            css={css`
              margin-top: 7px;
            `}
          />
          <Tooltip
            id="bus-ticket-tooltip"
            style={{ backgroundColor: 'gray' }}
          />
        </div>
      </Button>
    </Link>
  );
}

export default ButtonComponent;
