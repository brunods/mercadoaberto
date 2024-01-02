import { useState } from "react";

interface InputFormProps {
    icon: string;
    placeholder: string;
    type: string;
    id: string;
    name: string;
}

export default function InputForm({
    icon,
    placeholder,
    type,
    id,
    name
}: InputFormProps) {

    const [showPassword, setShowPassword] = useState('password');

    function handleShowPassword() {
        if (showPassword === 'password') {
            setShowPassword('text');
        }else{
            setShowPassword('password');
        }
    }

    return (
        <>
            <div>
            <i className="block absolute mt-[10px] ml-[16px]">
                <img className="w-5" src={`/assets/images/icons/icon-${icon}.svg`} />
            </i>
            <input
                className={`
                    w-full rounded-[4px] border-[1px] border-gray-200 py-2 pl-14 mb-[5px] font-inter text-[14px] text-gray-600 ${type === 'password' ? 'pr-14' : 'pr-3'}
                    focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-transparent`}
                type={
                    type === 'password' ?
                        showPassword
                        : type
                }
                placeholder={placeholder}
                id={id}
                name={name}
            />
            </div>
            {type === 'password' ?
                <div className="
                    w-fit relative ml-auto mr-[18px] mt-[-36px] mb-5 cursor-pointer
                " onClick={handleShowPassword}>
                    <i>
                        <img className="w-5" src="/assets/images/icons/icon-eye.svg" />
                    </i>
                </div>
                : null}
        </>
    );
}
