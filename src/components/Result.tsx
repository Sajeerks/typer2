// import { Container, FormControl, FormLabel, Typography } from '@mui/material'
import { Container, List, Stack, Typography,Button ,ListItem} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearState } from '../redux/slices'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const Result = () => {
  const {loading, words:wordsFromstate,result:resultFromState , error}  = useSelector((state:{root:StateType})=>state.root)
   const dispatch = useDispatch()
   const navigate  = useNavigate()
// const words= [
//   {
//     meaning:"ass"
//   },{
//     meaning:"ssss"
//   }

// ]

const calcualteTheAnser=():number=>{
  let mark =0
  resultFromState.map((el, idx)=>{
    if(el === wordsFromstate[idx].meaning){
      mark++
    }
  })
return mark
}

const correctAns =  calcualteTheAnser()
const percentage = (correctAns/wordsFromstate.length) * 100

const resethandler =()=>{
  dispatch(clearState())
  navigate("/")
}
  return (
      <Container maxWidth="sm">
        <Typography variant='h3' color={"primary"} m={"2rem 0"}>Result </Typography>
        <Typography  m={"1rem"} variant='h6'>
          You got {correctAns} right out of {wordsFromstate?.length}


        </Typography>
<Stack direction={"row"} justifyContent={"space-evenly"}>
<List>
<Typography  m={"1rem 0"} variant="h5">YOur ans</Typography>

  {resultFromState.map((i,idx)=>(
    <ListItem key={idx}>
      {idx+1} -- {i} 
    </ListItem>
  ))}

</List>

<List>
<Typography  m={"1rem 0"} variant="h5">corect ans</Typography>
  {wordsFromstate.map((i,idx)=>(
    <ListItem key={idx}>
      {wordsFromstate[idx].meaning} 
    </ListItem>
  ))}

</List>



     
</Stack>
<Typography m={"1rem"} variant='h5' color={percentage>50?"green":"red"}> {percentage>50?"Pass":"Fail"}</Typography>

  <Button onClick={resethandler} sx={{margin:'1rem'}}>
 Reset
  </Button>
  
      </Container>

  )
}

export default Result