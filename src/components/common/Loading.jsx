import React from 'react';

const Loading = () => {
    return (
        <div className='py-10 bg-linear-to-br from-green-50 to-emerald-100'>
           <h1 className='font-bold text-green-500 text-center'>L<span className="loading loading-ring loading-xl"></span>oading<span className="loading loading-dots loading-xl"></span></h1> 
        </div>
    );
};

export default Loading;