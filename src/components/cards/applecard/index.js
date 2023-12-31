import React from "react";

function AppleCard() {
  return (
    <card className="app-card">
      <div className="row px-2 d-flex align-items-center justify-content-between">
        <div className="col-4 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none">
            <path
              d="M17.0499 20.781C16.0699 21.731 14.9999 21.581 13.9699 21.131C12.8799 20.671 11.8799 20.651 10.7299 21.131C9.28992 21.751 8.52992 21.571 7.66992 20.781C2.78992 15.751 3.50992 8.09104 9.04992 7.81104C10.3999 7.88104 11.3399 8.55104 12.1299 8.61104C13.3099 8.37104 14.4399 7.68104 15.6999 7.77104C17.2099 7.89104 18.3499 8.49104 19.0999 9.57104C15.9799 11.441 16.7199 15.551 19.5799 16.701C19.0099 18.201 18.2699 19.691 17.0399 20.791L17.0499 20.781ZM12.0299 7.75104C11.8799 5.52104 13.6899 3.68104 15.7699 3.50104C16.0599 6.08104 13.4299 8.00104 12.0299 7.75104Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="col d-flex align-items-start justify-content-between flex-column text-secondary">
          <h4 className="store-action-call text-secondary pt-1">
            Download on the
          </h4>
          <span className="store-name d-block text-secondary">Appstore</span>
        </div>
      </div>
    </card>
  );
}

export default AppleCard;
