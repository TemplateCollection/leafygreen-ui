# @leafygreen-ui/combobox

## 5.0.3

### Patch Changes

- b7f7a4c95: Updates package dependencies & devDependencies, and ensures each package is appropriately listed. Ensures `tsconfig` has no circular dependencies
- Updated dependencies [b7f7a4c95]
  - @leafygreen-ui/checkbox@12.0.3
  - @leafygreen-ui/icon@11.12.2
  - @leafygreen-ui/icon-button@15.0.2
  - @leafygreen-ui/inline-definition@6.0.1
  - @leafygreen-ui/palette@3.4.5
  - @leafygreen-ui/popover@11.0.2
  - @leafygreen-ui/tokens@1.4.1
  - @leafygreen-ui/typography@15.1.1

## 5.0.2

### Patch Changes

- 38181cc1d: Update to consume darkMode from `useDarkMode`. Some components were setting `darkMode = false` as a default which would override the default value provided by the `LeafyGreenProvider`.
- Updated dependencies [38181cc1d]
  - @leafygreen-ui/checkbox@12.0.2

## 5.0.1

### Patch Changes

- 1a335d0b2: Migrate component internals to check for glyphs explicity, rather than for Icon components as well
- ed0e425e5: Adds `polished` as an explicit dependency
- ae5421cf6: Updates components to use internal transition tokens
- Updated dependencies [ae5421cf6]
- Updated dependencies [4b4c2d27d]
- Updated dependencies [6a266b813]
- Updated dependencies [1a335d0b2]
- Updated dependencies [ba97d1ef7]
- Updated dependencies [ae5421cf6]
  - @leafygreen-ui/tokens@1.4.0
  - @leafygreen-ui/icon@11.12.1
  - @leafygreen-ui/typography@15.1.0
  - @leafygreen-ui/checkbox@12.0.1
  - @leafygreen-ui/icon-button@15.0.1
  - @leafygreen-ui/popover@11.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [07b3c797]
- Updated dependencies [07b3c797]
- Updated dependencies [b9b09a86]
  - @leafygreen-ui/typography@15.0.0
  - @leafygreen-ui/leafygreen-provider@3.1.0
  - @leafygreen-ui/checkbox@12.0.0
  - @leafygreen-ui/icon-button@15.0.0
  - @leafygreen-ui/inline-definition@6.0.0
  - @leafygreen-ui/popover@11.0.0

## 4.0.1

### Patch Changes

- Updated dependencies [2195359a]
- Updated dependencies [209f77ed]
- Updated dependencies [f2d63a60]
  - @leafygreen-ui/icon-button@14.0.1
  - @leafygreen-ui/icon@11.12.0
  - @leafygreen-ui/lib@10.0.0
  - @leafygreen-ui/checkbox@11.0.1
  - @leafygreen-ui/inline-definition@5.0.1
  - @leafygreen-ui/leafygreen-provider@3.0.1
  - @leafygreen-ui/popover@10.0.1
  - @leafygreen-ui/typography@14.0.1

## 4.0.0

### Patch Changes

- d51afee1: Fixes a bug where the combobox Text Input content would overflow the container
- Updated dependencies [e399f1b9]
- Updated dependencies [e399f1b9]
  - @leafygreen-ui/leafygreen-provider@3.0.0
  - @leafygreen-ui/checkbox@11.0.0
  - @leafygreen-ui/icon-button@14.0.0
  - @leafygreen-ui/inline-definition@5.0.0
  - @leafygreen-ui/popover@10.0.0
  - @leafygreen-ui/typography@14.0.0

## 3.1.1

### Patch Changes

- 24683433: - Remove an implicit dependency on `@emotion/react` fixing an issue where LG packages would not build if `@leafygreen/emotion@4.0.2` or greater was installed.
- Updated dependencies [24683433]
  - @leafygreen-ui/checkbox@10.1.1
  - @leafygreen-ui/emotion@4.0.3
  - @leafygreen-ui/hooks@7.3.3
  - @leafygreen-ui/icon@11.11.1
  - @leafygreen-ui/icon-button@13.2.1
  - @leafygreen-ui/inline-definition@4.1.1
  - @leafygreen-ui/leafygreen-provider@2.3.5
  - @leafygreen-ui/lib@9.5.1
  - @leafygreen-ui/palette@3.4.4
  - @leafygreen-ui/popover@9.1.1
  - @leafygreen-ui/tokens@1.3.4
  - @leafygreen-ui/typography@13.2.1

## 3.1.0

### Minor Changes

- 3690df49: Updates TypeScript annotations, type structures and export format of some components
- 58a5a05e: - Ensures the combobox does not open on initial focus. The menu should only open when clicked, or a relevant key is pressed when the input is focused.
  - Opens the menu on `Enter` key press if the menu is closed.

