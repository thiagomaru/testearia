import styled from 'styled-components';

export const ButtonContainer = styled.div`

    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    color: #000000;

    display: flex;
    height: 30px;
    width: 120px;
    aLign-content: flex-start;
    justify-content: center;
    font-size: 24px;

    margin: 20px;

    &: hover {
        background-color: #FAFAFA40;
        cursor: pointer;
    }
`