import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Board组件完全控制了Square组件，Square为受控组件
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }
// 函数组件，只接收props,没有this,纯净组件，没有副作用
function Square(props) {
  return (
    //   调用父级方法不需要再使用箭头函数，当成属性来使用
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       squares: Array(9).fill(null),
  //       xIsNext: true,
  //     };
  //   }

//   handleClick(i) {
//     if (calculateWinner(this.state.squares) || this.state.squares[i]) {
//       return;
//     }
//     console.log(this.state.squares.slice());
//     const squares = this.state.squares.slice(); // slice不传参可以返回一个新数组
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({ squares, xIsNext: !this.state.xIsNext });
//   }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = "Winner:" + winner;
    // } else {
    //   status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    // }
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // console.log(this.state.squares.slice());
    // const squares = this.state.squares.slice(); // slice不传参可以返回一个新数组
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ 
        // squares, 
        // concat不改变原数组
        history: history.concat([{squares}]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext 
    });
  }
  jumpTo(step){
    this.setState({
      stepNumber:step,
      xIsNext:(step%2) === 0,
    })
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares); // 把当前的步骤传到winner方法中

    const moves = history.map((step,move)=>{
      const desc = move ? 
        'Go to move #' + move:
        'Go to game statr';
      return (
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if(winner){
        status = "winner:" + winner;
    }else {
        status = 'next player' + (this.state.xIsNext ? "X" : "O")
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
           squares={current.squares}
           onClick={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
