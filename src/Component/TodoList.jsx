import React, { useState } from "react";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
const TodoList = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const InputHandler = e => {
    setInput(e.target.value);
  };

  const addDataHandler = () => {
    if(input !="")
    {
      setData([...data, input]);
      setInput("");
    }
    else{
      alert("Please Inter Value");
    }
  };

  const deleteHandler=(id)=>{
    const remove=data.filter((item,i)=>(
      i!==id
    ))
    setData(remove);
    console.log(id, "id data");
  }

  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <div>
          <input
            type="text"
            onChange={InputHandler}
            value={input}
            className="outline-none border-2 w-70 border-green-500 p-1 rounded-lg"
          />
          <button
            className="bg-green-500 text-white rounded-lg ml-5 w-20 p-2"
            onClick={addDataHandler}
          >
            Add
          </button>
        </div>
      </div>
      <table className="m-auto w-96 border-collapse border border-green-500 my-10 rounded-xl">
        <tbody>
          {data &&
            data.map((item, i) => (
              <tr key={i}>
                <td className="border border-slate-200 p-3 text-center">{item}</td>
                <td className="border border-slate-200 p-3">
                  <AiFillDelete size={25} onClick={()=>deleteHandler(i)} className="text-center"/>
                  
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
