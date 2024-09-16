// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SupplyChainContract {


     struct Proposal {
        string name;
        address proposedAddress;
        uint256 voteCount;
        uint256 totalVoteCount;
        string primaryProduer;
        bool isActive;
    }



    
    address public owner;
    address[] public availableAddresses;
    mapping(address => bool) public isAvailable;
    mapping(address => bool) public hasVoted;
    mapping(address => uint256) public voteCount;
    mapping(address => Actors) public actors;
    mapping(address => bool) voters;
    uint256 public totalAddresses;
    uint256 public voteThreshold = 70; // 70%
    address[] public votersAddress;
    uint256 private nonce = 0;
    Actors[] public actorsData;
    Lot[] public lots;
    Proposal[] public previousProposals;

    Proposal public currentProposal;


   

     struct Actors {
        string actorName;
        string priamryProducer;
    }


     struct Lot {
        string stage;
        string details;
        uint256 quantity;
        string location;
        uint256 timestamp;
        address source;
        uint256 chainId;
        address creator;
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier onlyMembers() {
        require(isAvailable[msg.sender], "Only members can perform this action");
        _;
    }


    constructor() {
        owner = msg.sender;
        addAddress(owner); // Adding the owner to the availableAddresses list
        // actors[msg.sender].actor = "Creator";
    }

    function addAddress(address _address) private {
        require(!isAvailable[_address], "Address is already available");
        availableAddresses.push(_address);
        isAvailable[_address] = true;
        totalAddresses++;
        // emit AddressAdded(_address);
    }

    function proposeAddress(address _address, string memory name, string memory isPrimary) public onlyMembers {
        require(!currentProposal.isActive, "There is already an active proposal");
        currentProposal.proposedAddress = _address;
        currentProposal.name = name;
        currentProposal.voteCount = 0;
        currentProposal.totalVoteCount = 0;
        currentProposal.isActive = true;
        currentProposal.primaryProduer = isPrimary;
        // emit AddressProposed(_address);
    }

    function vote(bool voteResult) public onlyMembers {
        require(currentProposal.isActive, "No active proposal");
        require(!voters[msg.sender], "You have already voted");

        voters[msg.sender] = true;
        votersAddress.push(msg.sender);
        currentProposal.totalVoteCount++;
        if (voteResult) {
        currentProposal.voteCount++;
        }


        if (currentProposal.voteCount * 100 / totalAddresses >= voteThreshold) {
            addAddress(currentProposal.proposedAddress);
            currentProposal.isActive = false;
            previousProposals.push(Proposal(currentProposal.name, currentProposal.proposedAddress, currentProposal.voteCount, currentProposal.totalVoteCount, currentProposal.primaryProduer, currentProposal.isActive));
            actors[currentProposal.proposedAddress].actorName = currentProposal.name;
            actors[currentProposal.proposedAddress].priamryProducer = 'true';
            // actors[currentProposal.proposedAddress].priamryProducer = currentProposal.isPrimaryProducer;
            actorsData.push(Actors(currentProposal.name, 'true'));
            for (uint i=0; i<votersAddress.length; i++) {   
                voters[votersAddress[i]] = false;
            }
            delete votersAddress;
        } else if (getAvailableAddressesCount() == currentProposal.totalVoteCount) {
            currentProposal.isActive = false;
            previousProposals.push(Proposal(currentProposal.name, currentProposal.proposedAddress, currentProposal.voteCount, currentProposal.totalVoteCount, currentProposal.primaryProduer, currentProposal.isActive));
            for (uint i=0; i<votersAddress.length; i++) {
                voters[votersAddress[i]] = false;
            }
            delete votersAddress;
        }
    }

    function addLot(string memory stage,
        string memory details,
        uint256 quantity,
        string memory location,
        uint256 timestamp,
        address source,
        uint256 chainId) public {
            require(getIfAdressIsMember(source), "Address is not a member");
            lots.push(Lot(stage, details, quantity, location, timestamp, source, chainId, msg.sender));
        }

    function getAllLotsCount() public view returns (uint256) {
        return lots.length;
    }

    function getSingleLot(uint256 index) public view returns (string memory,
        string memory,
        uint256,
        string memory,
        uint256,
        address,
        address
        ) {
            return (lots[index].stage, lots[index].details, lots[index].quantity, lots[index].location, lots[index].timestamp, lots[index].source, lots[index].creator);
        }

    function getSingleLotWithChainId(uint256 index) public view returns (string memory,
    uint256,
        uint256,
        string memory,
        uint256,
        address,
        address
        ) {
            return (lots[index].stage, lots[index].chainId, lots[index].quantity, lots[index].location, lots[index].timestamp, lots[index].source, lots[index].creator);
        }
    function getRandomNumber() public returns (uint256) {
        nonce++;
        return uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender, nonce))) % 100;
    }

    function getAvailableAddresses() public view returns (address[] memory) {
        return availableAddresses;
    }

    function getAvailableAddressesCount() public  view returns  (uint256) {
        return availableAddresses.length;
    }

    function getIfSenderIsMember() public view returns (bool) { 
        for (uint i=0; i<availableAddresses.length; i++) {
            if (availableAddresses[i] == msg.sender) return true;
         }
         return false;
    }

    function getIfAdressIsMember(address _address) public view returns (bool) {
        for (uint i=0; i<availableAddresses.length; i++) {
            if (availableAddresses[i] == _address) return true;
         }
         return false;
     }

    function votedInCurrentProposal() public view returns (bool) { 
       if (voters[msg.sender] == true) {
        return true;
       } else {
        return false;
       }
    }

    function getNumberOfPreviousProposal() public view returns (uint) { 
        return previousProposals.length;
    }

    function getPreviousProposalDetails(uint256 index) public view returns (
    string memory name,
    address proposedAddress, 
    uint256 voteCounts, 
    uint256 totalVoteCount, 
    bool isActive
) {
    return (
        previousProposals[index].name,
        previousProposals[index].proposedAddress,
        previousProposals[index].voteCount,
        previousProposals[index].totalVoteCount,
        previousProposals[index].isActive
    );
}



    function getProposalDetails() public view returns (
    string memory name,
    address proposedAddress, 
    uint256 voteCounts, 
    uint256 totalVoteCount, 
    bool isActive
) {
    return (
        currentProposal.name,
        currentProposal.proposedAddress,
        currentProposal.voteCount,
        currentProposal.totalVoteCount,
        currentProposal.isActive
    );
}

}