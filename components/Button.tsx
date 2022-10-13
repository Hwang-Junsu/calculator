interface IButton {
    number: number | string;
    children: number | string;
    span?: number;
    color?: string;
    saturation?: string | number;
}

function cls(...classnames: string[]) {
    return classnames.join(" ");
}

const Button = ({number, span = 1, color, saturation}: IButton) => {
    const isString = (char: any) => {
        if (isNaN(char)) return true;
        return false;
    };
    console.log(isString(number));
    return (
        <button
            className={cls(
                `col-span-${span} flex items-center justify-center rounded-full border-b-4 border-gray-600 p-7 text-3xl font-bold text-black drop-shadow-lg `,
                isString(number) ? `bg-emerald-300` : `bg-cyan-200`,
                "transition-all focus:translate-y-[3px] focus:border-none"
            )}
        >
            {number}
        </button>
    );
};

export default Button;
