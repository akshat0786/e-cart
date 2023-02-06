import React from "react";

export default function product(props) {
  return (
    <>
      <div className="row mt-3">
        <div className="col-8">
          <h4>
            {props.product.name}
            <br />
            <span className="badge bg-secondary">₹{props.product.price}</span>
          </h4>
        </div>
        <div className="col-5 ">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                props.decrementQuantity(props.index);
              }}
            >
              -
            </button>

            <button type="button" className="btn btn-warning">
              {props.product.quantity}
            </button>

            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-4">
          {props.product.quantity * props.product.price}
        </div>
        <button className="col-1 btn btn-danger"onClick={
          ()=>{
          props.removeItem(props.index);
        }}>
          Remove
        </button>
      </div>
    </>
  );
}
