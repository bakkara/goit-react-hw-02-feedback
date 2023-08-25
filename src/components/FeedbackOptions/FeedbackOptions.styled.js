import styled from 'styled-components';

export const WrapperButton = styled.div`
    display: flex;
    gap: 10px;
`

export const Button = styled.button`
    box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
    border-radius: 5px;;
    border: 1px solid #dcd8d8;
    cursor: pointer;
    text-transform: capitalize;

&:hover {
    background-color: orange; 
}
`