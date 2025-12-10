import React,{useState} from 'react'

function Form() {
    //const [text,setText] = useState("");
    const [name, setName] = useState({firstName: "", lastName:""});

    // function InputValue(e){
    //     setText(e.target.value);
    //     console.log(e);

    // }
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);

    }
  return (
    <div>
      <form>
        <input onChange={(e)=>setName({...name,firstName:e.target.value})} type="text" value={name.firstName} />
        <input onChange={(e)=>setName({...name,lastName:e.target.value})} type="text" value={name.lastName}/>
        <h1>{name.firstName} - {name.lastName}</h1>

        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Form
