import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import data from '../data/data.json';
import { BsShieldCheck } from "react-icons/bs";
import '../layouts/Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { NumericFormat } from 'react-number-format';



function DetailLaptop() {
  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  // console.log(data.products.laptop);
  const param = useParams()
  // console.log(param.detailId);
  return (
    <div className='row'>
      <div className="col-lg-7 col-md-7 col-sm-6">
        {data.products.laptop.map((data) => (
          data.id === param.detailId ?
            <div key={data.id}>

              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.image1}
                    alt="First slide"
                  />

                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.image2}
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.image3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            : undefined
        ))}
        <div>
          <Card style={{ margin: "30px 0" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>

                <p><FontAwesomeIcon id="icon" icon={faArrowRotateRight} size="lg" /> Hư gì đổi nấy 12 tháng tại 3384 siêu thị toàn quốc (miễn phí tháng đầu)</p>
              </ListGroup.Item>
              <ListGroup.Item>

                <p><FontAwesomeIcon id="icon" icon={faBoxOpen} size="lg" /> Bộ sản phẩm gồm: Sách hướng dẫn, Thùng máy, Sạc Laptop</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p><i id="icon">< BsShieldCheck /></i> Bảo hành chính hãng laptop 1 năm tại các trung tâm bảo hành hãng</p>

              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>


        <div>
          <h3>Thông tin sản phẩm</h3>
          {data.products.laptop.map((data) => (
            data.id === param.detailId ?
              <div key={data.id}>
                <h5>{data.description}</h5>
                {/* <p>{data.content}</p> */}

              </div>
              : undefined

          ))}

        </div>
      </div>


      <div className="col-lg-5 col-md-5 col-sm-6" >
        {data.products.laptop.map((data) => (
          data.id === param.detailId ?
            <div key={data.id}>
              <h2>Laptop {data.name}</h2>

              <h4> <NumericFormat value={data.price}
                // thousandsGroupStyle="lakh"
                // prefix={'đ'}
                thousandSeparator=","
                displayType="text"
                renderText={(value) => <b id="price">Giá bán: {value}₫</b>} /></h4>
            </div>
            : undefined

        ))}
        <Button variant="primary">Mua ngay</Button>
        <div style={{ marginTop: "30px" }}>
          <Card >
            <Card.Header>Khuyến mãi</Card.Header>
            <Card.Body>

              <ul>
                <li>Tặng tai nghe chụp tai Mozard IP-840 Xanh Min</li>
                <li>Tặng Balo Laptop (Hết quà hoàn tiền 100.000₫)</li>
                <li>Phiếu mua hàng Microsoft 365 trị giá 100,000đ</li>
                <li>Tặng tai nghe Bluetooth 790,000đ khi mua Combo Laptop + Office Home & Student (Không áp dụng trả góp)</li>
                <li>Nhập mã MMDIENTU giảm ngay 1% tối đa 100.000đ khi thanh toán qua MOMO</li>
              </ul>

            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default DetailLaptop