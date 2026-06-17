const revenue=[ 
    { category: "Electronics", amount: 500 },
     { category: "Books", amount: 100 }, 
     { category: "Electronics", amount: 300 } 
    ]

    const totalRevenue = revenue.reduce(
  (sum, revenue) => sum + revenue.amount,
  0
);

console.log(totalRevenue);