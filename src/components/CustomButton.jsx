import './styles/CustomButton.css'

export const Button = ({ color, text, onClick=null }) => {
    return (
    
      <div className={`button ${color}`} onClick={onClick}>
        <>{text}</>
      </div>
    );
  };
  