import'../Styles/Footer.css'
function getDate(): number{
    return new Date().getFullYear();
}
function Footer(){

    return(
        <div className = "footer">
            <p>&copy; {} Trey Morris {getDate()}</p>
        </div>
    );
}
export default Footer;