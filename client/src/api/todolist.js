import axios from 'axios'

const todolist = {
    fetchTodolists: async (username) => {
        const res = await axios.get(`http://localhost:3001/todolist?username=${username}`)
        const data = await res.data;
        return data
    },
    addTodolists: async (todo) => {
        await axios.post('http://localhost:3001/todolist', todo)
        //console.log(res)
    },
    editTodolists: async (todo) => {
        const res = await axios.put('http://localhost:3001/todolist', todo)
        const data = await res.data
        return data
    }
}

export default todolist
