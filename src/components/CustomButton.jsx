import './styles/CustomButton.css'

export const Button = ({ color, text }) => {
    return (
    
      <div className={`button ${color}`}>
        <>{text}</>
      </div>
    );
  };
  