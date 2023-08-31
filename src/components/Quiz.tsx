

import { Container, FormControl, FormLabel, Typography ,RadioGroup,FormControlLabel,Radio




,Button

} from '@mui/material'
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveResult } from '../redux/slices'

const Quiz = () => {
  const [result, setresult] = useState<string[]>([])
  const [count, setcount] = useState<number>(0)
  
  const [ans, setans] = useState<string>("")

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // console.log({ans})
  // console.log(result)

const {loading, words,result:resultFromState , error}  = useSelector((state:{root:StateType})=>state.root)


const nexthandlerinResult =():void=>{
  setresult(prev=>[...prev,ans])
  setcount(prev=>prev+1)
  setans("")
}
useEffect(() => {
  if(count+1 > words.length) navigate("/result")
 dispatch( saveResult(result))
}, [result])

  return (
    <Container sx={{padding:"1rem"}}  >
    <Typography m={"2rem 0"}>Quiz</Typography>
    <Typography variant='h3'> {count + 1} -{words[count]?.words}</Typography>
    <FormControl>
    <FormLabel     sx={{mt:"2rem", mb:"1rem"}}>Meaning</FormLabel>

    <RadioGroup value={ans} onChange={(e)=>setans(e.target.value)}>
      { words[count]?.options.map((i,idx)=>(
    <FormControlLabel  key={idx} value={i} control={<Radio />} label={i} />

      ))}
    </RadioGroup>
    </FormControl>

<Button
sx={{margin:"3rem 0"}}
variant="contained"
onClick={()=>nexthandlerinResult()}
disabled={ans===""}
>{count===7?"Submit":"Next"}</Button>

  </Container>
  )
}

export default Quiz