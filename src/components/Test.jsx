import React from 'react'

export const Test = () => {
  return (

<div>
<div className="container mx-auto px-4 py-10 bg-slate-900">
  <h1 className="text-3xl font-bold text-center mb-6">
    Contact Us for Complaints
  </h1>
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <form action="#" method="POST">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required=""
          className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required=""
          className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium">
          Your Complaint
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required=""
          className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
      >
        Submit
      </button>
    </form>
  </div>
  <div className="mt-10">
    <h2 className="text-xl font-semibold text-center mb-4">Our Location</h2>
    <div className="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.682382647197!2d77.12628231493143!3d28.60036228249345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54112b25f73%3A0x2b4c9c18e9d9f87c!2sC%20Block%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%20110058!5e0!3m2!1sen!2sin!4v1633567885830!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>
    <p className="text-center mt-4">
      Contact us at:{" "}
      <a href="tel:8383826302" className="text-blue-400">
        8383826302
      </a>
    </p>
  </div>
</div>

</div>


  )
}
