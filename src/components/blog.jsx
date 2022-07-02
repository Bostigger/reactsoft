import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export  default  class Blog extends Component{

    state = {
        post: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/subject').then((response)=> {
            this.setState({post:response.data})
        }).catch(function (error) {
            console.log(error)
        })
    }

    render() {
        const postData = this.state.post;
        const allData = postData.map((item,idx)=>{
            return <div className="media">
                <div className="media-body text-center mt-3">
                    <h5>{item.subject_name} {idx}</h5>
                    {item.subject_code}
                </div>
            </div>
        });

        return (
            <div>
                <Link to="/createpost">Add New Subject</Link>
                {allData}
            </div>
        );
    }
}