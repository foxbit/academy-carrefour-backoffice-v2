import styled from "styled-components"

export type Props = {
    size: 'small' | 'large';
}

const Texto = styled.p<Props>`
    font-size: ${({size}) => size == 'small' ? 8 : 16}px;
`;

export default Texto;