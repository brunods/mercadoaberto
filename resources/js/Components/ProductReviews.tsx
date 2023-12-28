import { useState } from 'react';
import CustomIcon from './CustomIcon';
import BoxInfo from './BoxInfo';

interface Review {
    id: number;
    title: string;
    comment: string;
    name: string;
    rating: number;
}

interface ProductReviewsProps {
    rating: number;
    reviews: Review[];
}

const ArrowIcon = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <span className="cursor-pointer" onClick={onClick}>
        <CustomIcon
            width={24}
            height={24}
            color="#323232"
            path={isOpen ? "M8 14L12 10L16 14" : "M8 10L12 14L16 10"}
        />
    </span>
);

const ProductReviews = ({ rating, reviews }: ProductReviewsProps) => {
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const toggleReview = () => setIsReviewOpen(!isReviewOpen);

    return (
        <>
            <div className="bg-white p-[32px] rounded-[8px] font-roboto">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-gray-800 font-[500] text-[20px]">Avaliação dos usuários</h2>
                        <p className="text-gray-500">Veja o que outras pessoas que compraram dessa loja estão falando</p>
                    </div>
                    <div className="ml-3">
                        <ArrowIcon isOpen={isReviewOpen} onClick={toggleReview} />
                    </div>
                </div>
                <div className="my-[20px] flex">
                    <h1 className="text-gray-800 text-[40px] font-[700]">{rating.toFixed(1)}</h1>
                    <div className="ml-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className={`text-[25px] mr-1 ${index < rating ? 'text-orange-500' : 'text-gray-200'}`}
                            >
                                ★
                            </span>
                        ))}
                        <p className="text-[12px] -m-1 ml-[1px] text-gray-500">({reviews.length} Avaliações)</p>
                    </div>
                </div>
                <div className={`mt-[20px] ${!isReviewOpen ? 'hidden' : null}`}>
                    <hr className="border-gray-50" />
                    {reviews.map((review, index) => (
                        <BoxInfo key={index}>
                            <div className="flex items-center">
                                <div>
                                    <h3 className="text-gray-800 font-[500] text-[16px]">{review.title}</h3>
                                    <p className="text-gray-500 text-[16px] my-4">{review.comment}</p>
                                    <h3 className="text-gray-800 font-[500] text-[16px]">{review.name}</h3>
                                    <div className="flex items-center">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <span
                                                key={index}
                                                className={`text-[18px] mr-1 ${index < review.rating ? 'text-orange-500' : 'text-gray-200'}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BoxInfo>
                    ))}
                </div>

            </div>
        </>
    );
}

export default ProductReviews;
