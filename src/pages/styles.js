import styled from 'styled-components';

export const Layout = styled.div``;

export const Header = styled.div`
  align-content: center;
  align-self: center;
  background-color: #049;
  border-bottom: 1px solid #ddd;
  color: white;
  display: flex;
  font-weight: bold;
  padding: 0.7rem 1rem;
  
  h1 { 
    align-content: center;
    align-self: center;
    flex: 1;
  }
`;

export const NameDriver = styled.div`
  div {
    align-content: center;
    align-self: center;
    margin-left: auto;
  }
  
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 46px 1fr 35px;
  background-color: #ddd;
`;

export const Sidebar = styled.div`
margin-top: 2px;
  border-right: 1px solid #ddd;
  background-color: transparent;
`;

export const Footer = styled.div`
  border-top: 1px solid #ddd;
  background-color: #060;
  h4 {
    color: white;
    float: right;
    font-size: 10px;
    font-weight: bold;
    padding: .5rem .5rem 0 0;
  }
`;

export const Body = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`;

export const Content = styled.div`
  overflow-y: scroll;
`;
