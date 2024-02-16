import styled from 'styled-components/native'
import * as Animatable from 'react-native-animatable';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled(Animatable.View)`
    align-items: center;
    width: 180px;
    height: 250px;
    border-radius: 10px;
    background-color: ${({theme}: any) => theme.COLORS.PRIMARY_800};
`;

export const Image = styled(Animatable.Image)`
    margin-top: -50;
    width: 150px;
    height: 150px;
`;

export const Title = styled.Text`
    color: ${({theme}: any) => theme.COLORS.TEXT_DB};
    font-family: ${({theme}: any) => theme.FONTS.MEDIUM};
    font-size: ${RFPercentage(2)}px;
    margin-top: ${RFPercentage(5)}px;
`;

export const Foundation = styled.Text`
    color: ${({theme}: any) => theme.COLORS.TEXT_DB};
    font-family: ${({theme}: any) => theme.FONTS.REGULAR};
    font-size: 14px;
    margin-top: 16px;
`;
