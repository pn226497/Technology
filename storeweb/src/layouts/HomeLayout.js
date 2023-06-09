import React from "react";
import data from '../data/data.json';
import Card from 'react-bootstrap/Card';
// import '../components/Menu.css';
import '../layouts/Layout.css'
import { Outlet, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { NumericFormat } from 'react-number-format';




const HomeLayout = () => {

  return (
    <div >
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/a57-720-220-720x220-2.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/A24-720-220-720x220.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/720-220-720x220-67.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='row' style={{ padding: "20px 0 0 20px" }}>
        <h3>GỢI Ý HÔM NAY</h3>

        {data.products.phone.map((data) => (
          data.id < 9 ?
            <div className="col-lg-3 col-md-6 col-sm-6" id="HomeLayout" key={data.id}>

              <Card id="card" key={data.id} style={{ width: "270px", height: "400px" }}>
                <Card.Img id="image" src={data.image} />
                <Card.Body>
                  <Link to={`/Detailph/${data.id}`} id="name"><h5 >{data.name}</h5> </Link>
                  <h4>
                    <NumericFormat value={data.price}
                    // thousandsGroupStyle="lakh"
                    // prefix={'đ'}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <b id="price"> {value}₫</b>} />
                  </h4>
                  

                </Card.Body>
                <div id="rating">
                  <p>{data.rating} <i style={{ color: "rgb(248, 248, 64)" }} class="fa-solid fa-star"></i></p>

                  <i style={{ color: "rgb(194, 194, 194)", fontSize: "16px" }}>Đã bán:  {data.luotmua}</i>
                </div>
              </Card>
            </div>
            : null
        ))}
      </div>


      <div className='row' style={{ padding: "50px 0 0 20px" }}>
        <h3>LAPTOP SIÊU RẺ </h3>

        {data.products.laptop.map((data) => (
          data.id < 25 ?
            <div className="col-lg-3 col-md-6 col-sm-6" id="HomeLayout" key={data.id}>

              <Card id="card" key={data.id} style={{ width: "270px", height: "360px" }}>
                <Card.Img id="image" src={data.image} />
                <Card.Body>
                  <Link to={`/Detaillap/${data.id}`} id="name"><h5 id="namelaptop">{data.name}</h5> </Link>
                  <h4>
                    <NumericFormat value={data.price}
                    // thousandsGroupStyle="lakh"
                    // prefix={'đ'}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <b id="price"> {value}₫</b>} />
                  </h4>
                  

                </Card.Body>
                <div id="rating">
                  <p>{data.rating} <i style={{ color: "rgb(248, 248, 64)" }} class="fa-solid fa-star"></i></p>

                  <i style={{ color: "rgb(194, 194, 194)", fontSize: "16px" }}>Đã bán:  {data.luotmua}</i>
                </div>
              </Card>
            </div>
            : null
        ))}
      </div>

      <div className='row' style={{ padding: "50px 0 0 20px" }}>
        <h3>THỜI TRANG NĂNG ĐỘNG CÙNG SMARTWATCH </h3>

        {data.products.smartwatch.map((data) => (
          data.id < 41 ?
            <div className="col-lg-3 col-md-6 col-sm-6" id="HomeLayout" key={data.id}>

              <Card id="card" key={data.id} style={{ width: "270px", height: "400px" }}>
                <Card.Img id="image" src={data.image} />
                <Card.Body>
                  <Link to={`/Detailsmartwatch/${data.id}`} id="name"><h5 >{data.name}</h5> </Link>
                  <h4>

                    
                    <NumericFormat value={data.price}
                    // thousandsGroupStyle="lakh"
                    // prefix={'đ'}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <b id="price"> {value}₫</b>} />
                  </h4>
                  

                </Card.Body>
                <div id="rating">
                  <p>{data.rating} <i style={{ color: "rgb(248, 248, 64)" }} class="fa-solid fa-star"></i></p>

                  <i style={{ color: "rgb(194, 194, 194)", fontSize: "16px" }}>Đã bán:  {data.luotmua}</i>
                </div>
              </Card>
            </div>
            : null
        ))}
      </div>




      < div id="detail" >
        <Outlet />
      </div >
    </div>


  );
}


export default HomeLayout