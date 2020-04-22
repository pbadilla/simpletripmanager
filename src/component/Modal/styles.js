import styled from 'styled-components';

const baseColor = '#398B93';
const borderRadius = '10px';
const imageBig = '100px';
const imageSmall = '60px';
const padding = '10px';

export const ContentStop = styled.div`
  margin-top: 2rem;
    table {
    display: block;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 115%;
    overflow: auto;
    width: auto;
    
    th {
      background-color: rgb(112, 196, 105);
      color: white;
      font-weight: normal;
      padding: 20px 30px;
      text-align: center;
    }
    td {
      background-color: rgb(238, 238, 238);
      color: rgb(111, 111, 111);
      padding: 20px 30px;
      text-align: center;
    }
  }
`;


