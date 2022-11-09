import React, {useState, useEffect} from "react";
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import { Container, Header, Icon, Item, Input, Text } from "native-base";
import ProductList from './ProductList';
const data = require('../../assets/data/product.json')

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        return() => {
            setProducts([])
        }
    }, [])
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input placeholder="поиск...">

                    </Input>
                </Item>
            </Header>
        <View style={styles.container}>
        <Text>ProductContainer</Text>
        <View style = {styles.listContainer}>
            <FlatList
            data={products}
            numColumns={2}
            renderItem={({item}) => <ProductList
            key={item.brand}
            item={item}/>}
    keyExtractor={item => item.brand} />
    </View>
        </View>
     
        </Container>
  
  
)}
       
    
    
    const styles = StyleSheet.create({
      container: {
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
      },
      listContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
      },
      center: {
          justifyContent: 'center',
          alignItems: 'center'
      }
    });
export default ProducContainer;