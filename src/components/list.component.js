import React,{Component} from "react";
import axios from "axios";
import { Table } from "react-bootstrap/Table";
import VehicleTableRow from './VehicleTableRow';

export default class List extends Component{


    constructor(props){
        super(props)
        this.state = {
            vehicles : []
        };
    }

    componentDidMount(){
        axios.get('http://locahost:4000/vehicles/')
        .then(res => {
            this.setState({
                vehicles : res.data
            });
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    DataTable(){
        return this.state.vehicles.map((res,i) => {
            return <VehicleTableRow obj={res} key={i}/>
        });
    }

    render(){
        return(
            <div className="table-wrapper">
                <Table striped border hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Number</th>                        
                         </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
              
            </div>
        );
    }
}