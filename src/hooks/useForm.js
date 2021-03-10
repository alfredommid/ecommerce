import {useState} from 'react';

const useForm = (callback, defaults) => {
    const [input, setInput] = useState(defaults);
    const handleInput= (e) => {
        setInput({
            ...input,
            [e.target.id]:e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        callback(input);
    }

    return { 
        input,
        handleInput,
        handleSubmit
    };
}
 
export default useForm;