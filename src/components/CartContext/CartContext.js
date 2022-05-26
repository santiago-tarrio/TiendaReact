import React from 'react'

const CartContext = React.createContext();
const {Provider} = CartContext;

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])
    
    const addItem = (product, q) => {
        if (isInCart(product.id)){
            const oldProduct = cart.map(Item => {
                if(Item.id === product.id){
                    Item.quantity = Item.quantity + q
                } return Item })
            setCart(oldProduct)
        }else{
            setCart([...cart, {...product, quantity: q}])
        }
    }

    const removeItem = (product, q) => {
        if (q === 1){
            const removeProd = cart.filter((item) => item.id !== product.id)
            setCart(removeProd)
        }else {
            const subtractProduct = cart.map(Item => {
                if(Item.id === product.id){
                    Item.quantity --
                } return Item })
            setCart(subtractProduct)
        }
    }
    
    const clearCart = () => {
        setCart([])
    }

    const isInCart= (id) => {
        return cart.find(item => item.id === id)
    }

    console.log(cart)
    return (
        <Provider value={{addItem, cart}}>{children}</Provider>
    )
}

export {CartContext, CartProvider}