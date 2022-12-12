import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useSWR, { mutate } from 'swr'

const ProductList = () => {
    const fetcher = async () => {
        const response = await axios.get('http://localhost:5000/products')
        return response.data
    }

    const { data } = useSWR('products', fetcher)
    if (!data) {
        return <h2>Loading...</h2>
    }

    const deleteProduct = async productId => {
        await axios.delete(`http://localhost:5000/products/${productId}`)
        mutate('products')
    }

    return (
        <div className="flex flex-col my-10">
            <div className="w-full">
                <Link to="/add" className="ml-4 sm:ml-0">
                    <button
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Add New Product
                    </button>
                </Link>
                <div className="mt-5 overflow-x-auto relative shadow sm:rounded-lg border">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    #
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Product name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length !== 0 ? (
                                data.map((product, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={product.id}>
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {product.name}
                                        </th>
                                        <td className="py-4 px-6">{product.price}</td>
                                        <td className="py-4 px-6">
                                            <Link to={`/edit/${product.id}`}>
                                                <button
                                                    type="button"
                                                    className="mr-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => deleteProduct(product.id)}
                                                className="py-2 px-3 text-sm font-medium ocus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td colSpan="4" className="py-4 px-6 text-center">
                                        Tidak Ada Data
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductList
