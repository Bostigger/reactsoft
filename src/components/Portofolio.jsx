import React, {Component} from 'react';
import Book from "./Book";

export default class Portfolios  extends Component{
    state = {
        Portofolios: [
            {name: 'School Management', year: '2022'},
            {name: 'Church Management', year: '2019'},
            {name: 'Hospital Management', year: '2021'},
            {name: 'Instagram  Clone', year: '2021'},

        ],
        showPortfolios :false,
    }
    deleteData = (idx)=>{
        let all_portos = this.state.Portofolios;
        all_portos.splice(idx,1);
        this.setState({
            Portfolios:all_portos
        });
    }

    updateInput = (e,idx)=>{
      const eachPort = {
          ...this.state.Portofolios[idx]
      }
      eachPort.name = e.target.value;
      const Portofolios = [...this.state.Portofolios];

        Portofolios[idx] = eachPort;

      this.setState({
          Portfolios:Portofolios
      });
    }

    showPortOnandOff = ()=>{
        this.setState({
            showPortfolios:!this.state.showPortfolios
        })
    }

    render() {
        let Porto = null
        if (this.state.showPortfolios){
            const portos = this.state.Portofolios;
            Porto = portos.map((name,idx)=>{
                return (
                    <Book project={name.name} and  year={name.year} action={()=>this.deleteData(idx)} />
                )
            });
        }

        return (
            <div>
                <button onClick={this.showPortOnandOff}>View projects</button>
                {Porto}
            </div>
        );
    }
}