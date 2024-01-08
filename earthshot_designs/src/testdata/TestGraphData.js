const TestGraphData = {
    // The 0 represents the problemProfileNumber. The indices within the 0 represent graphDataNumber
    // 0 is reserved for error cases, and is empty
    0: [
        [
            null, null
        ]
    ],

    1: [
        [
            {
                type: "bar",
                labels: [
                    {name: "Global", colour: "#282c34"},
                    {name: "India", colour: "#5e00bd"},
                    {name: "Impoverished", colour: "#008518"}
                ],
                data: [
                    {name: "Cancer average in different regions", "Global": 10, "India": 20, "Impoverished": 40}
                ],
                title: "Average cancer cases/1000 people",
                xAxisLabel: "Location",
                yAxisLabel: "Cases/1000 people"
            },  {
                type: "line",
                labels: [
                    {name: "Distance (km)", colour: "#5e00bd"}
                ],
                data: [
                    {name: "10", "Distance (km)": "100"},
                    {name: "20", "Distance (km)": "90"},
                    {name: "30", "Distance (km)": "81"},
                    {name: "40", "Distance (km)": "69"},
                    {name: "50", "Distance (km)": "65"},
                    {name: "60", "Distance (km)": "53"},
                    {name: "70", "Distance (km)": "45"},
                    {name: "80", "Distance (km)": "41"},
                    {name: "90", "Distance (km)": "38"},
                    {name: "100", "Distance (km)": "31"}
                ],
                title: "Cancer cases in proximity to mining facilities",
                xAxisLabel: "Distnace from mining facility (kM)",
                yAxisLabel: "Cases/1000 people"
            }
        ],

        [
            {
                type: "bar",
                labels: [
                    {name: "Global", colour: "#282c34"},
                    {name: "Same food sources", colour: "#5e00bd"},
                    {name: "Different food sources", colour: "#008518"}
                ],
                data: [
                    {name: "Average E-coli cases in different communities", "Global": 15, "Same food sources": 150, "Different food sources": 30}
                ],
                title: "E-coli cases/1000 people",
                xAxisLabel: "Location",
                yAxisLabel: "Cases/1000 people"
            },  {
                type: "pie",
                labels: [
                    {name: "1", colour: "#282c34"},
                    {name: "2", colour: "#5e00bd"},
                    {name: "3", colour: "#008518"},
                    {name: "3", colour: "#9e0069"}
                ],
                data: [
                    {name: "1 food source", "value": 60},
                    {name: "2 food sources", "value": 23},
                    {name: "3 food sources", "value": 11},
                    {name: "4 food sources", "value": 6}
                ],
                title: "Percentage of food related illness outbreaks in communities with varying numbers of food sources",
                xAxisLabel: "Distnace from mining facility (kM)",
                yAxisLabel: "Cases/1000 people"
            }
        ]
    ],
}

export default TestGraphData;