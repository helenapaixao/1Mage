import { TextInput, Text } from 'react-native'
import styled from 'styled-components/native'

interface InputProps {
  isFocused: boolean
  placeholder: string
}

export const InputContainer = styled.View`
  margin-bottom: 20px;
`

export const InputCustom = styled(TextInput)<InputProps>`
  height: 40px;
  width: 311px;
  border-bottom-width: ${(props) => (props.isFocused ? '1px' : '1px')};
  border-bottom-color: ${(props) => (props.isFocused ? '#000113' : '#CBD5E1')};
`
export const Label = styled(Text)`
  font-family: Poppins;
  font-weight: 400;
`
