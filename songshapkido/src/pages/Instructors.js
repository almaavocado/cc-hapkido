import songMclynn from '../assets/song-mclynn.jpg';
import okelly from '../assets/okelly.jpg'
import profile from '../assets/profile.png'

const facts = [
    { name: 'Founder', description: 'Songs Hapkido West Los Angeles' },
]

const fifthDegree = [
    {
        name: 'Master Morris O\'Kelly',
        imageSrc: okelly,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      },
      {
        name: 'Master Brown',
        imageSrc: profile,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    
      },
]

const fourthDegree = [
    {
        name: 'Mr. Gatnallel',
        imageSrc: profile,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      },
      {
        name: 'Mr. Delahusse',
        imageSrc: profile,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    
      },
]

const thirdDegree = [
    {
        name: 'Mr. Madera',
        imageSrc: profile,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      },
      {
        name: 'Mr. Lee',
        imageSrc: profile,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    
      },
]

const secondDegree = [
    {
        name: 'Mr. Harris',
        imageSrc: profile,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      },
      {
        name: 'Mr. Stolpe',
        imageSrc: profile,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    
      },
]

export default function Instructors() {
    return (
        <div>
           
            <div className="bg-gray-100 pt-6">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">6th Degree Master</h1>

                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src={songMclynn}
                            alt="song-air"
                            className="rounded-md bg-gray-100 w-full h-96 object-cover"
                        />
                    </div>
                    
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">Master Sean McLynn</h1>
                        <h2 className="text-1xl mt-2 font-bold tracking-tight text-gray-700 sm:text-1xl">6th Degree Black Belt</h2>
                        <p className="mt-4 text-gray-900 text-md">
                            Back in 1992, Master Sean McLynn started teaching martial arts at a park in Westside LA. He's been at it ever since and has earned the impressive rank of 6th Degree Black Belt.
                            He's also the person behind Song's Hapkido in West LA, proudly associated with the Dohyun International Hapkido Federation. He's carried forward the tradition of martial arts with a lot of heart and dedication.
                            During his journey, Master McLynn had the privilege of learning from Grandmaster Song, and that experience shaped not only his skills but also his deep love for martial arts.
                        </p>  
                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            {facts.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-md text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>       
                    </div>
                   

                </div>


                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">5th Degree Masters</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        {fifthDegree.map((callout) => (
                            <div key={callout.name} className="group relative flex flex-col items-center justify-center">
                            <div className="relative h-80 w-80 lg:h-96 lg:w-96 overflow-hidden rounded-lg bg-white">
                                <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                <a href={callout.href}>
                                <span className="absolute inset-0" />
                                {callout.name}
                                </a>
                            </h3>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>


                

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">4th Degree Instructors</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        {fourthDegree.map((callout) => (
                            <div key={callout.name} className="group relative flex flex-col items-center justify-center">
                            <div className="relative h-80 w-80 lg:h-96 lg:w-96 overflow-hidden rounded-lg bg-white">
                                <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                <a href={callout.href}>
                                <span className="absolute inset-0" />
                                {callout.name}
                                </a>
                            </h3>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">3rd Degree Instructors</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        {thirdDegree.map((callout) => (
                            <div key={callout.name} className="group relative flex flex-col items-center justify-center">
                            <div className="relative h-80 w-80 lg:h-96 lg:w-96 overflow-hidden rounded-lg bg-white">
                                <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                <a href={callout.href}>
                                <span className="absolute inset-0" />
                                {callout.name}
                                </a>
                            </h3>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-8 text-center">2nd Degree Instructors</h1>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        {secondDegree.map((callout) => (
                            <div key={callout.name} className="group relative flex flex-col items-center justify-center">
                            <div className="relative h-80 w-80 lg:h-96 lg:w-96 overflow-hidden rounded-lg bg-white">
                                <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                <a href={callout.href}>
                                <span className="absolute inset-0" />
                                {callout.name}
                                </a>
                            </h3>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
