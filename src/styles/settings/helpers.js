import { css } from 'styled-components';

/* eslint-disable import/prefer-default-export */
export const isVisuallyHidden = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  visibility: hidden;
`;
