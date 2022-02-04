
import React, {Component} from 'react';
// import axios from 'axios';


// export default function App() {
//   axios.get('../db.json').then(res=>console.log(res.data.cards))
  
//       return (
//         <>
          
//           {/* <img alt='1' src={require('./assets/shampoo_1.1.png')} />
//           <img alt='2' src={require('./assets/shampoo_1.2.png')}/>
//           <img alt='3' src={require('./assets/shampoo_2.1.png')}/>
//           <img alt='4' src={require('./assets/shampoo_2.2.png')}/>
//           <img alt='5' src={require('./assets/shampoo_3.1.png')}/>
//           <img alt='6' src={require('./assets/shampoo_3.2.png')}/> */}
          
//     </>
//   )
// };

import axios from 'axios';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ image, name }) => (
      <li>
        <img src={image[0]} alt={name}/>
        {name}
      </li>
    ))}
  </ul>
);

export default class App extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/cards')
    .then(response => this.setState({ articles: response.data }))
  }

  render() {
    const { articles } = this.state;

    return articles.length > 0 ? <ArticleList articles={articles} /> : null;
  }
}