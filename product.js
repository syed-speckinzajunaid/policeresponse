import React, {useState} from 'react';
import {Text, View, ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../styling';

function Products({navigation}) {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'complaine record in police station ',
  
      description:
        'police, station perfrom  work ',

      image: 'https://static.vecteezy.com/system/resources/thumbnails/007/145/584/small/police-station-department-building-illustration-with-policeman-and-car-on-flat-cartoon-style-background-vector.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: 'Resque ambulances service',
      price: 1000,
      description:
        'That did start in Italy. Specifically, baker Raffaele Esposito from Naples is often given credit for making the first such pizza pie.',
      category: "resque serrvices",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKsqtCjBccfb7sCC_tVk8OoW458vPzBxUzQ&usqp=CAU',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: 'ambulance bus services',
      price: 1000,
      description:'resque providing help bus amulanceservice in your emergencycall',
      category: " ",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKsqtCjBccfb7sCC_tVk8OoW458vPzBxUzQ&usqp=CAU',
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: '',
      price: 1000,
      description:'',
      category: " ",
      image: '',
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "",
    
    
      category: ' ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGeNwPM7xJj-5kKLnyMn05w9Xr17IEEoEdw&usqp=CAU',
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: '',
      price: 1000,
      description:"",
      category: ' ',
      image: '',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: '',
      price: 1000,
      description:"",
      category: ' ',
      image: '',
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: '',
      price: 1000,
      description:'',
      category: ' ',
      image: '',
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: '',
      price: 1000,
      description:
        "",
      category: '',
      image: '',
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: '',
      price: 1000,
      description:'',
      category: '',
      image: '',
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title:
        '',
      price: 1000,
      description:'',
      category: '',
      image: '',
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title:
        '',
      price: 1000,
      description:"",
      category: '',
      image: '',
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: '',
      price: 1000,
      description:'',
      category: '',
      image: '',
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title:
        '',
      price: 1000,
      description:
       "''",
      category: '',
      image: '',
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "",
      price: 1000,
      description:'',
      category: "",
      image: '',
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title:
        "",
      price: 1000,
      description:'',
      category: "",
      image: '',
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: '',
      price: 1000,
      description:"",
      image: '',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "firebirget",
      price: 1000,
      description:'A fire department (American English) or fire brigade (Commonwealth English), also known as a fire authority, fire district, fire and rescue, or fire service in some areas, is an organization that provides fire prevention and fire suppression services.',
      category: "https://img.freepik.com/free-vector/accident-scene-with-forest-fire_1308-35157.jpg",
      image: '',
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "",
      price: 1000,
      description:
        '',
      category: "",
      image: '',
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: '',
      price: 1000,
      description:
        '.',
      category: ".",
      image: '',
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ]);
  return (
    <>
           <ImageBackground
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8Y9utoZZh580L8KqCLElyYR-0pZbhDsxZpfFfqzZvfGx8zsBQBKsoXKEjhdDHgvHe0o&usqp=CAU',
    }}>
      <ScrollView>
      <View style={[styles.h100]}>
        <View style={styles.p2}>
          <Text style={[styles.fs1, styles.textPrimary]}>help Products </Text>
        </View>
        <View>
            <View>
              {data &&
                data.map((x, i) => (
                  <TouchableOpacity
                  onPress={()=>{
                    navigation.navigate('SingleProduct',x)
                  }}
                    style={[
                      styles.bgBlack,
                      styles.p2,
                      styles.m1,
                      styles.rounded,
                      styles.shadow1,
                    ]}
                    key={i}>
                        <Image style={{width:"100%",height:250}} source={{uri:x.image}} />
                    <Text style={[styles.fs4,styles.m1]}>{x.title}</Text>
                    <Text style={[styles.fs2,styles.m1,styles.textWhite]}>Rs: {x.price}/-</Text>
                  </TouchableOpacity>
                ))}
            </View>
         
        </View>
      </View>
      </ScrollView>
      </ImageBackground>
    </>
  );
}
export default Products;
