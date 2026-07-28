function Contact() {

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Contact Us
        </h1>


        <form className="space-y-5">


          <div>

            <label className="block font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>



          <div>

            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>



          <div>

            <label className="block font-medium mb-2">
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>



          <button
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Submit
          </button>


        </form>


      </div>


    </div>

  )

}

export default Contact;