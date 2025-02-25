import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  Switch,
} from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import {getItemPrice, getTotalPrice} from '../utils/commonFunctions';
import {COLORS, PAYMENT_METHODS, ROUTES, STRINGS} from '../utils/constants';
import {useState} from 'react';

const CartSummary = ({cartItem}) => {
  const summaryList = [
    {
      title: STRINGS.PRICE,
      value: `AED ${cartItem.price}`,
    },
    {
      title: STRINGS.QUANTITY,
      value: `X${cartItem.quantity}`,
    },
    {
      title: STRINGS.SUBTOTAL,
      value: `AED ${getItemPrice(cartItem.price, cartItem.quantity)}`,
    },
  ];
  return (
    <View style={styles.cartSummaryContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: '70%'}}>
          <Text style={styles.textStyle(16, 'bold', COLORS.BLACK)}>
            {cartItem.title}
          </Text>
          <Text style={styles.textStyle(16, '400', COLORS.BLACK)}>
            {cartItem.description}
          </Text>
        </View>
        <Image source={{uri: cartItem.image}} style={styles.image} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{marginTop: 10}}>
          {summaryList.map((item, index) => (
            <View key={index} style={styles.summaryItem}>
              <Text style={styles.textStyle(16, '400', COLORS.BLACK)}>
                {item.title}
              </Text>
              <Text style={styles.textStyle(16, '400', COLORS.BLACK)}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const PaymentSelection = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(0);

  return (
    <View style={styles.paymentSelectionContainer}>
      {PAYMENT_METHODS.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>{item.title}</Text>
          </View>
          <Switch
            value={selectedPaymentMethod === item.id}
            onValueChange={() => setSelectedPaymentMethod(item.id)}
          />
        </View>
      ))}
    </View>
  );
};
function CartDetailsScreen({navigation}) {
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <View style={{flex: 1}}>
      <Header
        navigation={navigation}
        title={STRINGS.CART_DETAILS}
        isRight={false}
      />
      {cartItems.length === 0 ? (
        <View style={styles.noItemsContainer}>
          <Text style={styles.textStyle(18, true, COLORS.BLACK)}>
            {STRINGS.NO_ITEMS_IN_CART}
          </Text>
        </View>
      ) : (
        <View style={{flex: 1, padding: 10}}>
          <FlatList
            data={cartItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <CartSummary cartItem={item} />}
            ListFooterComponent={<PaymentSelection />}
            // ListFooterComponentStyle={{ height: 60 }}
          />
          <View style={styles.totalPriceContainer}>
            <Text style={styles.textStyle(16, true, COLORS.BLACK)}>
              {STRINGS.TOTAL}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Text
                style={styles.textStyle(
                  16,
                  true,
                  COLORS.BLACK,
                )}>{`AED ${getTotalPrice(cartItems)}`}</Text>
              <Pressable
                style={styles.checkoutButton}
                onPress={() => {
                  navigation.navigate(ROUTES.PLACED_ORDER);
                }}>
                <Text style={styles.textStyle(16, true, COLORS.WHITE)}>
                  {STRINGS.PLACE_ORDER}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  noItemsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentSelectionContainer: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: COLORS.GRAY,
    borderRadius: 5,
    marginBottom: 10,
  },
  cartSummaryContainer: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: COLORS.GRAY,
    borderRadius: 5,
    marginBottom: 10,
  },
  textStyle: (fontSize, fontWeight, color) => ({
    fontSize,
    fontWeight,
    color,
  }),
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  totalPriceContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
  },
  checkoutButton: {
    backgroundColor: COLORS.GREEN,
    padding: 10,
    borderRadius: 5,
  },
});
export default CartDetailsScreen;
