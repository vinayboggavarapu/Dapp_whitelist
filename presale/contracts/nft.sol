//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
contract nft{
    mapping(address=>bool) people;
    uint8 currentpeople;
    uint8 maxpeople;
    constructor(uint8 _maxpeople){
        maxpeople=_maxpeople;
    }
    function mint() public{
        require(people[msg.sender]==false,"You already have a whitelist spot");
        require(currentpeople<=maxpeople,"No more Whitelist spots available");
        people[msg.sender]=true;
        currentpeople+=1;
    }

}