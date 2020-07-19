//getting all the elements 
let main_container=document.querySelector(".main_container");
let input_container=document.querySelector(".input_container");
let handle=document.querySelector('#handle');
let count=document.querySelector('#count');
let button=document.querySelector('#button');
let table=document.querySelector('#table');

var prb_name=[];
var prb_rating=[];
var prb_id=[];

button.addEventListener('click',()=>{
    let handle_value=handle.value;
    let count_value=count.value;
    let url=`https://codeforces.com/api/user.status?handle=${handle_value}&from=1&count=${count_value}`
    fetch(url)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            data=data['result']
            //===============================================================================//
            //
            //              CREATING THE TABLE
            //           -----------------------------
            //
            //===============================================================================//

            //creating the first table header
        
    
            let new_number=document.createElement('td');
            new_number.innerText="Serial Number";

            let new_id=document.createElement('td');
            new_id.innerText="Problem ID";

            let new_name=document.createElement('td');
            new_name.innerText="Problem Name";

            let new_rating=document.createElement('td');
            new_rating.innerText="Problem Rating";

            let new_row=document.createElement('tr');
            new_row.appendChild(new_number);
            new_row.appendChild(new_id);
            new_row.appendChild(new_name);
            new_row.appendChild(new_rating);

            table.appendChild(new_row);
            //filtering only the correct answers

            for(let i=0;i<data.length;i++){
                if(data[i]['verdict']=="OK"){
                    //appending the necessary items into lists for later use
                    prb_name.push(data[i]['problem']['name']);
                    prb_rating.push(data[i]['problem']['rating']);
                    prb_id.push(data[i]['id']);


                    //pushing the items into the list 
                    let new_number=document.createElement('td');
                    new_number.innerText=i;

                    let new_id=document.createElement('td');
                    new_id.innerText=data[i]['id'];

                    let new_name=document.createElement('td');
                    new_name.innerText=data[i]['problem']['name'];

                    let new_rating=document.createElement('td');
                    new_rating.innerText=data[i]['problem']['rating'];

                    let new_row=document.createElement('tr');
                    new_row.appendChild(new_number);
                    new_row.appendChild(new_id);
                    new_row.appendChild(new_name);
                    new_row.appendChild(new_rating);

                    table.appendChild(new_row);






                }
            }
           
        })

 console.log(prb_name);
console.log(prb_rating);
console.log(prb_id);
})



