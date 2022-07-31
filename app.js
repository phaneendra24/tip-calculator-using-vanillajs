const inputField = document.querySelector('.billInput');
const peopleInput = document.querySelector('.people-input');
const submitbtn = document.querySelector('.submitBtn');
const tipdisplay = document.querySelector('.tipvalue');
const totaldisplay = document.querySelector('.totalvalue');
const numofPeople = document.querySelector('.people-input');
let tipamount;
let save;
save=inputField.value
const btn1 =document.querySelector('.btn1');
const btn2 =document.querySelector('.btn2');
const btn3 =document.querySelector('.btn3');
const btn4 =document.querySelector('.btn4');
const btn5 =document.querySelector('.btn5');
const btn6 =document.querySelector('.btn6');

const btnarray = [btn1,btn2,btn3,btn4,btn5,btn6]
btnarray.forEach(
        (btn) => {
            btn.addEventListener('click',()=> {
                btn.classList.add('percentStyle')
                 save=inputField.value
                
                const btnvalue = btn.value;

                tipamount = save*(btnvalue/100)
            });
        }
        )
        
let count = 1;
submitbtn.addEventListener('click',add);
function add(){
    if(save.length==0){
        alert("please enter the value")
    }
    else{
        if(count===1)
        {
            //code for the calculation of no of people
            let peopleCount = numofPeople.value
            
            console.log(peopleCount);
        
        let newvalue =document.createElement('h1')
        let totalTip = tipamount/peopleCount
        console.log(totalTip);
        newvalue.innerText= totalTip
        tipdisplay.appendChild(newvalue)
        const TotalAmount = (parseInt(tipamount)+parseInt(save))/peopleCount
        const totaledDisplay =document.createElement('h1')
        totaledDisplay.innerText= TotalAmount
        totaldisplay.appendChild(totaledDisplay)
        count++
        tipamount=''
        num=''
        newvalue=''
    }
    else{
        alert("plz change the value")
    }
   }
}
