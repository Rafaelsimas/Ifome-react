import { useState } from "react";
import Category from "./Category";
import Header from "./Header";
import OrderButton from "./OrderButton";

export default function App() {
  const [categories, setCategories] = useState(initialCategories)

  function changeQuantity(product, newQuantity){//Nos parâmetros, recebo o produto e a nova qtd
    product.quantity = newQuantity//Aqui eu acesso quantidadde que vai receber a nova qtd
    setCategories([...categories])//Aqui eu monto uma nova array com todos os dados que tinha antes
  }

  return (
    <>
      <Header />
      {categories.map(category => (
        <Category key={category.id} category={category} changeQuantity={changeQuantity}/>//Além das propriedades da categoria, estou enviando também a função changeQuantity
      ))}
      <OrderButton categories={categories} />
    </>
  );
}

const initialCategories = [
  {
    id:1,
    title: 'Primeiro, seu prato',
    name: 'Prato',
    products: [
      {
        id: 1,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'Frango',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
      {
        id: 2,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'Carne',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
      {
        id: 3,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'Peixe',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
    ]
  },
  {
    id:2,
    title: 'Agora, sua bebida',
    name: 'Bebida',
    products: [
      {
        id: 4,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'Coca',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
      {
        id: 5,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'fanta',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
      {
        id: 6,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'Suco',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
    ]
  },
  {
    id:3,
    title: 'Por último, sua sobremesa',
    name: 'Sobremesa',
    products: [
      {
        id: 7,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'Bolo',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
      {
        id: 8,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'Torta',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
      {
        id: 9,
        imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/contrafile-aos-queijos-receita.jpg',
        name: 'Pudim',
        description: 'Muito gostoso',
        price: 14.90,
         quantity: 0

      },
    ]
  },
]

