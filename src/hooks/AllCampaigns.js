import React, { useEffect, useState } from 'react';

const AllCampaigns = () => {
    const [causes, setCauses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allcampaign')
            .then(res => res.json())
            .then(data => setCauses(data))
    }, [])
    return [causes, setCauses]
};

export default AllCampaigns;