import Image from "next/image"

const Profile = () => {
    const data = {
        coverImage: '/assets/images/profile-cover.png',
        profileImage: '/assets/images/profile.png',
        title: 'Albert Flores',
        description: 'Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...',
        address: 'Clinton, Maryland',
        profileViewersandJobsCount: [{
            id: 1,
            text: 'Profile Visitors',
            count: '140',
        },
        {
            id: 2,
            text: 'Resume Viewers',
            count: '20',
        },
        {
            id: 3,
            text: 'My Jobs',
            count: '88',
        }
        ],
        calender: {
            title: 'My calendar',
            text: 'Upcoming Interviews',
        }
    }
    return (
        <aside className="max-w-[346px] w-full shrink-0 flex flex-col gap-[10px]">

            <div className="rounded-[10px] bg-background overflow-hidden h-auto w-full pb-[20px] border border-white flex flex-col gap-[51px] ">
                <div className="relative">
                    <div className="relative w-full h-[100px]">
                        <Image fill src={data?.coverImage} alt='cover photo' />
                    </div>
                    <div className="absolute inset-x-0 inset-y-[57px] mx-auto w-[86px] h-[86px]">
                        <div className="w-full h-full relative overflow-hidden">
                            <Image fill src={data?.profileImage} alt='profile' />
                        </div>
                    </div>

                </div>

                <div className="text-center">
                    <h3 className="mb-[2px] text-18 text-dark font-nhdm">{data?.title}</h3>
                    <p className="max-w-[236px] text-14 w-full mx-auto mb-[5px] font-nhdr line-clamp-2 text-dark">
                        {data?.description}
                    </p>
                    <p className="text-12 text-gray-dark font-nhdr">
                        {data?.address}
                    </p>
                </div>
            </div>
            <ul className="bg-white p-[20px] flex flex-col gap-[10px] rounded-[10px] border border-white w-full h-auto">
                {
                    data?.profileViewersandJobsCount?.map((item) =>
                        <li className="pb-[11px] border-b border-be-gray-mid flex justify-between font-nhdr" key={item?.id}>
                            <span className="text-dark text-14 ">{item?.text}</span>
                            <span className="text-primary text-16">{item?.count}</span>
                        </li>
                    )
                }
            </ul>
            <div className="bg-white rounded-[10px] border border-white p-[10px] w-full">
                <div className="w-full flex justify-between items-center">
                    <div className="">
                        <h3 className="text-16 text-dark font-nhdm">{data?.calender?.title}</h3>
                        <p className="text-14 text-secondary font-nhdr">{data?.calender?.text}</p>
                    </div>
                    <button className="shrink-0 px-[15px]">
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.91 2.20765e-05L12.97 1.06102L7.193 6.84002C7.10043 6.93318 6.99036 7.00711 6.86911 7.05755C6.74786 7.108 6.61783 7.13397 6.4865 7.13397C6.35517 7.13397 6.22514 7.108 6.10389 7.05755C5.98264 7.00711 5.87257 6.93318 5.78 6.84002L7.24192e-08 1.06102L1.06 0.00102187L6.485 5.42502L11.91 2.20765e-05Z" fill="#333333" />
                        </svg>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Profile