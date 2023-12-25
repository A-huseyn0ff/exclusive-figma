import React, { useEffect, useState } from 'react'
import './wishlist.scss'
import axios from 'axios'
import OurProducts from '../../Layout/OurProducts'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
const WishlistPage = () => {
    const WishlistArr = useSelector((state) => state.wishlist.value)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [wishlist, setWishlist] = useState([])
    
    const baseUrl = 'http://localhost:5173/wishlist'

    async function fetchData() {
        const res = await axios.get(`${baseUrl}`)
        setWishlist(res.data)

    }
    useEffect(() => {
        fetchData()
    }, [])

  return (
    <>
    <section className='Wishlist'>
<div className='wishlist_container'>
    <div className='wishlist_title'>
    <div className='wishlist_count'>
        <h2>Wishlist <span>({WishlistArr.length})</span></h2>
    </div>
    <button>Move All To Bag</button>
    </div>
<div className='wished_products'>
{
                        WishlistArr && WishlistArr.map((item)=>(
                            <div className='wishlistCard'>
                                <div className='cardImage'>
                                    <img src={item.image} alt="" />
                                    <div className="imgHoverBasketCard" onClick={()=>dispatch(basketAdd(item))}>
                                       <button >Add to card</button>
                                    </div>
                                    <div className='ProductAdeteAndBtns'>
                                        {/* <div className="abateBox">-{item.abate}%</div> */}
                                       <div className="cardBtns">
                                       <button onClick={()=>dispatch(wihlistDelete(item))}>
                                       {/* <GoTrash/> */}
                                        </button>
                                       </div>
                                    </div>
                                </div>
                                <div className='cardText'>
                                    <h3>{item.name}</h3>
                                    <p className='price'>${item.newPrice} </p>
                                   

                                </div>
                            </div> 
                        ))
                    }
</div>
</div>
    </section>
    <OurProducts/>
    </>
  )
}

export default WishlistPage