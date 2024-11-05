import { IoMicOutline } from "react-icons/io5";
import { LuPhoneOff } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";

function CentralDeControle() {

    const buttonStyle = "text-slate-300 px-8 md:px-6 sm:px-4 py-2 bg-shiny-blue rounded-lg hover:bg-mid-blue text-base md:text-sm sm:text-xs";


    return ( 
        <>
            <div className="min-h-[370px] w-full border border-shiny-blue rounded-lg flex flex-col xl:flex-row justify-around items-center py-10 xl:py-0">

                <div className="flex flex-col gap-2 items-center">
                    <img src="./plateia.svg" alt="" />
                    <div className="flex gap-2 items-center">
                        <IoMicOutline color="White" size={28} className="hover:cursor-pointer" />
                        <LuPhoneOff color="Red" size={24} className="hover:cursor-pointer" />
                    </div>
                    
                </div>

                {/* LINHA AZUL */}
                <div className="xl:min-h-[330px] xl:h-[90%] xl:w-0 w-[90%] my-8 xl:mx-3 border border-shiny-blue"></div>

                <div className="flex flex-col gap-3 items-center">

                    <h3 className="text-white mb-3">Central de Controle</h3>

                    <div className="flex items-center gap-10">
                        <div className="flex flex-col gap-3">
                            <button className={buttonStyle}>Cam 1</button>
                            <button className={buttonStyle}>Start Line</button>
                            <button className={buttonStyle}>Cam 2</button>
                        </div>

                        <img src="./minimap-outro.svg" alt="pequeno mapa da corrida" className="-my-16 hidden 2xl:block" />

                        <div className="flex flex-col gap-3">
                            <button className={buttonStyle}>Cam 3</button>
                            <button className={buttonStyle}>Cam 4</button>
                            <button className={buttonStyle}>Tunel</button>
                        </div>

                    </div>
                    <div className="">
                        <div className="flex flex-row gap-3 items-center">
                            <div className="flex gap-3 flex-col xl:flex-row">
                                <button className={buttonStyle}>Cabine</button>
                                <button className={buttonStyle}>Aereo</button>
                            </div>
                            
                            <button className="text-slate-300 p-8 bg-shiny-blue rounded-full hover:bg-red-600 border">ON</button>

                            <div className="flex gap-3 flex-col xl:flex-row">
                                <button className={buttonStyle}>PitStop</button>
                                <button className={buttonStyle}>Torcida</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* LINHA AZUL */}
                <div className="xl:min-h-[330px] xl:h-[90%] xl:w-0 w-[90%] my-8 xl:mx-3 border border-shiny-blue"></div>

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
                            <button className={buttonStyle}>Frente</button>
                            <button className={buttonStyle}>Piloto</button>
                            <button className={buttonStyle}>Traseira</button>
                        </div>
                    </div>
                    <div>
                        <img src="./stats.svg" alt="estatisticas" />
                    </div>
                </div>

            </div>
        </>
     );
}

export default CentralDeControle;