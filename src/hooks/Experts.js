import React, { useEffect, useState } from 'react';

const Experts = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/experts')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return [experts, setExperts]
};
export default Experts;