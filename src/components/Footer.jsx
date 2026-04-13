export default function Footer() {
    return (
        <footer className="bg-[#2D4A3E] text-white">

            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="flex flex-col items-center text-center gap-4">

                    {/* Logo */}
                    <h2 className="text-4xl font-extrabold tracking-tight">
                        Keen<span className="font-extrabold">Keeper</span>
                    </h2>

                    {/* Tagline */}
                    <p className="text-sm text-green-100 max-w-md">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture
                        the relationships that matter most.
                    </p>

                    {/* Social Links */}
                    <div className="mt-4">
                        <p className="text-sm font-medium mb-3">Social Links</p>
                        <div className="flex items-center gap-3">

                            <a
                            href="#"
                            aria-label="Instagram"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20
                            flex items-center justify-center transition-colors">
                            <img src="../assets/instagram.png" alt="instagram" />
                            </a>

                        {/* Facebook */}
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20
                            flex items-center justify-center transition-colors"
                        >
                            <img src="../assets/facebook.png" alt="facebook" />
                        </a>

                        <a
                            href="#"
                            aria-label="X"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20
                            flex items-center justify-center transition-colors"
                        >
                            <img src="../assets/twitter.png" alt="twitter" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>

        <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4
                        flex flex-col sm:flex-row items-center justify-between gap-2
                        text-xs text-green-200">
                <span>© 2026 KeenKeeper. All rights reserved.</span>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
        </div>

    </footer >
)

}