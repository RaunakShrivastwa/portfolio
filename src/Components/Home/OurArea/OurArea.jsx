import './OurArea.scss';
import { served } from '../../../staticJson/static';

const OurArea = ()=>{
    return (
      <>
        <div className="wrapper1 d-none d-xl-flex d-lg-flex">
          <h1>We Serve All Industries</h1>
          <small className="f12">
            We stay on top of our industry by being experts in yours.
          </small>
          <div class="container1">
            {served.map((item) => (
              <div class="box">
                <img src={item?.Image} alt=""  title={item?.tips} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default OurArea;