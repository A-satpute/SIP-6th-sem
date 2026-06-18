const users=[
    {name:"A",age:16},
    {name:"B",age:22},
    {name:"C",age:19}
]

const adult=users.filter(users=>users.age>18);
console.log(adult);