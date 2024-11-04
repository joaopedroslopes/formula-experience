import { IoMicOutline } from "react-icons/io5";
import { LuPhoneOff } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";

function CentralDeControle() {
    return ( 
        <>
            <div className="h-full w-full border border-shiny-blue rounded-lg flex justify-around items-center">

                <div className="flex flex-col gap-2 items-center">
                    <img src="./plateia.svg" alt="" />
                    <div className="flex gap-2 items-center">
                        <IoMicOutline color="White" size={28} className="hover:cursor-pointer" />
                        <LuPhoneOff color="Red" size={24} className="hover:cursor-pointer" />
                    </div>
                    
                </div>

                {/* LINHA AZUL */}
                <div className="h-[90%] border border-shiny-blue"></div>

                <div className="flex flex-col gap-3 items-center">

                    <h3 className="text-white mb-3">Central de Controle</h3>

                    <div className="flex items-center gap-10">
                        <div className="flex flex-col gap-3">
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Cam 1</button>
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Start Line</button>
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Cam 2</button>
                        </div>

                        <img src="./minimap-outro.svg" alt="pequeno mapa da corrida" className="-my-16" />

                        <div className="flex flex-col gap-3">
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Cam 3</button>
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Cam 4</button>
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Tunel</button>
                        </div>

                    </div>
                    <div className="">
                        <div className="flex gap-3 items-center">
                            <button className="text-slate-300 px-8 h-fit py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Cabine</button>
                            <button className="text-slate-300 px-8 h-fit py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Aereo</button>
                            <button className="text-slate-300 p-8 bg-shiny-blue rounded-full hover:bg-red-600 border">ON</button>
                            <button className="text-slate-300 px-8 h-fit py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Pit Stop</button>
                            <button className="text-slate-300 px-8 h-fit py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Torcida</button>
                        </div>
                    </div>
                </div>

                {/* LINHA AZUL */}
                <div className="h-[90%] border border-shiny-blue"></div>

                <div className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                                <h3 className="text-slate-200 font-light">DS Techeetah</h3>
                                <IoChevronDown color="Gray" />
                            </div>
                            <img src="./car.svg" alt="carro selecionado" className="-mb-8 -mt-14" />
                        </div>
                        
                        <div className="flex gap-3">
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Frente</button>
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Piloto</button>
                            <button className="text-slate-300 px-8 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue">Traseira</button>
                        </div>
                    </div>
                    <div>
                        <img src="./stats.svg" alt="" />
                    </div>
                </div>

            </div>
        </>
     );
}

export default CentralDeControle;