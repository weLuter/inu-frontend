import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  InjectedConnector,
  Provider,
  WalletConnectConnector,
  WalletLinkConnector,
  chain,
  defaultChains,
} from 'wagmi'

function App() {
  const infuraId = "https://eth-mainnet.alchemyapi.io/v2/ecaT_TfjLePnUovRaZAHTMlBg1dhQNRT"
  const chains = defaultChains
  const connectors = ({ chainId }) => {
    const rpcUrl =
      chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
      chain.mainnet.rpcUrls[0]
    return [
      new InjectedConnector({ chains }),
      new WalletConnectConnector({
        options: {
          infuraId,
          qrcode: true,
        },
      }),
      new WalletLinkConnector({
        options: {
          appName: 'Inu Capital',
          jsonRpcUrl: `${rpcUrl}/${infuraId}`,
        },
      }),
    ]
  }


  return (
      <Router>
        <div className="h-screen w-full bg-slate-300 dark:bg-slate-700">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Provider autoConnect connectors={connectors}><Dashboard/></Provider>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
