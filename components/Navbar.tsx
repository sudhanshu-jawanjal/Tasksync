export default function Navbar() {
    return (
        <nav className="bg-gray-800 py-4 px-8 w-fit rounded-2xl">
            <ul className="flex space-x-48 ">
                <li>
                    <a href="/" className="text-white hover:text-gray-300">TASKSYNC</a>
                </li>
                <li>
                    <a href="/dashboard" className="text-white hover:text-gray-300">Dashboard</a>
                </li>
                <li>
                    <a href="/profile" className="text-white hover:text-gray-300">Profile</a>
                </li>
            </ul>
        </nav>
    );}