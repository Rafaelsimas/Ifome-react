import Product from "./Product";

export default function Category(props) {

    const { category, changeQuantity } = props//Aqui estou desestruturanto tambem a função
    const {title, products} = category
    
  return (
    <>
      <h3>{title}</h3>
      <ul className="lista-opcoes">
        {products.map(product => (
            <Product key={product.id} product={product} changeQuantity={changeQuantity} />//Aqui tbm estou recebendo a função para enviar como props
        ))}
      </ul>
    </>
  );
}
