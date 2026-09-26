let cart = [];



function addToCart(name, price){


let existing = cart.find(item => item.name === name);


if(existing){

existing.quantity++;

}

else{


cart.push({

name:name,

price:price,

quantity:1


});


}



showCart();


}






function showCart(){


let cartBox=document.getElementById("cart-items");


cartBox.innerHTML="";


let total=0;



if(cart.length===0){


cartBox.innerHTML="<p>Your cart is empty</p>";



}




cart.forEach((item,index)=>{


total += item.price * item.quantity;



cartBox.innerHTML += `


<div class="cart-item">


<h3>${item.name}</h3>


<p>
Rs ${item.price}
</p>


<button onclick="increase(${index})">
+
</button>


${item.quantity}


<button onclick="decrease(${index})">
-
</button>


<button onclick="removeItem(${index})">
Remove
</button>



</div>


`;



});



document.getElementById("total").innerHTML=total;



}





function increase(index){


cart[index].quantity++;

showCart();


}





function decrease(index){


if(cart[index].quantity>1){

cart[index].quantity--;

}

showCart();


}





function removeItem(index){


cart.splice(index,1);

showCart();


}





function checkout(){


document
.getElementById("contact")
.scrollIntoView();


}





function placeOrder(){


let name=document.getElementById("customer").value;


let phone=document.getElementById("phone").value;



if(name==="" || phone===""){


alert("Please enter your details");


return;

}



alert(

"Thank you "+name+
"! Your coffee order has been received ☕"

);



cart=[];

showCart();


}




function goMenu(){


document
.getElementById("menu")
.scrollIntoView();


}