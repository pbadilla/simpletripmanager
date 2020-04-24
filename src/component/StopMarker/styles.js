import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #000;
    border-radius: 100%;
    border: 2px solid #fff;
    height: 18px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    width: 18px;
    &:hover {
        z-index: 1;
    }
`;
