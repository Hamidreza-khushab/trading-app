import React from 'react';
import Table from 'react-bootstrap/Table'
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Showorder = ({ RecordingOrder, handelDeleted }) => {

    return (
        <>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>C&nbsp;Name</th>
                        <th>quantity</th>
                        <th>T&nbsp;Price</th>
                        <th>O&nbsp;Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        RecordingOrder.map((elementOrder, i) => {
                            return <tr key={uuidv4()}
                                onClick={(e) => handelDeleted(e.target.id)}
                            >
                                <td id={elementOrder.id}>{i + 1}</td>
                                <td id={elementOrder.id}>{elementOrder.name}</td>
                                <td id={elementOrder.id}>{elementOrder.quantity}</td>
                                <td id={elementOrder.id}>{elementOrder.targetPrice}&nbsp;$</td>
                                <td id={elementOrder.id}>{elementOrder.type}</td>
                                <td id={elementOrder.id}> <FaRegTrashAlt /> </td>


                            </tr>

                        })

                    }

                </tbody>

            </Table>
        </>);
};

export default Showorder;
