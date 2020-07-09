import styled from 'styled-components';

const ContainerHome= styled.div `

    display:flex;
    flex-direction: column;
    align-items:center;
    height:100%;  
`;

const Img= styled.img`
    padding:0;
    margin:0;
    flex: 1 0 auto;
    width:98vw;
    
`;

const Header= styled.div`
    flex: 0 0 auto;
    
`;

const Footer= styled.div`
    flex: 1 0 auto;
`;

export { ContainerHome , Img , Footer , Header};