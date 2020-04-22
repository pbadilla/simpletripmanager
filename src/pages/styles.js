import styled from 'styled-components';


export const Layout = styled.div`
  .container {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30px 1fr 30px;
  }

  .header {
    border-bottom: 1px solid lightgrey;
  }

  .sidebar {
    border-right: 1px solid lightgrey;
  }

  .footer {
    border-top: 1px solid lightgrey;
    background-color: #060;
    h4 {
      color: white;
      float: right;
      font-size: 10px;
      font-weight: bold;
      padding: .5rem .5rem 0 0;
    }
  }

  .body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-top: 25px;
    overflow: hidden;
  }

  .content {
    overflow-y: scroll;
  }

  p {
    max-width: 600px;
  }
`;
