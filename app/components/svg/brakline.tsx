interface Props {
    width?: string;
}

const BreakLine = ({ width }: Props) => {
    return (
        <div className='flex justify-center'>
            <svg className="my-6 border border-gray-100" width={width ?? "901"} height="2" viewBox="0 0 901 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.75" y1="1.25" x2="901" y2="1.25" stroke="#F0F0F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}
export default BreakLine;