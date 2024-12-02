import style from './Navbar.module.css'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Input, Link } from "@chakra-ui/react"
import { IoSearchOutline } from "react-icons/io5";

export default function NavBar(){
    return(
        <div className={style['nav']}>
            <p className={style['logo']}>HotCoffee</p>
            <div className={style['search']}>
                <IoSearchOutline  style={{color:'black', height:'20px', width:'20px'}} />
                <Input placeholder="Search..." style={{width:'300px', padding:'15px', border:'none', color:'black', fontSize:'16px'}}/>
            </div>
            <div className={style['nav-items']}>
                <Link href='#home' style={{color:'black', fontSize:'16px', fontWeight:'bold', marginRight:'20px'}}>Home</Link>
                <Link href='#articles' style={{color:'black', fontSize:'16px', fontWeight:'bold', marginRight:'30px'}}>Acticles</Link>
                <div style={{display:'flex', height:'100%', width:'200px', alignItems:'center', gap:'0 10px'}}>
                    <a target='blank' href='https://www.instagram.com/hotcoffee0508/' style={{display:'flex', height:'35px', width:'50px', alignItems:'center'}}><AiFillInstagram style={{color:'black', height:'100%', width:'100%'}}></AiFillInstagram></a>
                    <a target='blank' href='https://x.com/i/flow/login?redirect_after_login=%2Fcoffeeart' style={{display:'flex', height:'35px', width:'50px', alignItems:'center'}}><IoLogoTwitter style={{color:'black', height:'100%', width:'100%'}}/></a>
                    <a target='blank' href='https://www.linkedin.com/company/hotcoffee-shop/' style={{display:'flex', height:'35px', width:'50px', alignItems:'center'}}><FaLinkedin style={{color:'black', height:'100%', width:'100%'}}/></a>
                </div>
            </div>
        </div>
    )
}