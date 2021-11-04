import './button.scss'


const Button = ({children, ...props}) => {
    return (

        <button {...props} type='submit' className="btn btn__add">
            {children}
        </button>
    )
}

export default Button;