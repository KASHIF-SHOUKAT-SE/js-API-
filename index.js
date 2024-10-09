const url = 'https://cat-fact.herokuapp.com/facts';
let factpara = document.querySelector("#facts");
let btn = document.querySelector("#btn")
// console.log(factpara);

// const getFacts = async()=>{
//     console.log("geting data.....");
//     let response = await fetch(url);
// console.log(response);
// let data = await response.json();
// factpara.innerText =data[0].text;
// }

function getFacts(){
    fetch(url)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        factpara.innerText =data[0].text;
    })
}

btn.addEventListener('click', getFacts)
