import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './Root'
import About from './About';
import PokemonCard from './PokemonCard';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import Pokedex from './Pokedex';

const router = createHashRouter([
  {
    path:"/",
    element:<Root/>,

    children:[
   {
      path:"/",
      element:<App />,
    },
    {
        path:"/about",
        element:<About />
    },
    {
      path:"/pokedex",
      element:<Pokedex/>
    },
    {
      path:"/pokemon",
      element:<PokemonCard />
    },
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<RouterProvider router={router}/>}
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
