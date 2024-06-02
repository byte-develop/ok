import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import './Preloader.css'

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [foundId, setFoundId] = useState(false);

    useEffect(() => {
        const fetchData = async (userId) => {
            try {
                const response = await fetch(`https://okpool.ru/user?id=${userId}`);
                if (response.ok) {
                        setFoundId(true);
                } else {
                    console.error('Ошибка при получении данных');
                    setFoundId(false);
                }
            } catch (error) {
                console.error('Произошла ошибка', error);
                setFoundId(false);
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 5000);
            }
        };

        const id = '8888'; // Ваш идентификатор, который хотите проверить
        fetchData(id);
    }, []);

    if (loading) {
        return (
            <div className='absolute translate-x-[50vw] translate-y-[50vh]'>
                <img
                    className='preloader-image -translate-x-1/2 -translate-y-1/2'
                    src='../public/Logo.png'
                    alt=''
                />
            </div>
        );
    } else {
        if (foundId) {
            return <Navigate replace to="/home" />;
        } else {
            return <Navigate replace to="/login" />;
        }
    }
}
