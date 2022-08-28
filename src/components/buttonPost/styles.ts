import styled from "styled-components/native";

type Props = {
    background: string
}
export const BotaoNovo = styled.View<Props>`
    background-color: ${props => props.background};
    width: 80%;
    height: 120%;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 55%;
`
