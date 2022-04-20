const pizzas = [
    {id: 1, nombre: "Provenzal", ingredientes: ["Tomate","Cebolla","Provenzal","Queso","Orégano","Romero","Masa","Aceite","Ajo","Perejil"], precio: 1000},
    {id: 2, nombre: "Napolitana", ingredientes: ["Tomate","Jamón","Queso","Masa","Aceite","Ajo","Perejil"], precio: 500},
    {id: 3, nombre: "Con Ananá", ingredientes: ["Tomate","Ananá","Queso","Masa","Aceite","Ajo","Perejil"], precio: 1000},
    {id: 4,nombre: "Cuatro Quesos", ingredientes: ["Tomate","Queso Mozzarella", "Queso Parmesano", "Queso Gruyere", "Queso Crema","Masa","Aceite","Ajo","Perejil"], precio: 1400},
    {id: 5, nombre: "Veggie", ingredientes: ["Tomate", "Queso Vegano","Masa de Harina Integral","Aceite"], precio: 1300},
    {id: 6, nombre: "Jamon y Huevo", ingredientes: ["Tomate", "Jamón", "Huevo duro","Queso", "Masa", "Aceite", "Ajo", "Aceituna"], precio: 1300},
]


const impares = pizzas.filter((Parametro) =>Parametro.id %2 !==0)
console.log(impares)

const preciopizza = pizzas.filter(pizzas => pizzas.precio < 600).map(pizzas => pizzas.nombre).join(", ").replace(/, ([^,]*)$/, ' y $1')

const precioChecker = () =>{
    if(preciopizza == false){
        console.log("No tenemos pizzas tan baratas.")
    }else{
        console.log(`Tenemos a menos de ese precio las de ${preciopizza}.`)
    }
}
precioChecker()

const nombres = pizzas.forEach(Parametro => console.log(`El nombre de esta pizza es ${Parametro.nombre}`))

const precios= pizzas.forEach(Parametro => console.log(`La pizza cuesta  ${Parametro.precio}`))

const NombreYprecios = pizzas.forEach(Parametro => console.log(`El nombre de esta pizza es  ${Parametro.nombre} y cotiza ${Parametro.precio} pesos`))