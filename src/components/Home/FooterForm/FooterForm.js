import React from 'react';

const FooterForm = () => {
    return (
        <div className="col-md-5 offset-md-1" >
        <form>
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Your Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <input type="password" placeholder="Your Name/Company Name" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group">
  <textarea rows="6" placeholder="Your Message" class="form-control"></textarea>
  </div>

  <button type="submit" class="btn common-btn">Submit</button>
</form>
        </div>
    );
};

export default FooterForm;