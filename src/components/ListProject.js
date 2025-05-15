import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import React, { useEffect, useState } from 'react'
import { fetchProjects } from "../redux/projectSlice";

export function ListProject() {
    
    const { projects, status, error } = useSelector(state => state.projects);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProjects());
    }, [])
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Name Project
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Process
                        </th>
                        <th>
                            Begin Date
                        </th>
                        <th>
                            End Date
                        </th>
                        <th>
                            Control
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects && projects.map((item, index) => (
                            <tr>
                                <th scope="row">
                                    {index + 1}
                                </th>
                                <td>
                                    {item.projectName}
                                </td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    {item.process}
                                </td>
                                <td>
                                    {item.beginDate}
                                </td>
                                <td>
                                    {item.endDate}
                                </td>
                                <td>
                                    <Button>ADD TASK</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}