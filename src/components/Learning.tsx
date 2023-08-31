import React, { useState ,useEffect,useRef} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Container ,Button,Stack, Typography} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { 
  fetChAudio,
  // tanslateser,
   translateWords
  
  } from '../utils/features';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsFail, getWordsRequest, getWordsSuccess ,clearState} from '../redux/slices';
const Learning = () => {
  const [count, setcount] = useState<number>(0) 
  const params = useSearchParams()[0].get('language') as LangType 
  const navigate  = useNavigate()
  const dispatch = useDispatch()
  const audioRef = useRef(null)

const {loading, words, result, error}  = useSelector((state:{root:StateType})=>state.root)

const [audioSrc, setaudioSrc] = useState<string>("")

  const nextHandler =():void=>{
    setcount((prev)=>prev+1)
    setaudioSrc("")
  }

const audioHandler =async()=>{

  const player:HTMLAudioElement = audioRef.current!
  if(player){
    player.play()
  }else{
    const data:string = await fetChAudio(words[count]?.words, params)
    console.log(data)
      setaudioSrc(data)
      
  }



}
 


  useEffect(() => {
    dispatch(getWordsRequest())
    translateWords( params || "hi").then((arr:WordType[])=>{
      console.log(arr)
dispatch(getWordsSuccess(arr))
    }).catch((err)=>{
      console.log(err)
      dispatch(getWordsFail(err))
    })
  
     if(error){
      alert(error)
      dispatch(clearState())
     }


  }, [])
  
  return (
    <Container maxWidth="sm" sx={{padding:'1rem'}}>
   
   <Button onClick={words.length-1===0?()=>navigate("/"):()=>setcount(prev=>prev-1)}> <ArrowBackIosNewIcon/></Button>
    {
audioSrc && <audio src={audioSrc} autoPlay ref={audioRef}></audio>

    }
   <Typography m={"2rem 0"}>Leaning made easy</Typography>
   <Stack direction={"row"} spacing={"1rem"} >
    <Typography variant={'h4'} >{count + 1} -{words[count]?.words } </Typography>  
   <Typography color={"blue"}  variant={"h4"}>:{words[count]?.meaning}</Typography>
   <Button sx={{borderRadius:"50%"}} onClick={audioHandler}><VolumeDownIcon/> </Button>

   </Stack>

   <Button sx={{margin:"3rem 0"}} variant="contained" fullWidth 
   onClick={count === words.length-1 ?()=>navigate("/quiz"):nextHandler}
   
   >{count==7?"Text":"NExt"}</Button>
    </Container>
  )
}

export default Learning