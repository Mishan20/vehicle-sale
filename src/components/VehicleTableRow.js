import React, {Component} from "react";
import {Link, } from 'react-router-dom';
import { Button } from "react-bootstrap/Button";
import axios from "axios";

export default class VehicleTableRow extends Component{

    render() {
        return (
             <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.color}</td>
                <td>{this.props.obj.number}</td>

                <td>
                    <Link className="edit-link" to={"/edit-vehicle" + this.props.obj}></Link>

                    <Button size="sm" variant="danger">Delete</Button>
                </td>
             </tr>
        );
    }
}