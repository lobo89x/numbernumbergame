import React, { Component } from "react";



class Card extends Component {

state = {
    guesslist: [],
    cardlist: []
  };

  select = num => {
      if (this.state.guesslist.includes(num)) {
        
        this.setState({ guesslist: [] }, () => {
            console.log(this.state.guesslist);
        this.props.scoreupdate(this.state.guesslist)    
        });
    }
    else 
    {
        this.state.guesslist.push(num);
        console.log(this.state.guesslist);
        this.props.scoreupdate(this.state.guesslist)
      }
        this.scramblenumbers();
  }; 

  scramblenumbers = () => {
      var temp = [];
    if  (this.state.cardlist.length < 10) {
        for (var i = 0; temp.length < this.props.cards.length; i++) {
          var x = Math.floor(Math.random() * 9);
          if (temp.includes(this.props.cards[x])===false) {
            temp.push(this.props.cards[x]);
            
        }
        this.setState({ cardlist: temp }, () => {
            // console.log(this.state.cardlist);
        });
    
        }
    }
  }

  componentDidMount() {
    this.scramblenumbers();
  }

// function Card(props) {
    render() {

      if(this.state.cardlist.length!==0) {

        return (
          <React.Fragment>
                <div className='card-group'>
                  <div className="card text-white bg-dark mb-3">
                    <div className="card-body" onClick={() => this.select(this.state.cardlist[0].name)}>
                        <h5 className="card-title">{this.state.cardlist[0].name}</h5>
                        {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                        {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                        <p className="card-text"></p>
                    </div>
                  </div>
                  <div className="card text-white bg-dark mb-3">
                    <div className="card-body" onClick={() => this.select(this.state.cardlist[1].name)}>
                        <h5 className="card-title">{this.state.cardlist[1].name}</h5>
                        {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                        {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                        <p className="card-text"></p>
                    </div>
                  </div>
                  <div className="card text-white bg-dark mb-3">
                    <div className="card-body" onClick={() => this.select(this.state.cardlist[2].name)}>
                        <h5 className="card-title">{this.state.cardlist[2].name}</h5>
                        {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                        {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                        <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className='card-group'>
                    <div className="card text-white bg-dark mb-3">
                      <div className="card-body" onClick={() => this.select(this.state.cardlist[3].name)}>
                          <h5 className="card-title">{this.state.cardlist[3].name}</h5>
                          {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                          {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                          <p className="card-text"></p>
                      </div>
                    </div>
                    <div className="card text-white bg-dark mb-3">
                      <div className="card-body" onClick={() => this.select(this.state.cardlist[4].name)}>
                          <h5 className="card-title">{this.state.cardlist[4].name}</h5>
                          {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                          {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                          <p className="card-text"></p>
                      </div>
                    </div>
                    <div className="card text-white bg-dark mb-3">
                      <div className="card-body" onClick={() => this.select(this.state.cardlist[5].name)}>
                          <h5 className="card-title">{this.state.cardlist[5].name}</h5>
                          {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                          {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                          <p className="card-text"></p>
                      </div>
                    </div>
                  </div>
                  <div className='card-group'>
                  <div className="card text-white bg-dark mb-3">
                    <div className="card-body" onClick={() => this.select(this.state.cardlist[6].name)}>
                        <h5 className="card-title">{this.state.cardlist[6].name}</h5>
                        {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                        {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                        <p className="card-text"></p>
                    </div>
                  </div>
                  <div className="card text-white bg-dark mb-3">
                    <div className="card-body" onClick={() => this.select(this.state.cardlist[7].name)}>
                        <h5 className="card-title">{this.state.cardlist[7].name}</h5>
                        {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                        {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                        <p className="card-text"></p>
                    </div>
                  </div>
                  <div className="card text-white bg-dark mb-3">
                    <div className="card-body" onClick={() => this.select(this.state.cardlist[8].name)}>
                        <h5 className="card-title">{this.state.cardlist[8].name}</h5>
                        {/* [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>) */}
                        {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                        <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                </React.Fragment>
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

export default Card;

