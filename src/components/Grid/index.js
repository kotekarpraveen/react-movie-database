import React from 'react';
import { withTheme } from 'styled-components';

//Styles
import {Wrapper,Content} from './Grid.styles';


const  Grid = ({header,children})=>(

    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>

);


export default Grid