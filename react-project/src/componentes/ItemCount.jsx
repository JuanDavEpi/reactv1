
const ItemCount = ({ amount, handlePlus, handleRest, handleAdd }) => {

    return (
        <div>
            <div className="item-count">
                <button onClick={handlePlus}>+</button>
                <p>{amount}</p>
                <button onClick={handleRest}>-</button>
            </div>
            <button className="add-to-cart" onClick={handleAdd}>Add to Cart</button>
        </div>
    );
};

export default ItemCount;
