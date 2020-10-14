import React from 'react';

const FooterForm = () => {
    return (
        <div className="col-md-5 offset-md-1" >
        <form>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Your Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <input type="password" placeholder="Your Name/Company Name" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group">
  <textarea rows="6" placeholder="Your Message" className="form-control"></textarea>
  </div>

  <button type="submit" className="btn common-btn">Submit</button>
</form>
        </div>
    );
};

export default FooterForm;