export default function Product(props){

    const { product, changeQuantity } = props
    const {imageUrl, name, description, quantity, price} = product

    function selectItem(){//Essa funçaõ tem acesso a todos os itens então se tratada de uma função global
        if(product.quantity === 0){
            changeQuantity(product, 1)
            
        }
    }

    function decrementQuantity(event){//objeto que informa o evento ocorrido
      event.stopPropagation()
          //Função que impede que o onlcik continue sendo executado onde ele estiver
        changeQuantity(product, quantity-1)//Função que decrementa contador
    }

    function incrementQuantity(event){
      event.stopPropagation()
          //Função que impede que o onlcik continue sendo executado onde ele estiver
        changeQuantity(product, quantity+1)//Função que incrementa contador
    }
    return(
        <li className={quantity > 0 ? 'opcao selecionada' : 'opcao'} onClick={selectItem}>
        <img
          src={imageUrl}
          alt="Imagem do produto"
        />
        <h4>{name}</h4>
        <p className="descricao">{description}</p>
        <div className="container-preco">
          <p className="preco">R$ {price.toFixed(2)}</p>
          <div className="container-qtd">
            <button className="btn-menos" onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button className="btn-mais" onClick={incrementQuantity}>+</button>
          </div>
        </div>
      </li>
    )
}