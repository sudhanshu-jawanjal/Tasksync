export default function Navbar() {
    return (
    <nav className="bg-[#FFFFE3] text-black  py-4 px-8 w-fit rounded-2xl">
            <ul className="flex space-x-48 ">
                <li>
                    <a href="/" className="text-black hover:text-gray-600">TASKSYNC</a>
                </li>
                <li>
                    <a href="/dashboard" className="text-black hover:text-gray-600">Dashboard</a>
                </li>
                <li>
                    <a href="/profile" className="text-black hover:text-gray-600">Profile</a>
                </li>
            </ul>
        </nav>
    );}