import styled from "styled-components";
export const Container = styled.View`
  flex: 1;
  background-color: white;

`;
export const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
export const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;