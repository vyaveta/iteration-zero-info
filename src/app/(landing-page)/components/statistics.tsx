import { NumberTicker } from '@/components/magicui/number-ticker';
import { FaAmazon, FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { RiNetflixFill } from "react-icons/ri";
import "../landing-page.css";

const Statistics = () => {
    const size = 40;
    return (
        <section className='relative flex flex-col items-center justify-center w-full py-20 companies  overflow-hidden' >
            <div className='stats-container'>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='text-2xl lg:text-4xl font-medium text-center'>
                        <NumberTicker
                            value={100}
                            className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white"
                        /> + <span>Placements</span>
                    </h4>
                </div>
            </div>
            <div className='stats-container'>
                <div className='flex flex-row  items-center justify-center gap-8 mx-auto pt-10 text-muted-foreground transition-all' >
                    <FaMeta className='text-blue-500' size={size} />
                    <FaApple className='text-white' size={size} />
                    <FaAmazon className='text-yellow-500' size={size} />
                    <RiNetflixFill className='text-red-500' size={size} />
                    <FcGoogle size={size} />
                </div>
            </div>
        </section>
    )
}

export default Statistics