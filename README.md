# react-spa

## Getting Started
### Install dependencies
Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=react-dates;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save react-dates moment@>=#.## react@>=#.## react-dom@>=#.## react-addons-shallow-compare@>=#.##
  ```

### Initialize
```js
import 'react-dates/initialize';
```



### Include component
```js
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
```




#### Create React SPA
The `DateRangePicker` is a fully controlled component that allows users to select a date range. You can control the selected
dates using the `startDate`, `endDate`, and `onDatesChange` props as shown below. The `DateRangePicker` also manages internal
state for partial dates entered by typing (although `onDatesChange` will not trigger until a date has been entered
completely in that case). Similarly, you can control which input is focused as well as calendar visibility (the calendar is
only visible if `focusedInput` is defined) with the `focusedInput` and `onFocusChange` props as shown below.

