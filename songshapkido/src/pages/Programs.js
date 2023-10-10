import React from "react";
import kidsClass from '../assets/kids-class.jpg'
import adultClass from '../assets/adult-class.jpg'

const programsData = [
    {
      title: "Children's Class (White to Blue Belt)",
      ageGroup: "5 to 9 year olds",
      description:
        "Our Children's Class is tailored for young martial artists who are at the White to Blue Belt levels. This program focuses on building a strong foundation in martial arts while instilling discipline, respect, and self-confidence. Through age-appropriate training, children will develop physical fitness, basic self-defense skills, and the principles of Song's Hapkido. In this class, we also introduce young martial artists to the art of kicking, teaching them how to execute kicks safely and effectively. Our experienced instructors create a safe and fun environment where kids can learn and grow.",
      image: kidsClass,
    },
  
    {
      title: "Advanced Children's Class (Brown to Black Belt)",
      ageGroup: "up to 12 year olds",
      description:
        "For our more experienced young martial artists holding Brown to Black Belts, we offer the Advanced Children's Class. This program is designed to refine their skills and deepen their understanding of Song's Hapkido. Advanced techniques, sparring, and advanced self-defense are core components of this class. In addition to advanced techniques, we focus on advanced kicking techniques, allowing students to expand their kicking repertoire. Our dedicated instructors work closely with each student to help them progress and achieve their goals in martial arts.",
      image: kidsClass,
    },
  
    {
      title: "White to Blue Belt Preteen Class",
      ageGroup: "10 to 13 year olds",
      description:
        "The White-Blue Belts Preteen Class is specially designed for young martial artists between the ages of 10 and 13 who are at the White to Blue Belt levels. This class provides a bridge between the Children's Class and the Adult Classes, offering age-appropriate training and challenges. Preteens will learn fundamental techniques, self-defense, and gain confidence in their abilities, including kicking techniques. Our instructors ensure a positive and motivating atmosphere for this age group, helping them develop a well-rounded skill set that includes kicks.",
      image: kidsClass,
    },
  
    {
      title: "Adult Classes (All Belt Levels)",
      ageGroup: "Ages 13+",
      description:
        "Our Adult Classes are open to individuals aged 13 and older, regardless of their belt level. Whether you're a complete beginner or an experienced martial artist, our Adult Classes cater to all skill levels. We focus on teaching practical self-defense techniques, improving physical fitness, and enhancing mental discipline. In this program, we cover a wide range of techniques, including kicks, to ensure that our students are well-rounded martial artists. It's a great opportunity to challenge yourself, stay fit, and learn effective self-defense skills in a supportive and encouraging environment.",
      image: adultClass,
    },
  ];
  

export default function Programs() {
    return (
        <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-5 text-center">What We Offer</h1>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {programsData.map((program, index) => (
              <div
                key={index}
                className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg mt-9">
                    <h2 className="text-base font-semibold leading-7 text-yellow-600">
                      {program.ageGroup}
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {program.title}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      {program.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={program.image}
                    alt="Programs Screenshot"
                    className="rounded-xl shadow-xl ring-1 ring-gray-400/10 h-[20rem] sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover"
                    width={2432}
                    height={1442}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}
