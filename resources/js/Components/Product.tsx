import CloseIcon from "./Icons/Close";
import EditIcon from "./Icons/Edit";

export interface ProductProps {
	name: string;
	imageSrc: string;
	price: number;
	onClickUpdate?: () => void;
	onClickDelete?: () => void;
}

export default function Product({ name, imageSrc, price, onClickUpdate, onClickDelete, }: ProductProps) {
	return (
		<div className="w-60 flex flex-col gap-y-1 relative">
			<img className="w-60 h-60" src={imageSrc} />
			<h2>{name}</h2>
			<div>
				<p className="text-2xl whitespace-break-spaces">R$ {price}</p>
				<p className="text-sm font-thin text-green-700">10 x R$ {(price / 10).toFixed(2)} sem juros</p>
				<p className="text-sm font-thin text-green-700">Frete grátis</p>
			</div>
			<div className="absolute right-1 top-1 space-x-3">
				<button
					className="bg-white p-1 rounded-full"
					aria-label={`edit ${name}`}
					onClick={onClickUpdate}
				>
					<EditIcon className="w-6" />
				</button>
				<button
					className="bg-white p-1 rounded-full"
					aria-label={`delete ${name}`}
					onClick={onClickDelete}
				>
					<CloseIcon className="w-6" />
				</button>
			</div>
		</div>
	)
}
