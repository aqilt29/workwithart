import React from 'react'
import styled from 'styled-components'
import device from '../../styles/device'

const MobileNavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
`;

const NavBar = () => {
  return (
    <>
      <MobileNavBarContainer>
        <h1>Logo</h1>
        <p>Hamburger</p>
      </MobileNavBarContainer>
    </>
  )
};

export default NavBar;
