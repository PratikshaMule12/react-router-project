function NotFound() {

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-7xl font-bold text-purple-600">
        404
      </h1>


      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>


      <p className="text-gray-600 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>


      <a
        href="/"
        className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
      >
        Go Home
      </a>


    </div>

  )

}

export default NotFound;