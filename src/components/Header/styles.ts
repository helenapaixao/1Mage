import styled from 'styled-components/native'
import { View } from 'react-native'

export const Box = styled.View`
  height: 600px;
  width: 375px;
`

export const Rectangle = styled.View`
  background-color: #bfdbfe;
  height: 600px;
  position: absolute; /* Em vez de "fixed" no React Native, usamos "absolute" */
  top: 0;
  left: 0;
  width: 375px;
`
