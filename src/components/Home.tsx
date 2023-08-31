
import { Button, Container, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const languages =[
  {
    name:"Japanese",
    code:"ja"
  },
  {
    name:"Hindi",
    code:"hi"
  },
  {
    name:"Spanish",
    code:"es"
  },

  {
    name:"French",
    code:"fr"
  },


]
const Home = () => {

  const navigate = useNavigate()

  const languageSelectHandler =(language:string):void=>{
     navigate(`/learn?language=${language}`)
  }
  return (

   
      <Container maxWidth={"sm"}>
            <Typography>Welcome begin you learning journey</Typography>
        <Stack 
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
        
        >
  
  {languages.map((i)=>(
    <Button key={i.code}        
    onClick={()=>languageSelectHandler(i.code)}
    >{i.name}</Button>
  ))}

        </Stack>

 
      </Container>
 
  )
}

export default Home