import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Img from '../../assets/home-img.jpg';
import '../../css/Share/Home/Home.css';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="home-page mt-5">
        <div className="container d-flex flex-column flex-sm-column flex-xl-row">
          <div className="left-img w-100 w-lg-50">
            <img className='img-fluid' src={Img} alt="" />
          </div>
          <div className="right-info w-100 w-lg-50 mt-lg-5">
            <h2 className='home-title'> <span className='title'>Welcome to BINARY BRAINS,</span> We are always ready to help you!</h2>
            <p className='home-p'>You will get various opportunities. You will get many types of questions and answers here and you can develop your skills. So stay with us and learn.</p>
            
            <div className="btn-container ">
              <button className='home-btn mt-2 ' id='home-btn1'><Link to='/course'>Course</Link></button>
              <button className='home-btn mt-2' id='home-btn2'><Link to='/blog'>Blog</Link></button>
              
              
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

















