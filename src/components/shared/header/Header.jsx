import moment from 'moment';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
// BiLogoFacebook

const Header = () => {
    return (
        <div className='flex justify-between  pt-1 items-center'>
            {/* temp and time here  */}
            <div className=''>
            {/* {moment().format("h : mmA ")} || */}
            {moment().format(" dddd, MMMM D, YYYY")}
            </div>
            {/* social icons here  */}
            <div className='flex gap-2'>
            <BiLogoFacebook className='hover:cursor-pointer'></BiLogoFacebook>
            <AiOutlineInstagram className='hover:cursor-pointer'></AiOutlineInstagram>
            <AiOutlineTwitter className='hover:cursor-pointer'></AiOutlineTwitter>
            <AiFillYoutube className='hover:cursor-pointer'></AiFillYoutube>
            </div>
        </div>
    );
};

export default Header;