import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const saveProduct = async e => {
        e.preventDefault()
        await axios.post('http://localhost:5000/products', { name: name, price: parseInt(price) })
        navigate('/')
    }

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg sm:shadow sm:border">
            <form onSubmit={saveProduct}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Product name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Product price"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Save
                </button>
                <Link to="/">
                    <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Cancel
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default AddProduct
