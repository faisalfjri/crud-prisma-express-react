import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import ProductList from './components/ProductList'

export default function App() {
    return (
        <div className="container max-w-2xl">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductList />}></Route>
                    <Route path="/add" element={<AddProduct />}></Route>
                    <Route path="/edit/:id" element={<EditProduct />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
