const genericSortIntValue = (data, mainCategory, categoryName) => {
    return data.toSorted((a, b) => {                
        if (!b["stats"] || !b["stats"][mainCategory] || !b["stats"][mainCategory][categoryName]) {
            return -1
        } else if (!a["stats"] || !a["stats"][mainCategory] || !a["stats"][mainCategory][categoryName]) {
            return 1
        } else {
            let aValue = a["stats"][mainCategory][categoryName]["intValue"]
            let bValue = b["stats"][mainCategory][categoryName]["intValue"]

            return aValue - bValue
        }
    })
}

const sortBarValue = (data, mainCategory, categoryName) => {
    return data.toSorted((a, b) => {                
        if (!b["stats"] || !b["stats"][mainCategory] || !b["stats"][mainCategory][categoryName]) {
            return -1
        } else if (!a["stats"] || !a["stats"][mainCategory] || !a["stats"][mainCategory][categoryName]) {
            return 1
        } else {
            let aValue = a["stats"][mainCategory][categoryName]["fill"]
            let bValue = b["stats"][mainCategory][categoryName]["fill"]

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
            return genericSortIntValue(data, "Overview", "Population (2021)")
        }
    },
    {
        "name": "GNI Per Capita",
        "type": "sort",
        "sortFunction": (data) => {
            return genericSortIntValue(data, "Overview", "GNI Per Capita")
        }
    },
    {
        "name": "Urban Population",
        "type": "sort",
        "sortFunction": (data) => {
            return genericSortIntValue(data, "Overview", "Urban Population")
        }
    },
    {
        "name": "Electricity Access (Urban)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Overview", "Electricity Access (Urban)")
        }
    },
    {
        "name": "Rural Population",
        "type": "sort",
        "sortFunction": (data) => {
            return genericSortIntValue(data, "Overview", "Rural Population")
        }
    },
    {
        "name": "Electricity Access (Rural)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Overview", "Electricity Access (Rural)")
        }
    },
    {
        "name": "Internet Connectivity (Urban)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Overview", "Internet Connectivity (Urban)")
        }
    },
    {
        "name": "Internet Connectivity (Rural)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Overview", "Internet Connectivity (Rural)")
        }
    },

    {
        "name": "Food & Agriculture",
        "type": "header"
    },
    {
        "name": "Global Hunger Index Score",
        "type": "sort",
        "sortFunction": (data) => {
            return genericSortIntValue(data, "Food & Agriculture", "Global Hunger Index Score")
        }
    },
    {
        "name": "Caloric Supply Per Capita",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Caloric Supply Per Capita")
        }
    },
    {
        "name": "Prevalence of Stunting",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Prevalence of Stunting")
        }
    },
    {
        "name": "Protein Supply Per Capita",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Protein Supply Per Capita")
        }
    },
    {
        "name": "Prevalence of Wasting",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Prevalence of Wasting")
        }
    },
    {
        "name": "Dietary Energy Adequacy",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Dietary Energy Adequacy")
        }
    },
    {
        "name": "Underweight Population",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Underweight Population")
        }
    },
    {
        "name": "Food Waste Percentage",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Food Waste Percentage")
        }
    },
    {
        "name": "Food Insecurity",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Food Insecurity")
        }
    },
    {
        "name": "Agricultural Water Withdrawal",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Agricultural Water Withdrawal")
        }
    },
    {
        "name": "Nutrient Deficiency",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Nutrient Deficiency")
        }
    },
    {
        "name": "Fertilizer User/Hectare",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Fertilizer User/Hectare")
        }
    },
    {
        "name": "Prevalence of Undernourishment",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Prevalence of Undernourishment")
        }
    },
    {
        "name": "Crop Land (Hectares)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Crop Land (Hectares)")
        }
    },
    {
        "name": "Agricultural R&D",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Agricultural R&D")
        }
    },
    {
        "name": "Food Expenditure Percentage",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Food Expenditure Percentage")
        }
    },
    {
        "name": "Cost of Nutrient Adequacy (CoNA)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Cost of Nutrient Adequacy (CoNA)")
        }
    },
    {
        "name": "Cost of Caloric Adequacy (CoCA)",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Cost of Caloric Adequacy (CoCA)")
        }
    },
    {
        "name": "CoNA Percentage of Income",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "CoNA Percentage of Income")
        }
    },
    {
        "name": "CoCA Percentage of Income",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "CoCA Percentage of Income")
        }
    },
    {
        "name": "Carbohydrates",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Carbohydrates")
        }
    },
    {
        "name": "Protein",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Protein")
        }
    },
    {
        "name": "Fats",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Fats")
        }
    },
    {
        "name": "Vitamin A",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Vitamin A")
        }
    },
    {
        "name": "Vitamin B",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Vitamin B")
        }
    },
    {
        "name": "Vitamin C",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Vitamin C")
        }
    },
    {
        "name": "Vitamin D",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Vitamin D")
        }
    },
    {
        "name": "Vitamin E",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Vitamin E")
        }
    },
    {
        "name": "Iron",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Iron")
        }
    },
    {
        "name": "Calcium",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Calcium")
        }
    },
    {
        "name": "Zinc",
        "type": "sort",
        "sortFunction": (data) => {
            return sortBarValue(data, "Food & Agriculture", "Zinc")
        }
    },

]

export default SortOptions;