import { BellElectric, CircleHelp, FolderKey, LayoutDashboard, LibraryBig, Logs, Palette, Settings, UserRoundPen, Users, Wrench } from "lucide-react";

export const navGroups = [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
            title: "Bookings",
            url: "/bookings",
            icon: Logs,
          },
          {
            title: "Valets",
            url: "/valets",
            icon: Users,
          },
          {
            title: "Keys",
            url: "/keys",
            icon: FolderKey,
          },
          {
            title: "Events",
            url: "/events",
            icon: LibraryBig,
          },
          {
            title: "SOS requests",
            url: "/sos",
            icon: BellElectric,
          },
        //   {
        //     title: "Settings",
        //     url: "/settings",
        //     icon: Settings,
        //   },
      ],
    },
    // {
    //   title: 'Dev Pages',
    //   items: [
    //     {
    //       title: 'Auth',
    //       icon: Lock,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/sign-in',
    //         },
    //         {
    //           title: 'Sign In (2 Col)',
    //           url: '/sign-in-2',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/sign-up',
    //         },
    //         {
    //           title: 'Forgot Password',
    //           url: '/forgot-password',
    //         },
    //         {
    //           title: 'OTP',
    //           url: '/otp',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Errors',
    //       icon: ShieldX,
    //       items: [
    //         {
    //           title: 'Unauthorized',
    //           url: '/401',
    //           icon: ShieldOff,
    //         },
    //         {
    //           title: 'Forbidden',
    //           url: '/403',
    //           icon: Ban,
    //         },
    //         {
    //           title: 'Not Found',
    //           url: '/404',
    //           icon: CircleOff,
    //         },
    //         {
    //           title: 'Internal Server Error',
    //           url: '/500',
    //           icon: ServerOff,
    //         },
    //         {
    //           title: 'Maintenance Error',
    //           url: '/503',
    //           icon: Construction,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: Settings,
          items: [
            {
              title: 'Account',
              url: '/settings/account',
              icon: UserRoundPen,
            },
            {
              title: 'Conflicts',
              url: '/settings/conflicts',
              icon: Wrench,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
            // {
            //   title: 'Notifications',
            //   url: '/settings/notifications',
            //   icon: Bell,
            // },
            // {
            //   title: 'Display',
            //   url: '/settings/display',
            //   icon: Monitor,
            // },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: CircleHelp,
        },
      ],
    },
  ]