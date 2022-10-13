import type {NextPage} from "next";
import {useState} from "react";
import Button from "../components/Button";

const Home: NextPage = () => {
    const [init, setInit] = useState(true);

    return (
        <div className="backdrop-sepia-sm flex h-screen w-full items-center justify-center bg-gradient-to-b from-cyan-300 via-cyan-500 to-green-500">
            <div className="h-5/6 min-h-fit w-1/3 min-w-fit rounded-2xl border-b-8 border-r-8  border-gray-600 bg-teal-500 p-3">
                {init ? (
                    <div className="my-3 mx-10 flex h-24 items-center justify-center rounded-lg bg-emerald-200 p-6 text-5xl font-bold shadow-inner shadow-black">
                        &apos; ‿ &apos;
                    </div>
                ) : (
                    <div className="my-3 mx-10 flex h-24 items-center justify-end rounded-lg bg-emerald-200 p-6 text-5xl font-bold shadow-inner shadow-black">
                        &apos;‿&apos;
                    </div>
                )}
                <div className="grid h-max grid-cols-4 gap-4 overflow-hidden rounded-lg p-6 py-5 px-10 text-center">
                    <button
                        className="col-span-2 flex items-center justify-center rounded-full border-b-4 border-gray-600
                     bg-yellow-400 p-7 text-4xl font-bold text-black drop-shadow-lg transition-all focus:translate-y-[3px] focus:border-none"
                    >
                        C
                    </button>
                    {["%", "÷", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+"].map(
                        (el) => (
                            <Button
                                color={"orange"}
                                saturation={200}
                                key={el}
                                number={el}
                            >
                                el
                            </Button>
                        )
                    )}
                    <Button
                        color={"orange"}
                        saturation={200}
                        span={2}
                        number={0}
                    >
                        0
                    </Button>
                    <Button color={"orange"} saturation={200} number={"."}>
                        .
                    </Button>
                    <button
                        className="flex items-center justify-center rounded-full border-b-4 border-gray-600 bg-red-600
                     p-7 text-4xl font-bold text-black drop-shadow-lg transition-all focus:translate-y-[3px] focus:border-none"
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
