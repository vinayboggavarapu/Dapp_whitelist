import React,{useEffect,useState,useRef} from 'react'
import style from '../styles/white.module.css'
import {Contract, ethers, providers} from 'ethers'
import Image from 'next/image'
import Web3Modal from 'web3modal'
import {ABI, CONTRACT_ADDRESS} from '../const/constants'

function Whitelist() {
  const [walletconnected,setwalletconnected]=useState(false);
  const [wallet,setwallet]=useState('Connect Wallet');
  const [isinwhitelist,setiswhitelisted]=useState(false);
  const [joinedwhitelist,setjoinedwhitelist]=useState(false);
  const [loadin,setloadin]=useState(false);
  const web3modal=useRef()
  
  const getSignerOrProvider=async (needSigner=false)=>{
    try {
      const provider=await web3modal.current.connect();
      const web3Provider=new providers.Web3Provider(provider);
      const {chainid}=await web3Provider.getNetwork();
      if(chainid!=80001){
        alert("Change network to Mumbai");
        throw new Error("Change network to Polygon Mumbai Testnet");
      }  
      if(needSigner){
        const signer=web3Provider.getSigner();
        console.log('hi');
        return signer;
      }
      return web3Provider;
    } catch (err) {
      console.error(err);
    }
  }

  const providerOptions=()=>{}

  useEffect(()=>{
    if(!walletconnected){
      web3modal.current=new Web3Modal({
        network:"mumbai",
        providerOptions
      });
    }

  },[walletconnected]);
  
  
  const Fire=async()=>{
      try {
        if(walletconnected===false){
          setwalletconnected(true);
          getSignerOrProvider();
          currentwhiltelisted;
          inwhitelist;
          setwallet('Connected');
          
        }
      } catch (err) {
        console.error(err);
      }
  }

  const currentwhiltelisted=()=>{
    try {
      const signer=getSignerOrProvider(true);
      const listerscontract=new Contract(ABI,CONTRACT_ADDRESS,signer);
      const currentwhitelisters=listerscontract.currentpeople;
      console.log(currentwhitelisters);
    } catch (err) {
      console.error(err);  
    }
  }

  const inwhitelist=async ()=>{
    try {
      const signer=getSignerOrProvider(true);
      const checkcontract=new Contract(ABI,CONTRACT_ADDRESS,signer);
      const value=await signer.getAddress()
      const inwhitelist=checkcontract.people[value];
      console.log(inwhitelist)
    } catch (err) {
      console.log(err);

    }
  }
  
  const joinwhitelist=async ()=>{
    try {
      const signer=await getSignerOrProvider(true);
      const addcontract=new Contract(CONTRACT_ADDRESS,ABI,signer);
      const add=await addcontract.mint();
      setloadin(true);
      await add.wait();
      setloadin(false);
      setjoinedwhitelist(true);
      console.log(joinedwhitelist)
    } catch (err) {
      console.log("err");
    }

  }
  
  const renderButton=()=>{
    if(walletconnected){
      if (joinedwhitelist) {
        console.log('done');
        return(<div>Thank you for joining the Whitelist</div>)
      } 
      else if(loadin) {
          return(<button>Please Wait</button>) 
      }
      else if(!joinedwhitelist){
        return(<button onClick={joinwhitelist}>Join Whitelist</button>) 
      }
    }
    else{
      return(<button onClick={Fire}>{wallet}</button>);
    }
  }


  return (
    <div className={style.clk}>
      <h3>Lets create a ecosystem of web3 use cases</h3>
      <Image src={require('../public/earth.gif')}></Image>
      <div>{renderButton()}</div>
    </div>
  )
}

export default Whitelist