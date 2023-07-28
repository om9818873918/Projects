import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

function Navbar(){
    <style>
   
    
</style>
    return <div className="bg-[#0052cc]">
      

        <div className="flex relative ">
            <NavLink to={'/'}>
            <div>
                <img className="" src="https://economictimes.indiatimes.com/thumb/msid-59738992,width-150,height-100,resizemode-75,imgsize-25499/amazon.jpg"></img>
            </div>
            </NavLink>

            <div className="absolute left-[50%] mt-[30px] text-2xl">
                <NavLink to={'/'}>
                    <p>Home</p>
                </NavLink>
            </div>
           
            
            <div className="absolute right-[20%] w-20 h-20" >
                <NavLink to={'/cart'}>
                <img width={150} height={100}  src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"></img>
                </NavLink> 
            </div>
        

        </div>
        
    </div>
}
export default Navbar;