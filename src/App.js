import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './component/Images.js';
import ImageDiv from './component/ImageDiv.js';
import Caroseul from './component/Caroseul.js';
import Head from './component/HEad.js';
import BestSeller from './component/BestSeller.js';
import BestSellerImg from './component/BestSellerIMG.js';
import EcommerceFlex from './component/EcommerceFlex.js';
import CstReview from './component/CstReview.js';
import ReviewTxt from './component/ReviewTxt.js';
import Certification from './component/Certifications.js';
function App() {
  return (
    <div>
      <Head></Head>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Images></Images>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Us</a>
              </li>
             
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop Online
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Food Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">Certification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>
      <ImageDiv></ImageDiv>
      <Caroseul></Caroseul>
      <BestSeller></BestSeller>
      <BestSellerImg></BestSellerImg>
      <EcommerceFlex></EcommerceFlex>
      <br />
      <ReviewTxt></ReviewTxt>
      <CstReview></CstReview>
      <Certification></Certification>
    </div>
  )
}


export default App;
