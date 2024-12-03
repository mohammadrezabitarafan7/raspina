import Image from "next/image"
import Logo from '../images/logo-raspina.png'
import NavLinks from "./navlink"

const Sidenav = () => {

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-mycolor-50 ">


            <div className="flex justify-center m-5 max-md:w-20 max-md:mb-3 max-md:m-auto">
                <Image className="w-24 "
                    src={Logo}
                    alt="Picture of the author"
                />
            </div>


            <div className="flex grow flex-row justify-start space-x-2 md:flex-col md:space-x-0 md:space-y-2 m-auto">
                <NavLinks />

            </div>
        </div>
    )
}
export default Sidenav