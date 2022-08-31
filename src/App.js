import { Container, Box, Grid } from "@mui/material";
import { useState } from "react";
import FilterSearchBar from "./components/FilterSearchBar/FilterSearchBar";
import HeaderBar from "./components/Header/HeaderBar";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import SearchComp from "./components/SearchComp/SearchComp";
import { data } from "./utils/DummyData";

function App() {
  const [value, setValue] = useState(data);
  // Function to handle change in Name
  const handleName = (e, val) => {
    var arr;
    if (val === null || val === '') {
      arr = data;
    }
    else
      arr = data.filter((dt) => dt.name === val.name);
    setValue(arr);
  }
  // Function to implement Filtering
  const handleFilter = (location, date, priceRange, type) => {
    const dt = new Date(date);
    var arr = data.filter((val) => {
      const x = new Date(val.moveInDate);
      if (val.location === location && x >= dt && val.price >= priceRange.lp && val.price <= priceRange.up && val.propertyType === type)
        return true;
      return false;
    })
    setValue(arr);
  }
  //Function To reset all filters
  const handleReset = () => {
    setValue(data);
  }
  return (
    <div className="App">
      <div>
        <HeaderBar />
      </div>
      <div>
        <Container maxWidth='lg' sx={{ py: 20 }}>
          <SearchComp handler={handleName} />
          <FilterSearchBar handler={handleFilter} reset={handleReset} />
          <Box >
            <Grid container spacing={6} justifyContent='center' >
              {value.map((dt, i) => {
                return <Grid key={i} item xs={true} >
                  <PropertyCard data={dt} />
                </Grid>
              })}

            </Grid>
          </Box>

        </Container>
      </div>
    </div>
  );
}

export default App;
