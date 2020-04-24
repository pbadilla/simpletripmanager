import styled from 'styled-components';
import colors from '../../styles/colors';

export const BoxCard = styled.div`
  background-color: ${({ textColor }) => handleColorType(textColor)};
  border-bottom: 1px solid black;
  border: ${props => props.isActive ? '1px dotted red' : ''};
  color: ${colors.black};
  font-size: .8rem;
  max-height: 250px;
  opacity: ${props => props.isActive ? '1' : '.5'};
  padding: 10px;
  text-align: left;
  h4 {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  :hover {
    cursor: pointer;
    opacity: 1;
  }

`;

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

export const Status = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px 0;
    div {
      flex-grow: 2;
      text-transform: uppercase;

    }
    svg {
      color: ${ colors.grey};
    }
  `;