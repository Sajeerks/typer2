import axios from "axios";
import { generate } from "random-words";
import _, { mean } from "lodash"





const words = generate(8).map(i=>(
  {
      Text:i
  })
  )

const generateMCQ = (meaning:{Text:string} [], idx:number):string[]=>{
  
  const correctAns:string = meaning[idx].Text
  // an array with all words expect ans
  // console.log({correctAns})

const allMeaningExpectForCorrect = meaning.filter((i)=>i.Text !== correctAns)

//// Randomly genereating 3 elemets from incoreect aarrt

  const incorrectOptions:string[] = _.sampleSize(allMeaningExpectForCorrect,3).map((i)=>i.Text)

  const mcqOptions = _.shuffle([...incorrectOptions,correctAns])
  
  return mcqOptions

  
}



  

const ms_trnslate_key = import.meta.env.VITE_MICROSOFT_TEXT_TRANSLATE_KEY



export const translateWords = async(params:LangType)=>{


try {
    

       
  
    console.log(words)
    // console.log(params)
 const {data} =  await axios.post( 'https://microsoft-translator-text.p.rapidapi.com/translate',words,
 {
        params: {
            'to[0]': params,
            'api-version': '3.0',
            profanityAction: 'NoAction',
            textType: 'plain'
          },
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': ms_trnslate_key,
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
          },
        })
  //       console.log(data)
  //  console.log(data[0].translations[0].text)
   const recived:FetchedDataType[]= data
   const arr:WordType[]= data.map((i,idx)=>{
    const optionsArr:string[] = generateMCQ(words, idx)

    return {
      words:i.translations[0].text,
      meaning:words[idx].Text,
      options:optionsArr
    }
   })
  //  console.log("arr==" + arr)
return arr

} catch (error ) {
  let errorMessage = "Failed to do something exceptional";
  if (error instanceof Error) {
    errorMessage = error.message;}

    console.log(errorMessage);
    throw new Error("new Error")
}
}


//     const words = generate(8).map(i=>(
//     {
//         Text:i
//     })
//     )

// // console.log(words)

// const words2= generate(8).reduce((prev, acc)=>(
//     acc+ "," + prev
// ), "")
// console.log({words2})

// const options = {
//   method: 'POST',
//   url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
//   params: {
//     'to[0]': 'hi',
//     'api-version': '3.0',
//     profanityAction: 'NoAction',
//     textType: 'plain'
//   },
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '74e9f335a6msh99392815fad109fp15d923jsnd84eff7942bc',
//     'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
//   },
//   data: [{Text: 'please'}]
// };


// const encodedParams = new URLSearchParams();
// encodedParams.set('q', words2);
// encodedParams.set('target', "hi");
// encodedParams.set('source', 'en');

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': '97a182c228mshe83878873589a94p168336jsn71060a22bc44',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams,
// };


    // export const tanslateser =async(prams:LangType)=>{



    //   try {
    //     const response = await axios.request(options);
      
    //     console.log(response.data);
    //     return response.data
    //   } catch (error) {
    //     console.error(error);
    //   }
  
 
    // }



    let encodedParams2 = new URLSearchParams();
    


export const fetChAudio =async(text:string,language:LangType)=>{

  const keyForSpeech = import.meta.env.VITE_TEXT_TO_SPEECH_API
  const rapidApiKey = import.meta.env.VITE_RAPID_API


  // console.log(import.meta.env.VITE_RAPID_API)

  const encodedParams = new URLSearchParams();
  encodedParams.set('src', text);
  encodedParams.set('hl', 'en-us');
  encodedParams.set('r', '0');
  encodedParams.set('c', 'mp3');
  encodedParams.set('f', '8khz_8bit_mono');
  encodedParams.set('b64', "true");


  
  if(language === "ja") encodedParams.set("hl", "ja-jp")
  else if(language === "es") encodedParams.set("hl", "es-es")
  else if(language === "fr") encodedParams.set("hl", "fr-fr")
else encodedParams.set("hl", "hi-in")
encodedParams2 =encodedParams

//  console.log({keyForSpeech})
  const options = {
    method: 'POST',
    url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
    },
    data: encodedParams,
    params:{key:keyForSpeech}
  };
  const options2 = {
    method: 'GET',
    url: `http://api.voicerss.org/?key=${keyForSpeech}&hl=en-us&src=Hello, world!`,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded',
    //   // 'X-RapidAPI-Key': rapidApiKey,
    //   // 'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
    // },
    // data: encodedParams,
    // params:{key:keyForSpeech}
  };


  try {
    // const response = await axios.request(options);

    const response = await axios.request(options)

    // console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
  
  












}
//////
// const {data }:{data:string} = await axios.post('https://voicerss-text-to-speech.p.rapidapi.com/', encodedParams2,
// {
//   params:{key:"dsafsf"},
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': '97a182c228mshe83878873589a94p168336jsn71060a22bc44',
//     'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
//   },
// }
// )