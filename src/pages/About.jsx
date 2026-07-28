function About() {

  const skills = [
    "React",
    "Tailwind CSS",
    "React Router",
    "JavaScript"
  ];


  return (

    <div className="min-h-screen bg-gray-100 py-16 px-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        About This Project
      </h1>


      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">

        {
          skills.map((skill,index)=>(

            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition"
            >

              <h2 className="text-xl font-semibold text-purple-600">
                {skill}
              </h2>

            </div>

          ))
        }

      </div>

    </div>

  )

}

export default About;