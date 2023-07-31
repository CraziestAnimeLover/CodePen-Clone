import React from 'react'
import {Toolbar, AppBar , styled }from '@mui/material';

const Container = styled(AppBar)`
      background : #060606;
      height:9vh;

`

const Header = () => {

  return (
    <>
          
      <Container position='static'>
        <Toolbar>
      
          <h1>Code-Pen</h1>
          
        </Toolbar>
        
      </Container>
    
    </>
  )
}

export default Header