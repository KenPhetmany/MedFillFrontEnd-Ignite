import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { CARD, FORM } from "./../../theme/coreStyles"

export const SettingsAccountDetailsUserScreen = observer(
  function SettingsAccountDetailsUserScreen() {
    // Pull in one of our MST stores
    const { user } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen preset="scroll">
        <View style={CARD}>
          <View style={FORM}>
            <TextField
              label="Full Name"
              editable={false}
              value={user.firstName + " " + user.lastName}
            />
            <TextField label="Email" editable={false} value={user.email} />
            <TextField label="Phone Number" editable={false} value={user.phoneNumber} />
            <TextField label="Home Address" editable={false} value={user.assignedHomeAddress} />
            <TextField label="Assignemt Pharmacy" editable={false} value={user.assignedPharmacy} />
          </View>
        </View>
      </Screen>
    )
  },
)
