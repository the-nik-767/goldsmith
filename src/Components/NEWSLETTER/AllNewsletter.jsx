import React from 'react'

function AllNewsletter() {
  return (
    <>
      <hr />
      <div className="text-center">
        <div
          className="  text-5xl font-mono  mt-10 tracking-widest header-color"
          style={{ fontSize: "35px" }}
        >
          <h2>NEWSLETTER</h2>
        </div>
        <p className=" my-8 text-gray-700" style={{ fontSize: "15px" }}>
          Sign up to our newsletter to receive exclusive offers.
        </p>
        <div className="">
            <span>
              <input
                type="text"
                placeholder="E-mail"
                className="border-solid border border-gray-300 border-inherit px-8 py-1 email-input"
                required
              />
            </span>
            <span>
              <a
                className="newsletter-btn bg-black  text-center text-white  hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black  "
                style={{ padding: "6px  35px"}}
              >
                SUBSCRIBE 
               </a>
            </span>
          </div>
        {/* <form method="post" action="/contact#newsletter-form-template--15252887240755__newsletter" id="newsletter-form-template--15252887240755__newsletter" accept-charset="UTF-8" class="form justify-self-center" /><input type="hidden" name="form_type" value="customer" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="contact[tags]" value="newsletter">

          <div class="form-row"><div class="form-control" /><input id="input-template--15252887240755__newsletter--contactemail" class="input" type="email" dir="ltr" name="contact[email]" placeholder="E-mail" autocomplete="email" enterkeyhint="send" required="" /><label for="input-template--15252887240755__newsletter--contactemail" class="sr-only">E-mail</label></div>
          <button type="submit" class="button">Subscribe</button></div>
    </form > */}
        </div >
    <hr className=" mt-10" />
        </>
        );
}

export default AllNewsletter
