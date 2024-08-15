import React from 'react'


type Props = {
    headerItem: string[]
}

const WebHeader: React.FC<Props> = ({ headerItem }) => {
    return (
        <div className='w-full h-[96px]  bg-[#FFFBEB] font-roboto flex justify-between items-center py-6 px-20 xs:px-5 text-[#78350F] xs:hidden'>
            <p className='  text-[32px] font-bold'> Collers</p>
            <div className='flex gap-10 text-[16px] font-[500] items-center xs:hidden'>
                {headerItem.map((item, index) => (
                    <button key={index} className={`${index === headerItem.length - 1 && "border-2 border-[#78350F] rounded-xl p-3"} `}>{item}</button>
                ))}
            </div>
        </div>
    )
}

export default WebHeader