"use client";
import Header from "@/app/components/Header";

export default function Page({ params }: { params: { productId: string } }) {
    return (
        <main className="flex flex-col min-h-screen w-screen overflow-x-hidden">
            <Header />
            <div className="mt-20 px-48 2xl:px-96">

                {params.productId == "0" && <video src="../../adas1.mp4" className=" w-full object-contain" autoPlay muted loop />}
                {params.productId == "1" && <video src="../../adas2.mp4" className="w-full object-contain" autoPlay muted loop />}
                {params.productId == "2" && <video src="../../adas3.mp4" className="w-full object-contain" autoPlay muted loop />}
                {params.productId == "3" && <video src="../../adas1.mp4" className="w-full object-contain" autoPlay muted loop />}
                {params.productId == "4" && <video src="../../adas2.mp4" className="w-full object-contain" autoPlay muted loop />}
            </div>
            <p className="text-center mt-10 text-2xl px-48 2xl:px-96 mb-24">Aute laboris quis excepteur nostrud velit enim duis velit. Mollit consequat ut veniam velit aliquip ad fugiat ipsum laboris exercitation. Mollit est laboris eiusmod tempor qui voluptate veniam veniam reprehenderit labore eiusmod qui ad.</p>
        </main>
    );
}
