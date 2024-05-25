import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, View } from "react-native";
import styles from '../Style/HomeLoggedStyle';

import image from "../../assets/imagens/image_team.png";
import CustomButton from "../Component/customButton";
import CategoryMock from "../mock/CategoryMock";
import EmployeeMock from "../mock/EmployeeMock";
import ProductMock from "../mock/ProductMock";
import SupplierMock from "../mock/SupplierMock";

import { routeName } from "../routes/route_name";

export default function HomeLoggedView() {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        const email = route.params.email;
        ProductMock({ id: email })
        SupplierMock({ id: email })
        CategoryMock({ id: email })
        EmployeeMock({ id: email });
    }, [route.params.email]);

    console.log(route.params.email)

    return (
        <View style={styles.container}>
            <View style={styles.container_botao}>
                <Image style={styles.image} source={image} />

                <CustomButton
                    styleButton={styles.botao}
                    styleText={styles.botao__text}
                    onPress={() => navigation.navigate(routeName.company_data, { email: route.params.email })}
                    text={"My data"}
                />
                <CustomButton
                    styleButton={styles.botao}
                    styleText={styles.botao__text}
                    onPress={() => navigation.navigate(routeName.employee_list, { email: route.params.email })}
                    text={"Employee"}
                />

                <CustomButton
                    styleButton={styles.botao}
                    styleText={styles.botao__text}
                    onPress={() => navigation.navigate(routeName.supplier_list, { email: route.params.email })}
                    text={"Supplier"}
                />

                <CustomButton
                    styleButton={styles.botao}
                    styleText={styles.botao__text}
                    onPress={() => navigation.navigate(routeName.product_list, { email: route.params.email })}
                    text={"Product"}
                />

                <CustomButton
                    styleButton={styles.botaoSair}
                    styleText={styles.botaoSair__text}
                    onPress={() => navigation.navigate(routeName.wellcome)}
                    text={"Logout"}
                />

            </View>
        </View>
    )
}

