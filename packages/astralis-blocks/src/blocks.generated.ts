/* ==========================================================================
   AUTO-GENERATED — DO NOT EDIT BY HAND
   Source: scripts/build-registry.mjs
   The live component behind every registry id, for docs previews and Studio.
   ========================================================================== */

import type { JSX } from "react";
import type { BlockRegistryEntry } from "./registry";
import { ContactSplit01 } from "./contact/contact-split/contact-split-01/contact-split-01";
import { ContactSplit02 } from "./contact/contact-split/contact-split-02/contact-split-02";
import { ContactSplit03 } from "./contact/contact-split/contact-split-03/contact-split-03";
import { CtaPanel01 } from "./cta/cta-panel/cta-panel-01/cta-panel-01";
import { CtaPanel02 } from "./cta/cta-panel/cta-panel-02/cta-panel-02";
import { CtaPanel03 } from "./cta/cta-panel/cta-panel-03/cta-panel-03";
import { DashboardShell01 } from "./dashboard/dashboard-shell/dashboard-shell-01/dashboard-shell-01";
import { DashboardShell02 } from "./dashboard/dashboard-shell/dashboard-shell-02/dashboard-shell-02";
import { DashboardShell03 } from "./dashboard/dashboard-shell/dashboard-shell-03/dashboard-shell-03";
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
import { StatsBand01 } from "./stats/stats-band/stats-band-01/stats-band-01";
import { StatsBand02 } from "./stats/stats-band/stats-band-02/stats-band-02";
import { StatsBand03 } from "./stats/stats-band/stats-band-03/stats-band-03";
import { TeamGrid01 } from "./team/team-grid/team-grid-01/team-grid-01";
import { TeamGrid02 } from "./team/team-grid/team-grid-02/team-grid-02";
import { TeamGrid03 } from "./team/team-grid/team-grid-03/team-grid-03";
import { TestimonialGrid01 } from "./testimonials/testimonial-grid/testimonial-grid-01/testimonial-grid-01";
import { TestimonialGrid02 } from "./testimonials/testimonial-grid/testimonial-grid-02/testimonial-grid-02";
import { TestimonialGrid03 } from "./testimonials/testimonial-grid/testimonial-grid-03/testimonial-grid-03";
import contactSplit01Meta from "./contact/contact-split/contact-split-01/meta";
import contactSplit02Meta from "./contact/contact-split/contact-split-02/meta";
import contactSplit03Meta from "./contact/contact-split/contact-split-03/meta";
import ctaPanel01Meta from "./cta/cta-panel/cta-panel-01/meta";
import ctaPanel02Meta from "./cta/cta-panel/cta-panel-02/meta";
import ctaPanel03Meta from "./cta/cta-panel/cta-panel-03/meta";
import dashboardShell01Meta from "./dashboard/dashboard-shell/dashboard-shell-01/meta";
import dashboardShell02Meta from "./dashboard/dashboard-shell/dashboard-shell-02/meta";
import dashboardShell03Meta from "./dashboard/dashboard-shell/dashboard-shell-03/meta";
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
import statsBand01Meta from "./stats/stats-band/stats-band-01/meta";
import statsBand02Meta from "./stats/stats-band/stats-band-02/meta";
import statsBand03Meta from "./stats/stats-band/stats-band-03/meta";
import teamGrid01Meta from "./team/team-grid/team-grid-01/meta";
import teamGrid02Meta from "./team/team-grid/team-grid-02/meta";
import teamGrid03Meta from "./team/team-grid/team-grid-03/meta";
import testimonialGrid01Meta from "./testimonials/testimonial-grid/testimonial-grid-01/meta";
import testimonialGrid02Meta from "./testimonials/testimonial-grid/testimonial-grid-02/meta";
import testimonialGrid03Meta from "./testimonials/testimonial-grid/testimonial-grid-03/meta";

export interface BlockEntry {
  meta: BlockRegistryEntry;
  component: () => JSX.Element;
}

