/// <reference types="vite/client" />

  type LangType = "ja" | "hi" | "es" | "fr"


type WordType ={
    words:string,
    meaning:string,
    options:string[]
}

  type StateType ={
    loading:boolean,
    result:string[],
    error?:string,
    words:WordType[]
  }

  type FetchedDataType = {
    translation:{
      text:string
    }[]
  }