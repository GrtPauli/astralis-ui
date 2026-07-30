/* ==========================================================================
   AUTO-GENERATED — DO NOT EDIT BY HAND
   Source: scripts/build-registry.mjs
   The live component behind every registry id, for docs previews and Studio.
   ========================================================================== */

import type { JSX } from "react";
import type { BlockRegistryEntry } from "./registry";
import { FeaturesGrid01 } from "./features/features-grid/features-grid-01/features-grid-01";
import { FeaturesGrid02 } from "./features/features-grid/features-grid-02/features-grid-02";
import { FeaturesGrid03 } from "./features/features-grid/features-grid-03/features-grid-03";
import { FooterColumns01 } from "./footer/footer-columns/footer-columns-01/footer-columns-01";
import { FooterColumns02 } from "./footer/footer-columns/footer-columns-02/footer-columns-02";
import { FooterColumns03 } from "./footer/footer-columns/footer-columns-03/footer-columns-03";
import { ForgotPassword01 } from "./auth/forgot-password/forgot-password-01/forgot-password-01";
import { HeroSplit01 } from "./hero/hero-split/hero-split-01/hero-split-01";
import { HeroSplit02 } from "./hero/hero-split/hero-split-02/hero-split-02";
import { HeroSplit03 } from "./hero/hero-split/hero-split-03/hero-split-03";
import { Login01 } from "./auth/login/login-01/login-01";
import { NavbarInline01 } from "./navbar/navbar-inline/navbar-inline-01/navbar-inline-01";
import { NavbarInline02 } from "./navbar/navbar-inline/navbar-inline-02/navbar-inline-02";
import { NavbarInline03 } from "./navbar/navbar-inline/navbar-inline-03/navbar-inline-03";
import { PricingTiers01 } from "./pricing/pricing-tiers/pricing-tiers-01/pricing-tiers-01";
import { PricingTiers02 } from "./pricing/pricing-tiers/pricing-tiers-02/pricing-tiers-02";
import { PricingTiers03 } from "./pricing/pricing-tiers/pricing-tiers-03/pricing-tiers-03";
import { Signup01 } from "./auth/signup/signup-01/signup-01";
import featuresGrid01Meta from "./features/features-grid/features-grid-01/meta";
import featuresGrid02Meta from "./features/features-grid/features-grid-02/meta";
import featuresGrid03Meta from "./features/features-grid/features-grid-03/meta";
import footerColumns01Meta from "./footer/footer-columns/footer-columns-01/meta";
import footerColumns02Meta from "./footer/footer-columns/footer-columns-02/meta";
import footerColumns03Meta from "./footer/footer-columns/footer-columns-03/meta";
import forgotPassword01Meta from "./auth/forgot-password/forgot-password-01/meta";
import heroSplit01Meta from "./hero/hero-split/hero-split-01/meta";
import heroSplit02Meta from "./hero/hero-split/hero-split-02/meta";
import heroSplit03Meta from "./hero/hero-split/hero-split-03/meta";
import login01Meta from "./auth/login/login-01/meta";
import navbarInline01Meta from "./navbar/navbar-inline/navbar-inline-01/meta";
import navbarInline02Meta from "./navbar/navbar-inline/navbar-inline-02/meta";
import navbarInline03Meta from "./navbar/navbar-inline/navbar-inline-03/meta";
import pricingTiers01Meta from "./pricing/pricing-tiers/pricing-tiers-01/meta";
import pricingTiers02Meta from "./pricing/pricing-tiers/pricing-tiers-02/meta";
import pricingTiers03Meta from "./pricing/pricing-tiers/pricing-tiers-03/meta";
import signup01Meta from "./auth/signup/signup-01/meta";

export interface BlockEntry {
  meta: BlockRegistryEntry;
  component: () => JSX.Element;
}

