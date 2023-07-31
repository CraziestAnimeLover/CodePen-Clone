import React, { useState } from 'react'
import {Box , styled} from '@mui/material'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
// heading #Css
const Heading = styled(Box)`
background: #1d1e22;
display:flex;
padding: 9px 12px;
`
const Head = styled(Box)`
display:flex;
background:#060606;
color:whitesmoke;
justify-content:space-between;
`
const Container = styled(Box)`
flex-grow:1;
flex-basic:0;
flex-direction:coloum;
padding: 0 8px 8px;
height:65vh;

`

const Editor = ({language,icon,color,value,onChange}) => {
  //  for open close #useState
  const[open,setopen] = useState(true)

  const handleChange = (editor,data,value) => {
    onChange(value)
  }


    return (
   
    <>
    <Container style={open ? null:{flexGrow:0}}>
       <Head>
        <Heading>
          <Box 
               component='span'
               style={{
                background:color,
                height:20,
                width:20,
                display:'flex',
                placeContent:'center',
                borderRadius:5,
                marginRight:5,
                paddingBottom:2,
               }}
               >
               {icon}
               </Box>
            {language}
        </Heading>
        <Box>
        <SettingsApplicationsIcon 
         style={{alignSelf:"center"}}/>
        <ExpandMoreIcon 
        style={{alignSelf:"center"}}/>
        <CloseFullscreenRoundedIcon 
        fontSize='small'
        style={{alignSelf:"center"}}
          onClick={()=> setopen(prevState => !prevState)}
        />
        </Box>
       </Head>
       <ControlledEditor className='controlled-editor'
         value={value}
         onBeforeChange={handleChange}
       options={{
        mode: 'xml',
        theme: 'material',
        lineNumbers: true
      }}
       />
    </Container>
    </>
  )
}

export default Editor
