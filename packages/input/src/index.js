import styled from 'styled-components';

const InputView = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  font-size: 1rem;
  font-weight: 100;
  line-height: ${p => p.size === 'large'? '36px': '28px'};
  padding: ${p => p.size === 'large'? '0 32px': '0 16px'};
`;

const Label = styled.label`
    display: inline-block;
    margin: 0 16px 0 0;
`

const Input = ({ type, size, label, name, ...props }) => {
    
    return (
    <>
        <Label htmlFor={name}>{label.toUpperCase()}</Label>
        <InputView 
            name={name}
            size={size}
            type={type}
            {...props}
        />
    </>

    )
}


export default Input;