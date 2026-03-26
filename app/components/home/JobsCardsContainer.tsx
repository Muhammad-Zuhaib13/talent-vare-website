import Link from 'next/link'
import Image from 'next/image'

const JobsCardsContainer = (props:any) => {
    const {data, marginBottom='18px', isShowBorder=true } = props;
    return (
        <div className={`flex flex-col gap-[15px] w-full pb-[18px] ${isShowBorder && 'border-b border-b-gray-mid'}  mb-[${marginBottom}]`}>
            <div className='flex flex-row gap-[15px] font-nhdr'>
                <h2 className='text-18 text-dark '>{data?.title}</h2>
                <Link className='text-18 text-primary underline underline-offset-3' href={data?.cta?.href}>{data?.cta?.text}</Link>
            </div>
            <div className='w-full grid grid-cols-5 gap-[16px]'>
                {
                    data?.cards?.map((item:any) =>
                        <div key={item?.id} className='w-full flex flex-col gap-[15px] border border-gray-mid-dark bg-background px-[20px] py-[10px] rounded-[10px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <h6 className='text-10 text-dark font-nhdm'>{item?.label}</h6>
                                <div className='flex flex-row gap-[10px]'>
                                    <div className='w-[40px]  h-[40px] bg-company-icon rounded-[9px] flex justify-center items-center'>
                                        <div className='relative w-[23px] h-[21.4px] '>
                                            <Image src={item?.companyIcon} fill alt={item.company} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <h4 className='text-14 text-dark font-nhdr text-nowrap'>{item?.jobTitle}</h4>
                                        <h4 className='text-12 text-dark font-nhdr'>{item?.company}</h4>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-[5px] font-nhdr'>
                                    <div className='flex gap-[10px] items-center'>
                                        <div className='shrink-0 w-[12px] aspect-square relative'>
                                            <Image src={item?.locationIcon} fill alt={item?.location} />
                                        </div>
                                        <p className='text-gray-dark text-12'>{item?.location}</p>
                                    </div>
                                    <div className='flex gap-[10px] items-center'>
                                        <div className='shrink-0 w-[12px] aspect-square relative'>
                                            <Image src={item?.clockIcon} fill alt={item?.location} />
                                        </div>
                                        <div className='flex gap-[4px]'>
                                            <p className='text-gray-dark text-12 text-nowrap'>{item?.posdted}</p>
                                            <span className='bg-gray-dark h-auto w-[1px]'></span>
                                            <p className='text-primary text-12 text-nowrap'>{item?.noApplicant}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-[20px] items-center'>
                                <Link href={item?.cta?.href} className='bg-primary text-nowrap text-white text-12 font-nhdr rounded-[6px] py-[10px] px-[30px]'>
                                    {
                                        item?.cta?.text
                                    }
                                </Link>
                                <div className='w-[11.4px] h-[16px] relative shrink-0'>
                                    <Image fill src={item?.ractIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default JobsCardsContainer