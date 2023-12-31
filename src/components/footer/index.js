import React from "react";

function Footer() {
  return (
    <footer className="footer-container container-fluid flex-row py-5">
      <div className="row offset-1">
        <div className="col-3 d-flex align-items-start justify-content-start flex-column">
          <div className="row">
            <h3 className="footer-logo col fw-bold mb-3">Payeazy</h3>
          </div>
          <div className="row my-5">
            <p className="footer-copyright">Copyright@ 2023 Payeazy</p>
            <p className="footer-copyright">All right reserved</p>
          </div>
          <div className="row">
            <span className="col-3 pe-2">
              <a href="https://github.com/duokobia/payeazy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#515251"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0007 7.46655C13.6832 7.46655 13.3923 7.47669 12.4821 7.51811C11.5736 7.55971 10.9535 7.70353 10.4109 7.91456C9.84969 8.13252 9.37359 8.42407 8.89928 8.89857C8.42461 9.37288 8.13305 9.84898 7.91438 10.41C7.70282 10.9528 7.55882 11.5731 7.51793 12.4812C7.47722 13.3914 7.46655 13.6824 7.46655 16C7.46655 18.3175 7.47686 18.6075 7.51811 19.5177C7.55989 20.4262 7.70371 21.0462 7.91456 21.5888C8.13269 22.1501 8.42425 22.6262 8.89875 23.1005C9.37288 23.5752 9.84898 23.8674 10.4099 24.0854C10.9528 24.2964 11.5731 24.4402 12.4814 24.4818C13.3916 24.5233 13.6823 24.5334 15.9996 24.5334C18.3173 24.5334 18.6073 24.5233 19.5175 24.4818C20.426 24.4402 21.0468 24.2964 21.5897 24.0854C22.1508 23.8674 22.6262 23.5752 23.1003 23.1005C23.575 22.6262 23.8665 22.1501 24.0852 21.589C24.295 21.0462 24.439 20.426 24.4817 19.5179C24.5226 18.6076 24.5332 18.3175 24.5332 16C24.5332 13.6824 24.5226 13.3916 24.4817 12.4814C24.439 11.5729 24.295 10.9528 24.0852 10.4102C23.8665 9.84898 23.575 9.37288 23.1003 8.89857C22.6256 8.4239 22.151 8.13234 21.5892 7.91456C21.0452 7.70353 20.4247 7.55971 19.5163 7.51811C18.606 7.47669 18.3163 7.46655 15.998 7.46655H16.0007ZM15.2351 9.00432C15.4623 9.00397 15.7158 9.00432 16.0006 9.00432C18.2791 9.00432 18.5491 9.0125 19.4489 9.05339C20.2809 9.09143 20.7324 9.23046 21.0332 9.34726C21.4315 9.50193 21.7154 9.68682 22.0139 9.98549C22.3125 10.2842 22.4974 10.5686 22.6525 10.9668C22.7693 11.2673 22.9085 11.7188 22.9463 12.5508C22.9872 13.4504 22.9961 13.7206 22.9961 15.998C22.9961 18.2754 22.9872 18.5456 22.9463 19.4451C22.9083 20.2772 22.7693 20.7287 22.6525 21.0292C22.4978 21.4274 22.3125 21.7109 22.0139 22.0094C21.7152 22.3081 21.4316 22.493 21.0332 22.6477C20.7328 22.765 20.2809 22.9037 19.4489 22.9417C18.5493 22.9826 18.2791 22.9915 16.0006 22.9915C13.722 22.9915 13.452 22.9826 12.5524 22.9417C11.7204 22.9033 11.2689 22.7643 10.9679 22.6475C10.5697 22.4928 10.2852 22.3079 9.98654 22.0093C9.68787 21.7106 9.50298 21.4269 9.34796 21.0284C9.23116 20.728 9.09196 20.2764 9.05409 19.4444C9.0132 18.5449 9.00502 18.2746 9.00502 15.9959C9.00502 13.7171 9.0132 13.4483 9.05409 12.5487C9.09213 11.7167 9.23116 11.2651 9.34796 10.9643C9.50263 10.5661 9.68787 10.2817 9.98654 9.983C10.2852 9.68433 10.5697 9.49944 10.9679 9.34441C11.2687 9.22708 11.7204 9.08841 12.5524 9.05019C13.3396 9.01463 13.6447 9.00397 15.2351 9.00219V9.00432ZM20.5557 10.4212C19.9904 10.4212 19.5317 10.8794 19.5317 11.4449C19.5317 12.0102 19.9904 12.4689 20.5557 12.4689C21.1211 12.4689 21.5797 12.0102 21.5797 11.4449C21.5797 10.8795 21.1211 10.4212 20.5557 10.4212ZM16.0007 11.6177C13.5806 11.6177 11.6184 13.5798 11.6184 16C11.6184 18.4201 13.5806 20.3813 16.0007 20.3813C18.4208 20.3813 20.3823 18.4201 20.3823 16C20.3823 13.5798 18.4208 11.6177 16.0007 11.6177ZM16.0007 13.1555C17.5715 13.1555 18.8451 14.4289 18.8451 16C18.8451 17.5708 17.5715 18.8444 16.0007 18.8444C14.4296 18.8444 13.1562 17.5708 13.1562 16C13.1562 14.4289 14.4296 13.1555 16.0007 13.1555Z"
                    fill="#515251"
                  />
                </svg>
              </a>
            </span>
            <span className="col-3 pe-2">
              <a href="https://github.com/duokobia/payeazy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#515251"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z"
                    fill="#515251"
                  />
                </svg>
              </a>
            </span>
            <span className="col-3 pe-2">
              <a href="https://github.com/duokobia/payeazy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <circle cx="16" cy="16" r="16" fill="#515251" />
                  <path
                    d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM5.58736 16C5.58736 21.7507 10.2493 26.4126 16 26.4126C21.7507 26.4126 26.4126 21.7507 26.4126 16C26.4126 10.2493 21.7507 5.58736 16 5.58736C10.2493 5.58736 5.58736 10.2493 5.58736 16Z"
                    fill="#F2F1F1"
                  />
                  <path
                    d="M16 4C9.3736 4 4 9.3736 4 16C4 22.6264 9.3736 28 16 28C22.6264 28 28 22.6264 28 16C28 9.3736 22.6264 4 16 4ZM12.5129 22.1406H9.59039V13.3481H12.5129V22.1406ZM11.0518 12.1475H11.0327C10.052 12.1475 9.41772 11.4724 9.41772 10.6286C9.41772 9.76581 10.0714 9.10938 11.0712 9.10938C12.0709 9.10938 12.6862 9.76581 12.7052 10.6286C12.7052 11.4724 12.0709 12.1475 11.0518 12.1475ZM23.051 22.1406H20.1288V17.4368C20.1288 16.2547 19.7057 15.4485 18.6483 15.4485C17.8409 15.4485 17.3601 15.9923 17.1488 16.5173C17.0715 16.7051 17.0527 16.9677 17.0527 17.2305V22.1406H14.1303C14.1303 22.1406 14.1686 14.173 14.1303 13.3481H17.0527V14.593C17.441 13.9939 18.1359 13.1417 19.6865 13.1417C21.6093 13.1417 23.051 14.3984 23.051 17.099V22.1406Z"
                    fill="#F2F1F1"
                  />
                </svg>
              </a>
            </span>
            <span className="col-3 pb-0">
              <a href="https://github.com/duokobia/payeazy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <circle cx="16" cy="16" r="16" fill="#515251" />
                  <path
                    d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM5.84688 16C5.84688 21.6074 10.3926 26.1531 16 26.1531C21.6074 26.1531 26.1531 21.6074 26.1531 16C26.1531 10.3926 21.6074 5.84688 16 5.84688C10.3926 5.84688 5.84688 10.3926 5.84688 16Z"
                    fill="#F2F1F1"
                  />
                  <path
                    d="M16 4C9.37256 4 4 9.37256 4 16C4 22.6274 9.37256 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37256 22.6274 4 16 4ZM20.578 10.1111L18.9183 10.1118C17.6168 10.1118 17.3651 10.7303 17.3651 11.6378V13.6388H20.4688L20.4673 16.7729H17.3654V24.8158H14.1281V16.7729H11.422V13.6388H14.1281V11.3274C14.1281 8.64507 15.767 7.1842 18.1596 7.1842L20.5783 7.18789V10.1111H20.578Z"
                    fill="#F2F1F1"
                  />
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="col-9">
          <nav className="col d-flex align-items-cstart justify-content-center">
            <div className="col-3">
              <ul className="list-unstyled">
                <li className="fw-bold pb-3">Product</li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Individual
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Businesses
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Request Demo
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list-unstyled">
                <li className="fw-bold pb-3">Legal</li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list-unstyled">
                <li className="fw-bold pb-3">Resources</li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    FAQs
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Blog
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Career
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    Customer Stories
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list-unstyled">
                <li className="fw-bold pb-3">Contact us</li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    duokobia@gmail.com
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/" className="text-decoration-none">
                    +234 700 000 0000
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
            <div className="col-5 offset-6">
              <input
                className="footer-input-bar form-control my-1"
                type="text"
                placeholder="Your email address"
                aria-label="default input example"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
