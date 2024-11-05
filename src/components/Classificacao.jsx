import positions from '../data/positions.json';

function Classificacao() {
    return (
        <>
            <div className="w-full md:w-[400px] h-full border border-shiny-blue rounded-lg flex flex-col justify-between">
                <div className="flex justify-between border-b-[1px] border-shiny-blue py-4 px-6">
                    <p className="text-white">Classificação</p>
                    <p className="text-white">X</p>
                </div>

                <div className="w-full">
                    <img src="./minimap.svg" alt="minimapa da corrida" className="w-[80%] mx-auto" />
                </div>

                <div className="p-4 overflow-y-auto">
                    {positions.map((position, posIndex) => (
                        Object.keys(position).map((key, index) => {
                            const driver = position[key];
                            return (
                                <div key={index} className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-between w-[30px]">
                                            <p className="min-w-[20px] text-center text-xl text-white">{index + 1}</p>
                                            <div className="h-[20px] w-[3px]" style={{ backgroundColor: `${driver.team_color}` }}></div>
                                        </div>
                                        <h5 className="text-xl font-semibold text-white">
                                            <span className="font-extralight text-slate-200">{driver.name}</span> {driver.surname}
                                        </h5>
                                    </div>
                                    <div className="flex items-center text-royal-blue">
                                        <div className="text-sm size-fit px-2 py-1 bg-white rounded-full" style={{ whiteSpace: 'nowrap' }}>
                                            {driver.time}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ))}
                </div>
            </div>
        </>
    );
}

export default Classificacao;