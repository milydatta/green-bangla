import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const Home = () => {
    return (
        <div>
           <Header></Header> 
           <Banner></Banner>
           <Main></Main>
           <Footer></Footer>
        </div>
    );
};

export default Home;