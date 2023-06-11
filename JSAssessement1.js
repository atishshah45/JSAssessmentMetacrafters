/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [ ];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name,_skin_color,_shirt_type,_pant_type,_cost,_age,_bling){
    const NFT ={
        "name": _name,
        "skinColor": _skin_color,
        "shirtType": _shirt_type,
        "PantType": _pant_type,
        "Cost": _cost,
        "Age":_age,
        "bling": _bling
         
    }
    NFTs.push(NFT);
    console.log("Minted: "+ _name);
}

var TransactionId = "37y2ej2u73u339";

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(){
    for(let i =0;i<NFTs.length;i++){
        console.log("\nID:\t\t\t"+(i+1));
        console.log("Name: \t\t"+NFTs[i].name);
        console.log("Skin color:\t"+NFTs[i].skinColor);
        console.log("Shirt Type:\t"+NFTs[i].shirtType);
        console.log("Pant Type: \t"+NFTs[i].PantType);
        console.log("Cost: \t\t"+NFTs[i].Cost);
        console.log("Age: \t\t"+NFTs[i].Age);
        console.log("Bling: \t\t"+NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply(){
    console.log("\nThe total NFTs minted are: "+NFTs.length);
}

// call your functions below this line
mintNFT("Crow","Black","Full Sleeve","Shorts",4500,13,"Gold chain");
mintNFT("Dog","Yellow","Half Sleeve","trouser",5000,12,"Silver chain");
mintNFT("Cat","Grey","Full Sleeve","Jeans",3000,7,"Bronze chain");
mintNFT("Bota","White","Hoodie","Shorts",7000,20,"Diamond chain");
mintNFT("Aorma","Red","Formal","Formal",10000,11,"Platinum chain");
listNFTs();
getTotalSupply();
console.log(id);
console.log("\nThe transaction id is: " +TransactionId);
