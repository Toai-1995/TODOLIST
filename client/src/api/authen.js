const authen = {
    register: async (user) => {
        const res = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: { "Content-type": 'application/json' },
            body: JSON.stringify(user)
        })
        const data = await res.json();
        const result = data;
        return result;
    }
    ,
    login: async (user) => {
        // const api = 'http://localhost:3004/user'
        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { "Content-type": 'application/json' },
            body: JSON.stringify(user)
        })
        const data = await res.json();
        return data;

    },
    fetchData: async () => {
        const res = await fetch('http://localhost:3001/login')
        const data = await res.json();
        console.log("data", data)
    }
}
export default authen

