export default function OrderButton(props){
    const {categories} = props
    const canFinishOrder = checkIfAllCategoriesWereSelected(categories)

    function sendToWhatsapp(){
        if(!canFinishOrder) return
        let message = 'Olá, gostaria de fazer um pedido'
        let total = 0

        categories.forEach(category => {
            category.products.filter(product => product.quantity > 0).forEach(product => {
                message += `
                    -${category.name} : ${product.name} ${product.quantity > 0 ? `(${product.quantity}x)` : ''}
                    \n
                `
                total += product.price * product.quantity
            })
        });
        message += `Total: R$ ${total.toFixed(2)}`
        alert(message)
    }
    return(
        <div className="fechar-pedido">
        <button className={canFinishOrder ? 'habilitado' : ''} onClick={sendToWhatsapp}>
            {canFinishOrder ? 'Fechar pedido' : 'Selecione itens das 3 categorias'}
        </button>
    </div>
    )
}

//Recebe array de categorias, em que cada catetgoria tem uma array de produtos
//Deve retornar true e tem pelo menos 1 produto com quantidade > 0 em cada categoria
function checkIfAllCategoriesWereSelected(categories){
 const selectedCategories =  categories.filter(category => {
       return category.products.find(product => product.quantity > 0)
    })
    return categories.length === selectedCategories.length
}