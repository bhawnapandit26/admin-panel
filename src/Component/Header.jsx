const Header = () => {
    return(
        <div className="w-full shadow-md shadow-gray-200 py-4 px-4 border border-gray-200 rounded-4xl flex justify-between">
            <div>
                <img src="https://www.upskillist.com/images/logo/header-logo.svg" alt="upskillist logo" className="w-44"/>
            </div>
            <div className="font-bold text-xl text-gray-900">
                Monthly Marketing Report
            </div>
        </div>
    )
}

export default Header;