// import React from 'react'
import Grid from '../grid';
//import Player from '../player';

import React, { Component } from "react";



class Board extends Component {

  state = {
    guesslist: [],
    cardlist: []
  };

  selectEval = (x, tf, list) => {
    if (tf) {
        // scoreUpdate();
    }
    else {
        // lifeLoss();
    }
    // console.log(x);
    // console.log(tf);
    // // console.log(state);
    // console.log(list);
    // this.clearSpace(x);
    this.setState(
      {cardlist: this.state.cardlist.map((item, index) =>
        {if (index===x){
          item = '';
        }
        return item;
      })
      }
    );
}

clearSpace(y){
  this.state.cardlist[y] = '';
}


  select = num => {
    if (this.state.guesslist.includes(num)) {

      this.setState({ guesslist: [] }, () => {
        console.log(this.state.guesslist);
        this.props.scoreupdate(this.state.guesslist)
      });
    }
    else {
      this.state.guesslist.push(num);
      console.log(this.state.guesslist);
      this.props.scoreupdate(this.state.guesslist)
    }
    this.scramblenumbers();
  };

  answerList = () => {
    var ansArray = [];
    for (var j = 0; ansArray.length < 30; j++) {
      if (ansArray.length < 16) {
        var y = Math.floor(Math.random() * 300);
        if ((y % 2) === 0) {
          ansArray.push(y);
        }
      }
      else if (ansArray.length > 15) {
        var z = Math.floor(Math.random() * 300);
        if ((z % 2) === 1) {
          ansArray.push(z);
        }
      }

    }
    console.log(ansArray);

    let t = this.scramblenumbers(ansArray);
    this.setState({ cardlist: (t) }, () => {
      // console.log(this.state.cardlist);
    });
  }

  scramblenumbers = (answers) => {
    console.log(answers)
    
    console.log("I am ,here, in scrmble numbers");
    
      for (var i = answers.length-1; i > 0; i--) {
      var x = Math.floor(Math.random() * i);
      const temp2 = answers[i];
      answers[i] =answers[x];
      answers[x] = temp2
      }
    return answers;
    // else {
    // this.setState({ cardlist: temp }, () => {
    //     // console.log(this.state.cardlist);
    // });
    // }
  }

  componentDidMount() {
    this.answerList();
  }
  render() {
    console.log(this.state.cardlist);
    if (this.state.cardlist.length !== 0) {
      return (
        <div
          style={{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '20px auto'
          }}>
          <Grid selectEval={this.selectEval} cardlist={this.state.cardlist} />
          {/* <Player /> */}

        </div>
      )
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

  // function Card(props) {
  // render() {
  //   console.log(this.state.cardlist);
  //   if(this.state.cardlist.length!==0) {

  //     return (
  //       <React.Fragment>
  //             <div className='card-group'>
  //               <div className="card text-white bg-dark mb-3">
  //                 <div className="card-body" onClick={() => this.select(this.state.cardlist[0])}>
  //                     <h5 className="card-title">{this.state.cardlist[0]}</h5>
  //                     <p className="card-text"></p>
  //                 </div>
  //               </div>
  //               <div className="card text-white bg-dark mb-3">
  //                 <div className="card-body" onClick={() => this.select(this.state.cardlist[1])}>
  //                     <h5 className="card-title">{this.state.cardlist[1]}</h5>
  //                     <p className="card-text"></p>
  //                 </div>
  //               </div>
  //               <div className="card text-white bg-dark mb-3">
  //                 <div className="card-body" onClick={() => this.select(this.state.cardlist[2])}>
  //                     <h5 className="card-title">{this.state.cardlist[2]}</h5>
  //                     <p className="card-text"></p>
  //                 </div>
  //               </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                   <div className="card-body" onClick={() => this.select(this.state.cardlist[3])}>
  //                       <h5 className="card-title">{this.state.cardlist[3]}</h5>
  //                       <p className="card-text"></p>
  //                   </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                   <div className="card-body" onClick={() => this.select(this.state.cardlist[4])}>
  //                       <h5 className="card-title">{this.state.cardlist[4]}</h5>
  //                       <p className="card-text"></p>
  //                   </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                   <div className="card-body" onClick={() => this.select(this.state.cardlist[5])}>
  //                       <h5 className="card-title">{this.state.cardlist[5]}</h5>
  //                       <p className="card-text"></p>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className='card-group'>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[6])}>
  //                         <h5 className="card-title">{this.state.cardlist[6]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[7])}>
  //                         <h5 className="card-title">{this.state.cardlist[7]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[8])}>
  //                         <h5 className="card-title">{this.state.cardlist[8]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[9])}>
  //                         <h5 className="card-title">{this.state.cardlist[9]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[10])}>
  //                         <h5 className="card-title">{this.state.cardlist[10]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[11])}>
  //                         <h5 className="card-title">{this.state.cardlist[11]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //             </div>
  //             <div className='card-group'>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[12])}>
  //                         <h5 className="card-title">{this.state.cardlist[12]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[13])}>
  //                         <h5 className="card-title">{this.state.cardlist[13]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[14])}>
  //                         <h5 className="card-title">{this.state.cardlist[14]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[15])}>
  //                         <h5 className="card-title">{this.state.cardlist[15]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[16])}>
  //                         <h5 className="card-title">{this.state.cardlist[16]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[19])}>
  //                         <h5 className="card-title">{this.state.cardlist[17]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //             </div>
  //             <div className='card-group'>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[18])}>
  //                         <h5 className="card-title">{this.state.cardlist[18]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[19])}>
  //                         <h5 className="card-title">{this.state.cardlist[19]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[20])}>
  //                         <h5 className="card-title">{this.state.cardlist[20]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[21])}>
  //                         <h5 className="card-title">{this.state.cardlist[21]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[22])}>
  //                         <h5 className="card-title">{this.state.cardlist[22]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[23])}>
  //                         <h5 className="card-title">{this.state.cardlist[23]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //             </div>
  //             <div className='card-group'>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[24])}>
  //                         <h5 className="card-title">{this.state.cardlist[24]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[25])}>
  //                         <h5 className="card-title">{this.state.cardlist[25]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[26])}>
  //                         <h5 className="card-title">{this.state.cardlist[26]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[27])}>
  //                         <h5 className="card-title">{this.state.cardlist[27]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[28])}>
  //                         <h5 className="card-title">{this.state.cardlist[28]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //                 <div className="card text-white bg-dark mb-3">
  //                     <div className="card-body" onClick={() => this.select(this.state.cardlist[29])}>
  //                         <h5 className="card-title">{this.state.cardlist[29]}</h5>
  //                         <p className="card-text"></p>
  //                     </div>
  //                 </div>
  //             </div>
  //             <Player />
  //             </React.Fragment>
  //             );
  //   }
  //   else {
  //     return (

  //       <div className='card-group'>
  //         <h2> LOADING.........
  //         </h2>
  //       </div>

  //       );
  //   }
  //       }
}

export default Board