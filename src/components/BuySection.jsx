import React, { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TapButton from './TapButton.jsx';
import Product from './Product.jsx';
import { db } from '../firebaseconfig.js' ;
import { collection, addDoc } from 'firebase/firestore'; 
import './BuySection.css';

const BuySection = () => {
    const [selectedTopic, setSelectedTopic] = useState('kentang');
    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false); 
    const [quantity, setQuantity] = useState(1); 
    const [name, setName] = useState(''); 
    const [address, setAddress] = useState(''); 
    const [phone, setPhone] = useState(''); 

    const handlerSelect = (selectButton) => {
        setSelectedTopic(selectButton);
        setQuantity(1); 
    };

    const addToCart = (product) => {
        const totalPrice = product.price * quantity; 
        setCart((prevCart) => [...prevCart, { ...product, quantity, totalPrice }]);
        setCartVisible(true); 
        alert(`${product.title} ${quantity} kg telah ditambahkan ke keranjang!`);
    };

    const handleBuy = async () => {
    if (!name || !address || !phone) {
        alert('Silakan lengkapi nama, alamat, dan nomor HP sebelum membeli.');
        return;
    }

    const orderData = {
        items: cart,
        totalAmount: cart.reduce((total, item) => total + item.totalPrice, 0),
        customer: {
            name,
            address,
            phone,
        },
    };

    console.log("Attempting to add order to Firestore", orderData);
    try {
        const docRef = await addDoc(collection(db, "orders"), orderData);
        alert(`Order berhasil! Data sudah masuk diatabase, Pihak kami akan segera menghubungi anda`);
        
        setCart([]);
        setCartVisible(false);
        setName('');
        setAddress('');
        setPhone('');
    } catch (e) {
        alert("Terjadi kesalahan saat memproses order: " );
    }
    };
    return (
        <div className="menu-pembelian">
            <menu className='button-product'>
                <TapButton isSelected={selectedTopic === 'kentang'} onSelect={() => handlerSelect('kentang')}>Kentang</TapButton>
                <TapButton isSelected={selectedTopic === 'wortel'} onSelect={() => handlerSelect('wortel')}>Wortel</TapButton>
                <TapButton isSelected={selectedTopic === 'kubis'} onSelect={() => handlerSelect('kubis')}>Kubis</TapButton>
            </menu>
            {selectedTopic ? (
                <div>
                    <Product 
                        title={EXAMPLES[selectedTopic].title}
                        description={EXAMPLES[selectedTopic].description}
                        price={EXAMPLES[selectedTopic].price}
                        img={EXAMPLES[selectedTopic].image}
                    />
                    <label className='cart-count'>Jumlah (kg):
                        <input 
                            type="number" 
                            value={quantity} 
                            onChange={(e) => setQuantity(Number(e.target.value))} 
                            min="1" 
                            className='count'
                        />
                    </label>
                    <button onClick={() => addToCart(EXAMPLES[selectedTopic])}>Tambah ke Keranjang</button>
                </div>
            ) : null}
            {isCartVisible && cart.length > 0 && (
                <div className="cart">
                    <h3>Keranjang Belanja</h3>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.title} - {item.quantity} kg - Rp {item.totalPrice}
                            </li>
                        ))}
                    </ul>
                    <div className="customer-info">
                        <label>Nama:
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required
                            />
                        </label>
                        <label>Alamat:
                            <input 
                                type="text" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                                required
                                className='alamat'
                            />
                        </label>
                        <label>No HP:
                            <input 
                                type="number" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required
                            />
                        </label>
                    </div>
                    <button className='tap-button' onClick={handleBuy}>Pesan Sekarang</button>
                </div>
            )}
        </div>
    );
};

export default BuySection;
