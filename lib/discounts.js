function getDiscount(price, code) {
     if (code === "SAVE10") return price * 0.9;
     if (code === "SAVE20") return price * 0.8;
     return price;
   }