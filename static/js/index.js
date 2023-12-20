import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    BrowserRouter
} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';


//const { provider } = configureChains(chains, [w3mProvider({ projectId })])
// Wagmi client

/*const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)*/
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <
    BrowserRouter >

    <
    ScrollToTop / >
    <
    App / >




    <
    /BrowserRouter>
);