import BoxInfo from "./ui/BoxInfo";
import TitleBoxSection from "./ui/TitleBoxSection";
import Verified from "./Icons/Verified";
import Medal from "./Icons/Medal";


const calcularNPS = (score: number) => {

    let text = {
        reputation: '',
        description: ''
    };

    switch (true) {

        case score == 0:
            // sem reputação
            return text = {
                reputation: 'Essa loja ainda não possui reputação',
                description: 'Seja o primeiro a avaliar'
            }

        case score >= 0 && score <= 2:
            // detrator
            return text = {
                    reputation: 'Essa loja possui uma reputação ruim',
                    description: 'A maioria dos clientes não voltariam a comprar'
                }
        case score >= 3 && score <= 4:
            // neutro
            return text = {
                reputation: 'Essa loja possui média reputação',
                description: 'A maioria dos clientes voltariam a comprar'
            };
        case score > 4 && score < 5:
            // promotor
            return text = {
                reputation: 'Essa loja possui uma boa reputação',
                description: 'É um dos melhores do nosso markteplace'
            }
        case score === 5:
            // super promotor
            return text = {
                reputation: 'Essa loja possui uma excelente reputação',
                description: 'É um dos melhores do nosso markteplace'
            }
    }
};

interface ScoreStoreProps {
    name: string;
    image: string;
    description: string;
    scoreReputation: number;
    verified: boolean;
}

export default function ScoreStore({
    name,
    image,
    description,
    scoreReputation,
    verified
}: ScoreStoreProps) {

    const textScore = calcularNPS(scoreReputation);

    return (
        <BoxInfo className="w-[312px] min-h-[224px] font-roboto">
            <TitleBoxSection>
                Informações da Loja
            </TitleBoxSection>
            <div className="flex justify-start items-center">
                <img className="w-[56px] h-[56px] rounded-[8px]" src={image} alt={name} />
                <div className="mx-[8px]">
                    <div className="flex">
                        <h2 className="font-[500] text-[14px] text-gray-800 mr-1">{name}</h2>
                        {verified && <Verified />}
                    </div>
                    <p className="font-[400] text-[14px] text-gray-500">{description}</p>
                </div>
            </div>
            <div className="flex gap-2 my-4">
                <div className={`h-2 w-full ${scoreReputation > 0 ? 'bg-red-200' : 'bg-gray-50'}`}></div>
                <div className={`h-2 w-full ${scoreReputation >= 3 ? 'bg-yellow-200' : 'bg-gray-50'}`}></div>
                <div className={`h-2 w-full ${scoreReputation > 4 ? 'bg-green-300' : 'bg-gray-50'}`}></div>
                <div className={`h-2 w-full ${scoreReputation == 5 ? 'bg-green-400' : 'bg-gray-50'}`}></div>
            </div>
            <div className="flex">
                <div className="pt-[1px]">
                    <Medal />
                </div>
                <div className="mx-2">
                    <h2 className="font-[500] text-[14px] text-gray-900">{typeof textScore === 'object' ? textScore.reputation : textScore}</h2>
                    <p className="mt-2 font-[400] text-[12px] text-gray-600">{typeof textScore === 'object' ? textScore.description : textScore}</p>
                </div>
            </div>
        </BoxInfo>
    );
}
