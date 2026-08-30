import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import style from "./Caroussel.module.css"

export default function Carousel({product, className}) {
    const [index, setIndex] = useState(0)
    const maxIndex = product.images.length - 1
    const handleNext = useCallback(() => {
        setIndex(prev => prev === maxIndex ? 0 : prev + 1)
    }, [maxIndex])

    function handlePrevious() {
        setIndex(prev => prev === 0 ? maxIndex : prev - 1)
    }

    useEffect(() => {
        const interval = setInterval(handleNext, 5000)
        return () => clearInterval(interval)
    }, [handleNext])

    return (
        <div className={className}>
            {maxIndex === 0 ? 
                null 
                :<>
                    <ChevronLeft className={style.chevronLeft} size={32} onClick={handlePrevious} />
                    <ChevronRight className={style.chevronRight} size={32} onClick={handleNext}/>
                </> 
                }
            <img src={product.images[index]} alt={product.title} />
        </div>
    )
}