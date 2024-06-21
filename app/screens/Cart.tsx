import { Menu } from "../components/Menu";
import { Nav } from "../components/Nav";
import { Div, P } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Btn";
import { AntDesign } from "@expo/vector-icons";
import { PaymentMethod } from "../components/Method";
import { useState } from "react";
export function Cart({ navigation }: { navigation: any }) {
  const [selected, setSelected] = useState<number>(1)
  const insets = useSafeAreaInsets();
  return (
    <Div
      className="relative h-full w-screen bg-[#FFFBF5] "
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Nav text="Checkout" navigation={navigation} />
      <Div className="p-5 mb-14">
        <PaymentMethod icon="credit-card" title="Credit or Debit" selected={selected == 1} onClick={()=>setSelected(1)} />
        <PaymentMethod icon="money-bill" title="Mobile Money" selected={selected == 2} onClick={()=>setSelected(2)}/>
        <PaymentMethod title="Bank Transfer" selected={selected == 3} type="FontAwesome" onClick={()=>setSelected(3)}/>
        <PaymentMethod icon="store" title="Pay in store" selected={selected == 4} onClick={()=>setSelected(4)}/>
        <Div className=" mb-[100px] mt-5 border-y border-[#F69F219E]">
          <P>Select Bank</P>
          <Div className=" flex-row justify-between">
            <P className="text-slate-500">Select Prefered Bank</P>
            <AntDesign name="down" size={24} color="gray" />
          </Div>
        </Div>
        <Button
          title="Buy now"
          onPress={() => {
            navigation?.navigate("check");
          }}
        />
      </Div>
      <Menu navigation={navigation} active={4} />
    </Div>
  );
}
