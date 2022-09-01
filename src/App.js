import { Container, Box, Grid } from "@mui/material";
import { useState } from "react";
import FilterSearchBar from "./components/FilterSearchBar/FilterSearchBar";
import HeaderBar from "./components/Header/HeaderBar";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import SearchComp from "./components/SearchComp/SearchComp";
import { data } from "./utils/DummyData";
import "./App.css"

function App() {
  const [value, setValue] = useState(data);
  
  const handleFilter = (location, date, priceRange, type) => {
    const dt = new Date(date);
    var arr = data.filter((val) => {
      const x = new Date(val.date);
      if (val.city === location && x >= dt && val.price >= priceRange.lp && val.price <= priceRange.up && val.type === type)
        return true;
      return false;
    })
    setValue(arr);
  }
  
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
          <SearchComp />
          <FilterSearchBar handler={handleFilter} reset={handleReset} />
          <Box >
            <div className="grid" >
              {value.map((dt, i) => {
                return <Grid key={i} item xs={true} >
                  <PropertyCard data={dt} />
                </Grid>
              })}
            </div>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default App;
