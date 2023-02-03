import { useState } from "react"

import { UsersIcon } from "@heroicons/react/24/solid"

export function Search({ contacts, setFilter, setUser }) {
    const [searchVal, setSearchVal] = useState("")

    const handleFilter = (e) => {
        const val = e.target.value
        console.log(val)
        setSearchVal(val)
        const filtered = contacts.filter((contact) => {
            let name = contact.name.first + " " + contact.name.last
            name = name.toLowerCase()
            console.log(name)
            return name.includes(val)
        })
        console.log(filtered)
        setFilter(filtered)
    }

    return (
        <div className="px-8 py-8">
            <div className="text-5xl mb-6">
                <span className="text-slate-300 font-thin">Hello, </span>
                <span className="text-white font-bold">Emerald</span>
            </div>
            <p className="text-slate-300 font-extralight mb-3">
                Welcome to your dashboard, kindly sort through the user base{" "}
            </p>
            <div className="relative text-xl">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                        className="h-7 w-7 fill-current text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
                    </svg>
                </span>
                <input
                    type="text"
                    className="w-full px-3 py-4 border border-gray-400 rounded-xl pl-12 focus:outline-none focus:shadow-outline bg-gray-400 placeholder-gray-600"
                    placeholder="Find a user"
                    value={searchVal}
                    onChange={(e) => handleFilter(e)}
                />
            </div>
            <div className="my-6">
                <h2 className="text-xl text-white">Show Users</h2>
                <div className="my-4 flex justify-between max-w-md mx-auto">
                    <div>
                        <button
                            className="transition bg-pink-500 rounded-3xl py-10 px-12 shadow-2xl hover:bg-pink-700 mb-2"
                            onClick={() => setUser("")}
                        >
                            <UsersIcon className="h-7 w-7 text-white" />
                        </button>
                        <p className="text-center text-slate-300 font-thin">
                            All Users
                        </p>
                    </div>
                    <div>
                        <button
                            className="transition bg-teal-500 rounded-3xl py-10 px-12 shadow-2xl hover:bg-teal-700 mb-2"
                            onClick={() => setUser("male")}
                        >
                            <UsersIcon className="h-7 w-7 text-white" />
                        </button>
                        <p className="text-center text-slate-300 font-thin">
                            Male Users
                        </p>
                    </div>
                    <div>
                        <button
                            className="transition bg-purple-500 rounded-3xl py-10 px-12 shadow-2xl hover:bg-purple-700 mb-2"
                            onClick={() => setUser("female")}
                        >
                            <UsersIcon className="h-7 w-7 text-white" />
                        </button>
                        <p className="text-center text-slate-300 font-thin">
                            Female Users
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
