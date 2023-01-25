import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";
 

import {  providers } from "ethers";
 

export default function Home({children}) {


   

  const { library, chainId, account, activate, deactivate, active } = useWeb3React();
  const [name, setName] = useState()
  const [ENS, setENS] = useState()
  const [loading, setLoading] = useState(false)



  // Set MM/walletConnect provider in localStorage
  const setProvider = (type) => { window.localStorage.setItem("provider", type) };

  // Unset MM/walletConnect provider in localStorage
  const refreshState = () => { window.localStorage.setItem("provider", undefined) };

  const disconnect = () => {
    refreshState();
    deactivate();
    setName()
  };

 

  const lookupENS = async () => {
    const provider = await library.provider;
    const web3Provider = new providers.Web3Provider(provider)
    console.log({ account })
    const _ens = await web3Provider.lookupAddress(account)
    if (_ens) setENS(_ens)
  }


 
  const connectWalletConnect = async () => {
    let isCancelled = false;
    await activate(connectors.walletConnect, (e,r) => {
      
      isCancelled = true;
    });

    if (!isCancelled) {
      setProvider("walletConnect");
      localStorage.setItem("auth", true)
      window.alert("Connected Successfully");
    }
  }


  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, [activate]);

  useEffect(() => {
    if (!account) return;
    if (!library) return;
    lookupENS().then(() => {
      console.log("DONE")
    }).catch(err => console.log('err', err))

  }, [account, library])

  return (

    <div  >
  
      {
        !account && (
          <>
            <div onClick={connectWalletConnect}  > {children}</div>
          </>
        )
      }
    </div>

  );
}
