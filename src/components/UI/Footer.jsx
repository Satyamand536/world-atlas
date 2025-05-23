import {MdPlace} from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import {TbMailPlus} from "react-icons/tb";
import footerContact from "../../API/FooterApi.json";
import { NavLink } from "react-router-dom";
export const Footer=()=>{
    const footerIcon={
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>,

    }
    return (
    <footer className="footer-section">
        <div className="container grid grid-three-cols">
            {
                footerContact.map((item,index)=>{
                    const { icon, title, details } = item;
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">{footerIcon[icon]}</div>
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                            </div>
                            
                    )
                })
                }
        </div>
        <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://prayam.netlify.app/" target="_blank">
                  Satyam Tiwari
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/satyamand536/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
    )
}