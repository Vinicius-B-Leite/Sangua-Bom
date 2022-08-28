import styled from "styled-components/native";

export const ConteinerCardPublicacao = styled.View`
    width: 100%;
    margin-top: 5%;
    background-color: #f7f7f5;
`

    export const ConteinerUsuario = styled.View`
        flex-direction: row;
        align-items: center;
        padding-left: 5%;
        padding-bottom: 3%;
    `
        export const NomeUsuario = styled.Text`
            padding-left: 2%;
        `


    interface CartazProps{
        altura: number
    }
    export const Cartaz = styled.Image<CartazProps>`
        width: 100%;
        height: ${props => props.altura}px;
        resizeMode: cover;
    `

    export const ConteinerInfo = styled.View`
        padding: 5%;
        
    `