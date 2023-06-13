import logo from '../assets/logo.png';
import tomate from '../assets/frutas/Tomate.png';
import brocolis from '../assets/frutas/Brócolis.png';
import batata from '../assets/frutas/Batata.png';
import pepino from '../assets/frutas/Pepino.png';
import abobora from '../assets/frutas/Abóbora.png';

const mocksBasket = {
  top: {
    title: "Detalhe da cesta",
  },
  details: {
    name: "Cesta de Verduras",
    url: logo,
    author: "Jenny Jack Farm",
    description: "Uma cesta com produtos selecionados cuidadosamente da fazendo direto para sua cozinha",
    price: '40.00',
    button: 'Comprar',
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        url: tomate,
      },
      {
        name: "Brócolis",
        url: brocolis,
      },
      {
        name: "Batata",
        url: batata,
      },
      {
        name: "Pepino",
        url: pepino,
      },
      {
        name: "Abóbora",
        url: abobora,
      }
    ]
  }
}

export default mocksBasket;