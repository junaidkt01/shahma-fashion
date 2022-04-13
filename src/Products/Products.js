import React from 'react';
import './products.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from '../NavBar/NavBar';
import {useNavigate} from "react-router-dom"

const Products = () => {
    const navigate = useNavigate();
  return (
    <div className='products'>
        <NavBar/>
<section class="bg-light" id='shop'>
          <div class="container py-5">
              <div class="row text-center py-3">
                  <div class="col-lg-6 m-auto">
                      <h1 class="h1">Products</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                  </div>
              </div>
              <div class="row" 
              onClick={() => navigate("/product")}
              >
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_01.jpg" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$240.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                              <p class="card-text">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                              </p>
                              <p class="text-muted">Reviews (24)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_02.jpg" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$480.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                              <p class="card-text">
                                Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                              </p>
                              <p class="text-muted">Reviews (48)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_03.jpg" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$360.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                              <p class="card-text">
                                Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum.
                              </p>
                              <p class="text-muted">Reviews (74)</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Footer */}

         <div class="w-100 bg-black py-3">
         <div class="container">
             <div class="row pt-2">
                 <div class="col-12">
                     <p class="text-left text-light">
                         Copyright &copy; 2021 Company Name 
                         | Designed by <a rel="sponsored" href="#" target="_blank">Jassa</a>
                     </p>
                 </div>
             </div>
         </div>
     </div>
    </div>
  )
}

export default Products