import styled, { css } from "styled-components";

export const RowIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Title = styled.p`
  padding: 10px 0;
  cursor: pointer;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
    `}
`;
