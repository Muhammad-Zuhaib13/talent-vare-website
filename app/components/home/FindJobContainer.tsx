
import JobsCardsContainer from './JobsCardsContainer'
import Image from 'next/image'
const FindJobContainer = () => {
  const featuredJobs = {
    title: 'Featured Jobs',
    cta: {
      text: 'See Featured Jobs',
      href: '#'
    },
    cards: [{
      id: 1,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 2,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 3,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 4,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 5,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    }


    ]
  }
  const recommendedJobs = {
    title: 'Recommended Jobs',
    cta: {
      text: 'See Recommended Jobs',
      href: '#'
    },
    cards: [{
      id: 1,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 2,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 3,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 4,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 5,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 6,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 7,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 8,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 9,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 10,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    }


    ]
  }
  const latestJobs = {
    title: 'Latest Jobs',
    cta: {
      text: 'See Latest Jobs',
      href: '#'
    },
    cards: [{
      id: 1,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 2,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 3,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 4,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 5,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 6,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 7,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 8,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 9,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    },
    {
      id: 10,
      label: 'Promoted',
      jobTitle: 'UI/UX Designer',
      company: 'Teams',
      companyIcon: '/assets/icons/company-icon.svg',
      location: 'Seattle, USA (Remote)',
      locationIcon: '/assets/icons/pin-icon.svg',
      clockIcon: '/assets/icons/clock-icon.svg',
      posdted: '1 day ago',
      noApplicant: '22 applicants',
      ractIcon: '/assets/icons/ract-icon.svg',
      cta: {
        text: 'Apply Now',
        href: '#'
      }
    }


    ]
  }
  return (
    <div className='flex-1 overflow-hidden'>
      <div className='flex flex-col gap-[21px] w-full border-b border-gray-mid pb-[18px] mb-[18px]'>
        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-22 text-dark font-nhdm'>Find your Dream Job, <span className='text-primary'>Albert!</span></h1>
          <p className='text-14 text-gray-dark font-nhdr'>Explore the latest job openings and apply for the best opportunities available today!</p>
        </div>
        <div className='w-full font-nhdr flex flex-row items-center justify-between bg-background rounded-[10px] border border-white p-[20px] gap-[15px]'>
          <input
            type="search"
            placeholder='Job Title, Company, or Keywords'
            className='text-gray-dark text-14 placeholder:text-14 placeholder:text-gray-dark flex-1 min-w-[200px]'
          />
          <div className='flex flex-row gap-[28px] items-center  w-full justify-end'>
            <span className='w-[1px] h-[36px] bg-gray-mid'></span>
            <select
              name="location"
              id="location"
              defaultValue="Karachi"
              className=' py-[10px] rounded-[8px]  text-14 text-gray-dark bg-white focus:outline-none'
            >
              <option value="Select Locatio" disabled >Select Location</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <span className='w-[1px] h-[36px] bg-gray-mid'></span>
            <select
              name="jobType"
              id="jobType"
              defaultValue="UI / UX Designer"
              className=' py-[10px] rounded-[8px]  text-14 text-gray-dark bg-white focus:outline-none'
            >
              <option value="Job Type" disabled>Job Type</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="UI / UX Designer">UI / UX Designer</option>
            </select>
            <button className='bg-primary min-w-[140px] flex flex-row gap-[10px] justify-center cursor-pointer items-center w-auto px-[20px] py-[10px] rounded-[8px] text-14 text-white hover:opacity-90 transition-opacity'>
              <span className='w-[15.5px] h-[15.5px] relative shrink-0'>
                <Image src='/assets/icons/search-icon-wt.svg' fill alt='' />
              </span>
              <span>
                Search
              </span>

            </button>
          </div>
        </div>
        <div className='flex items-center gap-[15px] font-nhdr'>
          <span className='text-14 text-secondary'>Similar:</span>
          <ul className='text-12 text-secondary flex flex-row gap-[12px] flex-wrap '>
            <li className='border border-secondary py-[8px] px-[15px] rounded-[5px]'>Frontend</li>
            <li className='border border-secondary py-[8px] px-[15px] rounded-[5px]'>Backend</li>
            <li className='border border-secondary py-[8px] px-[15px] rounded-[5px]'>Graphic Designer</li>
          </ul>
        </div>
      </div>
      <JobsCardsContainer data={featuredJobs} />
      <JobsCardsContainer data={recommendedJobs} marginBottom='25px' />
      <JobsCardsContainer data={latestJobs} isShowBorder={false} />
    </div>
  )
}

export default FindJobContainer