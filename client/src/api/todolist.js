import axios from 'axios'

const todolist = {
    fetchTodolists: async (username) => {
        const res = await axios.get(`http://localhost:3001/todolist?username=${username}`)
        const data = await res.data;
        // console.log(data)
        return data
    },
    addTodolists: async (todo) => {
        await axios.post('http://localhost:3001/todolist', todo)
        //console.log(res)
    }
}

export default todolist
