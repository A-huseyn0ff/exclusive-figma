
import React, { useEffect, useState } from 'react';
import './Detail.scss';

const Detail = () => {
  
  const [selectedImage, setSelectedImage] = useState('https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1704067200&Signature=cAabQ1~p0j8Dk5JrDLj0K3fn~3lWmqu7sqVTCASSi58jet8DJdwMVXROY~Y6wyGfI5tRXsj381qpxROy6juvhYnzC0PabgZFi9MdWpKGLlWJKy-f4rkQzWNzL4QDwP9SspiIwvvyN2SgNBUWhksPjZkHtNwLygei4Vp4JFl1NTdtmJESL8IZIuiGYsdGEv8yidTTiYee00XlsScHV1nFrVuMZzaiqDNo3FRP33jIjn1lyqK5a~05I-VIKpYD6InbmvPuTMdlxVMGXWI~y1AzA1HJNn12erQlVknt8O~kCC0Aibla2YGvR7H-vk00uJiHBCImicsZFv0zFdQqho9DSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
  

  
  
  const handleImageClick = (newImageSource) => {
    setSelectedImage(newImageSource);
  };
  useEffect(() => {
    const zoomContainer = document.getElementById('zoomContainer');
    const zoomBox = document.getElementById('zoomBox');
    const zoomImage = document.getElementById('zoomImage');
  
    const handleMouseMove = (e) => {
      const { left, top, width, height } = zoomContainer.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
  
      const scale = 1.5; 
      const translateX = +(width * scale - width) * x;
      const translateY = +(height * scale - height) * y;
  
      const transformValue = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      zoomBox.style.transform = transformValue;
    };
    // const handleImgMove = (e) => {

    //   const { left, top, width, height } = zoomContainer.getBoundingClientRect();
    //   const x = (e.clientX - left) / width;
    //   const y = (e.clientY - top) / height;
  
    //   const scale = 1.5; 
    //   const translateX = +(width * scale - width) * x;
    //   const translateY = +(height * scale - height) * y;
  
    //   const transformValue = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    //   zoomBox.style.transform = transformValue;
    // };
   
    const resetZoom = () => {
      zoomImage.style.transform = 'none';
    };
  
    if (zoomContainer && zoomBox && zoomImage) {
      zoomContainer.addEventListener('mousemove', handleMouseMove);
      zoomContainer.addEventListener('mouseleave', resetZoom);
      // zoomImage.addEventListener('zoom',handleImgMove)
      return () => {
        zoomContainer.removeEventListener('mousemove', handleMouseMove);
        zoomContainer.removeEventListener('mouseleave', resetZoom);
      };
    }
  }, [selectedImage]);
 
  return (
    <section className='Detail'>
      <div className='Detail_container'>
        <div className='Detail_img_container'>
          <div className='Detail_img_1' onClick={() => handleImageClick('https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1704067200&Signature=C7S57kUw0kezddtJccSTQsg2FWhK5lLKfpK6LBGsYuEBK~PBoyvXoiL4WL3zmr3Ijtd11o7zNyPpXKy49fJZAr6lqS8FgR09y3-8jT0L8xwcB7RbL23j8NebDYGo9PHauEln3czcE8ISzRgi3Urbzu~AG67xnJfdsTWzozz5JE~gNrie2d6xGcC3SR3k2DnuG1wyAwqHfnbds9z~H9PpMrNJxyzqfiyl-p9RcpFosbRSOxKgz7AeIpJAAiddVVOUHe2fG5iTTnbTVh0-53FnS9Od1WSEYxpvWb5lhUKiJdneIVu1UaMuR1a1x6xd2PgE3Lln47Z1F79aH~KjCpxbKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')}>
            <img src="https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1704067200&Signature=C7S57kUw0kezddtJccSTQsg2FWhK5lLKfpK6LBGsYuEBK~PBoyvXoiL4WL3zmr3Ijtd11o7zNyPpXKy49fJZAr6lqS8FgR09y3-8jT0L8xwcB7RbL23j8NebDYGo9PHauEln3czcE8ISzRgi3Urbzu~AG67xnJfdsTWzozz5JE~gNrie2d6xGcC3SR3k2DnuG1wyAwqHfnbds9z~H9PpMrNJxyzqfiyl-p9RcpFosbRSOxKgz7AeIpJAAiddVVOUHe2fG5iTTnbTVh0-53FnS9Od1WSEYxpvWb5lhUKiJdneIVu1UaMuR1a1x6xd2PgE3Lln47Z1F79aH~KjCpxbKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div className='Detail_img_2' onClick={() => handleImageClick('https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1704067200&Signature=Te1wcW5iiujGNK4dWay413kq~aOoCWSSVOUHjp-bLXpwws-QNEykl5ncpRjmtjiNDVNjjgRgGcuJ-uTx~zUiueNNCJRkNv3Tfi874SJuLajORgJrruoHZaNNIhmrGhCxSDkxN03OiagBIW5QidyWvsdpYlPCA3hZ4zyB50FBrBFnXrkSqblzwVw0IhzxEAnrFbYM0~Pz8qXD9rXPjcb2tlFfklKE4uuSYNqlB8aFiM6QHxd0i2su-fhY~PJy3nsPsXbUTfcUiIRS2oQsjnBgT3hITgOm1SpZNxUl~TvA3ZmvyxNUqOkmmFqVOqjwOkVZtQeuqViYF52eskhCXYlOaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')}>
          <img src="https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1704067200&Signature=Te1wcW5iiujGNK4dWay413kq~aOoCWSSVOUHjp-bLXpwws-QNEykl5ncpRjmtjiNDVNjjgRgGcuJ-uTx~zUiueNNCJRkNv3Tfi874SJuLajORgJrruoHZaNNIhmrGhCxSDkxN03OiagBIW5QidyWvsdpYlPCA3hZ4zyB50FBrBFnXrkSqblzwVw0IhzxEAnrFbYM0~Pz8qXD9rXPjcb2tlFfklKE4uuSYNqlB8aFiM6QHxd0i2su-fhY~PJy3nsPsXbUTfcUiIRS2oQsjnBgT3hITgOm1SpZNxUl~TvA3ZmvyxNUqOkmmFqVOqjwOkVZtQeuqViYF52eskhCXYlOaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div className='Detail_img_3' onClick={() => handleImageClick('https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1704067200&Signature=CFAs0fEFjkKd8YTRFkLjf6BNQI-7j7o-0EkA~wxnInuixWAq1rCJvpMfel4qc-lbKBSiL5C3RWke8pdmzl0U-giaF0ZBr8xRjCSVcyL3880t2Dh5iyjzr3K6apnh-ziAq-DBl1uD8vB29nyqIBD~tUjDuoXYL3dZcu6IdcPp6yvh~tCjgmKfhWxVuxcb3FF30NqQO415ip6C6JGEpa5HR239D8RHT6E~qtvpxlWyQM7bDP1b3P-vOqKUzyiJyYDLC-ouE9LfTgSb7QLAR7QiTw0JEVcu-cYh9BQh88ZbREN-sV1spXMnG6K42OpCZvS69KaBrlsEbZlk7Yihg~BO0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')}>
          <img src="https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1704067200&Signature=CFAs0fEFjkKd8YTRFkLjf6BNQI-7j7o-0EkA~wxnInuixWAq1rCJvpMfel4qc-lbKBSiL5C3RWke8pdmzl0U-giaF0ZBr8xRjCSVcyL3880t2Dh5iyjzr3K6apnh-ziAq-DBl1uD8vB29nyqIBD~tUjDuoXYL3dZcu6IdcPp6yvh~tCjgmKfhWxVuxcb3FF30NqQO415ip6C6JGEpa5HR239D8RHT6E~qtvpxlWyQM7bDP1b3P-vOqKUzyiJyYDLC-ouE9LfTgSb7QLAR7QiTw0JEVcu-cYh9BQh88ZbREN-sV1spXMnG6K42OpCZvS69KaBrlsEbZlk7Yihg~BO0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div className='Detail_img_4' onClick={() => handleImageClick('https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1704067200&Signature=cAabQ1~p0j8Dk5JrDLj0K3fn~3lWmqu7sqVTCASSi58jet8DJdwMVXROY~Y6wyGfI5tRXsj381qpxROy6juvhYnzC0PabgZFi9MdWpKGLlWJKy-f4rkQzWNzL4QDwP9SspiIwvvyN2SgNBUWhksPjZkHtNwLygei4Vp4JFl1NTdtmJESL8IZIuiGYsdGEv8yidTTiYee00XlsScHV1nFrVuMZzaiqDNo3FRP33jIjn1lyqK5a~05I-VIKpYD6InbmvPuTMdlxVMGXWI~y1AzA1HJNn12erQlVknt8O~kCC0Aibla2YGvR7H-vk00uJiHBCImicsZFv0zFdQqho9DSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')}>
          <img src="https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1704067200&Signature=cAabQ1~p0j8Dk5JrDLj0K3fn~3lWmqu7sqVTCASSi58jet8DJdwMVXROY~Y6wyGfI5tRXsj381qpxROy6juvhYnzC0PabgZFi9MdWpKGLlWJKy-f4rkQzWNzL4QDwP9SspiIwvvyN2SgNBUWhksPjZkHtNwLygei4Vp4JFl1NTdtmJESL8IZIuiGYsdGEv8yidTTiYee00XlsScHV1nFrVuMZzaiqDNo3FRP33jIjn1lyqK5a~05I-VIKpYD6InbmvPuTMdlxVMGXWI~y1AzA1HJNn12erQlVknt8O~kCC0Aibla2YGvR7H-vk00uJiHBCImicsZFv0zFdQqho9DSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          <div className='Detail_img_5' id="zoomContainer">
  <div className="zoomBox" id="zoomBox">
    <img src={selectedImage} alt="" id="zoomImage" />
  </div>
  <img src={selectedImage} alt="" id="mainImage" />
</div>

        </div>
      </div>
    </section>
  );
};

export default Detail;