export const blocks = {
  "contact-split-01": {
    meta: {
      ...contactSplit01Meta,
      files: ["contact-split-01.tsx"],
      component: "ContactSplit01",
      uses: ["Box","Button","Container","FieldLabel","FieldRoot","Flex","Grid","Heading","Icon","Input","InputTextarea","Stack","Text"],
    },
    component: ContactSplit01,
  },
  "contact-split-02": {
    meta: {
      ...contactSplit02Meta,
      files: ["contact-split-02.tsx"],
      component: "ContactSplit02",
      uses: ["Box","Button","Container","FieldLabel","FieldRoot","Flex","Grid","GridItem","Heading","Input","InputTextarea","Select","Stack","Text"],
    },
    component: ContactSplit02,
  },
  "contact-split-03": {
    meta: {
      ...contactSplit03Meta,
      files: ["contact-split-03.tsx"],
      component: "ContactSplit03",
      uses: ["Box","Button","Container","FieldLabel","FieldRoot","Flex","Grid","Heading","Icon","Input","InputTextarea","Stack","Text"],
    },
    component: ContactSplit03,
  },
  "cta-panel-01": {
    meta: {
      ...ctaPanel01Meta,
      files: ["cta-panel-01.tsx"],
      component: "CtaPanel01",
      uses: ["Badge","Box","Button","Container","Flex","Heading","Icon","Stack","Text"],
    },
    component: CtaPanel01,
  },
  "cta-panel-02": {
    meta: {
      ...ctaPanel02Meta,
      files: ["cta-panel-02.tsx"],
      component: "CtaPanel02",
      uses: ["Box","Button","Container","Flex","Heading","Icon","Link","Stack","Text"],
    },
    component: CtaPanel02,
  },
  "cta-panel-03": {
    meta: {
      ...ctaPanel03Meta,
      files: ["cta-panel-03.tsx"],
      component: "CtaPanel03",
      uses: ["Box","Button","Container","Flex","FlexItem","Heading","Input","Link","Stack","Text"],
    },
    component: CtaPanel03,
  },
  "dashboard-shell-01": {
    meta: {
      ...dashboardShell01Meta,
      files: ["dashboard-shell-01.tsx"],
      component: "DashboardShell01",
      uses: ["Avatar","Badge","Box","Flex","Grid","Icon","Input","Kbd","Stack","Text"],
    },
    component: DashboardShell01,
  },
  "dashboard-shell-02": {
    meta: {
      ...dashboardShell02Meta,
      files: ["dashboard-shell-02.tsx"],
      component: "DashboardShell02",
      uses: ["Avatar","Box","Button","Flex","Icon","Input","Stack","Text"],
    },
    component: DashboardShell02,
  },
  "dashboard-shell-03": {
    meta: {
      ...dashboardShell03Meta,
      files: ["dashboard-shell-03.tsx"],
      component: "DashboardShell03",
      uses: ["Avatar","Badge","Box","Flex","Grid","Icon","Separator","Stack","Text"],
    },
    component: DashboardShell03,
  },
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
  "stats-band-01": {
    meta: {
      ...statsBand01Meta,
      files: ["stats-band-01.tsx"],
      component: "StatsBand01",
      uses: ["Box","Container","Grid","Heading","Stack","Text"],
    },
    component: StatsBand01,
  },
  "stats-band-02": {
    meta: {
      ...statsBand02Meta,
      files: ["stats-band-02.tsx"],
      component: "StatsBand02",
      uses: ["Box","Container","Grid","Heading","Stack","Stat","StatHelpText","StatIndicator","StatLabel","StatValue","Text"],
    },
    component: StatsBand02,
  },
  "stats-band-03": {
    meta: {
      ...statsBand03Meta,
      files: ["stats-band-03.tsx"],
      component: "StatsBand03",
      uses: ["Box","Container","Grid","GridItem","Heading","Stack","Text"],
    },
    component: StatsBand03,
  },
  "team-grid-01": {
    meta: {
      ...teamGrid01Meta,
      files: ["team-grid-01.tsx"],
      component: "TeamGrid01",
      uses: ["Avatar","Box","Container","Flex","Grid","Heading","Icon","Link","Stack","Text"],
    },
    component: TeamGrid01,
  },
  "team-grid-02": {
    meta: {
      ...teamGrid02Meta,
      files: ["team-grid-02.tsx"],
      component: "TeamGrid02",
      uses: ["Avatar","Box","Container","Flex","Grid","Heading","Icon","Link","Stack","Text"],
    },
    component: TeamGrid02,
  },
  "team-grid-03": {
    meta: {
      ...teamGrid03Meta,
      files: ["team-grid-03.tsx"],
      component: "TeamGrid03",
      uses: ["Avatar","Box","Button","Container","Grid","GridItem","Heading","Stack","Text"],
    },
    component: TeamGrid03,
  },
  "testimonial-grid-01": {
    meta: {
      ...testimonialGrid01Meta,
      files: ["testimonial-grid-01.tsx"],
      component: "TestimonialGrid01",
      uses: ["Avatar","Box","Container","Flex","Grid","Heading","Icon","Stack","Text"],
    },
    component: TestimonialGrid01,
  },
  "testimonial-grid-02": {
    meta: {
      ...testimonialGrid02Meta,
      files: ["testimonial-grid-02.tsx"],
      component: "TestimonialGrid02",
      uses: ["Avatar","Box","Container","Flex","Grid","Heading","Stack","Text"],
    },
    component: TestimonialGrid02,
  },
  "testimonial-grid-03": {
    meta: {
      ...testimonialGrid03Meta,
      files: ["testimonial-grid-03.tsx"],
      component: "TestimonialGrid03",
      uses: ["Avatar","Box","Container","Flex","Grid","Heading","Icon","Stack","Text"],
    },
    component: TestimonialGrid03,
  },
} as const satisfies Record<string, BlockEntry>;

export type BlockId = keyof typeof blocks;
