import React, { useEffect, useState } from "react";
import CryptoCoders from "./contracts/CryptoCoders.json";
import getWeb3 from "./getWeb3";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

const App = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");

  const loadWeb3Account = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    if(accounts) {
      setAccount(accounts[0])
    }
  }

  const loadWeb3Contract = async (web3) => {
    const networkId = await web3.eth.net.getId()
    const networkData = CryptoCoders.networks[networkId]

    if(networkData) {
      const abi = CryptoCoders.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      setContract(contract)
      return contract
    }
  }

  useEffect(async() => {
    const web3 = await getWeb3()
    await loadWeb3Account(web3)
    await loadWeb3Contract(web3)
  }, [])

  return (
    <div>
      <nav className="navbar navbar-light bg-light px-4">
        <a className="navbar-brand" href="#">Crypto Coders</a>
        <span>Name</span>
      </nav>
      <div className="container-fluid mt-5">
      <div className="row">
        <div className="col d-flex flex-column align-items-center">
          <img className="mb-4" src="https://avatars.dicebear.com/api/pixel-art/naz.svg" alt="" width="72"/>
          <h1 className="display-5 fw-bold">Crypto Coders</h1>
          <div className="col-6 text-center mb-3" >
            <p className="lead text-center">These are some of the most highly motivated coders in the world! We are here to learn coding and apply it to the betterment of humanity. We are inventors, innovators, and creators</p>
            <div>
              <input 
                type="text"
                className="form-control mb-2"
                placeholder="e.g. Naz" />
              <button className="btn btn-primary">Mint</button>
            </div>
          </div>
          <div className="col-8 d-flex justify-content-center flex-wrap">
            <div className="d-flex flex-column align-items-center">
              <img width="150" src={`https://avatars.dicebear.com/api/pixel-art/naz.svg`} />
              <span>coder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
