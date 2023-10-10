/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import kidsClass from '../assets/kids-class.jpg';
import appBanner from '../assets/app-banner-h.png';

import {
  LightningBoltIcon,
  ShieldCheckIcon,
  StarIcon,
  CheckIcon,
} from '@heroicons/react/solid';

const programFeatures = [
  {
    name: 'Push to learn.',
    description:
      'Our programs are designed to help you learn martial arts effectively. We provide a supportive and encouraging environment for all students.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Self-defense skills.',
    description:
      'Develop practical self-defense techniques as you progress in our programs. Our experienced instructors will guide you to build your skills.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Focus on throws.',
    description:
      'We emphasize throws as a core component of our training. Learn the art of throws and leverage them for self-defense and control.',
    icon: StarIcon,
  },
];

const includedFeatures = [
  'Uniform',
  'White Belt',
  'One-week access to our classes',
  'Parental consent required for participants under 18 years of age'
]

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src={appBanner}
          alt="App Banner"
          className="absolute inset-0 h-fit w-full object-fit object-right md:object-center sm:w-full"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 justify-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex justify-center items-center h-60 mt-12">
              <div className="absolute inset-x-0 top-44 bg-white bg-opacity-70 mx-auto w-11/12 sm:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Song's Hapkido West Los Angeles
                </h1>

                <div className="mt-8 flex items-center justify-center gap-x-6">
                  <a
                    href="/our-programs"
                    className="rounded-md bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover-bg-slate-500 focus-visible-outline focus-visible-outline-2 focus-visible-outline-offset-2 focus-visible-outline-indigo-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-100 p-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:flex lg:justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                Unleashing Potential Since 1992
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                For over three decades, Song's Hapkido West LA has been in the heart of Culver City. Established in 1992, our martial arts studio has nurtured the physical and mental development of countless individuals, creating a legacy of excellence in Hapkido.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Hapkido, a Korean martial art, isn't just about self-defense; it's a practice that instills discipline, builds self-confidence, and enhances physical fitness. Our dedicated instructors are committed to helping students unleash their full potential.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                From practical self-defense techniques to learning the art of throws and achieving mastery in martial arts, our programs are designed to foster a sense of achievement and personal growth. For parents seeking a safe and encouraging environment for their children, Song's Hapkido West LA is the ideal choice.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Enroll yourself or your child today and become part of our rich legacy, where physical fitness, mental fortitude, and personal growth are the cornerstones of a brighter future. Join us and start an empowering journey towards self-improvement. Your path to excellence begins here at Song's Hapkido West LA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
          {/* Visit Us Container */}
        <div className="bg-gray-200 rounded-md p-4 mb-8">
          <h2 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-4xl">Visit Us</h2>
          <h3 className="mt-2 text-lg font-bold">4354 Sepulveda Blvd, Culver City, CA 90230</h3>
        </div>
        </div>
        

      <div className="bg-gray-100 p-6 sm:p-10"> {/* Added padding for mobile */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-20">
            <div className="lg:pr-8 lg:pt-4 mt-10">
              <div className="lg:max-w-lg mt-4">
                <h2 className="text-base font-semibold leading-7 text-yellow-600">Achieve Success</h2>
                <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Hapkido Programs
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover the benefits of our Hapkido programs for all ages. We are committed to helping you achieve your goals.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {programFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-yellow-600" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 flex justify-center gap-x-6">
                  <a
                    href="/our-programs"
                    className="rounded-md bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover-bg-slate-500 focus-visible-outline focus-visible-outline-2 focus-visible-outline-offset-2 focus-visible-outline-indigo-600"
                  >
                    Classes Offered
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={kidsClass}
                alt="Programs Screenshot"
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-10">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto sm:mt-10">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">1 Week Trial</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Receive a one-week trial for $25. Please visit us at the studio, and don't forget to bring your own water! If you are under 18, a parent must be present on the first day of class.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-800">What’s included</h4>
            <div className="flex-auto border-t-2 border-gray-200" /> {/* Added border to create the line */}
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-600" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Embark on your Hapkido journey to success</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$25</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="/contact-us"
                  className="mt-10 block w-full rounded-md bg-yellow-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover-bg-yellow-500 focus-visible-outline focus-visible-outline-2 focus-visible-outline-offset-2 focus-visible-outline-indigo-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className="bg-gray-100 p-10"></div>
      </div>
     
  );
}
