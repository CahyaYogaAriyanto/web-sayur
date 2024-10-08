import './Product.css'
import TapButton from './TapButton';
import './TapButton.css'


function Product({img,title,description,price}){
    return(
        <div className="product">
            <div className='images'>
                <img src={img} alt="" />    
            </div>
            <div className='text'>
                <h1>{title}</h1>
                <p>{description}</p>
                <p className='harga'>Harga per kg {price}</p>
            </div>
        </div>
    )
}
export default Product;