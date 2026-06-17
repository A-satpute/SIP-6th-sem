//closer
function bankaccount(ib){
    let b=ib;
    function deposit(a)
    {
        b+=a;
        console.log(b);
    }
    function withdraw(a)
    {
        b-=a;
        console.log(b);
    }
    function checkbalance()
    {
        console.log(b);
    }
    return {deposit,withdraw,checkbalance};
    
}
const acc=bankaccount(2000);
acc.deposit(500);
acc.withdraw(300);


//HOD
// HOD vs closers