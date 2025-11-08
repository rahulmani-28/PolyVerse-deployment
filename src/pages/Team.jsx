// import React from 'react';
// import bg from './a.jpg';

// export default function Team() {
//   const teamMembers = [
//     {
//       name: 'Charitha',
//       role: 'Polymer Data Scientist',
//       description: 'Specialist in polymer data modeling and machine learning applications.',
//     },
//     {
//       name: 'John Smith',
//       role: 'Software Engineer',
//       description: 'Expert in building scalable web applications and system architecture.',
//     },
//     {
//       name: 'Alice Johnson',
//       role: 'Polymer Chemist',
//       description: 'Experienced in polymer synthesis and characterization techniques.',
//     },
//     {
//       name: 'Bob Brown',
//       role: 'Project Manager',
//       description: 'Ensures seamless project execution and collaboration across teams.',
//     },
//     {
//       name: 'Emily Davis',
//       role: 'Research Lead',
//       description: 'Leader of the research department, focusing on innovative polymer solutions.',
//     },
//     {
//       name: 'Michael Lee',
//       role: 'UX/UI Designer',
//       description: 'Designs user-friendly interfaces and experiences for our platform.',
//     }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center"
//       style={{
//         backgroundImage: `url('${bg}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//       }}
//     >
//       <header className="text-center mb-16 pt-24 mt-24">
//         <h1 className="text-5xl font-bold text-gray-800 mb-4">Meet the Team</h1>
//         <p className="text-2xl text-gray-600">The brilliant minds behind PolyVerse.</p>
//       </header>

//       <div className="flex-grow flex justify-center items-start px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-all hover:scale-105 duration-300">
//               <div className="flex flex-col items-center mb-4">
//                 <div className="w-32 h-32 flex items-center justify-center rounded-full bg-blue-600 text-white text-4xl font-bold mb-4">
//                   {member.name[0]}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
//                 <h4 className="text-blue-600 font-medium mb-2">{member.role}</h4>
//                 <p className="text-gray-600 text-center">{member.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import bg from './a.jpg';

// export default function Team() {
//   const teamMembers = [
//     {
//       name: 'Charitha',
//       role: 'Polymer Data Scientist',
//       description: 'Specialist in polymer data modeling and machine learning applications.',
//     },
//     {
//       name: 'John Smith',
//       role: 'Software Engineer',
//       description: 'Expert in building scalable web applications and system architecture.',
//     },
//     {
//       name: 'Alice Johnson',
//       role: 'Polymer Chemist',
//       description: 'Experienced in polymer synthesis and characterization techniques.',
//     },
//     {
//       name: 'Bob Brown',
//       role: 'Project Manager',
//       description: 'Ensures seamless project execution and collaboration across teams.',
//     },
//     {
//       name: 'Emily Davis',
//       role: 'Research Lead',
//       description: 'Leader of the research department, focusing on innovative polymer solutions.',
//     },
//     {
//       name: 'Michael Lee',
//       role: 'UX/UI Designer',
//       description: 'Designs user-friendly interfaces and experiences for our platform.',
//     }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center"
//       style={{
//         backgroundImage: url('${bg}'),
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//       }}
//     >
//       <header className="text-center mb-16 pt-24 mt-24">
//         <h1 className="text-5xl font-bold text-gray-800 mb-4">Meet the Team</h1>
//         <p className="text-2xl text-gray-600">The brilliant minds behind PolyVerse.</p>
//       </header>

//       <div className="flex-grow flex justify-center items-start px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-all hover:scale-105 duration-300">
//               <div className="flex flex-col items-center mb-4">
//                 <div className="w-32 h-32 flex items-center justify-center rounded-full bg-blue-600 text-white text-4xl font-bold mb-4">
//                   {member.name[0]}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
//                 <h4 className="text-blue-600 font-medium mb-2">{member.role}</h4>
//                 <p className="text-gray-600 text-center">{member.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import bg from './a.jpg';

export default function Team() {
  const teamMembers = [
    {
      name: 'Charitha',
      role: 'Project Lead',
      description: 'Ensures seamless project execution and collaboration across teams.',
    },
    {
      name: 'Satvika',
      role: 'UI Designer',
      description: 'Designs and develops the user interface for the project.',
    },
    {
      name: 'Nayana',
      role: 'Backend Devloper',
      description: 'Builds and maintains the backend infrastructure.',
    },
    {
      name: 'Ram gopal',
      role: 'Software Engineer',
      description: 'Expert in building scalable web applications and system architecture.',
    },
    {
      name: 'Sravan',
      role: 'Polymer Data Scientist',
      description: 'Specialist in polymer data modeling and machine learning applications',
    },
    {
      name: 'Vignesh',
      role: 'AI/ML Researcher',
      description: 'Develops and fine-tunes transformer models for polymer property prediction.',
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-blur"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        paddingBottom: '10px',
        
      }}
    >
      <header className="text-center mb-12 pt-16 mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Meet the Team</h1>
        <p className="text-xl text-gray-600">The brilliant minds behind PolyVerse.</p>
      </header>

      <div className="flex-grow flex justify-center items-start px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            // <div
            //   key={index}
            //   className=" p-4 rounded-lg shadow-md transition-all hover:scale-105 duration-300 "
            // >
            <div
  key={index}
  className="p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-300 hover:to-gray-300"
>

              <div className="flex flex-col items-center mb-2">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-400 text-white text-3xl font-bold mb-2">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <h4 className="text-blue-500 font-medium mb-2 text-sm">{member.role}</h4>
                <p className="text-gray-600 text-center text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}