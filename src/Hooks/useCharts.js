import { useEffect, useState } from "react";

const useCharts = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return [chartData]
};

export default useCharts;