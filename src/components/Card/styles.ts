import styled from 'styled-components/native'

export const CardContainer = styled.View`
  position: fixed;
  top: 21px;
  left: 0;
  width: 344px;
  height: 167px;
  margin-left: 16px;
`

export const CardImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 16.21px;
  left: 13px;
  width: 130px;
  height: 50px;
  background-color: #3eb489;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: #fff;
`

export const IdeaText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 20px;
  margin-left: 17px;
  margin-top: 17px;
  font-weight: 600;
  color: #000;
`

export const FlexContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextWrapper = styled.Text`
  color: #000;
  font-family: 'Poppins_600SemiBold';
  font-size: 20px;
  font-weight: 600;
`

export const Span = styled.Text`
  color: #3eb489;
  font-size: 20px;
  font-weight: 600;
`
