import Navbar from "../../components/navbar"
import TodoGrid from "../../components/todoGrid"
import TodoInput from "../../components/todoInput"


const Home = () => {
  return (
    <div>
        <Navbar />
        <TodoInput />
        <TodoGrid />
    </div>
  )
}

export default Home