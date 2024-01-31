const SortOptions = [
    {
        "name": "Alphabetical",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["country"] > b["country"] ? 1 : -1
            })
        }
    },
    {
        "name": "metric1",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["metrics"]["metric1"] - b["metrics"]["metric1"]
            })
        }
    },
    {
        "name": "metric2",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["metrics"]["metric2"] - b["metrics"]["metric2"]
            })
        }
    },
    {
        "name": "metric3",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["metrics"]["metric3"] - b["metrics"]["metric3"]
            })
        }
    },
    {
        "name": "metric4",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["metrics"]["metric4"] - b["metrics"]["metric4"]
            })
        }
    },
]

export default SortOptions;