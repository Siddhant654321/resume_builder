import './InputField.css';

const InputField = ({ title, placeholder, type="text", inputValue, field, setInputValue }) => {
  return (
    <div className='input_field'>
        <h3>{title}</h3>
        <input placeholder={placeholder} type={type} value={inputValue[field]} onChange={(e) => setInputValue(prev => ({...prev, [field]: e.target.value}))} />
    </div>
  )
}
export default InputField