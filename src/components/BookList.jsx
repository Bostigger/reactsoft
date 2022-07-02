import React, {Component} from 'react'

export default class BookList extends Component{
    // constructor(props) {
    //     super(props);
       state = {
           Book:[
               {title: 'Rich Dad Poor Dad', writer: 'Tricksteck'},
               {title: 'Think and Grow Rich', writer: 'Aboagye'},

]
}
    changeBooks = (e)=>{
        this.setState({
         Book:[
             {title:'Entanglement', writer:'Walt Disney'},
             {title:'Indescribable Me', writer:'Tricksteck'},
         ]
        })
}

    render() {

        return (
            <div>
              <div>

                  <h4>Title: {this.state.Book[0].title} </h4>
                  <p>Title: {this.state.Book[0].writer} </p>

                  <h4>Title: {this.state.Book[1].title} </h4>
                  <p>Title: {this.state.Book[1].writer} </p>
                  <button onClick={this.changeBooks}>Change Books</button>
              </div>
            </div>
        );
    }
}