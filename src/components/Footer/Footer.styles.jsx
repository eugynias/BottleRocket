import styled from 'styled-components';

const FooterContainer= styled.div `
    position:fixed;
    bottom: 0;
    margin: 0 auto;
    padding: 1em 1em;
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color: #2A2A2A; 
    height:50px;
    width:100%;
`;
const Logo= styled.img `
    height: 2rem;
    width: 2rem;

`;
const Logo2= styled.img `
    height:2rem;
    width:2rem;
    
`;
const ContainerLog= styled.div `
    color: #FFFFFF;
    font-size:10px;
    font-family: 'Roboto' ;
`;





export { Logo, Logo2, FooterContainer ,ContainerLog};