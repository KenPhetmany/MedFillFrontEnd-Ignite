import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { color } from "../../theme"
import { SearchBarWithAutocomplete } from "./search-bar-with-autocomplete"

storiesOf("SearchBarWithAutocomplete", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <SearchBarWithAutocomplete style={{ backgroundColor: color.error }} />
      </UseCase>
    </Story>
  ))
