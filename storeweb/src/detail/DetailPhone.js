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



function DetailPhone() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  // console.log(data.products.phone);
  const param = useParams()
  // console.log(param.detailId);
  return (
    <div className='row'>
      <div className="col-lg-7 col-md-7 col-sm-6">
        {data.products.phone.map((data) => (
          data.id === param.detailId ?
            <div key={data.id}>


              <Carousel activeIndex={index} onSelect={handleSelect} >
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

                <p><FontAwesomeIcon id="icon" icon={faArrowRotateRight} size="lg" /> 1 đổi 1 trong 30 ngày đối với sản phẩm lỗi tại siêu thị toàn quốc</p>
              </ListGroup.Item>
              <ListGroup.Item>

                <p><FontAwesomeIcon id="icon" icon={faBoxOpen} size="lg" /> Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp Type C</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p><i id="icon">< BsShieldCheck /></i> Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành hãng </p>

              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>


        <div>
          <h3>Thông tin sản phẩm</h3>
          {data.products.phone.map((data) => (
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
        {data.products.phone.map((data) => (
          data.id === param.detailId ?
            <div key={data.id}>
              <h2>Điện thoại {data.name}</h2>

              <h4>Giá bán: <NumericFormat value={data.price}
                // thousandsGroupStyle="lakh"
                // prefix={'đ'}
                thousandSeparator=","
                displayType="text"
                renderText={(value) => <b id="price"> {value}₫</b>}
              />
              </h4>
            </div>
            : undefined

        ))}
        <Button variant="primary">Mua ngay</Button>
        <div style={{ marginTop: "30px" }}>
          <Card>
            <Card.Header>Khuyến mãi</Card.Header>
            <Card.Body>

              <ul>
                <li>Thu cũ Đổi mới: Giảm đến 500.000đ (Tùy model máy cũ, không kèm các hình thức thanh toán online, mua kèm)</li>
                <li>Giảm 10% khi thanh toán qua Vietcombank</li>
                <li>Nhập mã MMDIENTU giảm ngay 1% tối đa 100.000đ khi thanh toán qua MOMO</li>
                <li>Giảm 15% gói Bảo hiểm rơi vỡ</li>
              </ul>

            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default DetailPhone