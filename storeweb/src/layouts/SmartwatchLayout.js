import React from 'react';
import data from '../data/data.json'
import Card from 'react-bootstrap/Card';
import '../layouts/Layout.css'
import { Outlet, Link } from "react-router-dom";
import { NumericFormat } from 'react-number-format';


const SmartwatchLayout = () => {
    return (
        <div>
            <div>

                <div className="container row">
                    {data.products.smartwatch.map((data) => (
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
                    ))}
                </div>

                < div id="detail" >
                    <Outlet />
                </div >

            </div>
        </div>
    )
}

export default SmartwatchLayout