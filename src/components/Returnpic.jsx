import React from 'react';

export const Returnpic = () => {
  return (
    <>
      <section className="text-white bg-slate-900 body-font">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
          <div className="flex justify-center">
            <img
              className="rounded-lg w-full h-auto max-w-xs md:max-w-full"
              alt="Return Policy"
              src="../assets/policy.jpeg"
            />
          </div>
          <div className="flex flex-col justify-center p-5 md:p-10">
            <h1 className="title-font sm:text-4xl text-2xl font-bold text-white md:pb-4 pb-2 md:px-8 px-3  ">
              RETURN, REFUND, REPLACE
            </h1>
            <p className="text-sm md:text-base px-2 md:px-10"> 
              At Gadgets Plus, your satisfaction is our top priority. If you're not completely happy with your purchase, we promise to make it right—hassle-free. Simply report any damaged items within 7 days, and we’ll guide you through an easy return process. Refunds or replacements are processed within 5-7 business days after we receive your return, ensuring a swift resolution. Our dedicated customer support team is here to assist you every step of the way, so you can shop with confidence. We believe that a seamless return experience is crucial for your peace of mind, which is why we’ve streamlined our process to be as straightforward as possible. Additionally, we value your feedback and encourage you to share your thoughts on your experience with us. This helps us continually improve our services and better meet your needs. If you have any questions about your return or need assistance with selecting a replacement, don’t hesitate to reach out. Remember, we’re committed to ensuring you’re completely satisfied with your purchase. Thank you for choosing Gadgets Plus, where your happiness is our mission. We look forward to serving you again, and we’re always here to help you find the perfect gadget. Your trust in us means everything, and we’re dedicated to exceeding your expectations every time you shop. There are following steps for this policy mentioned below:
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
