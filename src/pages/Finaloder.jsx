import React, { useContext, useEffect, useRef, useState } from 'react';
import { Store } from './StoreProvider';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const Finaloder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { confirmedOrders, formData } = useContext(Store);
  const [showbill, setShowBill] = useState(false);

  const subtotal = confirmedOrders.reduce((total, order) => total + (order.price * order.quantity), 0);
  const shippingFee = 100;
  const discountRate = 10;
  const discount = subtotal * (discountRate / 100);
  const totalPrice = subtotal + shippingFee - discount;

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userName = storedUser ? storedUser.name : 'Guest';

  const invoiceRef = useRef();

  const downloadInvoice = () => {
    const element = invoiceRef.current;

    if (!element) {
      console.error('Invoice element is not available');
      return;
    }

    html2canvas(element, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('portrait', 'pt', 'a4');
        const imgWidth = 595.28;
        const pageHeight = 841.89;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('invoice.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <>
      

      <div className='pt-5 bg-black px-4 md:px-24 mt-8'>
        <h1 className='text-xl md:text-3xl font-semibold mt-3 md:mt-16 text-white'>
          Hey {userName}, Your Orders
        </h1>

        <div className='pb-20'>
          {confirmedOrders.length > 0 ? (
            confirmedOrders.map((item, index) => (
              <div
                key={index}
                className='py-4 border-t border-opacity-30 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-5'
              >
                <div className='flex items-start gap-4 md:gap-6 text-sm'>
                  <img className='w-16 md:w-20' src={item.imageSrc} alt={item.name} />
                  <div>
                    <p className='text-sm font-medium'>{item.name}</p>
                    <div className='flex items-center gap-2 md:gap-3 mt-2 text-base text-gray-700'>
                      <p className='text-lg text-red-500 font-semibold'>₹ {item.price}</p>
                      <p className='text-white'>Quantity: {item.quantity}</p>
                    </div>

                    {/* Displaying user's delivery information */}
                    <div>
                      <p>{formData.name} {formData.lastName}</p>
                      <p>{formData.street}, {formData.city}, {formData.state}</p>
                      <p>{formData.zipCode}, {formData.country}</p>
                      <p>{formData.phone}</p>
                    </div>

                    <p className='mt-2'>
                      Date: <span>{new Date().toLocaleDateString()}</span>
                    </p>
                  </div>
                </div>

                <div className='flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p>{item.status}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-gray-700 mt-3 mx-20'>You have no confirmed orders.</p>
          )}
        </div>

        {confirmedOrders.length > 0 && (
          <div className='flex justify-end pb-10 md:pt-10 pt-0 gap-4'>
            <button
              className='text-white bg-green-700 px-4 py-2'
              onClick={() => setShowBill(true)}
            >
              Show Invoice
            </button>
            <button
              className='text-white bg-green-700 px-4 py-2'
              onClick={() => setShowBill(false)}
            >
              Hide Invoice
            </button>
          </div>
        )}

        {showbill && (
          <div ref={invoiceRef} id='invoice'>
            <div className="p-4 md:p-8 bg-white font-sans max-w-4xl mx-auto border border-gray-200 rounded-lg shadow">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <img src="../assets/logo.png" alt="Your Company" className="h-8 w-auto text-black" />
                  <h1 className="text-xl md:text-5xl font-bold pt-5">GADGETS PLUS Ltd.</h1>
                  <div className="mt-4 text-sm md:text-md">
                    <p>FROM</p>
                    <p>GADGETS PLUS Ltd. , CU-BLOCK PITUMPURA</p>
                    <p>New Delhi, DL 110085</p>
                  </div>
                </div>
                <div className="text-right text-sm md:text-md">
                  <div className="text-gray-600">RECEIPT # 8005</div>
                  <div className="text-gray-600">RECEIPT DATE {new Date().toLocaleDateString()}</div>
                </div>
              </div>

              {/* Billing and Shipping */}
              <div className="flex justify-between gap-4 mt-8">
                <div className='text-sm md:text-md'>
                  <p className="font-bold">BILL TO</p>
                  <p>{formData.name} {formData.lastName}</p>
                  <p>{formData.street}</p>
                  <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                  <p>{formData.phone}</p>
                </div>
                <div className='text-sm md:text-md'>
                  <p className="font-bold">SHIP TO</p>
                  <p>{formData.name} {formData.lastName}</p>
                  <p>{formData.street}</p>
                  <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                </div>
              </div>

              {/* Table */}
              <div className="mt-8 border-t border-gray-300">
                <table className="w-full mt-4 text-left">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="py-1 md:py-2 text-[12px] md:text-lg">QTY</th>
                      <th className="py-1 md:py-2 text-[12px] md:text-lg">NAME</th>
                      <th className="py-1 md:py-2 text-[12px] md:text-lg">PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {confirmedOrders.map((order, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-1 md:py-2 text-[12px] md:text-lg">{order.quantity}</td>
                        <td className="py-1 md:py-2 text-[12px] md:text-lg">{order.name}</td>
                        <td className="py-1 md:py-2 text-[12px] md:text-lg">₹ {order.price}/-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex justify-end mt-14 md:text-lg text-sm" >
                <div className="w-full max-w-xs">
                  <div className="flex justify-between py-2">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Shipping Fee</span>
                    <span>₹{shippingFee}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Discount</span>
                    <span>- ₹{discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-b border-gray-300 py-2 ">
                    <span className="font-bold text-lg">TOTAL</span>
                    <span className="font-bold text-lg">₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-8">
                <p className="text-right">GADGETS PLUS Ltd.</p>
              </div>
              <div className='flex justify-end mt-2'>
                <img src="../assets/paid.png" className='w-24 rounded-full bg-white' />
              </div>

              {/* Footer */}
              <div className="mt-12 text-gray-600">
                <p className="font-bold">TERMS & CONDITIONS</p>
                <p>Payment is due within 5 days.</p>
                <p>Please check products at the time of delivery.</p>
              </div>
              <div>
                <p className="text-sm font-normal text-black dark:black pt-9">
                  © 2023 Gadgets plus™. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        )}

        {showbill && (
          <div className='flex justify-center pb-10 mt-10'>
            <button
              className='text-white bg-green-700 px-4 py-2'
              onClick={downloadInvoice}
            >
              Download Invoice
            </button>
          </div>
        )}
      </div>
    </>
  );
}