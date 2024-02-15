const genericSortIntValue = (data, categoryName) => {
    return data.toSorted((a, b) => {                
        if (!b["stats"] || !b["stats"]["Overview"] || !b["stats"]["Overview"][categoryName]) {
            return -1
        } else if (!a["stats"] || !a["stats"]["Overview"] || !a["stats"]["Overview"][categoryName]) {
            return 1
        } else {
            let aValue = a["stats"]["Overview"][categoryName]["intValue"]
            let bValue = b["stats"]["Overview"][categoryName]["intValue"]

            return aValue - bValue
        }
    })
}

const sortBarValue = (data, categoryName) => {
    return data.toSorted((a, b) => {                
        if (!b["stats"] || !b["stats"]["Overview"] || !b["stats"]["Overview"][categoryName]) {
            return -1
        } else if (!a["stats"] || !a["stats"]["Overview"] || !a["stats"]["Overview"][categoryName]) {
            return 1
        } else {
            let aValue = a["stats"]["Overview"][categoryName]["fill"]
            let bValue = b["stats"]["Overview"][categoryName]["fill"]

            return aValue - bValue
        }
    })
}

const SortOptions = [
    {
        "name": "Overview",
        "type": "header"
    },
    {
        "name": "Alphabetical",
        "type": "sort",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["country"] > b["country"] ? 1 : -1
            })
        }
    },
    {
        "name": "metric1",
        "type": "sort",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["metrics"]["metric1"] - b["metrics"]["metric1"]
            })
        }
    },
    {
        "name": "metric2",
        "type": "sort",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["metrics"]["metric2"] - b["metrics"]["metric2"]
            })
        }
    },
    {
        "name": "metric3",
        "type": "sort",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["metrics"]["metric3"] - b["metrics"]["metric3"]
            })
        }
    },
    {
        "name": "metric4",
        "type": "sort",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {
                return a["metrics"]["metric4"] - b["metrics"]["metric4"]
            })
        }
    },

    // The following filters regard data that is found within country modals
    {
        "name": "Income Classification",
        "type": "sort",
        "sortFunction": (data) => {
            return data.toSorted((a, b) => {                
                if (!b["stats"] || !b["stats"]["Overview"] || !b["stats"]["Overview"]["Income Classification"]) {
                    return -1
                } else if (!a["stats"] || !a["stats"]["Overview"] || !a["stats"]["Overview"]["Income Classification"]) {
                    return 1
                } else {
                    let incomeRankings = {
                        "Low income": 1,
                        "Lower-middle income": 2,
                        "Upper-middle income": 3,
                        "High income": 4
                    }
                    let aValue = a["stats"]["Overview"]["Income Classification"]["value"]
                    let bValue = b["stats"]["Overview"]["Income Classification"]["value"]

                    if (aValue === bValue) {
                        return 1
                    } else {
                        return incomeRankings[aValue] - incomeRankings[bValue]
                    }
                }
            })
        }
    },
    {
        "name": "Population",
        "type": "sort",
        "sortFunction": (data) => {
            return genericSortIntValue(data, "Population (2021)")
        }
    },
    {
        "name": "GNI Per Capita",
        "type": "sort",
        "sortFunction": (data) => {
            return genericSortIntValue(data, "GNI Per Capita")
        }
    },
    {
        "name": "Urban Population",
        "type": "sort",
        "sortFunction": (data) => {
            return genericSortIntValue(data, "Urban Population")
        }
    },
    {
        "name": "Electricity Access (Urban)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Electricity Access (Urban)")
        }
    },
    {
        "name": "Rural Population",
        "type": "sort",
        "sortFunction": (data) => {
            return genericSortIntValue(data, "Rural Population")
        }
    },
    {
        "name": "Electricity Access (Rural)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Electricity Access (Rural)")
        }
    },
    {
        "name": "Internet Connectivity (Urban)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Internet Connectivity (Urban)")
        }
    },
    {
        "name": "Internet Connectivity (Rural)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Internet Connectivity (Rural)")
        }
    },
]

export default SortOptions;