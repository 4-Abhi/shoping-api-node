import style from "./checkout.module.css";
const CheckOut = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <section className={style.listing}>
          <div className="row">
            <div className="col">
              <div>
                <table className="table">
                  <thead>
                    <tr className={style.heading}>
                      <th scope="col">Serial</th>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={style.list}>
                      <td>1</td>
                      <td>Product </td>
                      <td>Product Name</td>
                      <td>18</td>
                      <td>1</td>
                      <td>Delete</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className={style.deliver}>
          <div className="row">
            <div className={style.head}>
              <h2>Deliver Schedule</h2>
            </div>
            <div className="col-sm-12 col-lg-4 ">
              <div className={style.card}>
                <h4>Express</h4>
                <h5>90 Min Express Delivery</h5>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 ">
              <div className={style.card}>
                <h4>Next Day</h4>
                <h5>90 Min Express Delivery</h5>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 ">
              <div className={style.card}>
                <h4>Next Day</h4>
                <h5>Next Day Or Tomorrow</h5>
              </div>
            </div>
          </div>
        </section>
        <section className={style.billing}>
          <form>
            <h4>Billing Details</h4>
            <div className="row  row-cols-2 row-cols-lg-2">
              <div className="col">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>

              <div className="col">
                <label htmlFor="exampleFormControlInput1">Mobile No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile No"
                />
              </div>
              <div className="col">
                <label htmlFor="street">Street No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="col">
                <label htmlFor="Flate">Flat No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <label htmlFor="Pincode">Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <label htmlFor="landMarl">Land Mark</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <div type="submit" className={style.submitbtn}>
              Save
            </div>
          </form>
        </section>
        <section className={style.payment}>
          <div className="row  row-cols-md-2 rowl-cols-lg-2">
            <div className="col col-sm-12 ">
              <div className={style.left}>
                <h4>Paytment Method</h4>
                <div className={style.method}>
                  <div className={style.option}>
                    <input type="radio" name="payment" value="paytm" /> Paytm
                    <br />
                  </div>
                  <div className={style.option}>
                    <input type="radio" name="payment" value="rozgaar" /> Other
                    <br />
                  </div>
                </div>
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
                <div className={style.submit}>Place Order</div>
              </div>
            </div>
            <div className="col col-sm-12">
              <div className={style.right}>
                <h4>Cart Totals</h4>
                <div className={style.cart}>
                  <ul>
                    <li>
                      <span>Vegetables Juices × 2</span>
                      <span>$298.00</span>
                    </li>
                    <li>
                      <span>Vegetables Juices × 2</span>
                      <span>$298.00</span>
                    </li>
                    <li>
                      <span>Vegetables Juices × 2</span>
                      <span>$298.00</span>
                    </li>
                    <li>
                      <span>Vegetables Juices × 2</span>
                      <span>$298.00</span>
                    </li>
                    <li>
                      <span>Order Total</span>
                      <span>$298.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default CheckOut;
