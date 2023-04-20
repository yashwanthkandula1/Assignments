let tp = 1
let inbill = 0
let totalbill=0
let tip=0
let tipamt=0
let tipeach = 0

const calculateBill=  () =>{
    inbill = Number(document.getElementById("bill").value)
    tipamt = inbill*(tip/100)
    tipeach = tipamt/tp
    totalbill = inbill + tipamt
    document.getElementById("tipamt").innerHTML=`₹${tipeach.toFixed(2)}`
    document.getElementById("totalamt").innerHTML=`₹${(totalbill/tp).toFixed(2)}`

}
function getTip(percent){
    tip=Number(percent)
    calculateBill()
}
function nOP(a){
    console.log(a)
    if (a=='inc') {
        tp+=1       
    }
    else{
        tp-=1
    }
    displaynop()
    calculateBill()

}
function nOpcustom(){
    let c = Number(document.getElementById("no-of-p").value)
    tp=c
    
    calculateBill()
}
function displaynop(){
    document.getElementById("no-of-p").value=tp
}
function reset(){
    tp = 1
    inbill = 0
    totalbill=0
    tip=0
    tipamt=0
    tipeach = 0
    document.getElementById("tipamt").innerHTML=`₹0.00`
    document.getElementById("totalamt").innerHTML=`₹0.00`
    document.getElementById("no-of-p").value=1
    document.getElementById("bill").value=0

}