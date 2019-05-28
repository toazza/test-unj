/** React */
import React from "react";

/** Local */
import "../styles.css";
import Card from "./Card";

class ListaCards extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/e41qc")
      .then(response => response.json())
      .then(data => this.setState({ cards: data.cards }));
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        {cards.map(item => {
          return (
            <Card
              nome={item.partes.ativa.name}
              plano={item.partes.passiva.name}
              classe={item.classe}
              competencia={item.competencia}
              numero={item.numero}
            />
          );
        })}
      </div>
    );
  }
}

export default ListaCards;
