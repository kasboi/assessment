import { Contacts } from "./Contacts/Contacts"
import { Search } from "./Search/Search"
import { useState, useEffect } from "react"
import Dropdown from "./components/Dropdown"

function App() {
    const [contacts, setContacts] = useState([])
    const [filter, setFilter] = useState([])

    const [page, setPage] = useState(1)

    const [user, setUser] = useState("")

    useEffect(() => {
        if (user.length === 0) {
            fetch(`https://randomuser.me/api/?page=${page}&results=3&seed=abc`)
                .then((response) => response.json())
                .then((data) => {
                    setContacts(data.results)
                })
        }
    }, [page, user])

    useEffect(() => {
        if (user.length > 0) {
            fetch(`https://randomuser.me/api/?gender=${user}&results=3`)
                .then((response) => response.json())
                .then((data) => {
                    setContacts(data.results)
                })
        }
    }, [user])

    return (
        <div className="bg-slate-700 h-[100vh] py-4">
            <Search
                contacts={contacts}
                setFilter={setFilter}
                setUser={setUser}
            />
            <Contacts
                contacts={contacts}
                page={page}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter}
                setUser={setUser}
            />
        </div>
    )
}

export default App
