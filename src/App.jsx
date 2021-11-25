import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  /*
  * Just a state variable we use to store our user's public wallet.
  */
  const [currentAccount, setCurrentAccount] = useState("");
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }
      
      /*
      * Check if we're authorized to access the user's wallet
      */
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }
  


 /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error)
    }
  }






  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  
  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        👋 hallo
        </div>

<p> </p>

         <div className="bio">
        hi, my name is matias
        </div>

<p> </p>



        {/*
        * If there is no currentAccount render this button
        */}

        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

<p> </p>
<p> </p>

        <div>
        all living organisms, whether the smallest bacteria or a global civilization, temporarily defy this trend by importing and metabolizing energy
        </div>


<p> </p>
<p> </p>

        <button className="waveButton" onClick={null}>
          Wave at Me
        </button>
        
      </div>
    </div>
  );
}

export default App