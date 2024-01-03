
import { useState } from 'react';
import InputMask from 'react-input-mask';
import TitleBoxSection from './ui/TitleBoxSection';
import LinkBoxSection from './LinkBoxSection';

export default function ZipCode() {

    const [zipCode, setZipCode] = useState('');
    const [zipCodeError, setZipCodeError] = useState(false);

    const handleZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setZipCode(inputValue);
        if (inputValue.length === 9) {
            setZipCodeError(false);
            //consultar api para buscar o cep

        } else {
            setZipCodeError(true);
        }
    }

    return (
        <div
            className="p-[16px] rounded-[8px] border border-gray-50 w-full"
        >
            <TitleBoxSection>
                Consultar frete e prazo
            </TitleBoxSection>
            <InputMask
                id='zip_code'
                name='zip_code'
                onChange={handleZipCode}
                className={`rounded-[4px] border border-gray-300 w-full h-[40px] px-[16px] my-[8px]
                focus:outline-none focus:ring-[1px] ${ !zipCodeError ? 'focus:ring-primary' : 'focus:ring-red-600'} focus:border-transparent`}
                type="text"
                placeholder="Insira o CEP"
                mask="99999-999"
                maskChar={null}
                inputMode='numeric'
            />
            <LinkBoxSection
                href={ `#` }
                title="Não lembro meu CEP"
            />
        </div>
    );
}
