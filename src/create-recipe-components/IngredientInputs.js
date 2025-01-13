import {useState} from 'react';

function IngredientInputs() {
    const [inputs, setInputs] = useState([{ value: '' }]);

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index].value = value;
        setInputs(newInputs);
    };

    const addInput = () => {
        setInputs([...inputs, { value: '' }]);
    };

    const removeInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    return (
        <div id='create-ingredients'>
            {inputs.map((input, index) => (
                <div key={index}>
                    <input className='create-ingredient-names' type="text" onChange={(e) => handleInputChange(index, e.target.value)} />
                    <input className='create-ingredient-amounts' type="number" onChange={(e) => handleInputChange(index, e.target.value)} />
                    <input className='create-ingredient-units' type="text" onChange={(e) => handleInputChange(index, e.target.value)} />
                    <select className='create-ingredient-aisle'>
                        <option value='Alcoholic Beverages'>Alcoholic Beverages</option>
                        <option value='Baking'>Baking</option>
                        <option value='Beverages'>Beverages</option>
                        <option value='Cans'>Cans</option>
                        <option value='Cereal'>Cereal</option>
                        <option value='Dried Fruits'>Dried Fruits</option>
                        <option value='Health Foods'>Health Foods</option>
                        <option value='Meats'>Meats</option>
                        <option value='Produce'>Produce</option>
                        <option value='Pasta and Rice'>Pasta and Rice</option>
                        <option value='Milk, Eggs, Other Dairy'>Milk, Eggs, Other Dairy</option>
                        <option value='Nut Butters, Jams, and Honey'>Nut Butters, Jams, and Honey</option>
                        <option value='Nuts'>Nuts</option>
                        <option value='Condiments'>Condiments</option>
                        <option value='Ethnic Foods'>Ethnic Foods</option>
                        <option value='Seafood'>Seafood</option>
                        <option value='Spices and Seasonings'>Spices and Seasonings</option>
                        <option value='Oil, Vinegar, Salad Dressing'>Oil, Vinegar, Salad Dressing</option>
                    </select>    
                    <button onClick={() => removeInput(index)}>Remove</button>
                </div>
            ))}
            <button onClick={addInput}>Add Input</button>
        </div>
    );
}

export default IngredientInputs;