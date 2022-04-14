/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeMath, SafeMathInterface } from "../SafeMath";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "exp2",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "ln",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "log2",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "mul2",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "pow",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x610b7b61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c806324d4e90a146100665780632e4c697f1461008b5780634b3f2ba91461009e5780635456bf13146100b1578063a75826ae146100c4575b600080fd5b610079610074366004610ace565b6100d7565b60405190815260200160405180910390f35b610079610099366004610ae7565b610109565b6100796100ac366004610ae7565b61014f565b6100796100bf366004610ace565b61015b565b6100796100d2366004610ace565b6101f4565b60006714057b7ef767814f6100eb8361015b565b670de0b6b3a7640000028161010257610102610b09565b0492915050565b60008260000361013157811561012057600061012a565b670de0b6b3a76400005b9050610149565b6101466100d26101408561015b565b8461014f565b90505b92915050565b6000610146838361022a565b6000670de0b6b3a764000082101561017257600080fd5b6000610187670de0b6b3a764000084046102e6565b670de0b6b3a7640000808202935090915083821c908190036101aa575050919050565b6706f05b59d3b200005b80156101ec57670de0b6b3a7640000828002049150671bc16d674ec8000082106101e4579283019260019190911c905b60011c6101b4565b505050919050565b6000680a688906bd8b000000821061020b57600080fd5b670de0b6b3a7640000604083901b04610223816103d2565b9392505050565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061025757600080fd5b600080670de0b6b3a7640000620400007faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac1066982898b0994506706f05b59d3b1ffff85119350856000036102be5783670de0b6b3a7640000880401975050505050505050610149565b838160018485600003040189881189030284888b030417020197505050505050505092915050565b6000600160801b821061030657608091821c916103039082610b1f565b90505b68010000000000000000821061032957604091821c916103269082610b1f565b90505b640100000000821061034857602091821c916103459082610b1f565b90505b62010000821061036557601091821c916103629082610b1f565b90505b610100821061038157600891821c9161037e9082610b1f565b90505b6010821061039c57600491821c916103999082610b1f565b90505b600482106103b757600291821c916103b49082610b1f565b90505b600282106103cd576103ca600182610b1f565b90505b919050565b600160bf1b6780000000000000008216156103f65768016a09e667f3bcc9090260401c5b674000000000000000821615610415576801306fe0a31b7152df0260401c5b672000000000000000821615610434576801172b83c7d517adce0260401c5b6710000000000000008216156104535768010b5586cf9890f62a0260401c5b670800000000000000821615610472576801059b0d31585743ae0260401c5b67040000000000000082161561049157680102c9a3e778060ee70260401c5b6702000000000000008216156104b05768010163da9fb33356d80260401c5b6701000000000000008216156104cf57680100b1afa5abcbed610260401c5b66800000000000008216156104ed5768010058c86da1c09ea20260401c5b664000000000000082161561050b576801002c605e2e8cec500260401c5b662000000000000082161561052957680100162f3904051fa10260401c5b6610000000000000821615610547576801000b175effdc76ba0260401c5b660800000000000082161561056557680100058ba01fb9f96d0260401c5b66040000000000008216156105835768010002c5cc37da94920260401c5b66020000000000008216156105a1576801000162e525ee05470260401c5b66010000000000008216156105bf5768010000b17255775c040260401c5b658000000000008216156105dc576801000058b91b5bc9ae0260401c5b654000000000008216156105f957680100002c5c89d5ec6d0260401c5b652000000000008216156106165768010000162e43f4f8310260401c5b6510000000000082161561063357680100000b1721bcfc9a0260401c5b650800000000008216156106505768010000058b90cf1e6e0260401c5b6504000000000082161561066d576801000002c5c863b73f0260401c5b6502000000000082161561068a57680100000162e430e5a20260401c5b650100000000008216156106a7576801000000b1721835510260401c5b6480000000008216156106c357680100000058b90c0b490260401c5b6440000000008216156106df5768010000002c5c8601cc0260401c5b6420000000008216156106fb576801000000162e42fff00260401c5b6410000000008216156107175768010000000b17217fbb0260401c5b640800000000821615610733576801000000058b90bfce0260401c5b64040000000082161561074f57680100000002c5c85fe30260401c5b64020000000082161561076b5768010000000162e42ff10260401c5b64010000000082161561078757680100000000b17217f80260401c5b63800000008216156107a25768010000000058b90bfc0260401c5b63400000008216156107bd576801000000002c5c85fe0260401c5b63200000008216156107d857680100000000162e42ff0260401c5b63100000008216156107f3576801000000000b17217f0260401c5b630800000082161561080e57680100000000058b90c00260401c5b63040000008216156108295768010000000002c5c8600260401c5b6302000000821615610844576801000000000162e4300260401c5b630100000082161561085f5768010000000000b172180260401c5b62800000821615610879576801000000000058b90c0260401c5b6240000082161561089357680100000000002c5c860260401c5b622000008216156108ad5768010000000000162e430260401c5b621000008216156108c757680100000000000b17210260401c5b620800008216156108e15768010000000000058b910260401c5b620400008216156108fb576801000000000002c5c80260401c5b6202000082161561091557680100000000000162e40260401c5b6201000082161561092f576801000000000000b1720260401c5b61800082161561094857680100000000000058b90260401c5b6140008216156109615768010000000000002c5d0260401c5b61200082161561097a576801000000000000162e0260401c5b6110008216156109935768010000000000000b170260401c5b6108008216156109ac576801000000000000058c0260401c5b6104008216156109c557680100000000000002c60260401c5b6102008216156109de57680100000000000001630260401c5b6101008216156109f757680100000000000000b10260401c5b6080821615610a0f57680100000000000000590260401c5b6040821615610a27576801000000000000002c0260401c5b6020821615610a3f57680100000000000000160260401c5b6010821615610a57576801000000000000000b0260401c5b6008821615610a6f57680100000000000000060260401c5b6004821615610a8757680100000000000000030260401c5b6002821615610a9f57680100000000000000010260401c5b6001821615610ab757680100000000000000010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b600060208284031215610ae057600080fd5b5035919050565b60008060408385031215610afa57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601260045260246000fd5b60008219821115610b4057634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212204cee92dabb83ba2bf9031989a9aca25e8b50a50b2ecb93faa4a330bbf160ee7b64736f6c634300080d0033";

type SafeMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeMath__factory extends ContractFactory {
  constructor(...args: SafeMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SafeMath";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeMath> {
    return super.deploy(overrides || {}) as Promise<SafeMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SafeMath {
    return super.attach(address) as SafeMath;
  }
  connect(signer: Signer): SafeMath__factory {
    return super.connect(signer) as SafeMath__factory;
  }
  static readonly contractName: "SafeMath";
  public readonly contractName: "SafeMath";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeMathInterface {
    return new utils.Interface(_abi) as SafeMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeMath {
    return new Contract(address, _abi, signerOrProvider) as SafeMath;
  }
}