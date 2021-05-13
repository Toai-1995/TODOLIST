import Footer from './Footer'
import Header from './Header'
import './Todo.css'
import Todolist from './Todolist'

export default function index() {
    return (
        <div className="todoapp" >
            <Header />
            <Todolist />
            <Footer />
        </div>
    )
}
