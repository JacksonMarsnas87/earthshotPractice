const TestGraphData = {
    // The 0 represents the problemProfileNumber. The indices within the 0 represent graphDataNumber
    0: [
        {
            barGraphData: {
                data: [
                    {name: "Global average", value: 10},
                    {name: "Indian average", value: 20},
                    {name: "Impoverished avg.", value: 40}
                ],
                title: "Average cancer cases/1000 people",
                xAxisLabel: "Location",
                yAxisLabel: "Cases/1000 people"
            }, lineGraphData: {
                data: [
                    {distance: "10", rate: "100"},
                    {distance: "20", rate: "90"},
                    {distance: "30", rate: "81"},
                    {distance: "40", rate: "69"},
                    {distance: "50", rate: "65"},
                    {distance: "60", rate: "53"},
                    {distance: "70", rate: "45"},
                    {distance: "80", rate: "41"},
                    {distance: "90", rate: "38"},
                    {distance: "100", rate: "31"}
                ],
                title: "Cancer cases in proximity to mining facilities",
                xAxisLabel: "Distnace from mining facility (kM)",
                yAxisLabel: "Cases/1000 people"
            }
        }
    ]
}

export default TestGraphData;