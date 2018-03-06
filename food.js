import React from 'react';
import ReactDOM from 'react-dom';

const pizza = {
  src: 'https://www.chowstatic.com/assets/2014/11/31178_slow_cooker_pork_ramen_3000.jpg'
  alt: 'Ramen'
  width: '100px'
};

class Pizza extends React.Component {
  render(){
    return (
      <div>
        <img
          src = {pizza.src}
          alt = {pizza.alt}
          width = {pizza.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <Pizza />,
  document.getElementById('food')
);
