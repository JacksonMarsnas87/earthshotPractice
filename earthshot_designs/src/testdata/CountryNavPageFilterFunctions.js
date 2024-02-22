const FilterOptions = {
    "Continents": {
        "type": "header",
        "name": "Continents"
    },
    "North America": {
        "type": "filter",
        "name": "North America",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "North America")
        }
    },
    "South America": {
        "type": "filter",
        "name": "South America",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "South America")
        }
    },
    "Europe": {
        "type": "filter",
        "name": "Europe",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "Europe")
        }
    },
    "Africa": {
        "type": "filter",
        "name": "Africa",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "Africa")
        }
    },
    "Asia": {
        "type": "filter",
        "name": "Asia",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "Asia")
        }
    },
    "Oceania": {
        "type": "filter",
        "name": "Oceania",
        "filterFunction": (data) => {
            return data.filter((newData) => newData.continent === "Oceania")
        }
    }
}

export default FilterOptions