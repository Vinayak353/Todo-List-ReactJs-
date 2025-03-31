import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

const submit=(e)=>{
e.preventDefault();
if(!title || !desc){
alert("Title or Description cannot be blank");

}
addTodo(title,desc);
setTitle("");
    setDesc("");
}

  return (
<div className="container my-5 d-flex justify-content-center">
  <div className="card p-4 shadow-lg rounded-4 border-0" style={{ maxWidth: "900px", width: "100%", background: "#ffffff" }}>
    <h3 className="text-center mb-4 fw-bold text-success">Add Todos</h3>
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-semibold">Todo Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="form-control rounded-3 px-3 py-2 border shadow-sm" 
          id="title" 
          placeholder="Enter todo title" 
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="desc" className="form-label fw-semibold">Todo Description</label>
        <input 
          type="text" 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
          className="form-control rounded-3 px-3 py-2 border shadow-sm" 
          id="desc" 
          placeholder="Enter todo description" 
          required
        />
      </div>

      <button type="submit" className="btn btn-success w-100 rounded-3 py-2 shadow-sm fw-bold">Add Todo</button>
    </form>
  </div>
</div>

  )
}




{/* <div className='container my-3'> 
<form onSubmit={submit}> 
    <h3>Add Todos</h3>
<div className="mb-3">
<label htmlFor="title" className="form-label">Todo Title</label>
<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="title" className="form-text"></div>
</div>
<div className="mb-3">
<label htmlFor="desc" className="form-label">Todo Description</label>
<input type="text"  value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
</div>
<button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
</div> */}
