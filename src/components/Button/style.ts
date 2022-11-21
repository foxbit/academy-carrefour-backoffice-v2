import styled from "styled-components";
import { Colors } from "../../utils/styled";

const BtnBase = styled.div`
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  a:hover {
    text-decoration: none;
  }
`;

const BtnPrimary = styled.div`
  background-color: ${Colors.primary};
  color: white;
  a:hover  {
      background-color: ${Colors.primaryDark};
  }
`;

const BtnSecondary = styled.div`
  background-color: ${Colors.secondary};
  color: white;
  a:hover  {
      background-color: ${Colors.secondaryDark};
  }
`;

export { BtnBase, BtnPrimary, BtnSecondary };
