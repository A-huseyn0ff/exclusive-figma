import React from 'react'
import Header from '../../Layout/Header'
import FlashSales from '../../Layout/FlashSales'
import BrowseByCategory from '../../Layout/BrowseByCategory'
import BestSellingProducts from '../../Layout/BestSellingProducts'
import EnhanceYourMusicExperience from '../../Layout/EnhanceYourMusicExperience'
import OurProducts from '../../Layout/OurProducts'
import NewArrival from '../../Layout/NewArrival'
import OurService from '../../Layout/OurService'
import AOS from 'aos';
const HomePage = () => {

  return (
 
   <>
   
   <Header></Header>
   <FlashSales></FlashSales>
   <BrowseByCategory></BrowseByCategory>
   <BestSellingProducts></BestSellingProducts>
   <EnhanceYourMusicExperience></EnhanceYourMusicExperience>
   <OurProducts></OurProducts>
   <NewArrival></NewArrival>
   <OurService></OurService>
   </>
  )
}

export default HomePage
