const allSeat= document.getElementsByClassName("seat");
 console.log(allSeat);
let count=0;
 for(const seat of allSeat){
    seat.addEventListener('click',function(e){

        count=count+1;
        const  TicketPrice=document.getElementById("ticket-price").innerText;
       const convertTicketPrice=parseInt(TicketPrice);
         const seatName=e.target.innerText+' '+"Economy"+' '+ convertTicketPrice;


         

         if(count===5){
            alert('you can book only 4 ticket');
        return;
         }
        
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

        //   document.getElementById("total-cost").innerText=convertedTotalCost+convertTicketPrice;


         const grandTotal=document.getElementById("grand-total").innerText;
         const convertGrandTotal=parseInt(grandTotal);
         const sum2= grandTotal - convertGrandTotal + sum;
         console.log(sum2);
         setInnerText("total-cost",sum);
         setInnerText("grand-total",sum2);

        document.getElementById("select-seat").innerText=count;
        
        // const coupon = document.getElementById('coupon-field').innerText;
        // if(coupon==='NEW15'){
        //    const discount= sum*0.15;
        //    sum2= sum - discount;
        //    const applyButton =document.getElementById('apply-button');
        //    applyButton.disabled = true;
           
        // }
        // else if(coupon ==='Couple 20'){
        //     const discount=sum*0.20;
        //     sum2= sum-discount;
        // }





    })

 }

 function setInnerText(id, value){
    document.getElementById(id).innerText=value;
 }

 function applyCoupon(){
    let couponInput = document.getElementById("couponInput");
    let applyButton = document.getElementById("applyButton");

    let couponCode = couponInput.value;

         if(coupon==='NEW15'){
        const discount= sum*0.15;
           sum2= sum - discount;
           const applyButton =document.getElementById('apply-button');
           applyButton.disabled = true;
           
         }
        else if(coupon ==='Couple 20'){
             const discount=sum*0.20;
             sum2= sum-discount;
         }

 }


 function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    // Validate form inputs
    if (!name || !email || !phone) {
        alert('Please fill in all fields');
        return;
    }
    
}

