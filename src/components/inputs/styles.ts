import styled from 'styled-components/native'

export const Container = styled.TextInput`
    width: 100%;
    height: 54px;
    padding: 0 16px;
    border: 1px solid;
    background-color: #fff;
    color: ${({theme}:any) => theme.COLORS.TEXT_LB};
`;


