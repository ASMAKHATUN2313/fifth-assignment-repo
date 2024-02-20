const allSeat= document.getElementsByClassName("seat");
 //console.log(allSeat);
let count=0;
 for(const seat of allSeat){
    seat.addEventListener('click',function(e){

        count=count+1;

        if(count>=5){
         alert('you can book only 4 ticket');
         return;
      }
        const  TicketPrice=document.getElementById("ticket-price").innerText;
       const convertTicketPrice=parseInt(TicketPrice);
         const seatName=e.target.innerText+' '+"Economy"+' '+ convertTicketPrice;

     const availableSeat=document.getElementById('available-seat');
     const availableSeat2=availableSeat.innerText;
     const convertAvailableSeat= parseInt(availableSeat2);
     const newSeat=convertAvailableSeat -1;
     availableSeat.innerText = newSeat;
         

         
        
         //document.getElementById("li").appendChild(seatName);
         const SelectedContainer=document.getElementById("selected-seat-container") ;
         
         const li=document.createElement("li");
         const p=document.createElement('p');
         p.innerText=seatName;

         li.appendChild(p);
         SelectedContainer.appendChild(li);

         const totalCost=document.getElementById("total-cost").innerText;
         
         const convertedTotalCost=parseInt(totalCost);

         let sum= convertTicketPrice + convertedTotalCost;

           document.getElementById("total-cost").innerText=convertedTotalCost+convertTicketPrice;


         // const grandTotal=document.getElementById("grand-total").innerText;
         // const convertGrandTotal=parseInt(grandTotal);
         // const sum2= grandTotal - convertGrandTotal + sum;
         

        document.getElementById("select-seat").innerText=count;
        
        


         //setInnerText("total-cost",sum);
         // setInnerText("grand-total",sum2);

    })

 }

 function setInnerText(id, value){
    document.getElementById(id).innerText=value;
 }

 function coupon(){
   let couponInput = document.getElementById("coupon-field");
        //let applyButton = document.getElementById("apply-button");
        
         let coupon= couponInput.value;

         console.log(coupon);
         let grandTotal=document.getElementById('grand-total');


         let totalPrice=  document.getElementById('total-cost').innerText;
         let convertTotalPrice=parseInt(totalPrice);

        if(coupon==='NEW15'){
          
         const discount= convertTotalPrice*0.85;
         grandTotal.innerText=discount;
         document.getElementById("coupon-input").classList.add('hidden');
         console.log(grandTotal);

          
        }
       else if(coupon ==='Couple 20'){
           const discount=convertTotalPrice*0.80;
           grandTotal.innerText=discount;
           document.getElementById("coupon-input").classList.add('hidden');
         }
         else{
            alert("Enter correct coupon");
         }
        


}

