import React from 'react';
import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IUserCardProps {
    title?: string | null;
    address?: string | null;
    socialMedia?: string | null;
    socialCount?: string | null
    img?: string | null
}

function UserCard({ title, address, socialMedia, socialCount, img = 'https://i.pravatar.cc/100' }: IUserCardProps) {
    const { width, height } = useWindowDimensions();


    return (
        <View style={[userCardStyles.cardContainer,]}>
            <View style={userCardStyles.infoContainer}>
                {img ? <Image
                    src={img}
                    style={userCardStyles.imageContainer}
                /> : null}

                <View style={userCardStyles.detailsContainer}>
                    <Text style={userCardStyles.text}>{title}</Text>
                    <Text style={[userCardStyles.text, { marginTop: 4 }]}>{address}</Text>
                </View>

                <View style={userCardStyles.logoContainer}>
                    <Icon
                        name="chevron-right"
                        size={28} />
                </View>
            </View>

            <View style={userCardStyles.socialDetailsContainer}>
                <Text style={userCardStyles.text}>{socialMedia}</Text>
                <Text style={userCardStyles.text}> {socialCount}</Text>
            </View>
        </View>

        // <View style={[userCardStyles.cardContainer,]}>
        //     <View style={userCardStyles.infoContainer}>
        //         <View style={userCardStyles.imageContainer}>
        //             <Image 
        //             src='https://cdn-icons-png.flaticon.com/512/17/17004.png'
        //             style={userCardStyles.imageContainer}
        //             // style={{width:50,height:50}}
        //             />
        //         </View>
        //         <View style={userCardStyles.detailsContainer}>
        //             <Text style={userCardStyles.text}>Ajay Jhabak</Text>
        //             <Text style={userCardStyles.text}>#3247, Sector 23D, Chandigarh</Text>
        //         </View>
        //         <View style={userCardStyles.logoContainer}>
        //             <Image 
        //             src='https://arrow.apache.org/img/arrow-logo_chevrons_black-txt_white-bg.png'
        //             style={{width:35,height:25}}/>
        //         </View>
        //     </View>
        //     <View style={userCardStyles.socialDetailsContainer}>
        //         <Text style={userCardStyles.text}>Instagram</Text>
        //         <Text style={userCardStyles.text}> 2.5k</Text>
        //     </View>
        // </View>
    )
}

const userCardStyles = StyleSheet.create(
    {
        cardContainer: {
            backgroundColor: 'lightgray',
            marginHorizontal: 16,
            marginTop: 16,
            padding: 16,
            borderRadius: 16

        },
        infoContainer: {
            flexDirection: 'row',
            flex: 1,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            paddingBottom: 16
        },
        imageContainer: {
            width: 100,
            height: 100,
            borderRadius: 50
        },
        detailsContainer: {
            flex: 1,
            paddingLeft: 12,
        },
        logoContainer: {
            justifyContent: 'center'
        },
        socialDetailsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 16

        },
        text: {
            fontSize: 17,
            // fontWeight: 'bold',
            // fontStyle: 'italic',
            // fontFamily:'Roboto-Bold'
            fontFamily:'Merriweather-Regular'
        }

    }
)

export default UserCard;