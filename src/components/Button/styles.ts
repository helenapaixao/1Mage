import { TouchableOpacity, Text } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  background-color: #000113;
  padding: 10px, 0px, 10px, 0px;
  border-radius: 5px;
  height: 40px;
  width: 311px;
`

export const ButtonText = styled(Text)`
  color: white;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`
