
import './HeaderStyle.css'
const HeaderMain = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black " >
        <img src="src/assets/more.png" type="buttonList" className='ham btn' alt="list-tap" width="80" height="50" />
        <div className="container-fluid justify-content-center" style={{backgroundColor:"black"}}>
   
            <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="src/assets/clubimg2.png" alt="Logo" width="87" height="87" className="d-inline-block " />
          <h1 className="custom-font text-light">Computer Club</h1>
            </a>
        </div>
        
    </nav>

  )
}

export default HeaderMain
