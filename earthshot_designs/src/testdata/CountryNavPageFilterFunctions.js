const FilterOptions = {
    "North America": {
        "name": "North America",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "North America")
        }
    },
    "South America": {
        "name": "South America",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "South America")
        }
    },
    "Europe": {
        "name": "Europe",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "Europe")
        }
    },
    "Africa": {
        "name": "Africa",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "Africa")
        }
    },
    "Asia": {
        "name": "Asia",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "Asia")
        }
    },
    "Oceania": {
        "name": "Oceania",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "Oceania")
        }
    }
}

export default FilterOptions