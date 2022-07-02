import React, {Component} from 'react'
import axios from "axios";

export default class CreatePost extends Component{
    state = {
         class_id:'',
         subject_name:'',
         subject_code:'',

    }
    formSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/subject/insert', {
                class_id:this.state.class_id,
                subject_name:this.state.subject_name,
                subject_code:this.state.subject_code,

        }).catch(function (error) {
            console.log(error)
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Add new Post</h3>
                        <form onSubmit={this.formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Class Id</label>
                                <input type="text" name="class_id" onChange={(e)=>{this.setState({class_id:e.target.value})}} className="form-control" id="exampleInputEmail1"
                                      />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Subject Name</label>
                                <input type="text" name="subject_name" onChange={(e)=>{this.setState({subject_name:e.target.value})}} className="form-control" id="exampleInputEmail1"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Subject Code</label>
                                <input type="text" name="subject_code" onChange={(e)=>{this.setState({subject_code:e.target.value})}} className="form-control" id="exampleInputEmail1"
                                />
                            </div>




                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}