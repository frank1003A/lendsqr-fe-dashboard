import { SideBarData } from "../types/sidebar";

/**SVG Icons from asset sidebar folder */

// CUSTOMERS
import user_icon from 'assets/sidebar/user.svg'
import garant_icon from 'assets/sidebar/guarantors.svg'
import loan_icon from 'assets/sidebar/sack.svg'
import handshake_icon from 'assets/sidebar/handshake.svg'
import piggybank_icon from 'assets/sidebar/piggybank.svg'
import whitelist_icon from 'assets/sidebar/whitelist.svg'
import karma_icon from 'assets/sidebar/karma.svg'

// CUSTOMERS: loan request | Buisness: loan product
import grp104_icon from 'assets/sidebar/group104.svg'

// BUISNESSES
import brfcase_icon from 'assets/sidebar/briefcase.svg'
import savpro_icon from 'assets/sidebar/savpro.svg'
import coin_icon from 'assets/sidebar/coinsolid.svg'
import trans_icon from 'assets/sidebar/trans.svg'
import glx_icon from 'assets/sidebar/galaxy.svg'
import usercog_icon from 'assets/sidebar/usercog.svg'
import sett_icon from 'assets/sidebar/settlement.svg'
import chart_icon from 'assets/sidebar/chartbar.svg'

// SETTINGS
import pref_icon from 'assets/sidebar/sliders.svg'
import percbadge_icon from 'assets/sidebar/badgepercent.svg'
import cliplist_icon from 'assets/sidebar/clipboardlist.svg'

export const SidebarData: SideBarData[] = [
    {
      title: 'Customers',
      path: '/customers',
      subNav: [
        {
          title: 'Users',
          path: '/users',
          icon: user_icon,
        },
        {
          title: 'Gurantors',
          path: '/guarantors',
          icon: garant_icon,
        },
        {
            title: 'Loans',
            path: '/loans',
            icon: loan_icon,
        },
        {
            title: 'Decision Models',
            path: '/decisionmodels',
            icon: handshake_icon,
        },
        {
            title: 'Savings',
            path: '/savings',
            icon: piggybank_icon,
        },
        {
            title: 'Loan Request',
            path: '/loanrequest',
            icon: grp104_icon,
        },
        {
            title: 'Whitelist',
            path: '/whitelist',
            icon: whitelist_icon,
        },
        {
            title: 'Karma',
            path: '/karma',
            icon: karma_icon,
        },
      ]
    },
    {
      title: 'Buisnesses',
      path: '/buisnesses',
  
      subNav: [
        {
          title: 'Organization',
          path: '/buisness/organization',
          icon: brfcase_icon
        },
        {
            title: 'Loan Products',
            path: '/buisness.loanproducts',
            icon: grp104_icon,
        },
        {
            title: 'Saving Products',
            path: '/buisness/savingsreport',
            icon: savpro_icon
        },
        {
            title: 'Fees and Charges',
            path: '/buisness/feesandcharges',
            icon: coin_icon
        },
        {
            title: 'Transactions',
            path: '/buisness/transactions',
            icon: trans_icon
          },
          {
            title: 'Services',
            path: '/buisness/services',
            icon: glx_icon
          },
          {
            title: 'Service Amount',
            path: '/buisness/serviceamount',
            icon: usercog_icon
          },
          {
            title: 'Settlements',
            path: '/buisness/settlements',
            icon: sett_icon
          },
          {
            title: 'Reports',
            path: '/buisness/reports',
            icon: chart_icon
          },
      ]
    },
    {
        title: 'Settings',
        path: '/settings',
        subNav: [
            {
                title: 'Preferences',
                path: "/settings/preferences",
                icon: pref_icon
            },
            {
                title: 'Fees and Pricing',
                path: "/settings/feesandpricing",
                icon: percbadge_icon
            },
            {
                title: 'Audit Logs',
                path: "/settings/auditlogs",
                icon: cliplist_icon
            }
        ]
    }
  ];
  