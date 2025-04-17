import {  faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

const BtnToUp = () => {
    const handleBtnToUp = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, 500);
    }
    useEffect(() => { 
        const btnToUp = document.querySelector('.btn-to-Up');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                btnToUp.classList.remove('opacity-0')
                btnToUp.classList.add('opacity-100')
            } else {
                btnToUp.classList.remove('opacity-100')
                btnToUp.classList.add('opacity-0')
            }
        })
        return () => {
            window.removeEventListener('scroll', () => { })
        }
     })

   

    return (
        <div className="fixed bottom-14 md:bottom-1 right-4 z-50 bg-[#D5B981] flex justify-center items-center p-3 transition-all duration-300 ease-linear hover:cursor-pointer opacity-0   btn-to-Up" onClick={handleBtnToUp}>
            <FontAwesomeIcon icon={faChevronUp} className="text-2xl text-[#1d2434]" />
        </div>
    );
}

export default BtnToUp;
