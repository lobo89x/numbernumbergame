import React, { Component } from "react";
import Player1 from '../player_multi1';
import Player2 from '../player_mulit2';
import {handleMovement} from '../player_multi1/movement';
import {handleMovementp2} from '../player_mulit2/movement';


class Grid extends Component {
    constructor(){
        super();
        this.grid = React.createRef();
    }
    
    componentDidMount(){
        
        this.grid.current.focus();
    }

    handleUserInput = (e) => {
        // console.log(e);
        handleMovement(this.props.socket, this.props.currentplayer)(e);
    }
    // handleUserInput2 = (e) => {
    //     // console.log(e);
    //     handleMovement()(e);
    //     handleMovementp2()(e);
    // }

    render() {
        if(this.props.cardlist.length!==0) {
            console.log()
          return (
            <div  onKeyDown={(e)=>this.handleUserInput(e)} tabIndex="0" ref={this.grid} className="active-fix">
                  <div className='card-group' >
                    <div className="card card-asteroid text-white bg-dark mb-3">
                      <div className="card-body" >
                          <h5 className="card-title">{this.props.cardlist[0]}</h5>
                          <p className="card-text"></p>
                      </div>
                    </div>
                    <div className="card card-asteroid text-white bg-dark mb-3">
                      <div className="card-body" >
                          <h5 className="card-title">{this.props.cardlist[1]}</h5>
                          <p className="card-text"></p>
                      </div>
                    </div>
                    <div className="card card-asteroid text-white bg-dark mb-3">
                      <div className="card-body" >
                          <h5 className="card-title">{this.props.cardlist[2]}</h5>
                          <p className="card-text"></p>
                      </div>
                    </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                        <div className="card-body" >
                            <h5 className="card-title">{this.props.cardlist[3]}</h5>
                            <p className="card-text"></p>
                        </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                        <div className="card-body" >
                            <h5 className="card-title">{this.props.cardlist[4]}</h5>
                            <p className="card-text"></p>
                        </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                        <div className="card-body" >
                            <h5 className="card-title">{this.props.cardlist[5]}</h5>
                            <p className="card-text"></p>
                        </div>
                      </div>
                    </div>
                    <div className='card-group'>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[6]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[7]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[8]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[9]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[10]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[11]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                  </div>
                  <div className='card-group'>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[12]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[13]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[14]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[15]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[16]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[17]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                  </div>
                  <div className='card-group'>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[18]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[19]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[20]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[21]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[22]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[23]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                  </div>
                  <div className='card-group'>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[24]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[25]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[26]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[27]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" >
                              <h5 className="card-title">{this.props.cardlist[28]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className="card card-asteroid text-white bg-dark mb-3">
                          <div className="card-body" onClick={() => this.select(this.props.cardlist[29])}>
                              <h5 className="card-title">{this.props.cardlist[29]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                  </div>
                  <Player1 selectEval={this.props.selectEval} cardlist={this.props.cardlist}/>
                  <Player2 selectEval={this.props.selectEval} cardlist={this.props.cardlist}/>
                  </div>
                  );
        }
        else {
          return (
                
            <div className='card-group'>
              <h2> LOADING.........
              </h2>
            </div>
             
            );
          }
            
        }
}

export default Grid