<template>
  <hr>
    <footer class="footer container-fluid py-4">
      <div class="foodnow row">
        <div class="col-md-4 text-center text-md-start">
          <img src="../../assets/img/logo-alt.svg" alt="Foodnow Logo" class="logo">
          <h3 style="margin-top: 20px;">Find Us :</h3>
          <div class="social-icons d-flex justify-content-center justify-content-md-start">
            <a href="#" class="me-3"><img src="../../assets/img/icons/facebook.svg" alt="Facebook" class="icon"></a>
            <a href="#" class="me-3"><img src="../../assets/img/icons/instagram.svg" alt="Instagram" class="icon"></a>
            <a href="#"><img src="../../assets/img/icons/youtube.svg" alt="YouTube" class="icon"></a>
          </div>
        </div>
  
        <div class="col-md-2 text-center text-md-start">
          <h5>Navigation</h5>
            <div class="d-flex">
              <div>
                <ul class="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Order</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              <div>
                <ul class="list-unstyled ms-5">
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Register</a></li>
                </ul>
              </div>
            </div>
        </div>
  
        <div class="col-md-2 text-center text-md-start">
          <h5>Contact</h5>
          <ul class="list-unstyled">
            <li><img class="icon2" src="../../assets/img/icons/mail.svg"> Food.now@mail.com</img></li>
            <li><img class="icon2" src="../../assets/img/icons/phone.svg"> +62848477102943</img></li>
            <li><img class="icon2" src="../../assets/img/icons/whatsapp.svg"> +628184938494</img></li>
          </ul>
        </div>
  
        <div class="col-md-4 text-center text-md-start">
          <h5>Location</h5>
          <p><img src="../../assets/img/icons/location.svg" alt=""><strong>Kerobokan</strong></p>
          <p>Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361</p>
        </div>
      </div>
      <hr>
      <div class="text-center mt-4">
        <p>Copyright &copy; 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | <a href="">Privacy Policy</a></p>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>

.social-icons a {
  font-size: 1.5rem;
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  
  border: 2px solid #E77E23;
  border-radius: 50%;
  width: 50px;
  height: 50px; 
  display: flex;
  justify-content: center;
  align-items: center; 
}

.social-icons a:hover {
  color: white; 
  background-color: rgba(255, 165, 0, 0.5); 
}

  .foodnow {
    padding: 20px 100px;
  }

  .icon2 {
    padding: 5px 0;
  }

  
  .footer h3 {
    font-size: 1.5rem;
    color: #E77E23;
    margin-bottom: 1rem;
  }
  
  .footer h5 {
    font-size: 1.2rem;
    color: #E77E23;
    margin-bottom: 1rem;
  }
  
  .footer .social-icons a .icon {
    width: 30px;
    height: 30px;
  }
  
  .footer .social-icons a {
    text-decoration: none;
  }
  
  .footer ul {
    padding-left: 0;
    list-style: none;
  }
  
  .footer ul li a {
    text-decoration: none;
    color: #333;
    font-size: 0.9rem;
  }
  
  .footer ul li a:hover {
    color: #E77E23;
  }
  
  .footer .text-center a {
    color: #333;
    text-decoration: none;
    font-size: 0.9rem;
  }
  
  .footer .text-center a:hover {
    color: #E77E23;
  }
  
  .footer p {
    font-size: 0.9rem;
    margin: 0.2rem 0;
  }
  </style>
  