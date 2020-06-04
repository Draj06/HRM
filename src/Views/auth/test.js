import React,{useState} from 'react'
import { ICountry, IState, ICity } from 'country-state-city'

function Test() {
const [file,setFile] = useState('')
const [fileName,setfileName] = useState('Chose file')
    const fileSelecter=(e)=>{
      // console.log(e.target.files[0])
       setFile(e.target.files[0])
       setfileName(e.target.files[0].name)
       let reader = new FileReader()
       reader.readAsDataURL(e.target.files[0])
       reader.onload = (e) =>{
          let d = e.target.result
          console.log(JSON.stringify(d))

       }
    }
    return (
        <div>
            <input type="file" 
            onChange={fileSelecter}
            />
            <label>
            {fileName}
            </label>
            <input type="tex"></input>
            
        </div>
    )
}

export default Test
