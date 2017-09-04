import React from 'react';

const Task=(props)=>{
const displayList = (data)=>{
  if(data.value!==null){
return data.value.data.map((data,index)=>{
              return(
                  <div key={data.id} >
                        <p className="task">{data.task}</p>
                        <br/>
                        <p className="done">Done?</p>
                        <input type="checkbox" onChange={(e)=>{console.log(e)}}onClick={(e)=>{props.deleteFunc(data.id,{index})}} />
                  </div>
                )
})
}
else{
  return(<h1>Welcome</h1>)
}

}
return(
    <div>
      {displayList(props)}

    </div>

  )
}
export default Task;
