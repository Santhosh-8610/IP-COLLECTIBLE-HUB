import CollectiblesJSON from './Collectibles.json'
import { ethers } from "ethers";
import Web3Modal from "web3modal";



export const CollectiblesAddress = "0xEc193d7eF7d40C9bDc7411836D06E9C2749573f1";

export const CollectiblesABI = CollectiblesJSON.abi;


if (!window.ethereum) {
    alert('Meta Mask Not Found')
    window.open("https://metamask.io/download/")
} 


        // const signer = providers.getSigner();
        // const contract = fetchContract(signer);

        // return contract;

const web3modal = new Web3Modal();
const connection = await web3modal.connect();
const provider = new ethers.providers.Web3Provider(connection);
// export const provider = new ethers.providers.Web3Provider(window.ethereum);
// console.log(provider);
export const signer = provider.getSigner();


export const contract = new ethers.Contract(CollectiblesAddress, CollectiblesABI, signer);
// console.log(contract);