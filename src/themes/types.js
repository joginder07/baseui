/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

export type PrimitivesT = {
  // Primary Palette
  primary50: string,
  primary100: string,
  primary200: string,
  primary300: string,
  primary400: string,
  primary500: string,
  primary600: string,
  primary700: string,

  // Alert Palette
  negative50: string,
  negative100: string,
  negative200: string,
  negative300: string,
  negative400: string,
  negative500: string,
  negative600: string,
  negative700: string,

  // Warning Palette
  warning50: string,
  warning100: string,
  warning200: string,
  warning300: string,
  warning400: string,
  warning500: string,
  warning600: string,
  warning700: string,

  // Success Palette
  positive50: string,
  positive100: string,
  positive200: string,
  positive300: string,
  positive400: string,
  positive500: string,
  positive600: string,
  positive700: string,

  // Monochrome Palette
  white: string,
  mono50: string,
  mono100: string,
  mono200: string,
  mono300: string,
  mono400: string,
  mono500: string,
  mono600: string,
  mono700: string,
  mono800: string, // deprecated
  mono900: string, // deprecated
  mono1000: string, // deprecated, alias for black
  black: string,

  // Rating Palette
  rating200: string,
  rating400: string,

  primaryFontFamily: string,
};