### Patch Changes

- 3690df49: Extends `div` element props
- 58a5a05e: Adds missing PropTypes declarations
- Updated dependencies [3690df49]
- Updated dependencies [3690df49]
- Updated dependencies [3690df49]
- Updated dependencies [3690df49]
- Updated dependencies [3690df49]
- Updated dependencies [58a5a05e]
  - @leafygreen-ui/checkbox@10.1.0
  - @leafygreen-ui/icon@11.11.0
  - @leafygreen-ui/icon-button@13.2.0
  - @leafygreen-ui/inline-definition@4.1.0
  - @leafygreen-ui/popover@9.1.0
  - @leafygreen-ui/typography@13.2.0
  - @leafygreen-ui/lib@9.5.0
  - @leafygreen-ui/emotion@4.0.2
  - @leafygreen-ui/hooks@7.3.2
  - @leafygreen-ui/leafygreen-provider@2.3.4
  - @leafygreen-ui/palette@3.4.3
  - @leafygreen-ui/tokens@1.3.3

## 3.0.1

### Patch Changes

- 8d7534e9: Adds `tsdoc.json` to published package files
- Updated dependencies [7caa1c3e]
- Updated dependencies [1e708bd3]
- Updated dependencies [e39d8469]
- Updated dependencies [8d7534e9]
- Updated dependencies [1e708bd3]
  - @leafygreen-ui/icon@11.10.2
  - @leafygreen-ui/popover@9.0.1
  - @leafygreen-ui/typography@13.1.2
  - @leafygreen-ui/checkbox@10.0.3
  - @leafygreen-ui/emotion@4.0.1
  - @leafygreen-ui/hooks@7.3.1
  - @leafygreen-ui/icon-button@13.1.1
  - @leafygreen-ui/inline-definition@4.0.2
  - @leafygreen-ui/leafygreen-provider@2.3.3
  - @leafygreen-ui/lib@9.4.2
  - @leafygreen-ui/palette@3.4.2
  - @leafygreen-ui/tokens@1.3.2
  - @leafygreen-ui/tooltip@7.1.1

## 3.0.0

### Major Changes

- 2ff9ac32: Removes `Overflow.ExpandX` option.

  Overflow.ExpandX has always been an edge case, and is causing some issues with styling. Instead of increasing the complexity of the component to account for this edge case, we are removing this option.

  In most cases the `x` direction will be more space-limited and not many folks will opt to use this option. And if they do use expand-x, it's inherently limited to the size of the container/window and we'll need to restrict the width regardless. Just providing scroll-x and expand-y overflow options will cover most use cases.

### Patch Changes

- 090bd806: Fixes broken button styles in Combobox Chip.
  Reduces inline padding when `overflow === 'scroll-x'`.
  Flags `Overflow.ExpandX` as deprecated. Will be removed in the next major release.
- Updated dependencies [19a62173]
- Updated dependencies [30e038a3]
  - @leafygreen-ui/checkbox@10.0.1
  - @leafygreen-ui/palette@3.4.1

## 2.0.2

### Patch Changes

- bf320048: Updates the highlighting function (wrapJSX) to ensure all values are accepted, including regex special characters
- bf320048: Adds missing `leafygreen-provider` as a peer dependency
- Updated dependencies [65c86281]
- Updated dependencies [4ad8cbc0]
- Updated dependencies [9cb53590]
- Updated dependencies [bac1e809]
- Updated dependencies [bac1e809]
- Updated dependencies [9dafe83a]
  - @leafygreen-ui/icon-button@13.1.0
  - @leafygreen-ui/tooltip@7.1.0
  - @leafygreen-ui/typography@13.1.0
  - @leafygreen-ui/checkbox@10.0.0

## 2.0.1

### Patch Changes

- 5f82468e: Updates lodash imports in combobox. Lodash functions are now imported individually to reduce bundle size
- Updated dependencies [13a4adcc]
  - @leafygreen-ui/typography@13.0.1

## 2.0.0

### Major Changes

- a0beace8: Updates Combobox for visual refresh. Adds Dark Mode

### Patch Changes

- Updated dependencies [85d46871]
- Updated dependencies [99e20bb9]
  - @leafygreen-ui/lib@9.4.0
  - @leafygreen-ui/checkbox@9.0.0
  - @leafygreen-ui/icon-button@13.0.0
  - @leafygreen-ui/popover@9.0.0
  - @leafygreen-ui/typography@13.0.0
  - @leafygreen-ui/tooltip@7.0.4
  - @leafygreen-ui/inline-definition@4.0.1

## 1.2.2

### Patch Changes

- fad2b287: Fixes a bug where occasionally the max menu height would be set to 0 if a ref was left unset

