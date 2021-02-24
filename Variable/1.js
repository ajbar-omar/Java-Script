var mainPrice = 450,
mySmallDiscount = 50,

myMediumDiscount = 100,

myBigDiscount = 250;
 
 
    document.getElementById("price").innerHTML= mainPrice;

    document.getElementById("product1").innerHTML= mainPrice - mySmallDiscount;

    document.getElementById("product2").innerHTML= mainPrice - myMediumDiscount;

    document.getElementById("product3").innerHTML= mainPrice - myBigDiscount;
