const TestGraphData = {
    // The 0 represents the problemProfileNumber. The indices within the 0 represent graphDataNumber
    0: [
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
                    {name: "Impoverished", colour: "#5e00bd"}
                ],
                data: [
                    {name: "10", "Impoverished": "100"},
                    {name: "20", "Impoverished": "90"},
                    {name: "30", "Impoverished": "81"},
                    {name: "40", "Impoverished": "69"},
                    {name: "50", "Impoverished": "65"},
                    {name: "60", "Impoverished": "53"},
                    {name: "70", "Impoverished": "45"},
                    {name: "80", "Impoverished": "41"},
                    {name: "90", "Impoverished": "38"},
                    {name: "100", "Impoverished": "31"}
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
                type: "line",
                labels: [
                    {name: "Impoverished", colour: "#5e00bd"}
                ],
                data: [
                    {name: "10", "Impoverished": "100"},
                    {name: "20", "Impoverished": "90"},
                    {name: "30", "Impoverished": "81"},
                    {name: "40", "Impoverished": "69"},
                    {name: "50", "Impoverished": "65"},
                    {name: "60", "Impoverished": "53"},
                    {name: "70", "Impoverished": "45"},
                    {name: "80", "Impoverished": "41"},
                    {name: "90", "Impoverished": "38"},
                    {name: "100", "Impoverished": "31"}
                ],
                title: "Cancer cases in proximity to mining facilities",
                xAxisLabel: "Distnace from mining facility (kM)",
                yAxisLabel: "Cases/1000 people"
            }
        ]
    ],

    1: [
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
                type: "line",
                labels: [
                    {name: "Impoverished", colour: "#5e00bd"}
                ],
                data: [
                    {name: "10", "Impoverished": "100"},
                    {name: "20", "Impoverished": "90"},
                    {name: "30", "Impoverished": "81"},
                    {name: "40", "Impoverished": "69"},
                    {name: "50", "Impoverished": "65"},
                    {name: "60", "Impoverished": "53"},
                    {name: "70", "Impoverished": "45"},
                    {name: "80", "Impoverished": "41"},
                    {name: "90", "Impoverished": "38"},
                    {name: "100", "Impoverished": "31"}
                ],
                title: "Cancer cases in proximity to mining facilities",
                xAxisLabel: "Distnace from mining facility (kM)",
                yAxisLabel: "Cases/1000 people"
            }
        ]
    ]
}

export default TestGraphData;