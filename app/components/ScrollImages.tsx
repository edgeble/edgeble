import './ScrollImages.css';
export default function ScrollImages() {
    return (
        <div className="relative">
                        <div className="absolute top-0 right-0 w-10 md:w-36 fixed h-full bg-gradient-to-r from-transparent to-white"></div>
                        <div className="flex overflow-x-scroll pb-4 mt-2 hide-scroll-bar scrollbar-hide">
                            <div className="flex flex-nowrap ml-2">
                                {Array(7)
                                    .fill(1)
                                    .map((item, i) => {
                                        return (
                                            <a href={item.link} key={i} target="_blank">
                                                <div className="flex flex-col h-auto md:h-80 w-[70vw] md:w-96 justify-start items-start bg-gray-100 mr-2 md:mr-10 mb-10 overflow-hidden hover:shadow-lg">
                                                    <img className="object-cover h-80 w-96 w-auto bg-gray-100" src={`./usecase${i+1}.webp`} />
                                                </div>
                                            </a>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
    )
}