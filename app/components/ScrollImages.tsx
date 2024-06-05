import './ScrollImages.css';
export default function ScrollImages() {
    return (
        <div className="relative">
                        <div className="absolute top-0 right-0 w-0 md:w-36 fixed h-full bg-gradient-to-r from-transparent to-white"></div>
                        <div className="flex overflow-x-scroll pb-4 mt-2 hide-scroll-bar scrollbar-hide">
                            <div className="flex flex-nowrap ml-2">
                                {Array(15)
                                    .fill(1)
                                    .map((item, i) => {
                                        return (
                                            <a href={item.link} key={i} target="_blank">
                                                <div className="flex flex-col h-80 w-96 justify-start items-start bg-gray-100 mr-10 mb-10 rounded-lg overflow-hidden hover:shadow-lg">
                                                    <img className="object-cover w-52 h-52 w-auto bg-gray-100" src={""} />
                                                    <span className="mt-2 block mx-2 text-center">{item?.yoast_head_json?.title ?? ""}</span>
                                                </div>
                                            </a>
                                        );
                                    })}
                                {/* <div className="flex h-80 w-52 justify-center items-center "></div> */}
                            </div>
                        </div>
                    </div>
    )
}