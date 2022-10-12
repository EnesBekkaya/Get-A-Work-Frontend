import _ from 'lodash'
import React from 'react'
import { Search, Grid, Button, Container, Header } from 'semantic-ui-react'



const SearchBox = () => {
    return (

        <Grid style={{ backgroundColor: "#E6F4F1", height: "30em", boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
      
    <p>
     Kariyer Fırsatlarını Keşfedin
    </p>

            <Grid.Row style={{ height: "10em" }}>
                <Grid.Column width={5} style={{ marginLeft: "50px" }}>
                    <Search style={{ float: "left", fontSize: "20px", float: "right" }}
                        placeholder="İş arayın"
                    />
                </Grid.Column>
                <Grid.Column width={3} style={{ marginLeft: "0px" }}>
                    <Search style={{ float: "left", fontSize: "20px" }}
                        placeholder="İl arayın"
                    />
                </Grid.Column>
                <Grid.Column  >
                    <Button primary style={{ backgroundColor: "#00A9C1", color: "white", width: "90px", height: "48px", float: "left", borderRadius: "40px", marginLeft: "20px" }}>Ara</Button>

                </Grid.Column>
            </Grid.Row>
        </Grid>
     
    )
}
export default SearchBox;
