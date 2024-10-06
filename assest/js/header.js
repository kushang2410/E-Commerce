const headerData = `
    <header id="main-header" class="d-none d-md-block">
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-expand-lg bg-body-tertiary position-fixed z-2">
                    <div class="container-fluid">
                        <svg class="f-w-7 ms-lg-5 ms-md-4 ms-sm-4" xmlns="http://www.w3.org/2000/svg" height="35px"
                            viewBox="0 0 77.53 72.26">
                            <path
                                d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z"
                                fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarText">
                            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                                <li class="nav-item me-lg-4 position-static" aria-expanded="false">
                                    <a class="nav-link fw-bolder py-lg-4" href="index.html" role="button">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item me-lg-4 position-static" aria-expanded="false">
                                    <a class="nav-link fw-bolder py-lg-4" href="products.html" role="button">
                                        Products
                                    </a>
                                </li>
                 <li class="nav-item me-lg-4 dropdown position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder dropdown-toggle py-lg-4" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mens
                            </a>
                            <div class="dropdown-menu dropdown-megamenu border-0">
                                <div class="container-fluid bg-white">
                                    <div class="row g-0 g-lg-3">
                                        <div class="col col-lg-8 py-lg-5">
                                            <div class="row py-3 py-lg-0 flex-wrap gx-4 gy-6">
                                                <div class="col">
                                                    <h6 class="dropdown-heading">Coats &amp; Jackets</h6>
                                                    <ul class="list-unstyled">
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Waterproof Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Insulated Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Down
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Softshell Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Casual Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Windproof Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Breathable Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Cleaning &amp; Proofing</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item dropdown-link-all" href="">View
                                                                All</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="dropdown-heading">Insulated</h6>
                                                    <ul class="list-unstyled">
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Insulated Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Bodywarmers</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Parkas</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Baselayers &amp; Thermals</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Winter Hats</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Scarves &amp; Neck</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Gloves &amp; Mitts</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Accessories</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item dropdown-link-all" href="">View
                                                                All</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="d-none d-xxl-block col">
                                                    <h6 class="dropdown-heading">Footwear</h6>
                                                    <ul class="list-unstyled">
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Lifestyle &amp; Casual</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Walking Shoes</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Running Shoes</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Military Boots</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Fabric Walking Boots</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Leather Walking Boots</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Wellies</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Winter Footwear</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item dropdown-link-all" href="">View
                                                                All</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="dropdown-heading text-danger">Special Offers</h6>
                                                    <ul class="list-unstyled">
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger" href="">Insulated
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger"
                                                                href="">Bodywarmers</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger" href="">Parkas</a>
                                                        </li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger" href="">Baselayers
                                                                &amp; Thermals</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger" href="">Winter
                                                                Hats</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger" href="">Scarves &amp;
                                                                Neck</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger" href="">Gloves &amp;
                                                                Mitts</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger"
                                                                href="">Accessories</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item text-danger dropdown-link-all"
                                                                href="">View All</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div
                                                class="align-items-center justify-content-between mt-5 d-none d-lg-flex">
                                                <div class="me-5">
                                                    <a class="d-block" href="">
                                                        <picture>
                                                            <img class="img-fluid d-table mx-auto"
                                                                src="assest/images/logo-1.svg" width="100px">
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div class="me-5">
                                                    <a class="d-block" href="">
                                                        <picture>
                                                            <img class="img-fluid d-table mx-auto"
                                                                src="assest/images/logo-2.svg" width="100px">
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div class="me-5">
                                                    <a class="d-block" href="">
                                                        <picture>
                                                            <img class="img-fluid d-table mx-auto"
                                                                src="assest/images/logo-3.svg" width="100px">
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div class="me-5">
                                                    <a class="d-block" href="">
                                                        <picture>
                                                            <img class="img-fluid d-table mx-auto"
                                                                src="assest/images/logo-4.svg" width="100px">
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div class="me-5">
                                                    <a class="d-block" href="">
                                                        <picture>
                                                            <img class="img-fluid d-table mx-auto"
                                                                src="assest/images/logo-5.svg" width="100px">
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div class="me-5">
                                                    <a class="d-block" href="">
                                                        <picture>
                                                            <img class="img-fluid d-table mx-auto"
                                                                src="assest/images/logo-6.svg" width="100px">
                                                        </picture>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 d-none d-lg-block">
                                            <div class="vw-50 h-100 position-absolute"></div>
                                            <div class="py-lg-5 position-relative px-lg-4">
                                                <div class="row g-4">
                                                    <div class="col-12 col-md-6">
                                                        <div
                                                            class="card border-0 justify-content-center d-flex align-items-center bg-transparent">
                                                            <picture class="w-100 d-block mb-2 mx-auto">
                                                                <img class="w-100 rounded" title=""
                                                                    src="assest/images/banner-12.jpg" alt="">
                                                            </picture>
                                                            <a class="fw-bolder link-cover text-decoration-none text-dark"
                                                                href="">Latest
                                                                Arrivals</a>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div
                                                            class="card border-0 justify-content-center d-flex align-items-center bg-transparent">
                                                            <picture class="w-100 d-block mb-2 mx-auto">
                                                                <img class="w-100 rounded" title=""
                                                                    src="assest/images/banner-13.jpg" alt="">
                                                            </picture>
                                                            <a class="fw-bolder link-cover text-decoration-none text-dark"
                                                                href="">Accessories</a>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div
                                                            class="card border-0 justify-content-center d-flex align-items-center bg-transparent">
                                                            <picture class="w-100 d-block mb-2 mx-auto">
                                                                <img class="w-100 rounded" title=""
                                                                    src="assest/images/banner-14.jpg" alt="">
                                                            </picture>
                                                            <a class="fw-bolder link-cover text-decoration-none text-dark"
                                                                href="">T-Shirts</a>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <div
                                                            class="card border-0 justify-content-center d-flex align-items-center bg-transparent">
                                                            <picture class="w-100 d-block mb-2 mx-auto">
                                                                <img class="w-100 rounded" title=""
                                                                    src="assest/images/banner-15.jpg" alt="">
                                                            </picture>
                                                            <a class="fw-bolder link-cover text-decoration-none text-dark"
                                                                href="">Jackets</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href=""
                                                    class="btn btn-link p-0 fw-bolder text-link-border text-decoration-none mt-5 text-dark mx-auto d-table">Visit
                                                    Mens Section</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item me-lg-4 dropdown position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder dropdown-toggle py-lg-4" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Womens
                            </a>
                            <div class="dropdown-menu dropdown-megamenu w-100 border-0" style="top:86px;">
                                <div class="container">
                                    <div class="row g-0">
                                        <div class="col-12 col-lg-7">
                                            <div class="row py-lg-5">
                                                <div class="col col-lg-6 mb-5 mb-sm-0">
                                                    <h6 class="dropdown-heading">Waterproof Layers</h6>
                                                    <ul class="list-unstyled">
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Waterproof
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Insulated
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Down
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Softshell
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Casual
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Windproof
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Breathable
                                                                Jackets</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Cleaning &amp;
                                                                Proofing</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item dropdown-link-all" href="">View
                                                                All</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div class="col col-lg-6">
                                                    <h6 class="dropdown-heading">Brands</h6>
                                                    <ul class="list-unstyled">
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Lifestyle &amp;
                                                                Casual</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Walking
                                                                Shoes</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Running
                                                                Shoes</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Military
                                                                Boots</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Fabric Walking
                                                                Boots</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Leather
                                                                Walking Boots</a></li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Wellies</a>
                                                        </li>
                                                        <li class="dropdown-list-item"><a class="dropdown-item"
                                                                href="">Winter
                                                                Footwear</a></li>
                                                        <li class="dropdown-list-item"><a
                                                                class="dropdown-item dropdown-link-all" href="">View
                                                                All</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-none d-lg-block col-lg-5">
                                            <div class=""><img src="assest/images/banner-16.jpg" width="100%"
                                                    height="35%" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul class="list-unstyled mb-0 me-4 d-flex align-items-center position-fixed z-2">
                    <li class="me-5 d-inline-block card-button-2">
                        <a href="account.html"
                            class="btn px-3 text-decoration-none navbar-toggler border-0 d-flex align-items-center collapsed"
                            data-pr-search="">
                            <i class="bi bi-person position-relative fs-4"></i>
                        </a>
                    </li>
                    <li class="ms-1 d-inline-block card-button position-fixed z-2">
                        <button
                            class="btn btn-link px-2 text-decoration-none d-flex align-items-center disable-child-pointer"
                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                            <i class="bi bi-cart-dash align-middle position-relative text-secondary fs-5"></i>
                            <i class="ri-shopping-cart-2-line ri-lg"></i><span class="text-secondary"
                                id="cart-count"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart" aria-modal="true"
                            role="dialog">
                            <div class="offcanvas-header d-flex align-items-center">
                                <h5 class="offcanvas-title" id="offcanvasCartLabel">Your Cart</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div class="d-flex flex-column justify-content-between w-100 h-100">
                                   <div class="off-canvas-height">
                                     <table>
                                        <tbody id="cart-items-1"></tbody>
                                    </table>
                                   </div>
                                    <div class="pt-3"style=" position: fixed; bottom: 10px; width: 370px; background-color: white;">
                                        <div
                                            class="d-flex justify-content-between align-items-center mb-2 flex-column flex-sm-row">
                                            <p class="m-0 fw-bolder fs-6">Subtotal</p>
                                            <p id="sub-total" class="cart-details fw-bold">$0</p>
                                        </div>
                                        <a href="checkout.html"
                                            class="btn bg-success-subtle mt-5 mb-2 d-block text-center">Checkout</a>
                                        <a href="addtocart.html"
                                            class="btn btn-dark fw-bolder d-block text-center transition-all opacity-50-hover">View
                                            Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- Offcanvas Header (displayed on screens 576px and below) -->
    <header id="offcanvas-header" class="d-block d-md-none">
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-light bg-light position-fixed w-100 z-2">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <svg class="f-w-7 ms-lg-5 ms-md-4 ms-sm-4" xmlns="http://www.w3.org/2000/svg" height="35px"
                                viewBox="0 0 77.53 72.26">
                                <path
                                    d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z"
                                    fill="currentColor" fill-rule="evenodd"></path>
                            </svg>
                        </a>
                        <div class="d-flex align-items-baseline">
                            <button
                                class="btn btn-link px-2  me-3 text-decoration-none d-flex align-items-center disable-child-pointer"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasCartMobile"
                                aria-controls="offcanvasCartMobile">
                                <i class="bi bi-cart-dash align-middle position-relative text-secondary fs-5"></i>
                                <i class="ri-shopping-cart-2-line ri-lg"></i><span class="text-secondary"
                                    id="cart-count"></span>
                            </button>
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link fw-bolder" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bolder" href="products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bolder" href="#">Mens</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bolder" href="#">Womens</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCartMobile" aria-labelledby="offcanvasCartMobileLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasCartMobileLabel">Your Cart</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex flex-column justify-content-between w-100 h-100">
                    <table>
                        <tbody id="cart-items-1-mobile"></tbody>
                    </table>
                    <div class="pt-3">
                        <div class="d-flex justify-content-between align-items-center mb-2 flex-column flex-sm-row">
                            <p class="m-0 fw-bolder fs-6">Subtotal</p>
                            <p id="sub-total-mobile" class="cart-details fw-bold">$0</p>
                        </div>
                        <a href="checkout.html" class="btn bg-success-subtle mt-5 mb-2 d-block text-center">Checkout</a>
                        <a href="addtocart.html" class="btn btn-dark fw-bolder d-block text-center transition-all opacity-50-hover">View Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
`;

document.querySelector('#header').innerHTML = headerData;

// const product = JSON.parse(localStorage.getItem('cart')) || [];

function viewData() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerHTML = cart.length;
}

document.addEventListener('DOMContentLoaded', viewData);
