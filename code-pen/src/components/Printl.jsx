import React, { useEffect, useState } from 'react'
import {Box } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from './context/DataProvider'

const Printl = () => {
    const [src,setSrc]= useState('');
    const {html,css,js} = useContext(DataContext)

    const srcCode= `
    <html>
       <body>${html}</body>
       <style>${css}</style>
       <script>${js}</script>
    </html>`

    useEffect (() => {
        setTimeout(() => {
            setSrc(srcCode);
        },1000)
    }, [html,css,js])


  return (
    <>
      <Box>
       <iframe
       srcDoc= {src}
       title='Output'
       sandbox='allow-script'
       frameBorder={0}
       width="100%"
       height="100%"
       />
      </Box>
    </>
  )
}

export default Printl