## 1.2.1

### Patch Changes

- Updated dependencies [f0a357e2]
  - @leafygreen-ui/tooltip@7.0.3

## 1.2.0

### Minor Changes

- 8ab46ed4: Adds `Large` size variant to Combobox. Additionally, restores legacy font in Label & Description
- d241af9e: Adds a `disabled` prop to ComboboxOptions. Note, disabled options will still be rendered in the menu, but not selectable

### Patch Changes

- d5c12b77: Updates filtering behavior. Now when opening the menu all options will be displayed, regardless of whether a selection has already been made
- a5d19177: Updates backdrop click behavior to match native `<select>`. Now, when clicking away from an open menu to close it, the Combobox will retain focus and no click handlers should fire on clicked elements until the menu is closed
- 8f7f8555: Updates combobox focus ring behavior. The combobox will now display a focus ring whenever the user is able to type in thy combobox. The outer focus ring will not render if a chip or the clear button is focused.
- 4f2ff237: - Updates min-width of the input to fit all characters (previously wide characters would be cut off).
  - Updates text wrapping of menu items so long unbroken strings (like ids) won't overflow, but wrap.
- d241af9e: Restores menu font to legacy Akzidenz font
- 6792bc44: Refactors Combobox and Select to use the new `useAvailableSpace` hook to calculate the max menu height
- 266e0d8e: Ensures the focus remains in the combobox when a chip is removed. Focus is set to either the input, or the next chip to the right, whichever is relevant
- 422dbfcd: Adds additional tests for internal Combobox utilities
- Updated dependencies [1356d50d]
- Updated dependencies [6a89bc29]
- Updated dependencies [fd2f6de0]
- Updated dependencies [6792bc44]
- Updated dependencies [96d1ff9c]
- Updated dependencies [422dbfcd]
- Updated dependencies [9ff90d4b]
  - @leafygreen-ui/checkbox@8.0.3
  - @leafygreen-ui/palette@3.4.0
  - @leafygreen-ui/hooks@7.3.0
  - @leafygreen-ui/icon-button@11.0.2
  - @leafygreen-ui/inline-definition@3.0.2
  - @leafygreen-ui/tokens@1.3.1
  - @leafygreen-ui/typography@11.0.2
  - @leafygreen-ui/lib@9.3.0

## 1.1.0

### Minor Changes

- e9c39305: - Reduces `min-width` of combobox down to `24px`

### Patch Changes

- a526ac52: Adds `@leafygreen-ui/tokens` and `@leafygreen-ui/tooltip` to dependencies
- e9c39305: Updates highlighting function to fix a bug where some text would be duplicated
  - Fixes left padding when `overflow="scroll-x"`
  - Clarifies wording for `initialValue` prop docs
- Updated dependencies [e630a889]
- Updated dependencies [2670e4db]
- Updated dependencies [6c12e85a]
  - @leafygreen-ui/checkbox@8.0.2
  - @leafygreen-ui/icon@11.10.0

## 1.0.3

### Patch Changes

- Updated dependencies [e13d2487]
- Updated dependencies [500d6c60]
  - @leafygreen-ui/checkbox@8.0.0
  - @leafygreen-ui/icon-button@11.0.0
  - @leafygreen-ui/popover@8.0.0
  - @leafygreen-ui/interaction-ring@3.0.0
  - @leafygreen-ui/icon@11.9.0
  - @leafygreen-ui/typography@11.0.0

## 1.0.2

### Patch Changes

- Updated dependencies [acd6919]
- Updated dependencies [acd6919]
- Updated dependencies [acd6919]
- Updated dependencies [acd6919]
- Updated dependencies [acd6919]
  - @leafygreen-ui/lib@9.2.0
  - @leafygreen-ui/icon@11.8.0
  - @leafygreen-ui/checkbox@7.0.0
  - @leafygreen-ui/palette@3.3.2

## 1.0.1

### Patch Changes

- e8f1a97: - Updates focus behavior, allowing users to re-open the menu with the mouse after making a selection
  - Adds a warning if `multiselect` and `value` props don't align
  - Fixes a bug where long display names would get truncated early
  - Fixes a bug where the space bar wouldn't type a space character
  - Fixes a bug where some characters could not be typed when a `value` prop was passed in
  - Updates hooks dependency to `^7.2.0`
- Updated dependencies [e8f1a97]
  - @leafygreen-ui/icon@11.7.0
  - @leafygreen-ui/icon-button@10.0.0

## 1.0.0

### Major Changes

- 548ca2c: - Release Combobox as v1
  - Adds standard popover props: `usePortal`, `popoverZIndex`, `popoverClassName`, `portalContainer`, and `scrollContainer`.
  - Fixes issue where clicking on elements within a Combobox option wouldn't select that option.
