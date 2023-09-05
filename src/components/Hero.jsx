import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    return (
        <div className='hero text-light text-start d-flex justify-content-center align-items-center'>
            <h1 className='hero-text px-3'>{props.text}</h1>
        </div>
    )
}

export default Header