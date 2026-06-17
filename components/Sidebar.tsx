export default function Sidebar(){
    return(
        <div>
            <div className="bg-gray-800 p-6 rounded-2xl h-[13vw] w-[15vw]">
                <ul className="flex flex-col gap-4 pl-4 pr-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Dashboards</a>
                    </li>
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Boards</a>
                    </li>
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Tasks</a>
                    </li>
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Settings</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}