import './nav.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";
function Nav({ title }) {
  return (
    <nav className='navContainer'>
      <h2>Vegetable Shop</h2>
      <div className="navbar">
        <div className="navLink">
            <a className="navLin" href="https://www.google.com/maps/@-7.1644991,109.7538038,21z?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="-7.164188, 109.753920">
                <i><TbCalendarTime className='icon'/>Reservasi</i>
            </a>
            <a className="navLin" href="tel:085713211574">
                <i><BiSolidPhoneCall className='icon'/>085713211574</i>
            </a>
        </div>
    </div>
      
    </nav>
  );
}
export default Nav;