"use client";
import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import { EXPERIENCES } from "../constants/experiences"
import { ExperiencesType, SingularExperienceType } from "../constants/experiences/types"

import { useState } from 'react'
import { render } from 'react-dom'

export default function Experiences() {
  //get all experiences
  const [state, setState] = useState("");
  const allExperiences = EXPERIENCES
  const experienceKeys: (keyof ExperiencesType)[] = Object.keys(
    EXPERIENCES
  ) as (keyof ExperiencesType)[];

  const [experienceTabs, setExperienceTabs] = useState<number>(0);

  //render singular experience
  const selectedExperience: SingularExperienceType[] =
      EXPERIENCES[experienceKeys[experienceTabs]];

  const renderExperiences = (experiences: SingularExperienceType[]) => {
      return experiences.map((experience: SingularExperienceType) => {
        return (
          <>
            <div className="space-y-2 border-b py-2 border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
                <h3 className="text-lg font-bold">{experience.name}</h3>
                {experience.history.map((history, index) => (
                    <div key={index} className='pr-8'>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{history.role} | {history.date}</p>
                    {history.job_desc?.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                    </div>
                ))}
            </div>
          </>
        )
      })
  }

  return (
    <>
    <section className="w-full py-8 md:py-12 lg:py-24" id='experiences'>
          <div className="px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">I have worked with a range of companies, organizations, and projects. Here are a few of my experiences.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              {renderExperiences(allExperiences.Work)} 
              </div>
            </div>
          </div>
        </section>
      <section className="w-full py-8 md:py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Education</h2>
              {renderExperiences(allExperiences.Educations)}
            </div>
          </div>
        </section>
  </>
  )
} 

