export default function Sidebar(){
    return(
        <div>
            <div className="bg-[#FFFFE3] p-6 rounded-2xl h-[13vw] w-[15vw]">
                <ul className="flex flex-col gap-4 pl-4 pr-4">
                    <li>
                        <a href="/" className="text-black hover:text-gray-600">Dashboards</a>
                    </li>
                    <li>
                        <a href="/" className="text-black hover:text-gray-600">Boards</a>
                    </li>
                    <li>
                        <a href="/" className="text-black hover:text-gray-600">Tasks</a>
                    </li>
                    <li>
                        <a href="/" className="text-black hover:text-gray-600">Settings</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}