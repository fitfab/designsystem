import styled from 'styled-components';

const InputView = styled.input`
  background: ${p => p.primary? 'blue': 'gray'};
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  line-height: ${p => p.size === 'large'? '36px': '28px'};
  padding: ${p => p.size === 'large'? '0 32px': '0 16px'};
`;

const Input = ({ primary, type, size, label, name, ...props }) => {
    
    return (
    <>
        <label htmlFor={name}>{label.toUpperCase()}</label>
        <InputView 
            name={name}
            primary={primary}
            size={size}
            type={type}
            {...props}
        />
    </>

    )
}


export default Button;