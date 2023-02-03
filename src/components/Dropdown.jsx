import React, { useState } from "react"

const Dropdown = ({
    contacts,
    setFilter,
    selectedOption,
    setSelectedOption,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)
    const selectOption = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    const handleFilter = (country) => {
        selectOption(country)

        const filtered = contacts.filter((contact) => {
            let count = contact.location.country
            return count.includes(country)
        })
        setFilter(filtered)
    }

    return (
        <div className="relative my-6 bg-slate-200 rounded-full py-4 px-5">
            <button
                className="text-gray-600 text-lg hover:text-gray-700 focus:outline-none focus:shadow-outline w-full flex justify-between items-center"
                onClick={toggleDropdown}
            >
                {selectedOption}
                <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                    <span
                        // href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                            selectOption("Country")
                            setFilter([])
                        }}
                    >
                        All
                    </span>
                    {contacts.map((contact) => (
                        <span
                            // href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                            onClick={() =>
                                handleFilter(contact.location.country)
                            }
                        >
                            {contact.location.country}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
