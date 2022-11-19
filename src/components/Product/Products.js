import React, { useEffect } from "react";
import { BiTrash } from "react-icons/bi";
import styles from "./product.module.css";

// import React, { Component } from "react"



// class Product extends Component {
//     render() {
//         console.log("Product rendered");
    
//         return (
//             <div className={styles.product} >

//                 <p>Product Name: {this.props.product.title}</p>
//                 <p>Product Price:{this.props.product.price}</p>
            
//                 <span
//                     className={styles.value}>
//                     {this.props.product.quantity}
//                 </span>

//                 <input
//                     className={styles.input}
//                     type="text"
//                     onChange={this.props.onChange}
//                     value={this.props.product.title} />
//                 <button
//                     onClick={this.props.onDecrement}
//                     className={`${styles.button} ${styles.dec} 
//                 ${this.props.product.quantity === 1 && styles.remove}`}>
//                     {this.props.product.quantity > 1 ? "-" : <BiTrash />}
//                 </button>

//                 <button
//                     onClick={this.props.onIncrement}
//                     className={`${styles.button} ${styles.inc}`}>
//                     +
//                 </button>

//                 <button
//                     className={styles.button}
//                     onClick={this.props.onDelete}>
//                     delete
//                 </button>

//             </div>
//         );
//     };
// }



//FUNCTIONAL : function ⤵⤵⤵⤵⤵⤵ 

const Product = ({ onChange, onDecrement, onIncrement, onDelete, product }) => {
    console.log("Product.js rendered");
    useEffect(() => {
        console.log("Product.js useEffects");
        return () => {
            console.log("useEffect cwum");
        }
    }, []);


    return (
        <div className={styles.product} >

            <p>Product Name: {product.title}</p>
            <p>Product Price:{product.price}</p>
    
            <span
                className={styles.value}>
                {product.quantity}
            </span>

            <input
                className={styles.input}
                type="text"
                onChange={onChange}
                value={product.title} />
            <button
                onClick={onDecrement}
                className={`${styles.button} ${styles.dec} 
                ${product.quantity === 1 && styles.remove}`}>
                {product.quantity > 1 ? "-" : <BiTrash />}
            </button>
    
            <button
                onClick={onIncrement}
                className={`${styles.button} ${styles.inc}`}>
                +
            </button>

            <button
                className={styles.button}
                onClick={onDelete}>
                delete
            </button>

        </div>
    );
}
    export default Product;