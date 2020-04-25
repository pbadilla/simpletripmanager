import styled from 'styled-components';
import colors from '../../styles/colors';


const handleColorType = status => {
  
  switch (status) {
    case "ongoing":
      return colors.green02;
    case "scheduled":
      return colors.yellow01;
    case "cancelled":
      return colors.red;
    case "finalized":
      return colors.violet01;
    default:
      return colors.grey;
  }
};

export const Wrapper = styled.div`
  z-index: 40;
  display: flex;
  div {
    align-items: center;
    justify-content: flex-end;
  }
`;

export const WrapperIcon = styled.span `
  svg {
    fill: ${({ status }) => handleColorType(status)};
  }
`;



