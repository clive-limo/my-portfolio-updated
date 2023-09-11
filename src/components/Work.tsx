'use client';

import { useState } from 'react';

import JobCards from './JobCards';

export default function Work() {
  const [selectedJob, setSelectedJob] = useState('Service Delivery Mandera');
  return (
    <section className="w-full" id="work">
      <h1 className="pt-20 text-5xl font-extrabold text-white">
        Work Experience
      </h1>
      <div className="flex flex-row">
        <div className="my-10 w-96 rounded-lg bg-primaryLight">
          <JobCards
            title="Service Delivery Mandera"
            start="July 12th, 2020"
            end="April 27th, 2021"
            selected={selectedJob}
          />
          <JobCards
            title="Prolox Solutions"
            start="July 12th, 2020"
            end="April 27th, 2021"
            selected={selectedJob}
          />
          <JobCards
            title="KEBS Kenya"
            start="July 12th, 2020"
            end="April 27th, 2021"
            selected={selectedJob}
          />
          <JobCards
            title="Chemtron Enterprise"
            start="July 12th, 2020"
            end="April 27th, 2021"
            selected={selectedJob}
          />
        </div>
        <div className=" mx-4 mt-10 flex min-w-fit flex-col lg:m-10">
          <p className="text-sm font-bold lg:text-lg">
            {selectedJob === 'Prolox Solutions'
              ? 'Front-End Developer'
              : 'Full-Stack Developer'}
          </p>
          <p className="text-2xl font-extrabold lg:text-5xl">{selectedJob}</p>
        </div>
      </div>
    </section>
  );
}
