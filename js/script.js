
//=============== All DOM initializations ==================
const ram8gbBtn = document.getElementById("8gb-ram"); // 0$
const ram16gbBtn = document.getElementById("16gb-ram"); // 180$
const ssd256gbBtn = document.getElementById("256gb-ssd"); // 0$
const ssd512gbBtn = document.getElementById("512gb-ssd"); // 100$
const ssd1tbBtn = document.getElementById("1tb-ssd"); //180$
const normalDeliveryBtn = document.getElementById("normal-delivery"); // 0$
const fastDeliveryBtn = document.getElementById("fast-delivery"); // 20$
const couponBtn = document.getElementById("coupon-btn"); // stevekaku
const couponInfo = document.getElementById("coupon-info");
const couponInput = document.getElementById("coupon-input");
let couponValue = 0;
const extraMemoryCost = document.getElementById("memory-price");
const extraSsdCost = document.getElementById("ssd-price");
const deliveryCost = document.getElementById("delivery-cost");
const totalCost = document.getElementById("total-price");
const finalTotalCost = document.getElementById("final-total-price");
const allHtml = document.getElementById("all-html");

ram8gbBtn.classList.add("btn-color-selected");
ssd256gbBtn.classList.add("btn-color-selected");
normalDeliveryBtn.classList.add("btn-color-selected");

// ================ Main EventListener with all checking Conditions

allHtml.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName == "BUTTON") {
    if (e.target == ram8gbBtn || e.target == ram16gbBtn) {
      extraMemoryCost.innerText = e.target.value;
      console.log("ram price is " + e.target.value);
      if(e.target == ram8gbBtn ){
        ram8gbBtn.classList.add("btn-color-selected");
        ram16gbBtn.classList.remove("btn-color-selected");
      }else{
        ram8gbBtn.classList.remove("btn-color-selected");
        ram16gbBtn.classList.add("btn-color-selected");
      }
    } else if (
      e.target == ssd256gbBtn ||
      e.target == ssd512gbBtn ||
      e.target == ssd1tbBtn
    ) {
      extraSsdCost.innerText = e.target.value;
      if(e.target==ssd256gbBtn){
        ssd256gbBtn.classList.add("btn-color-selected");
        ssd512gbBtn.classList.remove("btn-color-selected");
        ssd1tbBtn.classList.remove("btn-color-selected");
      }else if(e.target==ssd512gbBtn){
        ssd256gbBtn.classList.remove("btn-color-selected");
        ssd512gbBtn.classList.add("btn-color-selected");
        ssd1tbBtn.classList.remove("btn-color-selected");
      }else{
        ssd256gbBtn.classList.remove("btn-color-selected");
        ssd512gbBtn.classList.remove("btn-color-selected");
        ssd1tbBtn.classList.add("btn-color-selected");
      }
    } else if (e.target == normalDeliveryBtn || e.target == fastDeliveryBtn) {
      deliveryCost.innerText = e.target.value;
      if(e.target==normalDeliveryBtn){
        normalDeliveryBtn.classList.add("btn-color-selected");
        fastDeliveryBtn.classList.remove("btn-color-selected");
      }else{
        normalDeliveryBtn.classList.remove("btn-color-selected");
        fastDeliveryBtn.classList.add("btn-color-selected");
      }
    } else if (e.target == couponBtn) {
      if (couponInput.value == "stevekaku") {
        couponValue = 0.2;
        couponInput.value = "";
        couponBtn.disabled = true;
        couponInfo.innerText = "Coupon Applied Successfully !!"
        couponInfo.classList.add("text-success");

      }
      else if(couponInput.value == ""){
        alert("Please Enter a Coupon code !");
      }
      else{
        alert("invalid Coupon code !");
      }
    }
  }
  
  finalCost(
    totalPrice(
      extraMemoryCost.innerText,
      extraSsdCost.innerText,
      deliveryCost.innerText
    ),
    couponValue
  );
});

//============= Final Cost Calculation function ==============

function totalPrice(ramCost, ssdCost, deliveryCost) {
  totalCost.innerText =
    1299 + Number(ramCost) + Number(ssdCost) + Number(deliveryCost);
  return totalCost.innerText;
}
//============= Final Cost Calculation with Coupon function ==============
function finalCost(total, couponPrice) {
  const finalTotalAmount = Number(total) - Number(total) * couponPrice;
  finalTotalCost.innerText = finalTotalAmount;
}
