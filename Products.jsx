import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
    const [Parts, setParts] = useState([])
    useEffect(() => {
        axios.get('https://mernbackend-w4ch.onrender.com/getProducts')
            .then(Parts => setParts(Parts.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-100 vh-100 d-flex justify-content-center overflow-auto'>
            <div className='w-50'>
                <table className='table mx-auto'>
                    <thead>
                        <tr>
                            <th>
                                Part_no
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                MRP_per_unit
                            </th>
                            <th>
                                After_7per_discount
                            </th>
                        </tr>
                    </thead>
                    <tbody>{
                        Parts.map(part => {
                            return <tr>
                                <td>{part.Part_no}</td>
                                <td>{part.Description}</td>
                                <td>{part.MRP_per_unit}</td>
                                <td>{part.After_7per_discount}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Products;
