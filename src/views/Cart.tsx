import React from 'react';

const Cart = ()=>{
    return(
        <>
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Обо мне</h2>
            <img src="your-profile-image.jpg" alt="Ваше фото" className="w-32 h-32 rounded-full object-cover object-center mb-4" />
            <p className="text-gray-700 text-lg mb-4">
                Здесь вы можете рассказать немного о себе, вашем опыте и интересах. Поделитесь, чем вы занимаетесь и чем вдохновляетесь.
            </p>
            <ul className="list-disc pl-4">
                <li>Ваш первый интерес</li>
                <li>Ваш второй интерес</li>
                <li>Ваш третий интерес</li>
            </ul>
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Контакты:</h3>
                <p className="text-gray-700">
                    Электронная почта: your.email@example.com<br />
                    Телефон: +123 456 7890<br />
                    Социальные сети: <a href="#" className="text-blue-500">Facebook</a>, <a href="#" className="text-blue-500">Twitter</a>
                </p>
            </div>
        </div>

        </>
    )
}

export default Cart;