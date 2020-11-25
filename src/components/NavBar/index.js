import React from 'react';

import {Products, Developers, Company } from '../Content';
import { DropdownOption, DropdownProvider, DropdownRoot } from '../Dropdown';
import { Container, DropdownStyles } from './styles';

function NavBar() {
  return(
  <DropdownProvider>
    <DropdownStyles>
    <Container>
      <ul>
        <li>
          <DropdownOption 
          name="Produtos" 
          content={Products} 
          backgroudHeight={286} 
          />
          </li>
          <li>
          <DropdownOption 
          name="Desenvolvedores" 
          content={Developers}
          backgroudHeight={167}
          />
          </li>
          <li>
          <DropdownOption 
          name="Empresa" 
          content={Company} 
          backgroudHeight={215}
          />
          </li>
      </ul>
    </Container>

     <DropdownRoot />
    </DropdownStyles>
  </DropdownProvider>
  ); 
}

export default NavBar;