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
                    <div className={(this.props.cardlist[0]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                      <div className="card-body" >
                          <h5 className={(this.props.cardlist[0]==="!") ? "card-title-munch" :"card-title"} >{this.props.cardlist[0]}</h5>
                          <p className="card-text"></p>
                      </div>
                    </div>
                    <div className={(this.props.cardlist[1]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                      <div className="card-body" >
                          <h5 className={(this.props.cardlist[1]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[1]}</h5>
                          <p className="card-text"></p>
                      </div>
                    </div>
                    <div className={(this.props.cardlist[2]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                      <div className="card-body" >
                          <h5 className={(this.props.cardlist[2]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[2]}</h5>
                          <p className="card-text"></p>
                      </div>
                    </div>
                      <div className={(this.props.cardlist[3]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                        <div className="card-body" >
                            <h5 className={(this.props.cardlist[3]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[3]}</h5>
                            <p className="card-text"></p>
                        </div>
                      </div>
                      <div className={(this.props.cardlist[4]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                        <div className="card-body" >
                            <h5 className={(this.props.cardlist[4]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[4]}</h5>
                            <p className="card-text"></p>
                        </div>
                      </div>
                      <div className={(this.props.cardlist[5]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                        <div className="card-body" >
                            <h5 className={(this.props.cardlist[5]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[5]}</h5>
                            <p className="card-text"></p>
                        </div>
                      </div>
                    </div>
                    <div className='card-group'>
                      <div className={(this.props.cardlist[6]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[6]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[6]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[7]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[7]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[7]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[8]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[8]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[8]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[9]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[9]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[9]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[10]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[10]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[10]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[11]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[11]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[11]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                  </div>
                  <div className='card-group'>
                      <div className={(this.props.cardlist[12]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[12]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[12]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[13]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[13]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[13]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[14]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[14]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[14]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[15]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[15]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[15]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[16]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[16]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[16]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[17]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[17]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[17]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                  </div>
                  <div className='card-group'>
                      <div className={(this.props.cardlist[18]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[18]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[18]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[19]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[19]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[19]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[20]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[20]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[20]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[21]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[21]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[21]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[22]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[22]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[22]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[23]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[23]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[23]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                  </div>
                  <div className='card-group'>
                      <div className={(this.props.cardlist[24]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[24]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[24]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[25]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[25]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[25]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[26]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[26]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[26]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[27]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[27]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[27]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[28]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[28]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[28]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                      <div className={(this.props.cardlist[29]==="!") ? "card card-asteroid-munched text-white bg-dark mb-3": "card card-asteroid text-white bg-dark mb-3"}>
                          <div className="card-body" >
                              <h5 className={(this.props.cardlist[29]==="!") ? "card-title-munch" :"card-title"}>{this.props.cardlist[29]}</h5>
                              <p className="card-text"></p>
                          </div>
                      </div>
                  </div>
                  <Player1 selectEval={this.props.selectEval} cardlist={this.props.cardlist} showModal={this.props.showModal}/>
                  <Player2 selectEval={this.props.selectEval} cardlist={this.props.cardlist} showModal={this.props.showModal}/>
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