import { useState } from "react"

import {
    ArrowRightIcon,
    EnvelopeIcon,
    PhoneIcon,
    CloudArrowDownIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
} from "@heroicons/react/24/outline"

import ToggleButton from "../components/ToggleButton"

import img from "../assets/react.svg"
import Dropdown from "../components/Dropdown"

export function Contacts({
    contacts,
    page,
    setPage,
    filter,
    setFilter,
    setUser,
}) {
    const [searchVal, setSearchVal] = useState("")
    const [selectedOption, setSelectedOption] = useState("Country")

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

    const fetchPage = (set) => {
        if (set === "next" && page < 100) {
            setPage(page + 1)
            setFilter([])
            setSelectedOption("Country")
            setUser("")
        } else if (set === "prev" && page > 1) {
            setPage(page - 1)
            setFilter([])
            setSelectedOption("Country")
            setUser("")
        }
    }

    const downloadResults = () => {
        fetch("https://randomuser.me/api/?format=csv")
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download automatically
                const url = window.URL.createObjectURL(new Blob([blob]))
                const link = document.createElement("a")
                // Set link's href to point to the Blob
            })
    }

    if (contacts.length === 0) {
        return <div>Loading...</div>
    }
    return (
        <div className="bg-slate-100 rounded-2xl py-6 px-5">
            <div className="my-4">
                <h2 className="text-center font-semibold text-2xl text-gray-800">
                    All Users
                </h2>
                <p className="text-center font-medium text-sm text-gray-700">
                    Filter by
                </p>
            </div>
            <div>
                <div className="my-6">
                    <div className="relative text-lg text-gray-800">
                        <span className="absolute inset-y-0 left-2 flex items-center pl-3">
                            <svg
                                className="h-5 w-5 fill-current text-gray-700"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="w-full px-3 py-4 border border-none rounded-full pl-12 focus:outline-none focus:shadow-outline bg-slate-200 placeholder-gray-600"
                            placeholder="Find a user"
                            value={searchVal}
                            onChange={(e) => handleFilter(e)}
                        />
                    </div>
                    <Dropdown
                        contacts={contacts}
                        setFilter={setFilter}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                    <ToggleButton />
                </div>
                <div className="px-2">
                    {filter.length > 0
                        ? filter.map((contact) => {
                              return (
                                  <div className="bg-white rounded-xl shadow-2xl px-2 py-6 flex flex-col items-center mb-6">
                                      <div className="w-32 h-32 rounded-full bg-blue-500 border-4 border-green-400 flex justify-center overflow-hidden">
                                          <img
                                              src={contact.picture.large}
                                              alt="img"
                                          />
                                      </div>
                                      <h2 className="text-2xl font-semibold text-gray-900">
                                          {`${contact.name.first} ${contact.name.last}`}
                                      </h2>
                                      <p className="text-gray-500 my-2">
                                          {`${contact.location.street.number}, ${contact.location.street.name}, ${contact.location.city}, ${contact.location.state}, ${contact.location.country}`}
                                      </p>
                                      <div className="flex flex-col gap-1 mb-3">
                                          <div className="flex text-gray-500">
                                              <EnvelopeIcon className="h-6 w-6 mr-2" />{" "}
                                              {contact.email}
                                          </div>
                                          <div className="flex text-gray-500">
                                              <PhoneIcon className="h-6 w-6 mr-4" />{" "}
                                              {contact.phone}
                                          </div>
                                      </div>
                                      <button className="px-5 py-4 shadow-xl rounded-xl bg-teal-300 flex justify-center">
                                          <ArrowRightIcon className="h-6 w-6 text-white" />
                                      </button>
                                  </div>
                              )
                          })
                        : contacts.map((contact) => {
                              return (
                                  <div className="bg-white rounded-xl shadow-2xl px-2 py-6 flex flex-col items-center mb-6">
                                      <div className="w-32 h-32 rounded-full bg-blue-500 border-4 border-green-400 flex justify-center overflow-hidden">
                                          <img
                                              src={contact.picture.large}
                                              alt="img"
                                          />
                                      </div>
                                      <h2 className="text-2xl font-semibold text-gray-900">
                                          {`${contact.name.first} ${contact.name.last}`}
                                      </h2>
                                      <p className="text-gray-500 my-2">
                                          {`${contact.location.street.number}, ${contact.location.street.name}, ${contact.location.city}, ${contact.location.state}, ${contact.location.country}`}
                                      </p>
                                      <div className="flex flex-col gap-1 mb-3">
                                          <div className="flex text-gray-500">
                                              <EnvelopeIcon className="h-6 w-6 mr-2" />{" "}
                                              {contact.email}
                                          </div>
                                          <div className="flex text-gray-500">
                                              <PhoneIcon className="h-6 w-6 mr-4" />{" "}
                                              {contact.phone}
                                          </div>
                                      </div>
                                      <button className="px-5 py-4 shadow-xl rounded-xl bg-teal-300 flex justify-center">
                                          <ArrowRightIcon className="h-6 w-6 text-white" />
                                      </button>
                                  </div>
                              )
                          })}
                </div>
                <div className="my-6 flex justify-center">
                    <button
                        className="flex items-center bg-purple-700 px-5 py-3.5 rounded-full text-white font-medium transition-colors hover:bg-purple-800 shadow-lg"
                        // onClick={() => downloadResults()}
                    >
                        <CloudArrowDownIcon className="h-8 w-8 text-white mr-3" />
                        <a href="https://randomuser.me/api/?format=csv">
                            Download Results
                        </a>
                    </button>
                </div>
                <div className="text-white flex gap-6 my-6 justify-end">
                    <button
                        className="bg-slate-300 px-4 py-2 rounded-lg shadow-xl"
                        onClick={() => fetchPage("prev")}
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-black" />
                    </button>
                    <button
                        className="bg-slate-700 px-4 py-2 rounded-lg shadow-xl"
                        onClick={() => fetchPage("next")}
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}
