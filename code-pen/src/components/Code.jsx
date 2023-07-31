import React from 'react'
import { useContext } from 'react'
import Editor from './Editor'
import {Box} from '@mui/material'
import styled from '@emotion/styled'
import { DataContext } from './context/DataProvider'

const Conatiner =styled(Box)`
display:flex;
background-color:#060606;
width:100%;
object-fit:contain;
`

const Code = () => {
   
  const {html,setHtml,css,setCss,js,setJs,} =useContext(DataContext);


  return (
    <>
      <Conatiner>
      <Editor language="HTML" icon="/" color="#FF3C41" value={html} onChange={setHtml}/>
      <Editor language="CSS" icon="*" color="#0EBEFF"  value={css} onChange={setCss}/>
      <Editor language="JavaScript" icon="( )" color="#FCD000"  value={js} onChange={setJs}/>
      </Conatiner>
    </>
  )
}

export default Code
