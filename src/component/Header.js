const Header = ({ username = 'Welcome Adi' }) => {
    return (
        <header className="w-full bg-white border-gray-200">
            <div className="container mx-auto flex items-center justify-between py-6">
                {/* Left: Premera Icon */}
                <div className="flex items-center space-x-2">
                    <img
                        src="https://www.premera.com/assets/image/logos/pbc_logo.svg"
                        alt="Premera Blue Cross "
                        className="h-8 w-auto"
                    />
                    <span className="text-sm font-semibold text-gray-700 border-l-2 pl-4">
                        Claim
                        <br />
                        Manager
                    </span>
                </div>

                {/* Right: User Info */}
                <div className="flex items-center space-x-2 text-gray-700">
                    <span className="font-medium text-lg">{username} !</span>

                    <button
                        className="text-blue-500 bg-blue-100 rounded-md p-1 hover:bg-blue-200"
                        aria-label="Toggle profile dropdown"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
