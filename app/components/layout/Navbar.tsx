import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
    const links = [
        {
            id: 1,
            href: '/',
            text: 'Find Jobs'
        },
        {
            id: 2,
            href: '#',
            text: 'Top Companies'
        },
        {
            id: 3,
            href: '#',
            text: 'Job Tracker'
        },
        {
            id: 4,
            href: '#',
            text: 'Documents'
        },
        {
            id: 5,
            href: '#',
            text: 'Messages'
        },

        {
            id: 5,
            href: '#',
            text: 'Notifications'
        },
    ]
    return (
        <nav className='min-h-[70px] bg-background pt-[15px] pb-[16px] fixed w-full z-10 '>
            <div className='custom-container flex items-center justify-between'>
                <div className="flex items-center gap-[38px]">
                    <Link className="w-[41px] h-[38.45px] overflow-hidden relative inline-block shrink-0" href='/'>
                        <Image src='/assets/icons/logo.svg' fill alt='Talent Vare' />
                    </Link>
                    <ul className="flex gap-[25px]">
                        {
                            links?.map((item) => <li key={item?.id} className="text-16 text-secondary font-nhdr">
                                <Link href={item?.href}>
                                    {item?.text}
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>

                <div className="flex items-center gap-[15px]">
                    <div className="max-w-[261px] w-full relative px-[20px] bg-blue-light rounded-[8px]">
                        <div className="absolute w-[15.5px] h-[15.5px] my-auto inset-y-0">
                            <div className=" relative w-full h-full">
                                <Image src="/assets/icons/search-icon-gr.svg" alt='search' fill />
                            </div>
                        </div>
                        <input placeholder="Search" type="search" className=" py-[10px] px-[40px] w-full   placeholder:text-secondary placeholder:text-14 text-14  font-nhdr" />
                    </div>
                    <button className="bg-primary font-nhdr py-[10px] px-[20px] shrink-0 rounded-[8px] text-white cursor-pointer">Resume Builder</button>
                    <div className="w-[38px] h-[38px] relative overflow-hidden rounded-[50%] shrink-0">
                        <Image src="/assets/images/login-picture.png" alt='profile' fill />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar