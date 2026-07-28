function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center px-6">

      <div className="text-center text-white">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome To My Website 🚀
        </h1>


        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          A modern React application built with React Router 
          and Tailwind CSS for seamless client-side navigation.
        </p>


        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">

          Explore More

        </button>

      </div>

    </div>

  )

}

export default Home;