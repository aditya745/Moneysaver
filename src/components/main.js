import React, { Component } from "react";

class Test extends Component {
  state = {
    n: ""
  };
  calculate = (n, prices, pieces) => {
    const packUnits = Math.floor(n / pieces[1]);
    const boxUnits = Math.floor(n / pieces[2]);
    const remainingBottles = n - pieces[1] * packUnits;
    const remainingPacks = n - boxUnits * pieces[2];
    const finalPacks = Math.floor(remainingPacks / pieces[1]);
    const finalIndividuals =
      n - (boxUnits * pieces[2] + finalPacks * pieces[1]);

    if (n < pieces[1] && n > pieces[0]) {
      alert(
        `It is better to buy ${n} bottles which will cost ${n * prices[0]}`
      );
    } else if (n >= pieces[1] && n < pieces[2]) {
      alert(
        `it is better to buy ${n} bottles as ${packUnits} packs and ${remainingBottles} as individual bottles which will cost ${packUnits *
          prices[1] +
          remainingBottles * prices[0]}`
      );
    } else if (n >= pieces[2]) {
      alert(
        `it is better to buy ${n} bottles as ${boxUnits} boxes and ${finalPacks} as packs and ${finalIndividuals} as individual bottles which will cost ${boxUnits *
          prices[2] +
          finalPacks * prices[1] +
          finalIndividuals * prices[0]}`
      );
    }
  };
  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const pricelist = [
      {
        piece: { name: "Bottle", quantity: 1, price: 4.1 },

        pack: { name: "11-pack", quantity: 11, price: 40 },

        box: { name: "Big box", quantity: 264, price: 950 }
      }
    ];
    console.log(pricelist);
    return (
      <div>
        <table>
          <tbody>
            {pricelist.map(item => (
              <div>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tr>
                  <td>{item.piece.name}</td>
                  <td>{item.piece.quantity}</td>
                  <td>{item.piece.price}</td>
                </tr>

                <tr>
                  <td>{item.pack.name}</td>
                  <td>{item.pack.quantity}</td>
                  <td>{item.pack.price}</td>
                </tr>

                <tr>
                  <td>{item.box.name}</td>
                  <td>{item.box.quantity}</td>
                  <td>{item.box.price}</td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
        <br/>
        <input
          type="number"
          name="n"
          value={this.state.n}
          onChange={this.updateInput}
        />
        <button
          onClick={() =>
            this.calculate(this.state.n, [4.1, 40, 950], [1, 11, 11 * 24])
          }
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Test;
