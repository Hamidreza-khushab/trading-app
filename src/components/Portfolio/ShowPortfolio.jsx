import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
const ShowPortfolio = ({ handelDeleted, RecordingPosition }) => {
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>C&nbsp;Name</th>
                        <th>EnterPint</th>
                        <th>T&nbsp;Value</th>
                        <th>T&nbsp;Profit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        RecordingPosition.map((ePosition, i) => {
                            return <tr key={uuidv4()}
                                onClick={(e) => handelDeleted(e.target.id)}
                            >
                                <td id={ePosition.id}>{i + 1}</td>
                                <td id={ePosition.id}>{ePosition.name}</td>
                                <td id={ePosition.id}>{ePosition.EnterPint}&nbsp;$</td>
                                <td id={ePosition.id}>{ePosition.TradingValue}</td>
                                <td id={ePosition.id}>{ePosition.TakeProfit}&nbsp;$</td>
                                <td id={ePosition.id}> <FaRegTrashAlt /> </td>
                            </tr>
                        })
                    }
                </tbody>
                <br />
            </Table>
        </>);
};

export default ShowPortfolio;
