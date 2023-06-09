import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../components/footer.css'



function Footer() {
  return (
    <div style={{ backgroundColor: "black", color: "white", marginTop:"20px"}}>
      <div className='row'>
        <div className='col-lg-5 col-md-6 col-sm-4' id='item1'>

          <ul>
            <li><Link to='#' id='footer'>Giới thiệu công ty</Link></li>
            <li><Link to='#' id='footer'>Tìm hiểu về mua trả góp</Link></li>
            <li><Link to='#' id='footer'>Chính sách bảo hành</Link></li>
            <li><Link to='#' id='footer'>Gửi góp ý, khiếu nại </Link></li>
          </ul>


        </div>
        <div className='col-lg-4 col-md-6 col-sm-4' id='item2'>
          <h5>Tổng đài hỗ trợ(Miễn phí gọi)</h5>
          <ul>
            <li>Gọi mua: <a href="tel: 1801.1060"> 1801.1060</a></li>
            <li>Khiếu nại: <a href="tel: 1801.1061"> 1801.1061</a></li>
            <li>Bảo hành: <a href="tel: 1801.1062"> 1801.1062</a></li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-4' >
          <h4 style={{padding:"5px 20px"}}>Contacts us:</h4>
        <i  class="fa-brands fa-facebook fa-2xl" ></i>
        <i  class="fa-brands fa-instagram fa-2xl" ></i>
        <i  class="fa-brands fa-youtube fa-2xl"></i>
        <i class="fa-brands fa-twitter fa-2xl"></i>
        </div>
      </div>
      

      <div id='info'>
        <p>Địa chỉ: 140 Lạc Long Quân, P.10, Q.Tân Bình, TP.Hồ Chí Minh.</p>
        <p>Điện thoại:0960355960</p>
        <p>Email: <a href="mailto: cskh@technology.com"> cskh@technology.com </a></p>
      </div>
      <hr style={{margin:'10px 40px '}} />
      <p style={{textAlign:'center', paddingBottom:'10px'}}>Bản quyền © 2019 - 2023 bởi CT Technology</p>

      < div id="detail" >
        <Outlet />
      </div >
    </div>
  )
}

export default Footer