export const blocks = {
  "features-grid-01": {
    meta: {
      ...featuresGrid01Meta,
      files: ["features-grid-01.tsx"],
      component: "FeaturesGrid01",
      uses: ["Box","Container","Flex","Grid","Heading","Icon","Stack","Text"],
    },
    component: FeaturesGrid01,
  },
  "features-grid-02": {
    meta: {
      ...featuresGrid02Meta,
      files: ["features-grid-02.tsx"],
      component: "FeaturesGrid02",
      uses: ["Badge","Box","Button","Container","Flex","Grid","Heading","Icon","Stack","Text"],
    },
    component: FeaturesGrid02,
  },
  "features-grid-03": {
    meta: {
      ...featuresGrid03Meta,
      files: ["features-grid-03.tsx"],
      component: "FeaturesGrid03",
      uses: ["Box","Container","Flex","Grid","GridItem","Heading","Icon","Stack","Text"],
    },
    component: FeaturesGrid03,
  },
  "footer-columns-01": {
    meta: {
      ...footerColumns01Meta,
      files: ["footer-columns-01.tsx"],
      component: "FooterColumns01",
      uses: ["Box","Container","Flex","Grid","GridItem","Icon","Link","Separator","Stack","Text"],
    },
    component: FooterColumns01,
  },
  "footer-columns-02": {
    meta: {
      ...footerColumns02Meta,
      files: ["footer-columns-02.tsx"],
      component: "FooterColumns02",
      uses: ["Box","Button","Container","Flex","FlexItem","Grid","GridItem","Input","Link","Separator","Stack","Text"],
    },
    component: FooterColumns02,
  },
  "footer-columns-03": {
    meta: {
      ...footerColumns03Meta,
      files: ["footer-columns-03.tsx"],
      component: "FooterColumns03",
      uses: ["Box","Container","Flex","Grid","GridItem","Icon","Link","Separator","Stack","Text"],
    },
    component: FooterColumns03,
  },
  "forgot-password-01": {
    meta: {
      ...forgotPassword01Meta,
      files: ["forgot-password-01.tsx"],
      component: "ForgotPassword01",
      uses: ["Box","Button","Container","FieldHelpText","FieldLabel","FieldRoot","Flex","Heading","Icon","Input","Link","Stack","Text"],
    },
    component: ForgotPassword01,
  },
  "hero-split-01": {
    meta: {
      ...heroSplit01Meta,
      files: ["hero-split-01.tsx"],
      component: "HeroSplit01",
      uses: ["AspectRatio","Badge","Box","Button","Container","Flex","Grid","Heading","Stack","Text"],
    },
    component: HeroSplit01,
  },
  "hero-split-02": {
    meta: {
      ...heroSplit02Meta,
      files: ["hero-split-02.tsx"],
      component: "HeroSplit02",
      uses: ["AspectRatio","Box","Button","Container","Flex","FlexItem","Grid","GridItem","Heading","Input","Stack","Text"],
    },
    component: HeroSplit02,
  },
  "hero-split-03": {
    meta: {
      ...heroSplit03Meta,
      files: ["hero-split-03.tsx"],
      component: "HeroSplit03",
      uses: ["Box","Button","CardBody","CardRoot","Container","Flex","Grid","Heading","Icon","List","ListItem","Stack","Text"],
    },
    component: HeroSplit03,
  },
  "login-01": {
    meta: {
      ...login01Meta,
      files: ["login-01.tsx"],
      component: "Login01",
      uses: ["Box","Button","Checkbox","Container","FieldLabel","FieldRoot","Flex","FlexItem","Heading","Icon","Input","InputPassword","Link","Separator","Stack","Text"],
    },
    component: Login01,
  },
  "navbar-inline-01": {
    meta: {
      ...navbarInline01Meta,
      files: ["navbar-inline-01.tsx"],
      component: "NavbarInline01",
      uses: ["Box","Button","Container","Flex","Icon","Link","Stack","Text"],
    },
    component: NavbarInline01,
  },
  "navbar-inline-02": {
    meta: {
      ...navbarInline02Meta,
      files: ["navbar-inline-02.tsx"],
      component: "NavbarInline02",
      uses: ["Badge","Box","Button","Container","Flex","Icon","Link","Stack","Text"],
    },
    component: NavbarInline02,
  },
  "navbar-inline-03": {
    meta: {
      ...navbarInline03Meta,
      files: ["navbar-inline-03.tsx"],
      component: "NavbarInline03",
      uses: ["Box","Button","Container","Flex","Icon","Link","Separator","Stack","Text"],
    },
    component: NavbarInline03,
  },
  "pricing-tiers-01": {
    meta: {
      ...pricingTiers01Meta,
      files: ["pricing-tiers-01.tsx"],
      component: "PricingTiers01",
      uses: ["Badge","Box","Button","Container","Flex","Grid","Heading","Icon","List","ListItem","Separator","Stack","Text"],
    },
    component: PricingTiers01,
  },
  "pricing-tiers-02": {
    meta: {
      ...pricingTiers02Meta,
      files: ["pricing-tiers-02.tsx"],
      component: "PricingTiers02",
      uses: ["Badge","Box","Button","Container","Flex","Grid","Heading","Icon","List","ListItem","Stack","Text"],
    },
    component: PricingTiers02,
  },
  "pricing-tiers-03": {
    meta: {
      ...pricingTiers03Meta,
      files: ["pricing-tiers-03.tsx"],
      component: "PricingTiers03",
      uses: ["Badge","Box","Button","Container","Flex","Grid","Heading","Icon","List","ListItem","Stack","Text"],
    },
    component: PricingTiers03,
  },
  "signup-01": {
    meta: {
      ...signup01Meta,
      files: ["signup-01.tsx"],
      component: "Signup01",
      uses: ["Box","Button","Checkbox","Container","FieldHelpText","FieldLabel","FieldRoot","Flex","FlexItem","Heading","Icon","Input","InputPassword","Link","List","ListItem","Separator","Stack","Text"],
    },
    component: Signup01,
  },
} as const satisfies Record<string, BlockEntry>;

export type BlockId = keyof typeof blocks;
