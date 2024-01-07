/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import imag1 from '../Images/1.jpg'
import imag2 from '../Images/2.jpg'
import imag3 from '../Images/3.jpg'
import products from './Allproducts'
import ScrollToTop from "react-scroll-to-top";
export default function Product() {
  // const generateWhatsAppLink = (productName, productPrice, productLink, productid) => {
  //   const message = `Check out this product: ${productid} ${productName} - ${productPrice}\n${productLink}`;
  //   const encodedMessage = encodeURIComponent(message);
  //   return `https://wa.me/send?phone=9636819197&text=${encodedMessage}`;
  // };



  return (
    <>
    <Carousel>
      <Carousel.Item interval={1500}>
        <img className='custom-carsoul' src={imag1} alt='img' text="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className='custom-carsoul' src={imag2} alt='img' text="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className='custom-carsoul' src={imag3} alt='img' text="Third slide" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Customers choices</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white p-4 rounded-xl">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-0 d-flex flex-col">
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl tracking-tight font-bold text-red-600">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-lg font-medium text-gray-900">{product.price}</p>
                </div>
                <Link
                  // href={generateWhatsAppLink(product.name, product.price, product.href, product.id)}
                  to={`/products/${product.id}`}

                  className="text-white text-center bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Buy now
                </Link>
              </div>
            </div>
          ))}
        </div>
      <ScrollToTop smooth className='pl-1 font-bold rounded-3'/>
      </div>
    </>
  );
}