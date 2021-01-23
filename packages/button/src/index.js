import styled from 'styled-components';

const ButtonView = styled.button`
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

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
    console.log(primary, size, label);
    return (
        <ButtonView 
            primary={primary}
            size={size}
            type="button"
            {...props}
        >
            {label.toUpperCase()}
        </ButtonView>
    )
}


export default Button;