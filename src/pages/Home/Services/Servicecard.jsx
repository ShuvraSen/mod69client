import React from 'react';
import service1 from '../../../assets/images/services/1.jpg'
import service2 from '../../../assets/images/services/2.jpg'
import service3 from '../../../assets/images/services/3.jpg'
import service4 from '../../../assets/images/services/4.jpg'
import service5 from '../../../assets/images/services/5.jpg'
import service6 from '../../../assets/images/services/6.jpg'
import { FaArrowRight } from 'react-icons/fa';

const Servicecard = ({service}) => {
    const {_id,img,price,title,service_id}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-6">
          <img src={img} alt="Shoes" className="rounded-xl mb-0" />
        </figure>
        <div className="card-body items-center text-center mt-0 ">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}</p>
         
          <div className="card-actions absolute bottom-1 right-5 ">
            <button className="btn btn-primary "><FaArrowRight></FaArrowRight></button>
          </div>
        </div>
      </div>
    );
};

export default Servicecard;