type restaurants ={
    name: string,
    price: number[],
    buy: boolean
};

let restaurants = [
    {
        name: "pizza",
        price: 20,
        buy: true
    },
    {
        name: "bolognese",
        price: 15,
        buy: false
    },
    {
        name: "focaccia",
        price: 8,
        buy: true
    },
    {
        name: "lasagnia",
        price: 22,
        buy: false
    },
    {
        name: "prosutto",
        price: 17,
        buy: true
    }
];
restaurants.forEach(restaurant => {
    

const output = document.getElementById("output") as HTMLElement
output.innerHTML +=
`
<div class="card mx-1" >
  <div class="card-body">
    <h5 class="card-title">${restaurant.name}</h5>
    <p class="card-text">price: ${restaurant.price}</p>
    <button class="btn btn-primary">${restaurant.buy ? "buy" :"out of stock"}</button>
  </div>
</div>
`});