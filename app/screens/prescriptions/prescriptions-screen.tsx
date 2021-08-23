import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { CARD } from "../../theme/coreStyles"

export const PrescriptionsScreen = observer(function PrescriptionsScreen() {
  const { PrescriptionModel, PrescriptionStoreModel } = useStores()

  const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <Text preset="header" text="Here are your prescriptions" />
    </Screen>
  )
})
