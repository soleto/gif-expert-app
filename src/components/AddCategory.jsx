import { useState } from "react";

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue( target.value );
        // console.log( target.value );
    }

    const onSubmit = (event) => {
        console.log(inputValue);
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        //setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory (inputValue.trim() );
        setInputValue('');
    }


  return (
    <form onSubmit={ onSubmit }>
    <input type="text"
    placeholder="Buscar gifs"
    value={ inputValue }
    onChange= { onInputChange }
    
    />
    </form>
  )
}
