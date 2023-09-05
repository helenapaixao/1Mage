import styled from 'styled-components/native'
import { View } from 'react-native'

export const Rectangle = styled.View`
  background-color: #bfdbfe;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
`
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
