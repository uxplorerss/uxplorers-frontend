import styled from "@emotion/styled";

const IconButton = styled.img`
  width: 44px;
  height: 44px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
`

export default IconButton;