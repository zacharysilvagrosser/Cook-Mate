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
                    <button onClick={() => removeInput(index)}>Remove</button>
                </div>
            ))}
            <button onClick={addInput}>Add Input</button>
        </div>
    );
}

export default IngredientInputs;