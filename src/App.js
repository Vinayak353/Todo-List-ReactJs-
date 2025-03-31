import './App.css';
import { useState, useEffect } from "react";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import  About  from './MyComponents/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];

  }
  else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify('todos'));
  }


  const addTodo = (title, desc) => {
    let srno;
    if (todos.length === 0) {
      srno = 1;
    }
    else {
      srno = todos[todos.length - 1].srno + 1;
    }
    const newtodo = {
      srno: srno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newtodo]);

  }

  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  //   {
  //     srno:1,
  //     title:"Buy veggies",
  //     desc:"Go to the market and bring some vegetables"
  //   }
  //   ,
  //   {
  //     srno:2,
  //     title:"Attend Meeting",
  //     desc:"Attend the meeting at 5pm"
  //   },
  //   {
  //     srno:3,
  //     title:"Take Groceries",
  //     desc:"Go to the Store and bring the groceries"
  //   }
  // ,{
  //   srno:4,
  //   title:"Meet Friends",
  //   desc:"Go to the park and meet the friends"
  // },
  // {
  //   srno:5,
  //   title:"Gym",
  //   desc:"Go to the gym"
  // }



  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
        <Route
          exact path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/about">
            <About /> */}
          {/* </Route> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;